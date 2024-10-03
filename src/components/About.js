import React from "react";
import './About.css'
import pro from './images/pro.png';
// import pdf from './images/Praful_Vats.pdf';
import ReactCurvedText from "react-curved-text";
import xim from './images/xim.jpeg';
<meta name="viewport" content="width=device-width,initial-scale=1"/>

function About() {
    return (
        <div>
            <div className="grid-container">
                <div className="logo one">
                <a href="/"><img src={pro} width={50} height={50} alt="logo"/></a>
                </div>
                <div className="head two">
                    PORTFOLIO
                </div>
                <div className="three wing">
                    <a className="none" href="https://praful-vats.github.io/projects/" target="_blank" rel="noopener noreferrer">PROJECTS</a> &nbsp; 
                    <a className="none" href="https://github.com/praful-vats/" target="_blank" rel="noopener noreferrer">GITHUB</a> &nbsp; 
                    <a className="none" rel=" noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/praful-vats/">LINKEDIN</a> 
                </div>
                        
                <div className="vl four">
                    <div className="cont">
                        Hello, I’m a Software Engineer<br></br>
                        experienced in specializing <br></br>
                        Full Stack Development.<br></br>
                        Transforming conceptual ideas <br></br>
                        into code implementation.<br></br><br></br>
                        Assembling a tesseract of<br></br>
                        tools and technologies and<br></br> 
                        solving challenging problems<br></br> 
                        with passion and determination.<br></br> 
                        To Infinity beyond Black Hole<span style={{color: '#f40009'}}><b>!</b></span>
                    </div>
                    <div className="nmrs">
                <div className="name">
                <span style={{color: '#f40009'}}>.</span> Praful Vats&nbsp;
                {/* <a className="non resu" href={pdf} target="_blank" rel="noopener noreferrer" style={{color: '#f40009'}}>resume&#x1F865;</a> */}
                <a className="non resu" href="https://drive.google.com/file/d/1fiVL_pkzm04Oe9ivJhwBKs-m6BmRt6r3/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{color: '#f40009'}}>resume&#x1F865;</a> 
                </div>
                </div>
                </div>
                <div className="five po">
                        <img className="i" src={xim} width={400} height={400} alt="pho"/>
                </div>
                <div className="cent six">
                    <div className="spin">
                        <ReactCurvedText
                            width={380}
                            height={235}
                            cx={190}
                            cy={120}
                            rx={100}
                            ry={100}
                            startOffset={4}
                            reversed={false}
                            text="Work in progress / site under rehabilitation and blah blah blah @#%!&*"
                            textPathProps={{"fill": "#F40009"}}
                        />
                    </div>
                    <div className="yc" style={{color: "black", fontSize:"30px", marginTop:"78px"}}>&nbsp;&nbsp;
                        1<span style={{color: '#f40009'}}>.</span>
                        9<span style={{color: '#f40009'}}>.</span>
                        9<span style={{color: '#f40009'}}>.</span>
                        9<span style={{color: '#f40009'}}>.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
