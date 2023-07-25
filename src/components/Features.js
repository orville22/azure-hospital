import { useState } from 'react';
import healthcare from '../images/healthcare.png';

export default function Features() {
  return (
    <div className="container features">
      <h2>
        At Azure Coast Medical Center, we take pride in our track record of
        delivering outstanding healthcare services and making a positive impact
        on the lives of our patients.
      </h2>
      <div className="stats-container">
        <Stats />
      </div>
      <div className="mission-vision">
        <div className="text-container">
          <h2>Our Mission</h2>
          <p>
            At Azure Coast Medical Center, our mission is to provide
            compassionate and exceptional healthcare services to every
            individual in our community. We are committed to delivering
            patient-centered care that nurtures physical, emotional, and
            spiritual well-being. With a team of dedicated professionals,
            advanced technology, and a focus on continuous improvement, we
            strive to be a beacon of healing, offering hope and support to all
            who entrust us with their health.
          </p>
          <h2>Our Vision</h2>
          <p>
            Our vision at Azure Coast Medical Center is to be the leading
            healthcare institution, renowned for its unwavering commitment to
            excellence in patient care, clinical innovation, and community
            well-being. We envision a future where every person receives
            personalized, comprehensive, and accessible healthcare that empowers
            them to lead healthier and fulfilling lives. Through our dedication
            to research, education, and outreach, we aspire to inspire positive
            change in the field of medicine and foster healthier, happier
            communities.
          </p>
        </div>
        <div className="image-container">
          <img src={healthcare} alt="mission-vision" />
        </div>
      </div>
    </div>
  );
}

const content = [
  {
    title: 'Successful Treatments and Procedures',
    figure: '1200+',
    details:
      'Our skilled surgeons and state-of-the-art facilities have enabled us to achieve excellent outcomes and improve the health and well-being of countless individuals.',
  },
  {
    title: 'Patient Satisfaction Rate',
    figure: '98%',
    details:
      'High level of satisfaction and positive feedback received from our patients regarding their overall healthcare experience.',
  },
  {
    title: 'Emergency Response Time',
    figure: '10 mins',
    details:
      'Our emergency department boasts an impressive average response time of 10 minutes, ensuring that critical patients receive immediate care and attention in life-threatening situations.',
  },
  {
    title: 'Individuals Reached By Our Community Programs',
    figure: '5,000+',
    details:
      'This figure demonstrates our dedication to promoting health awareness and supporting the well-being of our local communities.',
  },
];

function Stats() {
  const [active, setActive] = useState(null);

  function onHoverIn(index) {
    setActive(index);
  }

  return content.map((stat, index) => (
    <div
      className="stat"
      onMouseEnter={() => onHoverIn(index)}
      onMouseLeave={() => setActive(null)}
    >
      {active === index ? (
        <p className="stat-details">{stat.details}</p>
      ) : (
        <>
          <h1 className="figure">{stat.figure}</h1>
          <h3>{stat.title}</h3>
        </>
      )}
    </div>
  ));
}
