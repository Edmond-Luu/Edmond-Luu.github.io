import React from "react";
import tenzies from "../assets/portfolio/tenzies.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import currency from "../assets/portfolio/currency.jpg";
import todolist from "../assets/portfolio/todolist.jpg";
import joke from "../assets/portfolio/joke.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: tenzies,
      demo: "https://edmond-luu.github.io/react-tenzies",
      code: "https://github.com/edmond-luu/react-tenzies",
    },
    {
      id: 2,
      src: todolist,
      demo: "https://edmond-luu.github.io/react-todo-list",
      code: "https://github.com/edmond-luu/react-todo-list",
    },
    {
      id: 3,
      src: currency,
      demo: "https://edmond-luu.github.io/react-currency-exchange",
      code: "https://github.com/edmond-luu/react-currency-exchange",
    },
    {
      id: 4,
      src: joke,
      demo: "https://edmond-luu.github.io/dad-joke",
      code: "https://github.com/edmond-luu/dad-joke",
    },
    {
      id: 5,
      src: installNode,
      demo: "https://edmond-luu.github.io/",
      code: "https://github.com/edmond-luu/",
    },
    {
      id: 6,
      src: reactWeather,
      demo: "https://edmond-luu.github.io/",
      code: "https://github.com/edmond-luu/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={code} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
};

export default Portfolio;
