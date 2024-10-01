import React from 'react'
import FirstPart from './components/FirstPart';
import MiddlePart from './components/MiddlePart';
import LastPart from './components/LastPart';
import "./style/style.css";
const NewsHomepage = () => {
  return (
      <div className="container">
        <FirstPart />
        <MiddlePart />
        <LastPart />
          
      </div>
  )
}

export default NewsHomepage