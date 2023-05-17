import React,{useState,useEffect} from "react";
import image from './assets/Portfolio_Image.jpg'
import { Carousel,Card,Label,TextInput,Checkbox,Button } from "flowbite-react";
import mongodb from './assets/mongodb.png'
import node from './assets/node.png';
import express from './assets/express.png'
import react from './assets/react.png'
import udemy from './assets/certi_udemy.png'
import google from './assets/google.png'
import aiesec from './assets/aiesec.png'
import innovate from './assets/Innovate4india.jpeg'
import coordinator from './assets/coordinator.png'
import niyukti from './assets/niyukti.jpeg'
import facebook from './assets/facebook_proj.png'
import yelp_camp from './assets/yelpcamp_proj.png'
import Rentofy from './assets/Rentofy_proj.png'
import portfolio from './assets/portfolio_proj.png'
import resume from './assets/Nishant_Asnani_Resume.pdf'

const Test = () => {
  const [istheme,Setistheme]=useState("dark-theme");
  const changetheme=()=>{
    if(istheme==="dark")
    {
      Setistheme('light')
    }
    else{
      Setistheme('dark')
    }
  }

  useEffect(()=>{
    document.body.className=istheme;
  },[istheme])
  return (
    <React.Fragment>
      <div className="xxs:ml-56 xs:ml-44  text-xl mt-[3%] ml-14 inline-flex mx-auto max-w-[1800px] flex-row justify-around ">
        
        
        <ul className="flex justify-evenly max-w-[800px] font-semibold">
          <li><a href={resume} download><div>
    <Button
      color="success"
      pill={true}
    >
      My Resume
    </Button>
  </div>
            </a></li>
          <a href="#skills"><li className="items">Skills</li></a>
          <a href="#certifications"><li className="items">Certifications</li></a>
          <a href="#experience"><li className="items">Experience</li></a>
          <a href="#projects"><li className="items">Projects</li></a>
          <a href="#contactme"><li className="items">Contact me</li></a>
        </ul>

        <div className="pt-[10px]  pl-10">
  <label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" onChange={changetheme} className="sr-only peer" />
  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
      </div>


       
        
      </div>


      <div className="w-full flex">

        <div className="ml-[20%] object-contain mt-[2%]  xs:ml-[5%] xs:h-[700px] xxs:h-[15%] xxs:ml-[10%]  xxs:mt-[10%]">
        <img src={image} 
          alt=""  className="transition duration-200 h-[50%]  rounded-2xl  hover:shadow-[#ff3c78] hover:shadow-lg hover:scale-110 hover:cursor-pointer xxs:h-[250px] xxs:ml-[10%]  xxs:mt-[10%]"/>
        </div>

        
          
        <div className="flex w-[30%] right-36 relative mt-10 justify-start xs:ml-5 xs:mt-1 xs:left-8 xs:mb-10 ">
          <p className={`${istheme==='dark'?"text-2xl text-slate-300  xxs:relative xxs:left-52 ":"text-2xl  text-black xxs:relative xxs:left-52" }` }>Hi, I'm <br></br>
          <span className={`${istheme==='dark'?"text-white font-bold xxs:relative":"text-black font-bold xxs:relative" }`}>Nishant Asnani</span><br></br>
          <span className="font-bold text-xl xxs:relative">Web Enthusiast</span><br></br>
          <p className="text-base xs:w-[300px] sm:w-[350px] xxs:w-[400px] xxs:relative">
            Hardworking and focused , A pre-final year computer engineering student.
            Interested in MERN Stack development , Computer Networks ,Operating Systems and 
            C Programming.Looking for experience in domain of web-development.<br></br>
           <br></br>  
            
          </p>
          <div className="flex w-[100px] justify-between">

            <a href="https://github.com/NishantAsnani" className={`${istheme==='dark'?"bg-white":"text-black"}`}>
            <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
</svg>
            </a>
          
            <a href="https://www.linkedin.com/in/nishant-asnani-aa6093208/" className={`${istheme==='dark'?"text-white":"text-black"}`} >
            <svg className="w-12 h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
</svg>

            </a>
          </div>
          </p>
        </div>       
      </div>


<div className="flex justify-center mb-[2%]">
<h1 id='skills' className="text-5xl transition-all duration-200 ease-in-out hover:tracking-widest cursor-pointer xxs:mt-[40%]">
  &#x2BC1; Skills &#x2BC1;</h1>
</div>


<div className="flex justify-center">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-[80%]">
  <Carousel indicators={false}>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <span className="flex justify-center">
       <a href="https://www.mongodb.com/docs/"> <img src={mongodb} className=" xxs:ml-20 w-[50%] h-[90%] ml-60 xs:ml-[85px]
        " alt="" /></a>
      </span>
    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
    <span className="flex justify-center">
       <a href="https://nodejs.org/en/docs"> <img src={node} className=" xxs:ml-20 w-[50%] h-[90%] ml-60 xs:ml-[85px]
        " alt="" /></a>
      </span>
    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
    <span className="flex justify-center">
       <a href="https://expressjs.com/en/5x/api.html"> <img src={express} className=" xxs:ml-20 w-[50%] h-[90%] ml-60 xs:ml-[85px]
        " alt="" /></a>
      </span>
    </div>

    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
    <span className="flex justify-center">
       <a href="https://legacy.reactjs.org/docs/getting-started.html"> <img src={react} className=" xxs:ml-20 w-[50%] h-[90%] ml-60  xs:ml-[85px]
        " alt="" /></a>
      </span>
    </div>
  </Carousel>
</div>
</div>


<div className="flex justify-center mb-[2%] mt-[5%]">
<h1 id='certifications' className="text-5xl transition-all duration-200 ease-in-out hover:tracking-widest cursor-pointer xxs:mt-[40%]">
  &#x2BC1; Certificates &#x2BC1;</h1>
</div>


<div className="flex justify-center flex-row flex-wrap-reverse">
<div className="max-w-sm ml-[10%] transition duration-200 h-[50%]  rounded-2xl  hover:shadow-[#ff3c78] hover:shadow-lg hover:scale-110 hover:cursor-pointer">
  <Card imgSrc={udemy} className="">
    <a href="https://www.udemy.com/certificate/UC-5f5c6928-c62b-4020-9f1f-58124763e3e3/">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      See certificate
    </h5>
    </a>
  </Card>
</div>


<div className="max-w-sm ml-[10%] transition duration-200 h-[50%]  rounded-2xl  hover:shadow-[#ff3c78] hover:shadow-lg hover:scale-110 hover:cursor-pointer">
  <Card imgSrc={google}>
    <a href="https://www.cloudskillsboost.google/public_profiles/9b7d27ce-d52e-4421-8b38-9b3f1fa1b7fc">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      See certificate
    </h5>
    </a>
  </Card>
</div>

</div>



<div className="flex justify-center mb-[2%] mt-[5%]">
<h1 id='experience' className="text-5xl transition-all duration-200 ease-in-out hover:tracking-widest cursor-pointer xxs:mt-[40%]">
  &#x2BC1; Experience &#x2BC1;</h1>
</div>


<div className="flex justify-center flex-row flex-wrap-reverse">
<div className="max-w-sm ml-[10%] transition duration-200 h-[50%]  rounded-2xl  hover:shadow-[#ff3c78] hover:shadow-lg hover:scale-110 hover:cursor-pointer">
  <Card imgSrc={aiesec} className="">
    <h6 className="text-lg tracking-tight text-gray-900 dark:text-white">
      Member of IGT Team AIESEC surat conducted meetings with international AIESEC  firms 
      for exchange of interns.
    </h6>
  </Card>
</div>


<div className="max-w-sm ml-[10%] transition duration-200 h-[50%] mt-5  rounded-2xl  hover:shadow-[#ff3c78] hover:shadow-lg hover:scale-110 hover:cursor-pointer">
  <Card imgSrc={innovate}>
    <h5 className="text-lg tracking-tight text-gray-900 dark:text-white">
      Conducted door-to-door surveys and created awareness regarding 
      dry and wet waste  uder Innovate4India NGO.
    </h5>
  </Card>
</div>


<div className="max-w-sm ml-[10%] transition duration-200 h-[50%]  rounded-2xl  hover:shadow-[#ff3c78] hover:shadow-lg hover:scale-110 hover:cursor-pointer">
  <Card imgSrc={coordinator}>
    <h5 className="text-lg tracking-tight text-gray-900 dark:text-white">
      Hosted a web based tech event in my college tech-fest named Updates.
    </h5>
  </Card>
</div>


<div className="max-w-sm ml-[10%] transition duration-200 h-[50%]  rounded-2xl  hover:shadow-[#ff3c78] hover:shadow-lg hover:scale-110 hover:cursor-pointer">
  <Card imgSrc={niyukti}>
    <h5 className="text-lg tracking-tight text-gray-900 dark:text-white">
      Stood first in a mock interview based evnent in my college tech-fest
      named Updates.
    </h5>
  </Card>
</div>

</div>


<div className="flex justify-center mb-[2%] mt-[5%]">
<h1 id='projects' className="text-5xl transition-all duration-200 ease-in-out hover:tracking-widest cursor-pointer xxs:mt-[40%]">
  &#x2BC1; Projects &#x2BC1;</h1>
</div>


<div className="flex justify-center flex-row flex-wrap-reverse">
<div className="max-w-sm ml-[10%] transition duration-200 h-[50%]  rounded-2xl mt-5 hover:shadow-[#ff3c78] hover:shadow-lg hover:scale-110 hover:cursor-pointer">
 <a href="https://github.com/NishantAsnani/FACEBOOK_CLONE"> <Card imgSrc={facebook} className="">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Facebook clone
    </h5>
  </Card>
  </a>
</div>


<div className="max-w-sm ml-[10%] transition duration-200 h-[50%]  rounded-2xl mt-5 hover:shadow-[#ff3c78] hover:shadow-lg hover:scale-110 hover:cursor-pointer">
 <a href="https://github.com/NishantAsnani/Portfolio"> <Card imgSrc={portfolio} className="">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Personal portfolio
    </h5>
  </Card>
  </a>
</div>



<div className="max-w-sm ml-[10%] transition duration-200 h-[50%]  rounded-2xl mt-5 hover:shadow-[#ff3c78] hover:shadow-lg hover:scale-110 hover:cursor-pointer">
 <a href="https://github.com/Colt/YelpCamp"> <Card imgSrc={yelp_camp} className="">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Yelp_camp (Part of course code along)
    </h5>
  </Card>
  </a>
</div>

<div className="max-w-sm ml-[10%] transition duration-200 h-[50%]  rounded-2xl mt-5 hover:shadow-[#ff3c78] hover:shadow-lg hover:scale-110 hover:cursor-pointer">
 <a href="https://github.com/NishantAsnani/Rentofy"> <Card imgSrc={Rentofy} className="">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Rentofy a renting e-commerece
    </h5>
  </Card>
  </a>
</div>

</div>

<div className="flex justify-center mb-[2%] mt-[5%]">
<h1 id='contactme' className="text-5xl transition-all duration-200 ease-in-out hover:tracking-widest cursor-pointer xxs:mt-[40%]">
  &#x2BC1; Let's Talk &#x2BC1;</h1>
</div>

<div className="flex justify-center">
  <ul>
  <li className="text-4xl">	&#9742; You can call me at: &nbsp; 
  <span className="text-2xl transition duration-200 text-[#ff3c78]  hover:scale-110 hover:cursor-pointer">
  (+91) 7043680624
    </span> 
  </li>


  <li className="text-4xl mt-2">&#128231; You can mail me at:&nbsp; 
  <span className="text-2xl transition duration-200 text-[#ff3c78]  hover:scale-110 hover:cursor-pointer">
     asnaninishant2@gmail.com
    </span> 
  </li>


  <li className="text-4xl mt-2">&#128241; You can message me at:&nbsp; 
  <span className="text-2xl transition duration-200 text-[#ff3c78]  hover:scale-110 hover:cursor-pointer">
     <a href="https://www.linkedin.com/in/nishant-asnani-aa6093208/">Linkedin</a>  
    </span> 
  </li>
  </ul>

  
  
</div>

<footer className="xxxs:w-full   w-full h-10 bg-black mt-5 rounded-sm flex justify-center">
<span className="text-white mt-2">&#169; Nishant Asnani All rights reserved</span>

</footer>
    </React.Fragment>
  );
};

export default Test;
