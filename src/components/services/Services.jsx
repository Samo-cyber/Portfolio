import React from 'react'
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";

import './services.css'


function Services() {
  return (
    <section id='services'>
         <h5>What I Offer</h5>
         <h2>Services</h2>

         <div className="container container_services">
              <article className="card">
                <MdDesignServices  className='icon '/>
                <h3>Web Design</h3>
                <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae id quam placeat natus, at fugiat?</p>
              </article>

              <article className="card">
                <IoIosRocket   className='icon '/>
                <h3>Fast Performance </h3>
                <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae id quam placeat natus, at fugiat?</p>
              </article>


              <article className="card">
                <FaCode  className='icon '/>
                <h3>Clean Code</h3>
                <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae id quam placeat natus, at fugiat?</p>
              </article>
            </div>
    </section>
  )
}

export default Services