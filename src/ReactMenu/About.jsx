import React from "react";
import Common from "./Common";
import web from "../images/who-we-are.jpg";

const About=()=>
{
  return(
   <Common 
   name="Welcome to About page"
   imgsrc={web} visit="/contact" 
   btname="Contact here" />
  );
};

export default About;