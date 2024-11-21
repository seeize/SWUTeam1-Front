import React, { useState } from 'react';
import cameraIcon from '../assets/img/ResumeForm/camera.svg';
import { useNavigate } from 'react-router-dom';

const ResumeAdd = () => {
    const [certificates, setCertificates] = useState([]); // 자격증 리스트
    const [currentCertificate, setCurrentCertificate] = useState({
      name: '',
      date: '',
    }); // 현재 입력 중인 자격증 정보
    const [isAdding, setIsAdding] = useState(false); // 추가 입력 필드 표시 여부
    const navigate = useNavigate();

    // 자격증 추가
    const addCertificate = () => {
      if (!currentCertificate.name || !currentCertificate.date) {
        alert('자격증명과 취득일을 모두 입력해주세요.');
        return;
      }
      setCertificates([...certificates, currentCertificate]); // 새 자격증 추가
      setCurrentCertificate({ name: '', date: '' }); // 입력 필드 초기화
      setIsAdding(false); // 추가 입력 필드 숨기기
    };
  
    // 입력 필드 변경 처리
    const handleChange = (e) => {
      const { name, value } = e.target;
      setCurrentCertificate((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleButtonClick = () => {
      navigate('/camera');
    };

  return (
    <div className="resumeAdd_warp container">
      <h2 className="mainTitle">추가 항목 작성하기</h2>
    <div>
        <p className="msTitle"> 자격증 및 보유 기술</p>
        
        {/* 추가 버튼 또는 입력 박스 */}
        {!isAdding ? (
          <button className="addBtn" onClick={() => setIsAdding(true)}>
            + 추가하기
          </button>
        ) : (
          <div className="input-box">
            <input
              type="text"
              name="name"
              className="input-field"
              placeholder="자격증 명을 입력해주세요"
              value={currentCertificate.name}
              onChange={handleChange}
            />
            <div className="date-section">
              <p>취득일</p>
              <input
                type="date"
                name="date"
                className="date-input"
                value={currentCertificate.date}
                onChange={handleChange}
              />
            </div>
            <button className="addBtn" onClick={addCertificate}>
              + 추가하기
            </button>
          </div>
        )}
        </div>

        {/* 추가된 자격증 리스트 */}
        <div className="certificate-list">
          {certificates.map((certificate, index) => (
            <div key={index} className="certificate-box">
              <p className="certificate-name">{certificate.name}</p>
              <p className="certificate-date">취득일: {certificate.date}</p>
            </div>
          ))}
        </div>

    <p className="subTitle"> 자기소개서 </p>
    <div className="row">
        <p className="subTitle"> 성장과정 </p>
        <button className="photo-button" onClick={handleButtonClick}>
          <img src={cameraIcon} alt="Camera Icon" className="camera-icon" /> 사진 찍기
        </button>
        </div>
        <div className="info-box">
            자기소개서를 작성하면 서류합격 확률이 올라가요!
        </div>
        <button className="copyBtn"> 복사하기 </button>
    <div className="row">
        <p className="subTitle"> 성격소개 </p>
        <button className="photo-button" onClick={handleButtonClick}>
          <img src={cameraIcon} alt="Camera Icon" className="camera-icon" /> 사진 찍기
        </button>
    </div>
        <div className="info-box">
            자기소개서를 작성하면 서류합격 확률이 올라가요!
        </div>
        <button className="copyBtn"> 복사하기 </button>
    <div className="row">
        <p className="subTitle"> 지원 동기 </p>
        <button className="photo-button">
          <img src={cameraIcon} alt="Camera Icon" className="camera-icon" /> 사진 찍기
        </button>
    </div>
        <div className="info-box">
            자기소개서를 작성하면 서류합격 확률이 올라가요!
        </div>
        <button className="copyBtn"> 복사하기 </button>
    <div className="row">
        <p className="subTitle"> 희망업무 및 포부 </p>
        <button className="photo-button" onClick={handleButtonClick}>
          <img src={cameraIcon} alt="Camera Icon" className="camera-icon" /> 사진 찍기
        </button>
    </div>
        <div className="info-box">
            자기소개서를 작성하면 서류합격 확률이 올라가요!
        </div>
        <button className="copyBtn"> 복사하기 </button>
    <div className="row">
        <p className="subTitle"> 특기사항 </p>
        <button className="photo-button" onClick={handleButtonClick}>
          <img src={cameraIcon} alt="Camera Icon" className="camera-icon" /> 사진 찍기
        </button>
    </div>
        <div className="info-box">
            자기소개서를 작성하면 서류합격 확률이 올라가요!
        </div>
        <button className="copyBtn"> 복사하기 </button>
      
    </div>

  );
};

      

export default ResumeAdd;
