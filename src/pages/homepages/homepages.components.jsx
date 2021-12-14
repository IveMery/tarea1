import React from "react";
import Footer from "../../components/footer/footer.component";
import rickmorty from "../../assets/rickmorty.jpg";
import rickmortyuno from "../../assets/rickmortyuno.jpg";
import rickmortycuatro from "../../assets/rickmortycuatro.jpg";
import rickmortycinco from "../../assets/rickmortycinco.jpg";
import rickmortysiete from "../../assets/rickmortysiete.jpg";
import "./homePages.styles.scss";

const Homepages = () => {
  return (
    <>
      <main className="bg-dark vh-100  text-white">
        <div className="parent">
          <div className="div1">
            <img className="image" src={rickmorty} alt="rickmorty"/>
          </div>
          <div className="div2">
            <img className="image" src={rickmortyuno} alt="rickmorty" />
          </div>
          <div className="div3">
            <img className="image" src={rickmortysiete} alt="rickmorty" />
          </div>
          <div className="div4">
            <img className="image" src={rickmortycuatro} alt="rickmorty" />
          </div>
          <div className="div5">
            <img className="image" src={rickmortycinco} alt="rickmorty" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Homepages;
