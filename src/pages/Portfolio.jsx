import { ArrowUpRight, ImagePlus, PanelsTopLeft } from 'lucide-react';

const slots = [1, 2, 3];

function Portfolio() {
  return <section className="section-wrap portfolio-section" id="work">
    <div className="section-label"><span>06</span> PORTFOLIO & CASE STUDIES</div>
    <div className="portfolio-heading"><div><p className="section-kicker">REAL WORK. REAL CONTEXT.</p><h2>Campaign stories,<br/><span>coming soon.</span></h2></div><p>Project spaces are ready for verified case studies, campaign screenshots and results when you choose to add them.</p></div>
    <div className="portfolio-grid">{slots.map((slot)=><article className="portfolio-card" key={slot}><div className="portfolio-placeholder"><ImagePlus size={27}/><span>ADD PROJECT VISUAL</span><small>Campaign screenshot or creative</small></div><div className="portfolio-card-info"><div><span className="portfolio-status"><PanelsTopLeft size={13}/> CASE STUDY SLOT 0{slot}</span><h3>Project title goes here</h3><p>Add the campaign context and verified outcome.</p></div><a href="#contact" aria-label="Ask about case studies"><ArrowUpRight size={18}/></a></div></article>)}</div>
  </section>;
}

export default Portfolio;
