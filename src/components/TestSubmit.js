import React, { useState } from 'react';
import axios from 'axios';

const TestSubmit = () => {
  const [topic, setTopic] = useState('');
  const [option, setOption] = useState('');
  const [hash, setHash] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setResult(null);
    setError('');
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/vote/submit`, {
        topic,
        option,
        hash,
      });

      const data = res.data;
      if (data.success === true || data.success === "true") {
        setResult("✅ 투표 제출 성공!");
      } else {
        switch (data.status) {
          case "DUPLICATE_VOTE_SUBMISSION":
            setError("⚠️ 이미 이 투표에 참여하셨습니다.");
            break;
          case "PROPOSAL_NOT_OPEN":
            setError("❌ 존재하지 않거나 진행 중이지 않은 투표입니다.");
            break;
          case "TIMEOUT_PROPOSAL":
            setError("⏳ 투표가 마감되어 제출할 수 없습니다.");
            break;
          default:
            setError(`❌ 알 수 없는 오류: ${data.message}`);
        }
      }
    } catch (err) {
      console.error(err);
      setError("🚨 서버 연결 또는 요청 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="proposal-form">
      <h2>투표 제출</h2>

      <input
        type="text"
        placeholder="투표 제목 (topic)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <input
        type="text"
        placeholder="선택한 옵션 (option)"
        value={option}
        onChange={(e) => setOption(e.target.value)}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <input
        type="text"
        placeholder="해시값 (hash)"
        value={hash}
        onChange={(e) => setHash(e.target.value)}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <button onClick={handleSubmit}>제출</button>

      {result && <p style={{ color: 'green', marginTop: '10px' }}>{result}</p>}
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
  );
};

export default TestSubmit;
