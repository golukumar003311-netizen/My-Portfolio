import { ArrowUpRight, Check } from 'lucide-react';

const responsibilities = ['Meta Ads campaign management', 'Audience research and targeting', 'Lead generation, sales and conversion campaigns', 'Campaign setup, optimisation and budget planning', 'Creative strategy and advertising analysis', 'Social media, WhatsApp marketing and lead conversion', 'Digital strategy for small businesses and e-commerce brands'];

function Experience() {
  return <section className="section-wrap experience-section" id="experience">
    <div className="section-label"><span>03</span> PROFESSIONAL EXPERIENCE</div>
    <div className="experience-panel"><div className="experience-summary"><span className="experience-pill"><span className="status-dot"/> FREELANCE</span><p className="experience-years">~5–6</p><p className="experience-years-label">years of experience</p><h2>Digital Marketing<br/> & Performance Marketing</h2><p className="experience-intro">Independent professional supporting business growth through digital advertising and campaign optimisation.</p><a href="#contact" className="inline-link">Work with me <ArrowUpRight size={15}/></a></div>
      <div className="experience-work"><h3>Areas of work</h3><ul>{responsibilities.map(item=><li key={item}><Check size={15}/>{item}</li>)}</ul></div></div>
  </section>;
}

export default Experience;
