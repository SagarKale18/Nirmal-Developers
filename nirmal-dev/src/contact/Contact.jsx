import { useRef, useState, useEffect } from 'react'

/* ── Scroll reveal ──────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.08 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

function Reveal({ children, delay = 0, className = '' }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default function Contact() {

  const [form, setForm]       = useState({ name: '', email: '', phone: '', company: '', budget: '', message: '' })
  const [errors, setErrors]   = useState({})
  const [chips, setChips]     = useState([])
  const [sending, setSending] = useState(false)
  const [sent, setSent]       = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const services = [
    'Residential Construction',
    'Commercial Build',
    'Building Materials',
    'Interior Fit-out',
    'Renovation & Restoration',
    'Free Consultation',
  ]

  const toggleChip = (c) =>
    setChips(p => p.includes(c) ? p.filter(x => x !== c) : [...p, c])

  const set = (k, v) => {
    setForm(p => ({ ...p, [k]: v }))
    if (errors[k]) setErrors(p => ({ ...p, [k]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email address'
    if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Valid 10-digit number required'
    if (!form.message.trim()) e.message = 'Please describe your project'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setSending(true)
    setTimeout(() => { setSending(false); setSent(true) }, 1800)
  }

  /* ── Real owner contact info ── */
  const infoCards = [
    { icon: '📍', label: 'Visit Our Office', value: 'Phaltan, Maharashtra 415523',  },
    { icon: '📞', label: 'Call Us Directly', value: '+91 83290 81557',            sub: 'Mon – Sat, 9 AM to 6 PM'  },
    { icon: '✉️', label: 'Email Us',         value: 'nirmaldeveloper@gmail.com',  sub: 'Response within 24 hours' },
  ]

  const hours = [
    { day: 'Monday – Friday', time: '9:00 AM – 6:30 PM', open: true  },
    { day: 'Saturday',        time: '9:00 AM – 4:00 PM', open: true  },
    { day: 'Sunday',          time: 'Closed',             open: false },
  ]

  const faqs = [
    { q: 'How long does a typical project take?',        a: 'Residential projects usually take 12–18 months. Commercial builds vary from 6–24 months depending on scale.' },
    { q: 'Do you supply building materials separately?', a: 'Yes — our materials division serves both our own projects and independent builders across the region.' },
    { q: 'Is there a free consultation?',                a: 'Absolutely. We offer a no-obligation consultation for all new enquiries. Just fill the form or call us.' },
  ]

  return (
    <div className="bg-bg font-body overflow-x-hidden">

      {/* ══ NAVBAR ══════════════════════════════════════════════════ */}
      {/* <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-gold rounded flex items-center justify-center text-dark font-bold text-sm font-display">N</div>
            <div>
              <span className="text-white font-semibold text-sm tracking-wider block leading-none">NIRMAL</span>
              <span className="text-gold text-[9px] tracking-[2px] uppercase">Developers</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {[['/', 'Home'], ['/about', 'About'], ['/contact', 'Contact']].map(([path, label]) => (
              <Link key={path} to={path} className="text-white/60 text-sm hover:text-gold transition-colors duration-200">
                {label}
              </Link>
            ))}
            <Link to="/contact" className="bg-gold text-dark text-xs font-semibold tracking-[1.5px] uppercase px-5 py-2.5 rounded hover:bg-goldlt transition-colors duration-200">
              Enquire Now
            </Link>
          </div>
          <div className="md:hidden text-white text-2xl cursor-pointer">☰</div>
        </div>
      </nav> */}

      {/* ══ HERO ════════════════════════════════════════════════════ */}
      <section className="relative bg-dark pt-36 pb-28 text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=700&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/80 to-dark" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gold/8 blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <Reveal className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 border border-gold/40 bg-gold/10 text-gold text-[11px] font-semibold tracking-[2.5px] uppercase px-4 py-2 rounded-sm mb-8">
            <span className="w-4 h-px bg-gold" /> Get In Touch
          </div>
          <h1 className="font-display text-5xl lg:text-[68px] font-bold text-white leading-[1.06] mb-6">
            Let's Build<br /><span className="text-gold">Together</span>
          </h1>
          <p className="text-white/50 text-base leading-relaxed max-w-md mx-auto">
            Have a project in mind? Need quality materials? Our experts are ready to guide you from first idea to final finish.
          </p>
        </Reveal>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>

      {/* ══ INFO CARDS ══════════════════════════════════════════════ */}
      <div className="bg-dark border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {infoCards.map((c, i) => (
            <Reveal key={c.label} delay={i * 100} className="flex items-center gap-4 px-8 py-7 hover:bg-white/3 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                {c.icon}
              </div>
              <div>
                <p className="text-gold text-[10px] font-semibold tracking-[2px] uppercase mb-1">{c.label}</p>
                <p className="text-white text-sm font-medium">{c.value}</p>
                <p className="text-white/35 text-xs mt-0.5">{c.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ══ MAIN ════════════════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT */}
        <Reveal>
          <div className="inline-flex items-center gap-2 text-gold text-[11px] font-semibold tracking-[2.5px] uppercase mb-5">
            <span className="w-5 h-px bg-gold" /> Why Reach Out
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark leading-tight mb-5">
            We'd Love to Hear<br />About Your <span className="text-teal">Vision</span>
          </h2>
          <p className="text-muted text-[15px] leading-relaxed mb-10">
            Whether you're planning a luxury home, a commercial complex, or sourcing premium construction materials — our team brings expertise, honesty, and care to every conversation.
          </p>

          {/* Office hours */}
          <div className="bg-white border border-border rounded-xl p-7 mb-7 shadow-sm">
            <p className="text-gold text-[11px] font-semibold tracking-[2px] uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-gold" /> Office Hours
            </p>
            {hours.map(h => (
              <div key={h.day} className="flex items-center justify-between py-3.5 border-b border-border last:border-0">
                <span className="text-muted text-sm">{h.day}</span>
                <span className="text-dark text-sm font-medium">{h.time}</span>
                <span className={`text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full ${h.open ? 'bg-teal/10 text-teal border border-teal/20' : 'bg-border text-muted'}`}>
                  {h.open ? '● Open' : 'Closed'}
                </span>
              </div>
            ))}
          </div>

          {/* WhatsApp only — real number */}
          <p className="text-muted text-[11px] font-semibold tracking-[2px] uppercase mb-4">Connect With Us</p>
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="https://wa.me/918329081557?text=Hello%20Nirmal%20Developers%2C%20I%20am%20interested%20in%20your%20services."
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-green-50 border border-green-200 text-green-700 text-sm font-semibold rounded-xl hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp — Er. Rushikesh Mulik
            </a>
          </div>

          {/* FAQ */}
          <p className="text-gold text-[11px] font-semibold tracking-[2px] uppercase mb-4 flex items-center gap-2">
            <span className="w-4 h-px bg-gold" /> Quick Answers
          </p>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white border border-border rounded-xl overflow-hidden hover:border-gold/40 transition-colors">
                <button className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="text-dark text-sm font-semibold pr-4">{f.q}</span>
                  <span className={`text-gold text-lg flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4">
                    <p className="text-muted text-sm leading-relaxed border-t border-border pt-4">{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* RIGHT — FORM */}
        <Reveal delay={150}>
          <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-xl shadow-dark/5">
            <div className="bg-dark px-8 py-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold/8 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <p className="text-gold text-[11px] font-semibold tracking-[2px] uppercase mb-2 relative z-10">New Enquiry</p>
              <h3 className="font-display text-3xl font-bold text-white relative z-10">Send Us a Message</h3>
              <p className="text-white/40 text-sm mt-1 relative z-10">We respond within one business day.</p>
            </div>
            <div className="p-8">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-teal/10 border-2 border-teal/30 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">✅</div>
                  <h3 className="font-display text-3xl font-bold text-dark mb-3">Message Received!</h3>
                  <p className="text-muted text-sm leading-relaxed mb-8 max-w-xs mx-auto">
                    Thank you for contacting Nirmal Developers. Our team will be in touch within 24 hours.
                  </p>
                  <button onClick={() => { setSent(false); setForm({ name:'', email:'', phone:'', company:'', budget:'', message:'' }); setChips([]) }}
                    className="border-2 border-gold text-gold text-sm font-semibold px-8 py-3 rounded-lg hover:bg-gold hover:text-dark transition-all duration-300">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-dark tracking-wide uppercase mb-2">Full Name <span className="text-gold">*</span></label>
                      <input className={`w-full px-4 py-3 bg-bg border rounded-lg text-sm text-dark outline-none transition-all duration-200 focus:border-gold focus:ring-2 focus:ring-gold/15 focus:bg-white placeholder:text-muted/50 ${errors.name ? 'border-red-400' : 'border-border'}`}
                        placeholder="Rahul Mehta" value={form.name} onChange={e => set('name', e.target.value)} />
                      {errors.name && <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-dark tracking-wide uppercase mb-2">Email <span className="text-gold">*</span></label>
                      <input className={`w-full px-4 py-3 bg-bg border rounded-lg text-sm text-dark outline-none transition-all duration-200 focus:border-gold focus:ring-2 focus:ring-gold/15 focus:bg-white placeholder:text-muted/50 ${errors.email ? 'border-red-400' : 'border-border'}`}
                        placeholder="rahul@example.com" value={form.email} onChange={e => set('email', e.target.value)} />
                      {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-dark tracking-wide uppercase mb-2">Phone <span className="text-gold">*</span></label>
                      <input className={`w-full px-4 py-3 bg-bg border rounded-lg text-sm text-dark outline-none transition-all duration-200 focus:border-gold focus:ring-2 focus:ring-gold/15 focus:bg-white placeholder:text-muted/50 ${errors.phone ? 'border-red-400' : 'border-border'}`}
                        placeholder="98765 43210" value={form.phone} onChange={e => set('phone', e.target.value)} />
                      {errors.phone && <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-dark tracking-wide uppercase mb-2">Company</label>
                      <input className="w-full px-4 py-3 bg-bg border border-border rounded-lg text-sm text-dark outline-none transition-all duration-200 focus:border-gold focus:ring-2 focus:ring-gold/15 focus:bg-white placeholder:text-muted/50"
                        placeholder="Optional" value={form.company} onChange={e => set('company', e.target.value)} />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-[11px] font-semibold text-dark tracking-wide uppercase mb-3">I'm Interested In</label>
                    <div className="flex flex-wrap gap-2">
                      {services.map(s => (
                        <button key={s} onClick={() => toggleChip(s)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${chips.includes(s) ? 'border-gold bg-gold/10 text-gold font-semibold shadow-sm shadow-gold/20' : 'border-border text-muted hover:border-gold/50 hover:text-gold/70'}`}>
                          {chips.includes(s) ? '✓ ' : ''}{s}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-[11px] font-semibold text-dark tracking-wide uppercase mb-2">Estimated Budget</label>
                    <select className="w-full px-4 py-3 bg-bg border border-border rounded-lg text-sm text-dark outline-none transition-all duration-200 focus:border-gold focus:ring-2 focus:ring-gold/15 focus:bg-white cursor-pointer"
                      value={form.budget} onChange={e => set('budget', e.target.value)}>
                      <option value="">Select a budget range...</option>
                      <option>Under ₹10 Lakhs</option>
                      <option>₹10 – ₹50 Lakhs</option>
                      <option>₹50 Lakhs – ₹1 Crore</option>
                      <option>₹1 Crore – ₹5 Crore</option>
                      <option>Above ₹5 Crore</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label className="block text-[11px] font-semibold text-dark tracking-wide uppercase mb-2">Project Details <span className="text-gold">*</span></label>
                    <textarea rows={4}
                      className={`w-full px-4 py-3 bg-bg border rounded-lg text-sm text-dark outline-none transition-all duration-200 focus:border-gold focus:ring-2 focus:ring-gold/15 focus:bg-white resize-none placeholder:text-muted/50 ${errors.message ? 'border-red-400' : 'border-border'}`}
                      placeholder="Describe your project — location, size, timeline, and any specific requirements..."
                      value={form.message} onChange={e => set('message', e.target.value)} />
                    {errors.message && <p className="text-red-500 text-[11px] mt-1">{errors.message}</p>}
                  </div>
                  <button onClick={handleSubmit} disabled={sending}
                    className="w-full bg-gold text-dark font-semibold text-sm tracking-wider uppercase py-4 rounded-lg hover:bg-goldlt active:scale-[0.99] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:-translate-y-0.5">
                    {sending ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="#1A1A1A" strokeWidth="3" strokeOpacity="0.3" />
                          <path d="M12 2a10 10 0 0 1 10 10" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        Sending Your Message...
                      </>
                    ) : '✉ Send Message →'}
                  </button>
                  <p className="text-center text-muted text-[11px] mt-3">🔒 Confidential — your details are never shared.</p>
                </>
              )}
            </div>
          </div>
        </Reveal>

      </div>

      {/* ══ MAP ═════════════════════════════════════════════════════ */}
      <section className="bg-white border-t border-border">
        <Reveal className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-gold text-[11px] font-semibold tracking-[2.5px] uppercase mb-2 flex items-center gap-2">
                <span className="w-4 h-px bg-gold" /> Our Location
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-dark">
                Find Us on <span className="text-teal">the Map</span>
              </h2>
            </div>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 text-teal text-sm font-medium border border-teal/30 px-5 py-2.5 rounded-lg hover:bg-teal hover:text-white transition-all duration-200">
              Open in Google Maps →
            </a>
          </div>
          <div className="w-full h-[420px] rounded-xl overflow-hidden border border-border shadow-lg shadow-dark/5">
            <iframe
  title="Nirmal Developers Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30417.19640436685!2d74.4073826!3d17.9898788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3a536389a5081%3A0xa82576e60258a6bf!2sPhaltan%2C%20Maharashtra%20415523!5e0!3m2!1sen!2sin!4v1779090000000!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
          </div>
        </Reveal>
      </section>

      {/* ══ FOOTER ══════════════════════════════════════════════════
      <div className="bg-dark border-t border-white/10 py-6 text-center">
        <p className="text-white/30 text-xs tracking-wide">
          © 2026 Nirmal Developers. All rights reserved. &nbsp;|&nbsp; Crafted with excellence.
        </p>
      </div> */}
    </div>
  )
}