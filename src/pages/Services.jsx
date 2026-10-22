import { ArrowUpRight, BarChart3, Megaphone, MessageSquareText, MousePointerClick, Target } from 'lucide-react';

const services = [
  { icon: Target, name: 'Meta Ads Management', detail: 'Campaign planning, setup, management and ongoing optimisation.' },
  { icon: Megaphone, name: 'Facebook & Instagram Ads', detail: 'Paid social campaigns shaped around your audience and objective.' },
  { icon: MousePointerClick, name: 'Lead Generation', detail: 'Campaigns designed to help attract and capture relevant enquiries.' },
  { icon: BarChart3, name: 'Sales Campaigns', detail: 'Conversion-focused campaign planning for products and services.' },
  { icon: MessageSquareText, name: 'Performance Marketing', detail: 'Measurement, analysis and continuous improvement across campaigns.' },
];

function Services() {
  return <section className="services-section" id="services"><div className="section-wrap services-inner">
    <div className="section-label light-label"><span>05</span> SERVICES</div>
    <div className="services-heading"><h2>Clear strategy.<br/><span>Considered action.</span></h2><p>Flexible marketing support to meet your business where it is and help it move forward.</p></div>
    <div className="service-grid">{services.map(({icon:Icon,name,detail},index)=><article className="service-card" key={name}><span className="service-number">0{index+1}</span><Icon size={22}/><h3>{name}</h3><p>{detail}</p><a href="#contact" aria-label={`Enquire about ${name}`}><ArrowUpRight size={17}/></a></article>)}</div>
    <div className="services-bottom"><span><span className="status-dot"/> AVAILABLE FOR CLIENT PROJECTS</span><a href="#contact">Tell me what you're working on <ArrowUpRight size={14}/></a></div>
  </div></section>;
}

export default Services;
