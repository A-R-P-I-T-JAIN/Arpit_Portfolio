import React from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import first from "../../assets/first.png"
import second from "../../assets/second.png"
import third from "../../assets/third.png"
import fourth from "../../assets/fourth.png"
import fifth from "../../assets/fifth.png"
import { Link } from 'react-router-dom';

const Projects = () => {

  const expense_splitter_about = `Expense Splitter is a state-of-the-art MERN stack application with Socket.io integration for real-time capabilities, revolutionizing group expense management. Users can create event-specific rooms, effortlessly add members, and engage in dynamic real-time chats. Its automated expense tracking ensures fair cost distribution, making it a comprehensive, user-friendly solution for transparent and efficient financial coordination in groups.`

  const ecommerce_about = `The eCommerce website, built on the MERN stack, offers seamless shopping with user-friendly features like product browsing, secure transactions, and personalized interactions. Administrators can efficiently manage inventory and orders, ensuring scalability and security. This robust platform combines MongoDB, Express.js, React.js, and Node.js for a feature-rich, responsive experience.
  `

  const quizwiz_about = `QuizWiz, built with HTML, CSS, and React, seamlessly integrates the Open Trivia API for diverse quizzes. Users enjoy an interactive experience with responsive design and dynamic functionality, fostering an enjoyable and educational journey.`

  const docx_about = `Docx, MERN stack web project simplifies document creation and customization, offering collaborative features for seamless teamwork. Users can effortlessly create and personalize documents while collaborating with friends in real-time. With MongoDB, Express.js, React.js, and Node.js, this platform ensures a smooth, efficient, and interactive document creation experience.`

  const stream_about = `Incorporating Next.js, Stream revolutionizes group meetings and video calls with seamless integration of ZegoCloud UI. Experience enhanced collaboration with intuitive features for scheduling, joining, and hosting meetings. Next.js ensures optimal performance, while ZegoCloud's robust functionality elevates the user experience for efficient and engaging virtual meetings.`


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
              github: "https://github.com/A-R-P-I-T-JAIN/Expense-Splitter",
              head: "Expense Splitter",
              image: first
            }} style={{textDecoration: "none"}}>
            <div className="proj proj1">
              <img src={first} alt="" />
              <h1>Expense Splitter</h1>
            </div>
            </Link>
            <Link  to="/project" state={{
              link: "https://docxx-tawny.vercel.app/",
              about: docx_about,
              github: "https://github.com/A-R-P-I-T-JAIN/docX",
              head: "Docx",
              image: fourth
            }} style={{textDecoration: "none"}}>
            <div className="proj proj1">
              <img src={fourth} alt="" />
              <h1>Docx</h1>
            </div>
            </Link>
            <Link to="/project" state={{
              link: "https://clumsy-poncho-tick.cyclic.app/",
              about: ecommerce_about,
              github: "https://github.com/A-R-P-I-T-JAIN/Ecommerce-app",
              head: "Ecommerce",
              image: second
            }} style={{textDecoration: "none"}} >
            <div className="proj proj2">
              <img src={second} alt="" />
              <h1>Ecommerce website</h1>
            </div>
            </Link>
            <Link to="/project" state={{
              link: "https://quiz-wizzz.netlify.app/",
              about: quizwiz_about,
              github: "https://github.com/A-R-P-I-T-JAIN/quizwiz",
              head: "Quizz Wizz",
              image: third
            }} style={{textDecoration: "none"}} >
            <div className="proj proj3">
              <img src={third} alt="" />
              <h1>Quizz Wizz</h1>
            </div>
            </Link>
            <Link to="/project" state={{
              link: "https://stream-five-iota.vercel.app/",
              about: stream_about,
              github: "https://github.com/A-R-P-I-T-JAIN/stream",
              head: "Stream",
              image: fifth
            }} style={{textDecoration: "none"}} >
            <div className="proj proj3">
              <img src={fifth} alt="" />
              <h1>Stream</h1>
            </div>
            </Link>
            
          </div>
        </div>
  )
}

export default Projects
