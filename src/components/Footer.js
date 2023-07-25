export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-head">
        <h2>Azure Coast Medical Center</h2>
        <p>123 Name Avenue, Melbourne VIC 3000</p>
        <p>03 98765432</p>
      </div>
      <div className="wrapper">
        <div className="footer-social-media">
          <a href="fb">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="twitter">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a href="instagram">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="youtube">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </div>
        <div className="footer-nav">
          <a href="1">Home</a>|<a href="2">Careers</a>|<a href="3">About</a>|
          <a href="4">Services</a>
        </div>
        <div className="footer-essentials">
          <p>Copyright 2023</p>
          <a href="5">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
