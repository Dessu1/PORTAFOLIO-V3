import React from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div id='home'>
      <Header />
      <Content />
      <div className='chika-dancing'>
        <a href='#home'>
          <img src='https://i.imgur.com/Wh9cqBq.gif' alt='chika-dancing' />
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
