import React from 'react';
import '../Styles/about.css'; 

const AboutPage = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Shopsphere</h1>
        <p>Your trusted partner in online shopping.</p>
      </header>

      <section className="brand-story">
        <h2>Our Story</h2>
        <p>Welcome to <strong>Shopsphere</strong>! We started our journey in <b>2024</b> with a vision to bring quality products at affordable prices. Our passion for <strong>Tech Product</strong> drives us to curate the best items for our customers.</p>
      </section>

      <section className="what-we-offer">
        <h2>What We Offer</h2>
        <p>At <strong>Shopsphere</strong>, we offer a wide range of products, including:</p>
        <ul>
          <li>High-quality <strong>-: Tech Product </strong></li>
          <li>Trendy <strong>-: Gadgets</strong></li>
          <li>Exclusive <strong>-: Offers</strong></li>
        </ul>
        <p>Our commitment to quality and customer satisfaction sets us apart in the eCommerce world.</p>
      </section>

      <section className="team-introduction">
        <h2>Meet Our Team</h2>
        <p>Our dedicated team is passionate about serving you. From product selection to customer service, we are here to ensure your shopping experience is exceptional.</p>
      </section>

      <section className="customer-commitment">
        <h2>Our Commitment to You</h2>
        <p>Your satisfaction is our top priority. We strive to provide excellent customer service and support to assist you with any inquiries.</p>
      </section>

      <footer className="call-to-action">
        <h2>Explore Our Products</h2>
        <p>Ready to find what you’re looking for? <a href="/">Shop Now!</a></p>
      </footer>
    </div>
  );
};

export default AboutPage;
