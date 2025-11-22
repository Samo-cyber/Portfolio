import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";


import Css from '../../assets/css3.svg';
import Xpressjs from '../../assets/expressjs.svg';
import Figma from '../../assets/figma.svg';
import Javascript from '../../assets/javascript.svg';
import Mongodb from '../../assets/mongodb.svg';
import Nodejs from '../../assets/nodejs.svg';
import ReactJS from '../../assets/react.svg';
import Tailwind from '../../assets/tailwindcss.svg';


const SkillsData = [
  
  {
    id: 1,
    image: Css,
    title: 'CSS',
    disc: 'User Interface',
  },
  {
    id: 1,
    image: Javascript,
    title: 'JavaScript',
    disc: 'Interaction',
  },
  {
    id: 1,
    image: ReactJS,
    title: 'React',
    disc: 'Framework',
  },
  {
    id: 1,
    image: Tailwind,
    title: 'TailwindCSS',
    disc: 'User Interface',
  },
  {
    id: 1,
    image: Nodejs,
    title: 'NodeJS',
    disc: 'Web Server',
  },
  {
    id: 1,
    image: Figma,
    title: 'Figma',
    disc: 'Design tool',
  },
  {
    id: 1,
    image: Xpressjs,
    title: 'ExpressJS',
    disc: 'Node Framework',
  },
  {
    id: 1,
    image: Mongodb,
    title: 'MongoDB',
    disc: 'Database',
  },
  
];






function Skills() {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Expreience</h2>


      <div className="container container_skills">
      {SkillsData.map(({ id, image, title, disc }) => (
        <article className="card_skill">
            <div className="icon">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <h4>{title}</h4>
              <p className="text-light">{disc}</p>
            </div>
        </article>
      ))}
      </div>
    </section>
  );
}

export default Skills;
