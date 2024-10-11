import React, {useState, useEffect} from 'react';
import "./style.css";
import patternDivider from "./images/pattern-divider-desktop.svg";
import cube from "./images/icon-dice.svg";

const ArticleGenerate = () => {
  const [advice, setAdvice] = useState("");
  const [adviceNum, setAdviceNum] = useState("");

  async function getAdvice() {
    const res = await fetch(`https://api.adviceslip.com/advice`);
    const data = await res.json();

    setAdvice(data.slip.advice);
    setAdviceNum(data.slip.id);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  function handleChangeAdvice() {
    getAdvice();
  }

  return (
    <div className="container">
      <p className="advice-number">ADVICE #{adviceNum}</p>
      <h3 className="advice-text">" {advice}"</h3>
      <img className="divider" src={patternDivider} alt="divider" />
      <button onClick={handleChangeAdvice} className="cube"><img  src={cube}  alt="cube"/></button>
    </div>
  )
}

export default ArticleGenerate