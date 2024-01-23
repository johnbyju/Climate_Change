import React from "react";
import img2 from "../images/UNDP-Tajikistan-2017_woman_farming_40043166155-1920x1073(1).jpg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div class style={landingPage} className="">
        <span>
          <img
            className="img-fluid opacity-50"
            src={img2}
            style={{ width: "100%" }}
          />
          <div className="row" style={_1sttxt}>
            <h1>United National Development Programme</h1>
            <Link to='/Weather'><p style={{fontSize : '24px', color :'black',textDecoration:'none'} }>Click To Check Climate Details</p></Link>
            
            <h5 style={{fontSize : '23px'}}>The world is already 1.2°C warmer than pre-industrial times and every fraction of a degree counts. Research shows that with 2°C of global warming we will have more intense droughts and more devastating floods, more wildfires and more storms</h5>
           </div>
           
        </span>
        

      
      </div>
    </>
  );
};
export default Landing;

let landingPage = {
  fontFamily: "apple-system",
  height: "100%",
  backgroundColor: "#96b6c5",
};

const _1sttxt = {
  position: "absolute",
  top: "35%",
  left: "36%",
  transform: "translate(-50%, -50%)",
  color: "Black",
  textAlign: "center",
  fontSize: "50px",
  marginTop : '200px'
  // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
};
