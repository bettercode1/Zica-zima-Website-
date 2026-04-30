'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

type Status = 'idle' | 'loading' | 'success' | 'error';
type VerifyDetail = { firebaseSaved: boolean; emailSent: boolean; docId?: string } | null;

const COURSE_CATEGORIES = {
  ZICA: [
    'B.Voc Degree in 3D Animation & VFX', '2D Animation', 'Visual Effects (VFX)', 'Graphic Design',
    'UI/UX', 'Web Design', 'Digital Marketing', 'Game Art & Design', 'Architectural Design & Animation',
    'Visual Promotion & AD Design', 'Photography', 'Blender', 'Houdini'
  ],
  ZIMA: [
    'Film Making', 'Screen Writing', 'Direction', 'Cinematography', 'Vertical Cinematography',
    'Film & TV Editing', 'Film & TV Production', 'Sound Recording', 'Sound Engineering',
    'Audio Production', 'Music Production', 'Film Acting', 'Fashion Modelling Personal Grooming', 'Dancing'
  ],
  MODULAR: [
    'ILLUSTRATOR', 'PHOTOSHOP', 'AFTER EFFECTS', 'PREMIER PRO', 'COREL DRAW', 'ZBRUSH', 'NOTION',
    'FIGMA', 'MAYA', 'UNREAL ENGINE', 'BLENDER'
  ]
};

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
  const [selectedBrand, setSelectedBrand] = useState<keyof typeof COURSE_CATEGORIES | ''>('');
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
                  { id: 'li', url: 'https://www.linkedin.com/company/zee-institue-of-creative-media-arts-pimpri-chinchwad/' },
                  { id: 'ig', url: 'https://www.instagram.com/zicazima_pcmc/' },
                  { id: 'fb', url: 'https://www.facebook.com/zicazimapcmcpune/' },
                  { id: 'yt', url: 'https://www.youtube.com/@ZICAZIMAInstitutePCMCPune' }
                ].map((social) => (
                  <div key={social.id} className="hover:scale-110 active:scale-95 transition-transform duration-200 shadow-lg rounded-full">
                    <SocialIcon 
                      url={social.url} 
                      target="_blank"
                      style={{ height: 44, width: 44 }}
                    />
                  </div>
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

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-extrabold text-slate-500 uppercase block tracking-[0.2em] ml-1">
                    Select Brand
                  </label>
                  <div className="relative group">
                    <select
                      value={selectedBrand}
                      onChange={(e) => {
                        setSelectedBrand(e.target.value as keyof typeof COURSE_CATEGORIES);
                        setForm(prev => ({ ...prev, course: '' }));
                      }}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-5 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none text-slate-900 font-bold appearance-none cursor-pointer shadow-sm"
                      required
                    >
                      <option value="" disabled hidden>Choose category</option>
                      <option value="ZICA">ZICA Courses</option>
                      <option value="ZIMA">ZIMA Courses</option>
                      <option value="MODULAR">Modular Courses</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                      keyboard_arrow_down
                    </span>
                  </div>
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
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-5 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none text-slate-900 font-bold appearance-none cursor-pointer shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                      disabled={!selectedBrand}
                    >
                      <option value="" disabled hidden>Choose your course</option>
                      {selectedBrand && COURSE_CATEGORIES[selectedBrand].map(course => (
                        <option key={course} value={course}>{course}</option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                      keyboard_arrow_down
                    </span>
                  </div>
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
