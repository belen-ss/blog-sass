import React from "react";
import Top from "../components/top/top";
import Details from '../components/details/details';
import Footer from "../components/footer/footer";
import './index.sass';

const Index = () => {
  return (
    <div className='index-container'>
      <Top />
      <Details />
      <Footer />
    </div>
  );
};

export default Index;
