import { ArrowUpRight, Compass, LineChart, UsersRound } from 'lucide-react';

function About() {
  return <section className="section-wrap about-section" id="about">
    <div className="section-label"><span>01</span> ABOUT ME</div>
    <div className="about-grid"><div><p className="section-kicker">A PRACTICAL PARTNER FOR YOUR NEXT STAGE OF GROWTH</p><h2>Good marketing starts with <span>understanding.</span></h2></div><div className="about-copy"><p>I'm Golu Kumar, a Digital Marketing and Performance Marketing professional with approximately 5–6 years of experience in digital advertising, Meta Ads, campaign management, audience targeting, lead generation and customer acquisition.</p><p>I help businesses strengthen their online presence, connect with the right audience and grow sales through result-oriented campaigns, thoughtful budget optimisation and continuous performance analysis.</p><p>My approach is simple: understand the business objective, build a clear strategy, measure what matters and keep improving. My goal is to build long-term client relationships and support sustainable business growth.</p><a className="inline-link" href="#contact">Let's talk about your goals <ArrowUpRight size={15}/></a></div></div>
    <div className="approach-grid"><article><span><Compass size={19}/></span><h3>Understand</h3><p>Start with your business objectives and audience.</p></article><article><span><LineChart size={19}/></span><h3>Optimise</h3><p>Use campaign data to make informed decisions.</p></article><article><span><UsersRound size={19}/></span><h3>Grow together</h3><p>Build a considered path toward sustainable growth.</p></article></div>
  </section>;
}

export default About;
