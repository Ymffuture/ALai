import React, { useContext } from "react";
import "./main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {

  const {onSet,
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPropmt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput} = useContext(Context)
  return (
    <div className="main">
      <div className="nav">
        <p className="alai">ALai</p>
        <img src={assets.img} alt="User Icon" />
      </div>
      <div className="main-container">

{!showResult
?<>

  {/* <img className="logo2" src={assets.gemini_icon} alt="" /> */}
 <div className="greet">

          <p>
            <span>Hello, Dev</span>
          </p>
          <p>How can I help?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Navigate with ease using our compass.</p>
            <img src={assets.compass_icon} alt="Compass Icon" />
          </div>
          <div className="card">
            <p>Bright ideas come to light here.</p>
            <img src={assets.bulb_icon} alt="Bulb Icon" />
          </div>
          <div className="card">
            <p>Stay connected through our messaging system.</p>
            <img src={assets.message_icon} alt="Message Icon" />
          </div>
          <div className="card">
            <p>Write and review your code efficiently.</p>
            <img src={assets.code_icon} alt="Code Icon" />
          </div>
        </div>
</>  
:<div className="result">
  <div className="result-title">
    <img src={assets.img} alt="" />
    <p>{recentPrompt}</p>
  </div>
  <div className="result-data">
    <img className="logo" src={assets.gemini_icon} alt="" />
    {loading
    ?<div className="loader">
      <hr/>
      <hr/>
      <hr/>
    </div>
    :  <p dangerouslySetInnerHTML={{__html:resultData}}></p>
    }
  
  </div>
</div>
}

      
        <div className="main-bottom">
          <div className="search-box">
            <input
            onChange={(e)=>setInput(e.target.value)} value={input}
              type="text"
              name="name"
              id="name"
              placeholder="Your message ..."
            />
            <div>
              <img src={assets.gallery_icon} alt="Gallery Icon" />
              <img src={assets.mic_icon} alt="Mic Icon" />
              {input?<img 
              onClick={()=>onSent()}
              src={assets.send_icon} alt="Send Icon" /> : null }
            </div>
          </div>
          <p className="bottom-info">
            Explore more features and improve your experience. <a href="https://learniq.netlify.app/"><b>LearnIQ</b></a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
