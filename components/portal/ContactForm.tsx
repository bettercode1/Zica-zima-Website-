'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Status = 'idle' | 'loading' | 'success' | 'error';
type VerifyDetail = { firebaseSaved: boolean; emailSent: boolean; docId?: string } | null;

function ThankYouModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="thank-you-overlay fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >

      <motion.div
        className="bg-white border-2 border-orange-500 rounded-2xl p-6 sm:p-8 max-w-md w-full text-center shadow-2xl relative"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-2xl font-bold">close</span>
        </button>

        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
          <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        </div>

        <h3 className="text-2xl font-black text-slate-900 mb-2">Thank You for Enquiry!</h3>
        <p className="text-slate-600 font-medium text-sm sm:text-base mb-6">
          We have received your request. Our admissions counselor will get in touch with you shortly.
        </p>



        <button
          onClick={onClose}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-orange-500/30 transition-all hover:shadow-orange-500/40 active:scale-95 duration-200 cursor-pointer"
        >
          Got it
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',

    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [verifyDetail, setVerifyDetail] = useState<VerifyDetail>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/admissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const data = await res.json();
        setStatus('success');
        setVerifyDetail({
          firebaseSaved: data.firebaseSaved ?? false,
          emailSent:     data.emailSent     ?? false,
          docId: data.results?.firebase?.replace('saved:', '') ?? undefined,
        });
        setForm({ name: '', phone: '', email: '', course: '', message: '' });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  return (
    <section id="admissions" className="py-16 md:py-24 px-4 sm:px-8 lg:px-24 bg-surface-container-low relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-black/5">
          {/* Left Panel */}
          <div className="lg:w-1/2 kinetic-gradient p-8 sm:p-12 lg:p-20 text-white flex flex-col justify-between">
            <div>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-center lg:text-left">
                Ready to <br />
                Start Your <br />
                Journey?
              </h2>
              <p className="text-white/80 text-lg mb-12 font-body">
                Book a free career counseling session or campus tour today. Our
                experts will help you choose the right path.
              </p>
              <div className="space-y-6 font-body">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white">mail</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-extrabold text-white/50 uppercase tracking-[0.2em]">Email Us</span>
                    <a href="mailto:admissions@zicazimapcmc.com" className="text-white hover:text-orange-200 transition-colors font-medium">
                      admissions@zicazimapcmc.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white">call</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-extrabold text-white/50 uppercase tracking-[0.2em]">Call Us</span>
                    <div className="flex flex-col">
                      <a href="tel:+919028757041" className="text-white hover:text-orange-200 transition-colors font-medium">+91 90287 57041</a>
                      <a href="tel:+919028757042" className="text-white hover:text-orange-200 transition-colors font-medium">+91 90287 57042</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white">location_on</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-extrabold text-white/50 uppercase tracking-[0.2em]">Our Campus</span>
                    <a 
                      href="https://maps.app.goo.gl/xbdHwj1onKYMvKUaA" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm md:text-base text-white hover:text-orange-200 transition-colors leading-relaxed font-medium"
                    >
                      Ground Floor, Navkar Saraswati Building, <br />
                      PCMC Link Rd, Chinchwad, Pune - 411033
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="text-sm font-bold opacity-60 mb-4 tracking-widest text-white/70 uppercase">Follow Our Creative Journey</div>
              <div className="flex gap-5">
                {[
                  { 
                    id: 'li', 
                    href: 'https://www.linkedin.com/company/zee-institue-of-creative-media-arts-pimpri-chinchwad/', 
                    icon: (
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    )
                  },
                  { 
                    id: 'ig', 
                    href: 'https://www.instagram.com/zicazima_pcmc/', 
                    icon: (
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    )
                  },
                  { 
                    id: 'fb', 
                    href: 'https://www.facebook.com/zicazimapcmcpune/', 
                    icon: (
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    )
                  },
                  { 
                    id: 'yt', 
                    href: 'https://www.youtube.com/@ZICAZIMAInstitutePCMCPune', 
                    icon: (
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/>
                      </svg>
                    )
                  }
                ].map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110 active:scale-95 group"
                    title={social.id.toUpperCase()}
                  >
                    <span className="text-white opacity-80 group-hover:opacity-100 transition-opacity">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:w-1/2 p-8 sm:p-12 lg:p-20">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-extrabold text-slate-500 uppercase block tracking-[0.2em] ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-5 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none text-slate-900 font-semibold placeholder:text-slate-300 shadow-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-extrabold text-slate-500 uppercase block tracking-[0.2em] ml-1">
                    Phone Number
                  </label>
                  <div className="flex gap-0 shadow-sm rounded-xl overflow-hidden border border-slate-200 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                    <select className="bg-slate-100 border-r border-slate-200 px-4 py-5 outline-none text-slate-700 font-bold text-sm appearance-none cursor-pointer hover:bg-slate-200 transition-colors">
                      <option>+91</option>
                      <option>+1</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={(e) => {
                        // Remove non-digits, then remove leading zeros, then limit to 12 chars
                        const val = e.target.value.replace(/\D/g, '').replace(/^0+/, '').slice(0, 12);
                        setForm(prev => ({ ...prev, phone: val }));
                      }}
                      placeholder="90287 57041"
                      className="flex-1 bg-slate-50 px-5 py-5 outline-none text-slate-900 font-semibold placeholder:text-slate-300 focus:bg-white transition-all"
                      required
                    />
                  </div>
                </div>
              </div>


              <div className="space-y-1.5">
                <label className="text-[11px] font-extrabold text-slate-500 uppercase block tracking-[0.2em] ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-5 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none text-slate-900 font-semibold placeholder:text-slate-300 shadow-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-extrabold text-slate-500 uppercase block tracking-[0.2em] ml-1">
                  Select Course
                </label>
                <div className="relative group">
                  <select
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-5 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none text-slate-900 font-bold appearance-none cursor-pointer shadow-sm"
                    required
                  >
                    <option value="" disabled hidden>Choose your course</option>
                    <optgroup label="ZICA COURSES">
                      <option>B.Voc Degree in 3D Animation & VFX</option>
                      <option>2D Animation</option>
                      <option>Visual Effects (VFX)</option>
                      <option>Graphic Design</option>
                      <option>UI/UX</option>
                      <option>Web Design</option>
                      <option>Digital Marketing</option>
                      <option>Game Art & Design</option>
                      <option>Architectural Design & Animation</option>
                      <option>Visual Promotion & AD Design</option>
                      <option>Photography</option>
                      <option>Blender</option>
                      <option>Houdini</option>
                    </optgroup>
                    <optgroup label="ZIMA COURSES">
                      <option>Film Making</option>
                      <option>Screen Writing</option>
                      <option>Direction</option>
                      <option>Cinematography</option>
                      <option>Vertical Cinematography</option>
                      <option>Film & TV Editing</option>
                      <option>Film & TV Production</option>
                      <option>Sound Recording</option>
                      <option>Sound Engineering</option>
                      <option>Audio Production</option>
                      <option>Music Production</option>
                      <option>Film Acting</option>
                      <option>Fashion Modelling Personal Grooming</option>
                      <option>Dancing</option>
                    </optgroup>
                    <optgroup label="MODULAR COURSES">
                      <option>ILLUSTRATOR</option>
                      <option>PHOTOSHOP</option>
                      <option>AFTER EFFECTS</option>
                      <option>PREMIER PRO</option>
                      <option>COREL DRAW</option>
                      <option>ZBRUSH</option>
                      <option>NOTION</option>
                      <option>FIGMA</option>
                      <option>MAYA</option>
                      <option>UNREAL ENGINE</option>
                      <option>BLENDER</option>
                    </optgroup>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                    keyboard_arrow_down
                  </span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-extrabold text-slate-500 uppercase block tracking-[0.2em] ml-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-5 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none h-32 resize-none text-slate-900 font-semibold placeholder:text-slate-300 shadow-sm"
                />
              </div>

              {/* Success state handles via Pop-up Modal now */}

              {/* Error Message */}
              {status === 'error' && (
                <div className="w-full bg-red-50 border border-red-200 rounded-xl px-5 py-4 flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-500 text-xl mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
                  <div>
                    <p className="font-bold text-red-800 text-sm">Could not send enquiry</p>
                    <p className="text-red-700 text-xs mt-0.5">{errorMsg}</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full kinetic-gradient text-on-primary py-4 md:py-5 rounded-xl font-bold text-base md:text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-95 duration-200 mt-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100 flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Enquiry Sent!
                  </>
                ) : (
                  'Register Now'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {status === 'success' && (
          <ThankYouModal onClose={() => setStatus('idle')} />
        )}
      </AnimatePresence>
    </section>
  );
}
