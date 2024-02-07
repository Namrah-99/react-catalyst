import "./ProfileCard.css";
export default function ProfileCardMain() {
  return (
    <div className="profile-card-card">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
}

function Avatar() {
  return (
    <div className="profile-card-header">
      <img
        className="profile-card-image"
        src={window.location.origin + "/assets/profile/profile-pic.png"}
        alt="profile-pic"
      />
      <div>
        <h3 className="profile-card-name">Namrah Saeed</h3>
        <p className="profile-card-designation"> fullstack-developer</p>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <p className="profile-card-message">
      Experienced Full-Stack Developer with a strong foundation in JavaScript
      frameworks such as React, NestJS, and Angular, backed by 2 years of
      practical experience. Proficient in crafting scalable solutions for
      digital transformation projects, with expertise spanning both front-end
      and back-end technologies. Committed to continuous learning and expanding
      skills in full-stack development to contribute to innovative solutions
    </p>
  );
}

function SkillList() {
  return (
    <div className="profile-card-skill-list">
      <Skill skill="React" backgroundColor="#61DAFB" color="#000" emoji="🐻" />
      <Skill skill="NestJS" backgroundColor="#0F0F0F" color="#fff" emoji="🐶" />
      <Skill
        skill="Angular"
        backgroundColor="#DD0031"
        color="#fff"
        emoji="🐱‍👤"
      />
    </div>
  );
}

function Skill({ backgroundColor, emoji, skill, color }) {
  return (
    <div className="profile-card-skill" style={{ backgroundColor, color }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
}
