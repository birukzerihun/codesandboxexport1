import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="me.jpg" alt="Biruk" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Biruk Zerihun</h1>
      <p>
        My name is Biruk Zerihun i work as front end ehgineer at zemen bank for
        the last 4 years now i am passionate abou books
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML & CSS" emoji="😴" color="yellow" />
      <Skill skill="Javascript" emoji="😎" color="orange" />
      <Skill skill="nodejs" emoji="😛" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ background: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
