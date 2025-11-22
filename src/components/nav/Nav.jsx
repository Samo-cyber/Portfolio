import React from 'react'
import './nav.css'

import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from 'react';


function Nav() {

  const [activeNav , setActiveNav] = useState("#")

  return (
    <nav>
      <a href="#" className={activeNav === "#" ? "active" : ""} onClick={() => setActiveNav('#')}><IoHomeOutline /></a>
      <a href="#about" className={activeNav === "#about" ? "active" : ""} onClick={() => setActiveNav('#about')}><LuUserRound  /></a>
      <a href="#services"  className={activeNav === "#services" ? "active" : ""} onClick={() => setActiveNav('#services')}><RiServiceLine /></a>
      <a href="#portfolio"  className={activeNav === "#portfolio" ? "active" : ""} onClick={() => setActiveNav('#portfolio')}><BiBook /></a>
      <a href="#contact"  className={activeNav === "#contact" ? "active" : ""} onClick={() => setActiveNav('#contact')}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav