import React, { useState, useRef } from 'react';
import editIcon from '../assets/img/ResumeForm/edit.svg';
import PhotoIcon from '../assets/img/ResumeForm/photo.svg'; 
import cameraIcon from '../assets/img/ResumeForm/camera.svg';
import searchIcon from '../assets/img/ResumeForm/search.svg';
import arrowDownIcon from '../assets/img/ResumeForm/arrow_down.svg';
import closeIcon from '../assets/img/ResumeForm/tabler_x.svg';
import { useNavigate } from 'react-router-dom';


const strengths = [
  "성실함", "끈기있음", "친절함", "긍정적", "적극적",
  "책임감 강함", "시간개념 철저", "체력 좋음", "손이 빠름",
  "즉시 근무 가능", "꼼꼼함", "교대 근무 가능",
  "청소 능숙", "인근 거주 가능", "운전 능숙"
];

const ResumeForm = () => {

  const [photo, setPhoto] = useState(PhotoIcon);
  const [text, setText] = useState('');
  const [selectedStrengths, setSelectedStrengths] = useState([]);
  const [educations, setEducations] = useState([]); // 학력 입력 박스를 관리
  const [showAddButton, setShowAddButton] = useState(true); // '상세학력 추가하기' 버튼 표시 상태
  const [careers, setCareers] = useState([]);
  const [showCareerAddButton, setShowCareerAddButton] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const sectionsRef = useRef([]); // 각 섹션의 참조를 저장
  const navigate = useNavigate();
  
  const handleTextChange = (event) => {
    const value = event.target.value;
    const maxLength = 30;
  
    // 입력값을 자르도록 처리
    if (value.length > maxLength) {
      setText(value.slice(0, maxLength)); // 최대 길이까지만 설정
    } else {
      setText(value);
    }
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const toggleStrength = (strength) => {
    setSelectedStrengths((prev) =>
      prev.includes(strength)
        ? prev.filter((item) => item !== strength)
        : prev.length < 5
        ? [...prev, strength]
        : prev
    );
  };

  const addEducationBox = () => {
    setEducations([...educations, {}]); // 새 학력 입력 박스를 추가
  };

  const handleAddButtonClick = () => {
    setShowAddButton(false); // '상세학력 추가하기' 버튼 숨김
    addEducationBox(); // 첫 번째 학력 입력 박스 추가
  };

  // 경력 입력 박스를 추가하는 함수
  const addCareerBox = () => {
    setCareers([...careers, {}]); // 새로운 경력 입력 박스 추가
  };

  // '경력 추가하기' 버튼 클릭 핸들러
  const handleCareerAddButtonClick = () => {
    setShowCareerAddButton(false); // 버튼 숨김
    addCareerBox(); // 첫 번째 경력 입력 박스 추가
  };

  const scrollToSection = (index) => {
    setCurrentStep(index); // 현재 단계 업데이트
    sectionsRef.current[index].scrollIntoView({ behavior: 'smooth' });
  };

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleButtonClick = () => {
    navigate('/camera'); 
  };

  return (
    <div className="resume_warp container">
      {/* 헤더 */}
      <header className="resume_header">
        <div className="header-icons">
          <img src={closeIcon} alt="Close" className="close-icon" />
          <img
            src={arrowDownIcon}
            alt="Arrow Down"
            className="arrow-icon"
            onClick={toggleDropdown}
          />
        </div>
        {showDropdown && (
          <ul className="dropdown-menu">
            {['제목', '개인정보', '학력정보', '경력사항', '성격 및 강점'].map(
              (section, index) => (
                <li
                  key={index}
                  className="dropdown-item"
                  onClick={() => scrollToSection(index)}
                >
                  {section}
                </li>
              )
            )}
          </ul>
        )}
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${(currentStep + 1) * 20}%` }} // 단계에 따라 너비 조정
          ></div>
        </div>
      </header>
      {/* 1번 */}
      <section ref={(el) => (sectionsRef.current[0] = el)} className="step step1">
        <div className="step-header">
          <span className="step-number">1</span>
          <span className="step-title">이력서 제목을 입력해주세요</span>
        </div>
        <textarea
        className="title-input"
        maxLength="30"
        placeholder="나를 표현하는 한 문장을 적어주세요!"
        value={text}
        onChange={handleTextChange} 
      />
      <div
        className={`character-count ${
          text.length === 30 ? "full" : ""
        }`}
      >
        {text.length}/30
      </div>
      <div class="photoBtn-container">
        <button className="photo-button" onClick={handleButtonClick}>
          <img src={cameraIcon} alt="Camera Icon" className="camera-icon" /> 사진 찍기
        </button>
      </div>
      </section>
    {/* 2번 */}
    <section ref={(el) => (sectionsRef.current[1] = el)} className="step step2">
        <div className="step-header">
          <span className="step-number">2</span>
          <span className="step-title">개인정보를 입력해주세요</span>
        </div>
        <div class="profile-container">
          <div className="profile-section">
            <img src={photo} alt="Profile" className="profile-photo" />
            <label htmlFor="photo-upload" className="profile-badge">
              <img src={editIcon} alt="Edit" />
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handlePhotoChange}
              />
            </label>
          </div>
        </div>
        <div className="inputgroup">
          <label>이름</label>
          <input type="text" placeholder="김이음" />
        </div>
        <div className="inputgroup">
          <label>전화번호</label>
          <input type="text" placeholder="010-0000-0000" />
        </div>
        <div className="inputgroup">
          <label>이메일</label>
          <input type="email" placeholder="noin99@gmail.com" />
        </div>
        <div className="inputgroup">
          <label>거주지</label>
          <select>
            <option>광역시/도</option>
          </select>
          <select>
            <option>시/구/군</option>
          </select>
          <select>
            <option>동/읍/면</option>
          </select>
          <input type="text" className="detailInput" placeholder="(선택)상세주소 입력"/>
        </div>
      </section>
      {/* 3번 */}
      <section ref={(el) => (sectionsRef.current[2] = el)} className="step step3">
        <div className="step-header">
          <span className="step-number">3</span>
          <span className="step-title">학력정보를 입력해주세요</span>
        </div>

        <div className="education-input">
          <input
            type="text"
            className="input-field"
          />
          <button className="search-button">
            <img src={searchIcon} alt="Search Icon" className="search-icon" />
          </button>
        </div>
        <div className="desSec">
          <p className="desTitle">선택사항</p>
          <p className="desDetail">
            상세 학력을 적으면 면접 제의 및 합격확률이 올라갈 수도 있어요!
          </p>
        </div>
        
        {showAddButton && (
          <button className="addBtn" onClick={handleAddButtonClick}>
            + 상세학력 추가하기
          </button>
        )}

        {/* 반복적으로 추가되는 학력 입력 박스 */}
        {educations.map((_, index) => (
          <div key={index} className="education-box">
            <div>
              <input type="text" className="input-field" placeholder="학교명(기관명)을 입력해주세요" />
            </div>

            <div className="box-1">
              <p>재학기간</p>        
                <input type="date" className="date-start" />
            </div>

            <div className="box-2">
              <p> ~ </p>
              <input type="date" className="date-end" />
            </div>
               
            <div className="graduation-status">
              <select>
                <option value="">선택</option>
                <option value="졸업">졸업</option>
                <option value="재학">재학</option>
                <option value="휴학">휴학</option>
              </select>
            </div>
            <div className="box-3">
              <button className="addBtn" onClick={addEducationBox}>
                + 추가하기
              </button>
            </div>
          </div>
        ))}

      </section>
      
      {/* 4번 */}
      <section ref={(el) => (sectionsRef.current[3] = el)} className="step step4">
        <div className="step-header">
          <span className="step-number">4</span>
          <span className="step-title">경력사항을 입력해주세요</span>
        </div>
        <div className="career-tabs">
          <button className="blueBtn">경력</button>
          <button className="grayBtn">신입</button>
        </div>
        <div className="career-summary">
          <span className="total-experience-title">총 경력</span>
          <span className="total-experience-value">00년 00개월</span>
        </div>
        <div className="desSec">
        <p className="desTitle">상세 경력</p>
          <p className="desDetail">
            상세 경력을 적으면 면접 제의 및 합격확률이 올라갈 수도 있어요!
          </p>
        </div>
          {showCareerAddButton && (
          <button className="addBtn" onClick={handleCareerAddButtonClick}>
            + 경력 추가하기
          </button>
        )}

        {/* 반복적으로 추가되는 경력 입력 박스 */}
        {careers.map((_, index) => (
          <div key={index} className="career-box">
            <div>
              <input type="text" className="input-field" placeholder="회사명을 입력해주세요" />
            </div>
            <div className="box-1">
              <p>재직기간</p>
              <input type="date" className="date-start" />
            </div>
            <div className="box-2">
              <p> ~ </p>
              <input type="date" className="date-end" />
            </div>
            <div>
              <input type="text" className="input-field" placeholder="담당 업무를 입력해주세요" />
            </div>
            <div className="box-3">
              <button className="addBtn" onClick={addCareerBox}>
                + 추가하기
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* 5번 */}
      <section ref={(el) => (sectionsRef.current[4] = el)} className="step step5">
        <div className="step-header">
          <span className="step-number">5</span>
          <span className="step-title">성격 및 강점을 입력해주세요</span>
        </div>
        <div
          className={`character-count ${
            selectedStrengths.length === 5 ? "full" : ""
          }`}
        >
          {selectedStrengths.length}/5
        </div>
        <div className="strength-list">
        {strengths.map((strength) => (
          <button
            key={strength}
            className={`strength-item ${
              selectedStrengths.includes(strength) ? "selected" : ""
            }`}
            onClick={() => toggleStrength(strength)}
            disabled={!selectedStrengths.includes(strength) && selectedStrengths.length >= 5} // 선택되지 않은 버튼은 5개를 선택한 경우 비활성화
          >
            {strength}
          </button>
        ))}
      </div>
      <button className="completeBtn">필수 항목 작성 완료하기</button>
      </section>
    </div>
  );
};

export default ResumeForm;
