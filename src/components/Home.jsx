import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Banner from './CarouseBanner';
import { jobPostsData, myResumeData } from './home-data';
import '../assets/sass/section/Home.scss';

const Home = () => {
  const navigate = useNavigate();

  // 모달 관련 상태
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostUrl, setNewPostUrl] = useState('');
  const [posts, setPosts] = useState(jobPostsData);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddPost = () => {
    if (newPostTitle.trim() && newPostUrl.trim()) {
      const newPost = {
        id: posts.length + 1,
        title: newPostTitle,
        url: newPostUrl,
        recruitmentCount: '0명',
        date: new Date().toLocaleDateString(),
        deadline: '상시채용',
        recruiter: '정보 없음',
        phone: '정보 없음',
        email: '정보 없음',
      };
      // 배열 앞에 추가
      setPosts([newPost, ...posts]);
      setNewPostTitle('');
      setNewPostUrl('');
      closeModal();
    }
  };
  

  return (
    <div className="container Home-container">
      <Header />
      <div className="B-menu">
        <ul className="B-menu-list">
          <li className="menu-home" onClick={() => navigate('/home')}>홈</li>
          <li onClick={() => navigate('/Interest')}>관심채용공고</li>
          <li onClick={() => navigate('/myresume')}>내 이력서</li>
          <li className="menu-logout" onClick={() => navigate('/login')}>
            로그아웃
          </li>
        </ul>
      </div>
      <main className="Home-content">
        <div className="Top-Home-Banner">
          <Banner />
        </div>
        <section className="Home-job-posts">
          <h2>관심 채용 공고</h2>
          <button className="Home-add-post" onClick={openModal}>
            <img
              src={require('../assets/img/icons/tabler_plus.png')}
              alt="+"
              className="Home-plus_icon"
            />
            추가하기
          </button>
          <div className="Home-post-list">
            {posts.map((post, index) => (
              <div key={index} className="Home-post-item">
                {post.title}
                <br />
                <span>{post.date}</span>
              </div>
            ))}
          </div>
          <div className="Home-more" onClick={() => navigate('/Interest')}>더보기</div>
        </section>
        <section className="Home-my-resume">
          <h2>내 이력서</h2>
          <button
            className="Home-add-resume"
            onClick={() => navigate('/resumeform')}
          >
            <img
              src={require('../assets/img/icons/tabler_plus.png')}
              alt="+"
              className="Home-plus_icon"
            />
            새 이력서 작성하기
          </button>
          <div className="Home-resume-list">
            {myResumeData.map((resume, index) => (
              <div key={index} className="Home-resume-item">
                {resume.name}
                <img
                  src={require('../assets/img/icons/orange-arrow.png')}
                  alt=">"
                  className="orange-arrow"
                />
                <br />
                <span>최종 수정일 {resume.lastUpdated}</span>
              </div>
            ))}
          </div>
          <div className="Home-more" onClick={() => navigate('/myresume')}>더보기</div>
        </section>
      </main>
      <div className="Bottom-Home-Banner">
        <Banner />
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="input-group">


              <div className="input-title">
                <input
                  type="text"
                  placeholder="사이트 별칭을 적어주세요"
                  value={newPostTitle}
                  onChange={(e) => setNewPostTitle(e.target.value)} 
                />
              </div>

            </div>

             <div className="input-address">
                <input
                  type="text"
                  placeholder="사이트 주소"
                  value={newPostUrl}
                  onChange={(e) => setNewPostUrl(e.target.value)} 
                />

                
              <button
                className="paste-button"
                onClick={() =>
                  navigator.clipboard.readText().then((text) => setNewPostUrl(text))
                }
              >
                붙여넣기
              </button>
            </div>
            <button className="add-button" onClick={handleAddPost}>
              <img
                src={require('../assets/img/icons/tabler_plus.png')}
                alt="+"
                className="plus_icon"
              />
              추가하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
