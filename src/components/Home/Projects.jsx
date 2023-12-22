import React from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import first from "../../assets/first.png"
import second from "../../assets/second.png"
import third from "../../assets/third.png"
import { Link } from 'react-router-dom';
import Expense_Splitter from '../../../public/Expense_splitter'
import Ecommerce from "../../../public/Ecommerce"
import Quizwiz from "../../../public/Quizwiz"

const Projects = () => {

  const expense_splitter_about = `Expense Splitter, a cutting-edge application developed on the MERN
  (MongoDB, Express.js, React.js, Node.js) stack with the integration of
  Socket.io for real-time capabilities, revolutionizes the landscape of
  group expense management. This robust platform enables users to
  effortlessly create rooms for distinct events, fostering seamless
  communication and collaboration. Hosts, equipped with the ability to
  add new members effortlessly, initiate dynamic conversations within
  the application's real-time chat feature. The application's core
  functionality lies in its automated expense tracking and calculation
  system, ensuring accurate and fair distribution of costs among group
  members. The platform's scalable architecture allows for the addition
  of new members and the creation of multiple rooms, accommodating
  diverse user scenarios. In essence, Expense Splitter goes beyond the
  conventional boundaries of expense-sharing applications, providing a
  comprehensive, user-friendly solution that enhances transparency,
  efficiency, and financial coordination within groups.`

  const ecommerce_about = `The eCommerce website is a robust and dynamic platform built on the MERN (MongoDB, Express.js, React.js, Node.js) stack, showcasing a seamless digital shopping experience. Users can effortlessly explore, filter, and paginate through a diverse range of digital items, with the ability to add products to their cart or proceed with secure transactions. The website incorporates user registration and login features for personalized interactions. On the administrative side, the MERN stack empowers administrators to efficiently manage the digital inventory by adding or removing products, overseeing user accounts, and handling order management, including the capability to accept or dismiss transactions. This technology stack ensures a scalable, high-performance, and responsive eCommerce solution, combining the power of MongoDB for flexible data storage, Express.js for robust server-side development, React.js for an interactive user interface, and Node.js for efficient server-side scripting. The result is a feature-rich, user-friendly, and secure eCommerce platform that elevates the digital shopping experience.`

  const quizwiz_about = `QuizWiz stands as an engaging and knowledge-enhancing platform built with HTML, CSS, and React, seamlessly integrating with the Open Trivia API. Offering an extensive array of quizzes spanning diverse topics such as politics, sports, entertainment, general knowledge, science, and more, the website provides users with an interactive and educational experience. Players can delve into quizzes tailored to their interests, with responsive design ensuring an optimal user experience. Leveraging HTML and CSS for structure and style, and JavaScript and React for dynamic functionality, QuizWiz delivers a captivating environment for users to test and augment their knowledge. The integration of the Open Trivia API enriches the content, providing a vast repository of questions across multiple categories. With this tech stack, QuizWiz epitomizes a harmonious blend of user-friendly design and cutting-edge technology, fostering an enjoyable and intellectually stimulating quiz-playing journey.`


    useGSAP(() => {
        var diffRot = 0;
        var rotate = 0;
    
        const probElements = document.querySelectorAll('.proj');
    
        const handleMouseMove = (e) => {
          var diff = e.clientY - e.currentTarget.getBoundingClientRect().top;
    
          diffRot = e.clientX - rotate;
          rotate = e.clientX;
    
    
          gsap.to(e.currentTarget.querySelector('img'), {
            opacity: 1,
            ease: "power2",
            top: diff,
            left: e.clientX,
            rotation: gsap.utils.clamp(-40, 40, diffRot),
          });
        };
    
        const handleMouseLeave = (e) => {
    
          gsap.to(e.currentTarget.querySelector('img'), {
            opacity: 0,
            ease: "power2",
          });
        };
    
        
    
        probElements.forEach((probElement) => {
          probElement.addEventListener('mousemove', handleMouseMove);
          probElement.addEventListener('mouseleave', handleMouseLeave);
        });
    
        return () => {
          probElements.forEach((probElement) => {
            probElement.removeEventListener('mousemove', handleMouseMove);
            probElement.removeEventListener('mouseleave', handleMouseLeave);
          });
        };
      }, []);

  return (
    <div className="projects">
          <h1>Projects</h1>
          <div className="projects_cont">
            <Link  to="/project" state={{
              link: "https://main--expensplitter.netlify.app/",
              about: expense_splitter_about,
              model: 1
            }} style={{textDecoration: "none"}}>
            <div className="proj proj1">
              <img src={first} alt="" />
              <h1>Expense Splitter</h1>
            </div>
            </Link>
            <Link to="/project" state={{
              link: "https://clumsy-poncho-tick.cyclic.app/",
              about: ecommerce_about,
              model: 2
            }} style={{textDecoration: "none"}} >
            <div className="proj proj2">
              <img src={second} alt="" />
              <h1>Ecommerce website</h1>
            </div>
            </Link>
            <Link to="/project" state={{
              link: "https://quiz-wizzz.netlify.app/",
              about: quizwiz_about,
              model: 3
            }} style={{textDecoration: "none"}} >
            <div className="proj proj3">
              <img src={third} alt="" />
              <h1>Quizz Wizz</h1>
            </div>
            </Link>
          </div>
        </div>
  )
}

export default Projects
