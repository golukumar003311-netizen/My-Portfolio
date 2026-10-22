import { BarChart3, Crosshair, MessageCircle, MousePointerClick, Search, TrendingUp } from 'lucide-react';

const skills = [
  { icon: Crosshair, name: 'Meta Ads', note: 'Facebook & Instagram advertising' },
  { icon: TrendingUp, name: 'Performance Marketing', note: 'Data-led campaign improvement' },
  { icon: Search, name: 'Audience Research', note: 'Research & precise targeting' },
  { icon: MousePointerClick, name: 'Lead Generation', note: 'Quality leads & conversion paths' },
  { icon: BarChart3, name: 'Campaign Optimisation', note: 'Budget planning & analysis' },
  { icon: MessageCircle, name: 'Digital Strategy', note: 'Social & WhatsApp marketing' },
];

function Skills() {
  return <section className="expertise-section" id="expertise"><div className="section-wrap expertise-inner">
    <div className="section-label"><span>04</span> SKILLS & EXPERTISE</div>
    <div className="section-heading-row"><h2>Focused on what<br/><span>moves business.</span></h2><p>Core capabilities across advertising, acquisition<br/>and campaign performance.</p></div>
    <div className="skill-grid">{skills.map(({icon:Icon,name,note},index)=><article className="skill-card" key={name}><span className="skill-index">0{index+1}</span><Icon size={22}/><h3>{name}</h3><p>{note}</p></article>)}</div>
  </div></section>;
}

export default Skills;
