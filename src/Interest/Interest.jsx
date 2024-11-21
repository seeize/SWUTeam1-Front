import React, { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/CarouseBanner";
import { jobPostsData } from "../home-data";
import { useNavigate } from "react-router-dom";
import "./Interest.scss";

const Interest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState(""); 
  const [newPostUrl, setNewPostUrl] = useState(""); 
  const [posts, setPosts] = useState(jobPostsData); 
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePostClick = (id) => {
    navigate(`/InterestDetail/${id}`);
  };

  const handleAddPost = () => {
    if (newPostTitle.trim() && newPostUrl.trim()) {
   
      const newPost = {
        id: posts.length + 1,
        title: newPostTitle,
        url: newPostUrl,
        recruitmentCount: "0명",
        date: new Date().toLocaleDateString(),
        deadline: "상시채용",
        recruiter: "정보 없음",
        phone: "정보 없음",
        email: "정보 없음",
      };
      setPosts([...posts, newPost]);
      setNewPostTitle(""); 
      setNewPostUrl("");
      closeModal(); 
    }
  };

  return (
    <div className="container interest-container2">
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
        <div className="top-ihome-banner">
          <Banner />
        </div>
      <main className="interest-content">
        <section className="job-posts">
          <h2 className="interest-hired">관심 채용 공고</h2>

          <button className="add-post" onClick={openModal}>
            <img
              src={require("../assets/img/icons/tabler_plus.png")}
              alt="+" 
              className="plus_icon"
            />
            추가하기
          </button>

          <div className="post-list">
            {posts.map((post) => (
              <div
                key={post.id}
                className="post-item"
                onClick={() => handlePostClick(post.id)}
              >
                {post.title}
                <span>{post.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 모달 */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()} 
            >
              <div className="input-title">
                <input
                  type="text"
                  placeholder="사이트 별칭을 적어주세요"
                  value={newPostTitle}
                  onChange={(e) => setNewPostTitle(e.target.value)} 
                />
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
                    navigator.clipboard
                      .readText()
                      .then((text) => setNewPostUrl(text))
                  }
                >
                  붙여넣기
                </button>
              </div>
              <button className="add-button" onClick={handleAddPost}>
                <img
                  src={require("../assets/img/icons/tabler_plus.png")}
                  alt="+" 
                  className="plus_icon"
                />
                추가하기
              </button>
            </div>
          </div>
        )}
              <div className="Bottom-Home-Banner">
                <Banner />
              </div>
      </main>
    </div>
  );
};

export default Interest;