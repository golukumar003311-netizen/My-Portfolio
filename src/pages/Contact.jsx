import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/profile.js';

function Contact() {
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!profile.email) {
      setStatus('Add your business email in src/data/profile.js to enable message delivery.');
      return;
    }
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setIsSending(true);
    setStatus('');
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(profile.email)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, _subject: `Portfolio enquiry from ${data.name}`, _replyto: data.email, _template: 'table' }),
      });
      const result = await response.json();
      if (!response.ok || result.success === false || result.success === 'false') {
        throw new Error(result.message || 'The message could not be sent. Please try again.');
      }
      setStatus('Thanks! Your message has been received. I will be in touch soon.');
      form.reset();
    } catch (error) {
      setStatus(error.message || 'Something went wrong. Please try again in a moment.');
    } finally {
      setIsSending(false);
    }
  };

  return <section className="contact-section" id="contact"><div className="section-wrap contact-inner">
    <div className="section-label light-label"><span>07</span> CONTACT</div>
    <div className="contact-layout"><div className="contact-copy"><p className="contact-kicker">HAVE A BUSINESS GOAL IN MIND?</p><h2>Let's build<br/>your next <span>step.</span></h2><p>Share what you're working toward. We can start with a conversation about your audience, goals and growth plans.</p><div className="contact-prompt"><ArrowRight size={17}/> Thoughtful strategy starts with a clear brief.</div></div>
      <div className="contact-form-wrap"><form className="contact-form" onSubmit={handleSubmit}><label className="honeypot" aria-hidden="true">Leave this field empty<input name="_honey" tabIndex={-1} autoComplete="off"/></label><div className="form-row"><label>Your name<input name="name" required placeholder="Name" autoComplete="name"/></label><label>Your email<input name="email" type="email" required placeholder="you@example.com" autoComplete="email"/></label></div><label>What would you like to work on?<textarea name="message" rows="4" required placeholder="Tell me a little about your goals..."></textarea></label><button className="button button-light" type="submit" disabled={isSending}>{isSending ? 'Sending...' : 'Send an enquiry'} {!isSending&&<ArrowUpRight size={16}/>}</button>{status&&<p className="form-status" role="status">{status}</p>}</form></div></div>
    <div className="contact-details-row"><div><Mail size={16}/><span>EMAIL</span><a href={profile.email?`mailto:${profile.email}`:undefined}>{profile.email||'Add your business email'}</a></div><div><Phone size={16}/><span>PHONE</span><a href={profile.phone?`tel:${profile.phone}`:undefined}>{profile.phone||'Add your business phone'}</a></div><div><MapPin size={16}/><span>LOCATION</span><p>Available for business enquiries</p></div><div className="social-contact"><span>CONNECT</span>{profile.linkedin&&<a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13}/></a>}{profile.whatsapp&&<a href={profile.whatsapp} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={13}/></a>}{profile.instagram&&<a href={profile.instagram} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13}/></a>}</div></div>
  </div></section>;
}

export default Contact;
