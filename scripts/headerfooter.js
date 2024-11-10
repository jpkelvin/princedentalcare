class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
        <link rel="stylesheet" href="header.css">

     <!-- Importing CSS files starts -->     
    <link rel="stylesheet" href="css/bootstrap-icons.css">
    <link rel="stylesheet" href="css/header.css">
    <!-- Importing CSS files ends-->
        
        <header class="header">
        <!-- Nav head section starts -->
        <div class="nav-head">
            <nav class="navbar">
                <p class="nav-head-p"><i class="bi bi-clock icons"></i>Mon to Sun : 10:00am to 8:30pm</p>
                <button class="nav-head-btn"><a href="{{ url_for('bookappointment') }}" class="nav-head-a">Book
                        Appointment</a></button>
                <div>
                    <a href="mailto:dr.mjeselene@gmail.com" class="social-icons"><i class="bi bi-envelope-at"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=919731209120U+0026amp;text=Hello" target="_blank"
                        class="social-icons"><i class="bi bi-whatsapp whatsapp-icon"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=919731209120U+0026amp;text=Hello" target="_blank"
                        class="social-icons"><i class="bi bi-instagram instagram-icon"></i></a>
                </div>
                <button class="nav-head-btn"><a href="tel:+91-9742344452" class="nav-head-a"><i
                            class="bi bi-telephone-fill"></i>+91 9731209120 (Dr. Monica Jeselene BDS)</a></button>
            </nav>
        </div>
        <!-- Nav head section ends -->

        <!-- Navbar menu starts -->
        <nav class="navbar">
            <a href="#" class="nav-logo">
                <img src="images/princedentalcare_title.png" alt="Prince Dental Care" width="100%">
            </a>
            <ul class="nav-menu">
                <li class="nav-item"><a class="nav-link" href="index.html"><i
                            class="bi bi-house-door"></i>Home</a></li>
                <li class="nav-item"><a class="nav-link" href="{{ url_for('about') }}">About Us</a></li>
                <li class="nav-item"><a class="nav-link" href="{{ url_for('services') }}">Specialities</a></li>
                <li class="nav-item"><a class="nav-link" href="{{ url_for('clinics') }}">Our Clinics</a></li>
                <li class="nav-item"><a class="nav-link" href="{{ url_for('contact') }}">Contact Us</a></li>
                <li class="nav-item"><a class="nav-link" href="{{ url_for('blogs') }}">Blogs</a></li>
            </ul>

            <!-- Mobile Menu Button Icon starts - Hamburger -->
            <div class="mobile-menu-icon">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <!-- Mobile Menu Button Icon ends - Hamburger -->
        </nav>
        <!-- Navbar menu ends -->
    </header>
`
  }
}


class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
        <link rel="stylesheet" href="css/footer.css">

    <!-- ======================================== 
          Links Section Start  
    ========================================  -->
    <section class="social-media-section">
      <div class="social-media-content">
        <div class="social-media-text">
          <p>Stay Connected with <span class="span">Prince</span> Dental Care</p>
        </div>
        <div class="social-media-links">
          <li class="social-links"><i class="bi bi-whatsapp whatsapp-icon"></i></li>
          <li class="social-links"><i class="bi bi-instagram instagram-icon"></i></li>
          <li class="social-links"><i class="bi bi-facebook facebook-icon"></i></li>
          <li class="social-links"><i class="bi bi-linkedin linkedin-icon"></i></li>
          <li class="social-links"><i class="bi bi-youtube youtube-icon"></i></li>
          </i>
        </div>
      </div>
    </section>

    <!-- ======================================== 
            Links Section Start  
      ========================================  -->

<footer class="footer">
  <div class="footer-row">
    <div class="footer-col">
      <a href="./index.html" class="footer-logo"><span class="span">Prince</span> Dental Care</a>
      <!-- <h4>Prince Dental Care</h4> -->
      <p class="footer-text">At Prince Dental Care, we deliver exceptional dental care with a focus on comfort and
        satisfaction.
        From routine check-ups to advanced treatments, our experienced team uses the latest technology to ensure
        top-quality care.
        Enjoy a healthier, brighter smile with our personalized, compassionate approach.</p>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul class="links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Treatments</a></li>
        <li><a href="#">Book Appointment</a></li>
        <li><a href="#">Testimonials</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Treatments</h4>
      <ul class="links">
        <li><a href="#">Braces</a></li>
        <li><a href="#">Root Canal</a></li>
        <li><a href="#">Scaling</a></li>
        <li><a href="#">Dental Implants</a></li>
        <li><a href="#">Complete Dental Checkup</a></li>
        <li><a href="#">Root Canal</a></li>
        <li><a href="#">Scaling</a></li>
        <li><a href="#">Dental Implants</a></li>
        <li><a href="#">Complete Dental Checkup</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <a class="footer-logo">Contact</a>
      <p class="footer-text">Prince Dental Care
        <br><i class="bi bi-geo-alt-fill"></i> 1st Floor, Rama Reddy Building,
        <br>Sarjapur circle, Next to Canara Bank
        <br>Bengaluru - 562125
      </p>
      <div class="contact-details">
        <li class="contact-links"><a href="mailto:dr.mjeselene@gmail.com"><i class="bi bi-envelope-at"></i>dr.mjeselene@gmail.com</a></li>
        <li class="contact-links"><a href="tel:+91-9742344452"><i class="bi bi-telephone-fill"></i>+91 9731209120</a></li>
      </div>
      <div class="timings">
        <h4>Our Timings</h4>
        <li class="contact-links">Mon-Sat: 10:00am to 8:30pm</li>
        <li class="contact-links">Sun: 11:00am to 8:30pm</li>
      </div>
      <div class="icons">
        <i class="bi bi-whatsapp whatsapp-icon"></i>
        <i class="bi bi-instagram instagram-icon"></i>
        <i class="bi bi-youtube youtube-icon"></i>
      </div>
    </div>
  </div>
</footer>
<div class="footer-bottom">
  <div class="footer-container">
    <p class="copyright">
      &copy; 2024 <a href="#" class="copyright-link">princedentalcare</a>. All Rights Reserved.
    </p>
    <ul class="footer-bottom-list">
      <li><a href="#" class="footer-bottom-link">Term & Conditions</a></li>
      <li><a href="#" class="footer-bottom-link">Privacy Policy</a></li>
    </ul>
  </div>
</div>
`
  }
}

class MyChat extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
        <link rel="stylesheet" href="css/base.css">
        <button class="chatBtn"><i class="bi bi-whatsapp whatsapp-icon"></i></button>
        <button onclick="topFunction()" id="topBtn"><i class="bi bi-arrow-up-circle-fill topBtn"></i></button>
      `
  }
}


customElements.define('my-header', MyHeader)
customElements.define('my-footer', MyFooter)
customElements.define('my-chat', MyChat)
