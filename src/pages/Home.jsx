import { ArrowDown, ArrowUpRight } from 'lucide-react';

function Home() {
  return <section className="hero section-wrap" id="home">
    <div className="hero-copy">
      <div className="eyebrow"><span className="status-dot" /> DIGITAL MARKETING · PERFORMANCE MARKETING</div>
      <h1>Turn your<br />marketing into<br /><span>momentum.</span></h1>
      <p className="hero-description">I'm Golu Kumar, a Digital Marketing Specialist and Meta Ads expert. I help businesses reach the right people, generate quality leads and grow with data-driven advertising.</p>
      <div className="hero-actions"><a className="button button-primary" href="#contact">Discuss your goals <ArrowUpRight size={17} /></a><a className="text-link" href="#about">Get to know me <ArrowDown size={15} /></a></div>
      <div className="hero-footnote"><span className="footnote-rule" /> Meta Ads <span>·</span> Lead generation <span>·</span> Growth strategy</div>
    </div>
    <div className="hero-visual"><img src="/meta-ads-mistakes.png" alt="3 Meta Ads mistakes beginners make" fetchPriority="high" /></div>
    <a className="scroll-cue" href="#about"><span className="scroll-line"/> SCROLL TO EXPLORE</a>
  </section>;
}

export default Home;
