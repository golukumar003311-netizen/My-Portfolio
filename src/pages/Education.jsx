import { BookOpen, GraduationCap } from 'lucide-react';

const qualifications = ['Class 10th', 'Class 12th', 'Graduation', 'ITI'];

function Education() {
  return <section className="education-section" id="education"><div className="section-wrap education-inner">
    <div className="section-label"><span>02</span> EDUCATION & QUALIFICATIONS</div>
    <div className="section-heading-row"><h2>A foundation<br/><span>for what's next.</span></h2><p>Qualifications completed. Always learning.<br/>Details can be added whenever you are ready.</p></div>
    <div className="qualification-grid">{qualifications.map((item,index)=><article className="qualification-card" key={item}><span className="qualification-index">0{index+1}</span><span className="qualification-icon">{index===3?<BookOpen size={19}/>:<GraduationCap size={20}/>}</span><h3>{item}</h3><p>Completed</p></article>)}</div>
  </div></section>;
}

export default Education;
