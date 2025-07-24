import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Proposal from './components/Proposal';
import Submit from './components/Submit';
import List from './components/List';
import TestSubmit from './components/TestSubmit';
import VoteListQuery from './components/VoteListQuery';
import VoteDetailQuery from './components/VoteDetailQuery';
import VoteBallotQuery from './components/VoteBallotQuery';
import SignUp from './components/SignUp';
import Login from './components/Login';
import BlockExplorer from './components/BlockExplorer'; // 추가

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <header className="navbar">
          <h1 className="logo">✓OTING</h1>
          <nav>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              투표생성
            </NavLink>
            <NavLink
              to="/result"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              투표결과
            </NavLink>
            <NavLink
              to="/list"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              투표목록
            </NavLink>
            <NavLink
              to="/test-submit"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              투표행사
            </NavLink>
            <NavLink
              to="/vote-list-query"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              목록조회
            </NavLink>
            <NavLink
              to="/vote-detail-query"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              상세조회
            </NavLink>
            <NavLink
              to="/ballot-query"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              해시조회
            </NavLink>
            <NavLink
              to="/block-explorer"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              블록조회
            </NavLink>
          </nav>

          <div className="auth-buttons">
            <NavLink to="/login">
              <button className="login">LOGIN</button>
            </NavLink>
            <NavLink to="/signup">
              <button className="join">JOIN</button>
            </NavLink>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Proposal />} />
            <Route path="/submit/:id" element={<Submit />} />
            <Route path="/list" element={<List />} />
            <Route path="/test-submit" element={<TestSubmit />} />
            <Route path="/vote-list-query" element={<VoteListQuery />} />
            <Route path="/vote-detail-query" element={<VoteDetailQuery />} />
            <Route path="/ballot-query" element={<VoteBallotQuery />} />
            <Route path="/block-explorer" element={<BlockExplorer />} /> {/* 추가 */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
