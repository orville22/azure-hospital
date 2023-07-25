import Navigation from './components/Navigation';
import Slides from './components/Slides';
import Card from './components/Card';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <Slides />
      <Section>
        <div className="cards">
          <Card>
            <ion-icon name="heart-outline"></ion-icon>
            <h2>Advanced Diagnostics</h2>
            <p>
              Through our advanced diagnostic services, we have facilitated the
              early detection and accurate diagnosis.
            </p>
          </Card>
          <Card>
            <ion-icon name="medkit-outline"></ion-icon>
            <h2>Comprehensive Specialties</h2>
            <p>
              With an extensive range of specialties, we have catered to diverse
              healthcare needs.
            </p>
          </Card>
          <Card>
            <ion-icon name="pulse-outline"></ion-icon>
            <h2>Community Outreach Programs</h2>
            <p>
              We believe in giving back to the community and promoting
              healthcare awareness.
            </p>
          </Card>
          <Card>
            <ion-icon name="thermometer-outline"></ion-icon>
            <h2>Health Education and Support</h2>
            <p>
              We are dedicated to empowering our patients through comprehensive
              health education resources.
            </p>
          </Card>
        </div>
      </Section>
      <Section>
        <Features />
      </Section>
      <Footer />
    </div>
  );
}

function Section({ children }) {
  return <section className="section">{children}</section>;
}

export default App;
