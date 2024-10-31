import React from 'react';
import './Content2.css';

const Content2 = () => {
  return (
    <section className="content2">
      <div className="content-wrapper">
        <h1>Advocating Sustainability</h1>
        <div className="icons-container">
          <div className="icon-item">
            <img src={require('../assets/environmental.png')} alt="Environmental Sustainability" />
            <p>Environmental Sustainability</p>
          </div>
          <div className="icon-item">
            <img src={require('../assets/economics.png')} alt="Economic Benefits" />
            <p>Economic Benefits</p>
          </div>
          <div className="icon-item">
            <img src={require('../assets/energy.png')} alt="Energy Security" />
            <p>ENERGY SECURITY</p>
          </div>
        </div>
        <div className="buttons-container">
          <button>OUR SERVICES</button>
          <button>CONTACT US</button>
        </div>
      </div>

      {/* Company Information on the Right Side */}
      <div className="company-info">
        <p>GREENERGY Development Corp. has been active in the promotion and development of renewable energy power generation in Mindanao since 2008. It spearheaded the pre-development of the 300MW Pulangi 5 Hydro Power in Bukidnon.</p>
        <p>In 2010, GREENERGY was the first private company in the region to offer solar rooftop systems with the launch of GREENERGY Solar in partnership with Sharp Solar of Japan.</p>
        <p>Manned by competent technical professionals and managers, the company believes that energy supply security should be met using indigenous, clean, and renewable sources. GREENERGY is driven to serve customers with the highest operating efficiency at least cost and personalized energy management system including regular technical audit.</p>
      </div>
    </section>
  );
};

export default Content2;
