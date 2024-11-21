import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // navigate 사용
import './join.scss';

function Join() {
  const [isIdChecked, setIsIdChecked] = useState(false); // 중복확인 상태 관리
  const [username, setUsername] = useState(''); // 아이디 상태
  const [password, setPassword] = useState(''); // 비밀번호 상태
  const [confirmPassword, setConfirmPassword] = useState(''); // 비밀번호 확인 상태
  const [error, setError] = useState(''); // 에러 메시지 상태

  const navigate = useNavigate(); // navigate 사용

  /* 아이디 중복 체크 */
  const handleCheckId = async () => {
    if (!username) {
      setError('아이디를 입력해 주세요.');
      return;
    }

    /* 임시로 아이디 중복 체크 완료 처리 */
    setIsIdChecked(true);
    setError('');
  };

  /* 비밀번호 입력 체크 */
  const handleSubmit = async () => {
    if (!password || !confirmPassword) {
      setError('비밀번호를 입력해 주세요.');
    }

    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    // 비밀번호가 일치하면 SetProfile 페이지로 이동
    navigate('/setprofile');
  };

  return (
    <div className="join-container">
      <div className="join-content">
        <div className="join-form">
          {!isIdChecked ? (
            <>
              <label className="id-label">
                노련한 이력서에서<br />
                사용할 아이디를 입력해 주세요
              </label>
              <input
                className="join-input"
                type="text"
                placeholder="아이디"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {error && <p className="error">{error}</p>}
              <button className="check-button" onClick={handleCheckId}>
                중복확인
              </button>
            </>
          ) : (
            <>
              <label className="password-label">
                노련한 이력서에서<br />
                사용할 비밀번호를 입력해 주세요
              </label>
              <input
                className="join-input"
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="join-input"
                type="password"
                placeholder="비밀번호 확인"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {error && <p className="error">{error}</p>}
              <button className="next-button" onClick={handleSubmit}>
                다음으로
              </button>
            </>
          )}

      
          <div className="login-link">
            <p>이미 회원이신가요? <span className="login-button" onClick={() => navigate('/login')}>로그인하기</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
