import React from 'react';

const ResumeFormDetail = ({ title }) => {
  return (
    <div>
      <h2>디테일 화면</h2>
      <p>작성한 문장: {title}</p> {/* 전달받은 값 출력 */}
    </div>
  );
};

export default ResumeFormDetail;
