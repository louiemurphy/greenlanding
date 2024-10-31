import React from 'react';
import './MainContent.css';
import SolarLogo from '../assets/solar.png';
import Mobility from '../assets/mobility1.png';
import Greentech from '../assets/greentech.png';
import Builders from '../assets/builders.png';
import Agritech from '../assets/agritech.png';
import Industrial from '../assets/industrial.png';
import Solar2 from '../assets/solarbackground.jpg';
import Mob2 from '../assets/mob-background.jpeg';
import Solutions2 from '../assets/solutions.png';
import Builders2 from '../assets/builders2.jpg';
import Tech from '../assets/agri.jpg';
import Service from '../assets/service.jpg';

const MainContent = () => {
  return (
    <section className="main-content">
      <div className="brand-grid">
        {/* Solar Energy */}
        <div
          className="brand-item"
          style={{
            backgroundImage: `linear-gradient(rgba(3, 111, 12, 0.5), rgba(3, 111, 12, 0.5)), url(${Solar2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img src={SolarLogo} alt="Solar Logo" className="overlay-logo" />
          <div className="brand-details">
            <h3>Solar <br></br>Energy</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>

        {/* Green Energy Mobility */}
        <div
          className="brand-item"
          style={{
            backgroundImage: `linear-gradient(rgba(3, 111, 12, 0.5), rgba(3, 111, 12, 0.5)), url(${Mob2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img src={Mobility} alt="Green Energy Mobility" className="large-logo" />
          <div className="brand-details">
            <h3>Green Energy Mobility</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s louie phillip divinagracia
            </p>
          </div>
        </div>

        {/* Green Tech Solutions */}
        <div
          className="brand-item"
          style={{
            backgroundImage: `linear-gradient(rgba(3, 111, 12, 0.5), rgba(3, 111, 12, 0.5)), url(${Solutions2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img src={Greentech} alt="Green Tech Solutions" className="large-logo" />
          <div className="brand-details">
            <h3>Green Tech Solutions</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s louie phillip divinagracia 
            </p>
          </div>
        </div>

        {/* Green Energy Builders */}
        <div
          className="brand-item"
          style={{
            backgroundImage: `linear-gradient(rgba(3, 111, 12, 0.5), rgba(3, 111, 12, 0.5)), url(${Builders2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img src={Builders} alt="Green Energy Builders" className="large-logo" />
          <div className="brand-details">
            <h3>Green Energy Builders</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s louie phillip divinagracia
            </p>
          </div>
        </div>

        {/* Green Energy Agritech */}
        <div
          className="brand-item"
          style={{
            backgroundImage: `linear-gradient(rgba(3, 111, 12, 0.5), rgba(3, 111, 12, 0.5)), url(${Tech})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img src={Agritech} alt="Green Energy Agritech" className="large-logo" />
          <div className="brand-details">
            <h3>Green Energy Agritech</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>

        {/* Greenergy Industrial Services */}
        <div
          className="brand-item"
          style={{
            backgroundImage: `linear-gradient(rgba(3, 111, 12, 0.5), rgba(3, 111, 12, 0.5)), url(${Service})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img src={Industrial} alt="Greenergy Industrial Services" className="large-logo" />
          <div className="brand-details">
            <h3>Greenergy Industrial Services</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
