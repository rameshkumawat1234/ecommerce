import React, { useState } from 'react';

// import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../asses/style/style.css'
import { FaFacebookF } from "react-icons/fa6";
import { ImTwitter } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";


const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === '') {
      alert('please enter email.');
    } else {
      alert('Email sent!');
      setEmail('');
    }
  };
  const iconWrapperStyle = {
    borderRadius: '50%',
    backgroundColor: "black",
    padding: '8px',
  };
  const school = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  return (
    <div class="footer1">
      <footer class="footer1">
        <div class="container1">
          <div class="row1">
            <div class="footer-col">
              <h4>company</h4>
              <ul class="px-3">
                <li><Link to="#">about us</Link> </li>
                <li><Link to="#">our services</Link> </li>

                <li><Link to="#">privacy policy</Link> </li>
                <li><Link to="#">affiliate program</Link> </li>
              </ul></div><div class="footer-col">
              <h4>get help</h4>
              <ul class="px-3">
                <li><Link to="#">FAQ</Link> </li>
                <li><Link to="#">shipping</Link> </li>
                <li><Link to="#">returns</Link> </li>
                <li><Link to="#">order status</Link> </li>
                <li><Link to="#">payment options</Link> </li>
              </ul></div>
            <div class="footer-col">
              <h4>School</h4>
              <ul class="px-3">
                <li><Link to="#">watch</Link> </li>
                <li><Link to="#">bag</Link> </li>
                <li><Link to="#">shoes</Link> </li>
                <li><Link to="#">dress</Link> </li>
              </ul></div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <Link to="#"><i><FaFacebookF/></i></Link> 
                <Link to="#"><i ><ImTwitter/></i></Link> 
                <Link to="#"><i><RiInstagramFill/></i></Link> 
                <Link to="#"><i><BsLinkedin/></i></Link> 
              </div>
            </div>
          </div>
          <div class="email_footer">
            <form action="">
              <input type="email" placeholder="Your Email Address" name="from_email" value="" />
              <button type="submit">Send</button></form></div></div></footer></div>
  );
};

export default Footer;

