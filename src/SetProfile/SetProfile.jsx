import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../SetProfile/setProfile.scss';

function SetProfile() {
    const [step, setStep] = useState(1);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [birthday, setBirthday] = useState('');
    const [emailId, setEmailId] = useState('');
    const [emailDomain, setEmailDomain] = useState('');
    const [customDomain, setCustomDomain] = useState('');
    const [isEmailChecked, setIsEmailChecked] = useState(false);
    const [emailCheckMessage, setEmailCheckMessage] = useState('');
  
    const navigate = useNavigate();
  
    const handleNext = () => {
      if (step < 5) {
        setStep(step + 1);
      } else if (step === 5) {
        setStep(6); // 이메일 화면에서 다음으로 누르면 step을 6으로 설정
      }
    };
  
    const handleLoginNavigate = () => {
      navigate('/Login');
    };
  
    const handleEmailCheck = () => {
      setIsEmailChecked(true);
    };
  
    const handleEmailDomainChange = (e) => {
      const value = e.target.value;
      setEmailDomain(value);
  
      if (value !== 'custom') {
        setCustomDomain('');
      }
    };
  
    return (
      <div className="profile-container">
        <div className="profile-content">
          <div className="profile-form">
            {/* Step 1 */}
            {step === 1 && (
              <>
                <label className="label name-label">이름을 입력해주세요</label>
                <input
                  className="join-input"
                  type="text"
                  placeholder="이름"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button className="next-button" onClick={handleNext}>
                  다음으로
                </button>
                <div className="login-section">
                  <p className="info-text">이미 회원이신가요?</p>
                  <button className="login-button" onClick={handleLoginNavigate}>
                    로그인하기
                  </button>
                </div>
              </>
            )}
  
            {/* Step 2 */}
            {step === 2 && (
              <>
                <label className="label phone-label">전화번호를 입력해주세요</label>
                <input
                  className="join-input"
                  type="text"
                  placeholder="전화번호"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <button className="next-button" onClick={handleNext}>
                  다음으로
                </button>
              </>
            )}
  
            {/* Step 3 */}
            {step === 3 && (
              <>
                <label className="label gender-label">성별을 입력해주세요</label>
                <div className="radio-group">
                  <div className="radio-item1">
                    <img
                      className="radio-icon"
                      src={require(`../assets/img/icons/${
                        gender === '남성' ? 'radio_on.png' : 'radio_off.png'
                      }`)}
                      alt="남성 선택"
                      onClick={() => setGender('남성')}
                    />
                    <span className='radio-male'>남성</span>
                  </div>
                  <div className="radio-item2">
                    <img
                      className="radio-icon"
                      src={require(`../assets/img/icons/${
                        gender === '여성' ? 'radio_on.png' : 'radio_off.png'
                      }`)}
                      alt="여성 선택"
                      onClick={() => setGender('여성')}
                    />
                    <span className='radio-female'>여성</span>
                  </div>
                </div>
                <button className="next-button" onClick={handleNext}>
                  다음으로
                </button>
              </>
            )}

          {step === 4 && (
            <>
              <label className="label birthday-label">생년월일을 입력해주세요</label>
              <input
                className="join-input"
                type="text"
                placeholder="예시) 19800506"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
              <button className="next-button" onClick={handleNext}>
                다음으로
              </button>
            </>
          )}

          {step === 5 && (
            <>
              <label
                className={`label email-label ${isEmailChecked ? 'checked' : ''}`}
              >
                이력서에 입력할<br />이메일을 입력해주세요
              </label>
              <div className="email-input-group">
                <input
                  className="join-input email-id"
                  type="text"
                  placeholder="이메일 아이디"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                />
                <span>@</span>
                {emailDomain === 'custom' ? (
                  <input
                    className="join-input custom-domain"
                    type="text"
                    placeholder="이메일 도메인"
                    value={customDomain}
                    onChange={(e) => setCustomDomain(e.target.value)}
                  />
                ) : (
                  <select
                    className="join-input email-domain"
                    value={emailDomain}
                    onChange={handleEmailDomainChange}
                  >
                    <option value="">도메인 선택</option>
                    <option value="naver.com">naver.com</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="daum.net">daum.net</option>
                    <option value="custom">직접 입력</option>
                  </select>
                )}
              </div>
              <button
                className={`check-button ${isEmailChecked ? 'checked' : ''}`}
                onClick={handleEmailCheck}
                disabled={isEmailChecked}
              >
                중복확인
              </button>

              {isEmailChecked && (
                <p className="email-check-message checked">
                  사용가능한 이메일입니다.
                </p>
              )}

              {isEmailChecked && (
                <button className="next-button checked" onClick={handleNext}>
                  다음으로
                </button>
              )}
            </>
          )}

          {step === 6 && (
            <>
                <h2 className='set-done'>회원정보 입력 완료!</h2>
                <img 
                className='checking-icon'
                src={require("../assets/img/icons/Subtract.png")}></img>
                <p className='set-done-p'>이력서를 가장 쉽게 관리<br></br>하는 방법</p>
                <button className="start-resume-button" onClick={() => navigate('/home')}>
                  노련한 이력서 시작하기
                </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SetProfile;
