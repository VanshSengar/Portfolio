import React from "react";
import { Card } from "./Card";
import razorpay from "../assets/img/projects/razorpay.png";
import TicTacToe from "../assets/img/projects/TicTacToe.png";
import weather from "../assets/img/projects/weather.png";
import shoppingcart from "../assets/img/projects/shoppingcart.png";
import Gif from "../assets/img/projects/Gif.png";

import "./Project.css";
export const Projects = () => {
  const project = {
    data: [
      {
        name: "Random GIF Generator",
        desc: "A random GIF generator is a tool or application that provides users with randomly selected animated GIFs. These GIFs can be sourced from a predefined set of GIFs or from a GIF database via an API.",
        img: Gif,
        demoLink: "https://random-gif-generator-4mme.vercel.app/",
        codeLink: "https://github.com/VanshSengar/Random-Gif-Generator",
        techstack: [
          "/icons/react.svg",
          "/icons/css-3.svg",
          "/icons/javascript.svg",
          "/icons/npm.svg",
          "/icons/tailwindcss-svgrepo-com.svg",
        ],
      },
      {
        name: "Shopping Cart Clone",
        desc: "A shopping cart, also known as a shopping basket or cart, is a key component of an e-commerce platform or online store.",
        img: shoppingcart,
        demoLink: "https://shopping-cart-clone.vercel.app/",
        codeLink: "https://github.com/VanshSengar/Shopping-Cart-Clone",
        techstack: [
          "/icons/react.svg",
          "/icons/css-3.svg",
          "/icons/javascript.svg",
          "/icons/npm.svg",
          "/icons/tailwindcss-svgrepo-com.svg",
          "/icons/nodejs-icon.svg",
        ],
      },
      {
        name: "Weather App",
        desc: "A weather app project is a software development project aimed at creating an application that provides weather-related information to users.  ",
        img: weather,
        demoLink: "https://weatherapp27000.netlify.app/",
        codeLink: "https://github.com/VanshSengar/Weather-App",
        techstack: [
          "/icons/html-5.svg",
          "/icons/css-3.svg",
          "/icons/javascript.svg",
        ],
      },
      {
        name: "Razorpay Clone",
        desc: "Razorpay is a popular payment gateway and financial services platform based in India. It allows businesses to accept, process, and disburse payments with ease.",
        img: razorpay,
        demoLink: "https://razorpay00clone.netlify.app",
        codeLink: "https://github.com/VanshSengar/random_gif_generator",
        techstack: [
          "/icons/html-5.svg",
          "/icons/css-3.svg",
          "/icons/tailwind-css.svg",
         
        ],
      },
      {
        name: "Tic Tac Toe",
        desc: "Tic-Tac-Toe is a classic two-player game often played on a 3x3 grid. The objective is for one player to get three of their marks in a row—either horizontally, vertically, or diagonally—before the other player does.",
        img: TicTacToe,
        demoLink: "https://tic-tac-toe-azure-five-17.vercel.app/",
        codeLink: "https://github.com/VanshSengar/Tic-Tac-Toe",
        techstack: [
          "/icons/html-5.svg",
          "/icons/css-3.svg",
          "/icons/javascript.svg",
        ],
      },
    ],
  };
  return (
    <div className="project-container">
      <div id="projects" className="container width">
        <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
        <div className="row">
          {project.data.map((elem, index) => {
            return <Card key={index} data={elem} />;
          })}
        </div>
      </div>
    </div>
  );
};
