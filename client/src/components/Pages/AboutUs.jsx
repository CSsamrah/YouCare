import React from "react";
import about_image from '../images/pint2.png';
import about_image2 from '../images/pint1.png'
import './AboutUs.css'
import Footer from '../FooterEnd/FooterEnd'

export default function AboutUs(){
    return(
        <div className="AboutusBody">
<br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>About YouCare</h1>
        <p>YOU CARE is a personalized skincare platform offering tailored product recommendations through an interactive quiz. It features secure user accounts, a product catalog, cart management, and order tracking. With an easy-to-use interface, 
            YOU CARE ensures a smooth skincare shopping experience.</p>
        <br></br>
        <div className='image-container'>
        <img src={about_image} alt='Glow' className='full-width-image'></img>
        <article>
          <h2>At YouCare</h2>
          <p>At <b>You Care</b>, we offer a curated selection of premium cosmetics that cater to all your beauty needs.
          Our products are crafted with the highest quality ingredients to ensure effectiveness and purity. From luxurious skincare to vibrant makeup, each item is designed to enhance your natural beauty and provide a touch of elegance to your daily routine. Experience the difference with Radiant Glow, 
          where every product is a step toward a more radiant you.</p>
        </article>
      </div>
      <h1>Our Principles</h1>
        <div className="box-container">
        <div className="box">
            <h3>Exceptional Quality</h3>
            <p>We pride ourselves on the quality of every product we create. Our skincare solutions are crafted to deliver superior results you can trust, 
                helping your skin look and feel its best.</p>
        </div>
        <div className="box">
            <h3>Transparency</h3>
            <p>We believe that great skincare starts with great ingredients. That's why we source 
                only the finest, scientifically-backed ingredients</p>
        </div>
        <div className="box">
            <h3>Best Ingreidents</h3>
            <p>Honesty is at the heart of what we do. We’re committed to full transparency, sharing 
                everything from our ingredients to our formulation process.</p>
        </div>
    </div>

      <div className='image-container2'>
        <img src={about_image2} alt='Glow' className='full-width-image'></img>
        <article>
          <h2>Our Mission</h2>
          <p>At <b>YouCare</b>, our mission is to empower individuals to achieve healthy, radiant skin through science-based skincare solutions. We are dedicated to providing high-quality, transparent, and effective products that enhance natural beauty while promoting sustainable practices. Our goal is to educate and inspire our community to make informed skincare choices, embracing self-care 
            as a journey towards confidence and well-being.</p>
        </article>
      </div>
           <Footer/>
        </div>
    );
}