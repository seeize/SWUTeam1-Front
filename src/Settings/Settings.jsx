import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../Settings/settings.scss";

function Settings() {
  const [step, setStep] = useState(1); // 단계 관리
  const [currentPassword, setCurrentPassword] = useState("");
  const [reEnteredCurrentPassword, setReEnteredCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reEnteredNewPassword, setReEnteredNewPassword] = useState("");
  const navigate = useNavigate();

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleNavigateToLogin = () => {
    navigate("/Login");
  };

  return (
    <div className="settings-container">
      <Header />
      <main className="settings-content">
      {step === 1 && (
            <div className="initial-message-container">
                <button
                className="change-button"
                onClick={handleNextStep}
                >
                비밀번호 변경하기
                </button>
            </div>
            )}


        {step === 2 && (
          <>
            <label className="current-password">
              현재<br />비밀번호를 입력해주세요
            </label>
            <input
              className="password-change"
              type="password"
              placeholder="현재 비밀번호"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
              className="password-again"
              type="password"
              placeholder="재입력"
              value={reEnteredCurrentPassword}
              onChange={(e) => setReEnteredCurrentPassword(e.target.value)}
            />
            <button
              className="ok-button"
              onClick={handleNextStep}
            >
              확인
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <label className="new-password">
              새로운 비밀번호를<br />입력해주세요
            </label>
            <input
              className="password-change"
              type="password"
              placeholder="새 비밀번호"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              className="password-again"
              type="password"
              placeholder="재입력"
              value={reEnteredNewPassword}
              onChange={(e) => setReEnteredNewPassword(e.target.value)}
            />
            <button
              className="ok-button"
              onClick={handleNextStep}
            >
             비밀번호 변경하기
            </button>
          </>
        )}

        {step === 4 && (
          <>
            <label className="complete-message">
                변경 완료!
                <br></br>
                다시 로그인해 주세요</label>

            <button
              className="gologin-button"
              onClick={handleNavigateToLogin}
            >
              로그인하러 가기
            </button>
          </>
        )}
      </main>
    </div>
  );
}

export default Settings;
