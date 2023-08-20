import { useState } from 'react';
import { useEffect } from 'react';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';

const content = [
  {
    title: 'A Giant Leap Forward in Healthcare Innovation',
    preview:
      'In a monumental stride towards advancing healthcare, Azure Coast Medical Center announces an unprecedented medical breakthrough that is set to change the landscape of medicine.',
    image: img1,
    link: 'https://www.svph.org.au/',
  },
  {
    title:
      'Azure Coast Medical Center Introduces Innovative Integrated Care Approach',
    preview:
      'Embracing the power of holistic medicine, cutting-edge technology, and compassionate expertise, our new model of care aims to redefine how healthcare is delivered.',
    image: img2,
    link: 'https://colorhunt.co/palette/78c1f39be8d8e2f6caf8fdcf',
  },
  {
    title: 'An Outreach Initiative to Enhance Local Healthcare Access',
    preview:
      'As part of our commitment to serving and empowering our local neighborhood, we are excited to announce the launch of our comprehensive outreach initiative. .',
    image: img3,
    link: 'https://developer.mozilla.org/en-US/docs/Glossary/IIFE',
  },
];

export default function Slides() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevActiveTab) => (prevActiveTab + 1) % content.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section responsive">
      <div className="slides">
        <TextSlide>
          <TextContent content={content[activeTab]} />
          <a
            className="link-details"
            ß
            href={content[activeTab].link}
            target="_blank"
            rel="noreferrer"
          >
            Details
          </a>
        </TextSlide>
        <Tabs>
          {content.map((_, index) => (
            <Tab
              key={index}
              num={index}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </Tabs>
        <ImageContent content={content[activeTab]} />
      </div>
    </div>
  );
}

function TextSlide({ children }) {
  return <div className="text-container">{children}</div>;
}

function TextContent({ content }) {
  return (
    <div className="textContent">
      <h1>{content.title}</h1>
      <p>{content.preview}</p>
    </div>
  );
}

function ImageContent({ content }) {
  return (
    <div className="image-container">
      <img src={content.image} alt={content.title} />
    </div>
  );
}

function Tabs({ children }) {
  return <div className="tabs">{children}</div>;
}

function Tab({ num, activeTab, setActiveTab }) {
  return (
    <div
      className={activeTab === num ? 'tab active' : 'tab'}
      onClick={() => setActiveTab(num)}
    ></div>
  );
}
