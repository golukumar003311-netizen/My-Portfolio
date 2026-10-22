import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/profile.js';

function Contact() {
  const [status, setStatus] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!profile.email) {
      setStatus('Add your business email in src/data/profile.js to enable message delivery.');
      return;
    }
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`);
    const body = encodeURIComponent(`Name: ${data.get('name')}\nReply email: ${data.get('replyEmail')}\n\n${data.get('message')}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus('Your email app is opening with the message ready to send.');
  };

  return <section className="contact-section" id="contact"><div className="section-wrap contact-inner">
    <div className="section-label light-label"><span>07</span> CONTACT</div>
    <div className="contact-layout"><div className="contact-copy"><p className="contact-kicker">HAVE A BUSINESS GOAL IN MIND?</p><h2>Let's build<br/>your next <span>step.</span></h2><p>Share what you're working toward. We can start with a conversation about your audience, goals and growth plans.</p><div className="contact-prompt"><ArrowRight size={17}/> Thoughtful strategy starts with a clear brief.</div></div>
      <div className="contact-form-wrap"><form className="contact-form" onSubmit={handleSubmit}><div className="form-row"><label>Your name<input name="name" required placeholder="Name" autoComplete="name"/></label><label>Your email<input name="replyEmail" type="email" required placeholder="you@example.com" autoComplete="email"/></label></div><label>What would you like to work on?<textarea name="message" rows="4" required placeholder="Tell me a little about your goals..."></textarea></label><button className="button button-light" type="submit">Send an enquiry <ArrowUpRight size={16}/></button>{status&&<p className="form-status" role="status">{status}</p>}</form></div></div>
    <div className="contact-details-row"><div><Mail size={16}/><span>EMAIL</span><a href={profile.email?`mailto:${profile.email}`:undefined}>{profile.email||'Add your business email'}</a></div><div><Phone size={16}/><span>PHONE</span><a href={profile.phone?`tel:${profile.phone}`:undefined}>{profile.phone||'Add your business phone'}</a></div><div><MapPin size={16}/><span>LOCATION</span><p>Available for business enquiries</p></div><div className="social-contact"><span>SOCIAL</span>{profile.linkedin?<a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13}/></a>:<p>Add LinkedIn or social profile in src/data/profile.js</p>}{profile.instagram&&<a href={profile.instagram} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13}/></a>}</div></div>
  </div></section>;
}

export default Contact;
