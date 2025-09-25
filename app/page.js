'use client'
import AmaraLogo from '@/components/AmaraLogo'
import { Icon, ICONS } from '@/components/icons'

export default function Page() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/5 border-b border-white/10">
        <div className="container py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <AmaraLogo className="h-9 w-9" />
            <span className="text-lg md:text-xl font-fredoka font-semibold">RCM Services</span>

          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services">Services</a>
            <a href="#advanced">Advanced</a>
            <a href="#specialties">Specialties</a>
            <a href="#team">Team</a>
            <a href="#faq">FAQs</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="btn ml-3">Free Consultation</a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(900px 400px at 80% -10%, rgba(234,76,137,0.12), transparent), radial-gradient(900px 400px at 10% 110%, rgba(0,168,168,0.12), transparent), linear-gradient(180deg, #0E2239, #0b1220)' }} />
        <div className="container pt-24 md:pt-32 pb-16">
          <div className="flex items-start gap-4">
            <AmaraLogo className="h-12 w-12" />
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold">Your Revenue. <span className="text-[#FFC53D]">Our Responsibility.</span></h1>
              <p className="mt-3 text-lg md:text-xl text-white/80 max-w-2xl">Clean claims, faster reimbursements, and transparent weekly reporting. Your dedicated billing partner across the U.S.</p>
              <div className="mt-6 flex gap-3">
                <a href="#contact" className="btn">Schedule a Free Revenue Consultation</a>
                <a href="#services" className="btn" style={{background:'transparent', color:'#fff', border:'1px solid rgba(255,255,255,.3)'}}>Explore Services</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-20">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold text-[#FFC53D]">Comprehensive RCM Services</h2>
          <p className="text-lg text-white/80 mt-2 mb-8">Built to maximize collections and minimize denials.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Patient Demographics & Insurance Verification',
              'Accurate Medical Coding',
              'Charge Posting & Electronic Claim Submission',
              'Payment Posting & Denial Appeals',
              'A/R Follow Ups & Patient Statements',
              'Weekly Reporting & Revenue Insights',
            ].map((item) => (
              <div key={item} className="card"><h3 className="font-semibold text-xl mb-1">{item}</h3><p className="text-sm text-white/80">Precise workflows, audit-ready logs, and specialty-tuned turnaround.</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="advanced" className="py-16 md:py-20">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold text-[#FFC53D]">Advanced Support Add‑Ons</h2>
        </div>
        <div className="container grid md:grid-cols-3 gap-6 mt-6">
          {[
            'Credentialing & Contracting with Payers',
            'Pre‑Authorizations Support for Procedures',
            'Patient Engagements & Mobile Payments',
            'MIPS/MACRA Performance Tracking',
            'EMR/EHR System Integration',
            'Full HIPAA Compliance & Secure Access',
          ].map((item) => (
            <div key={item} className="card"><h3 className="font-semibold text-lg mb-1">{item}</h3><p className="text-sm text-white/80">Implemented by experienced specialists with measurable outcomes.</p></div>
          ))}
        </div>
      </section>

      <section id="specialties" className="py-16 md:py-20">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold text-[#FFC53D]">Specialties We Serve</h2>
          <p className="text-lg text-white/80 mt-2 mb-6">Cardiology, Pediatrics, Orthopedics, Dermatology, Psychiatry, Primary Care — <b>and many more (etc.)</b></p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              ['Cardiology', 'heart'],
              ['Pediatrics', 'baby'],
              ['Neurology', 'brain'],
              ['Orthopedics', 'bone'],
              ['Primary Care', 'steth'],
              ['Ophthalmology', 'eye'],
            ].map(([name, key]) => (
              <div key={name} className="card flex items-center gap-3">
                <Icon path={ICONS[key]} className="w-6 h-6" /><span className="font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-16 md:py-20">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold text-[#FFC53D]">Experienced With Leading EMRs</h2>
          <p className="text-lg text-white/80 mt-2 mb-6">IMS, ECW, Cerner, Epic, athenahealth, Kareo – with generic, copyright‑safe icons.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'IMS','ECW (eClinicalWorks)','Cerner','Epic','athenahealth','Kareo'
            ].map((name, idx) => (
              <div key={name} className="card flex items-center gap-3">
                <Icon path={[ICONS.app, ICONS.db, ICONS.app, ICONS.app, ICONS.db, ICONS.laptop][idx]} className="w-6 h-6" />
                <span className="font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-20">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold text-[#FFC53D] text-center mb-8">FAQs – Amara RCM Services</h2>
          <div className="space-y-3">
            {[
              ['🏥 Who can benefit from your services?','Hospitals, clinics, and multi-location practices—we provide scalable solutions designed to fit your needs perfectly.'],
              ['🤝 Why partner with us?','Our certified billing experts bring years of hands-on experience. We reduce denials, accelerate claims, and <b>maximize your revenue</b>—so you can focus on patient care.'],
              ['🖥️ Which EMRs do you support?','IMS, ECW, Cerner, and more. If you use it, our team is ready to handle it flawlessly.'],
              ['✅ How accurate is your billing?','Every claim undergoes meticulous review for coding accuracy and regulatory compliance. Errors are minimized, and reimbursements are maximized.'],
              ['🛡️ How secure is my patient data?','We use <b>HIPAA-compliant</b> systems with end-to-end encryption. Your sensitive information is always protected.'],
              ['↩️ What happens with denied claims?','Denied claims? No problem. We track, manage, and resubmit them to ensure you recover every eligible dollar.'],
              ['📈 Can I monitor my revenue?','Yes. We provide clear, actionable reports so you always know your financial performance at a glance.'],
              ['💵 How do you price your services?','<b>Flexible, customized pricing</b> based on your practice size and claim volume. Our goal: maximum value, zero hassle.'],
              ['🚀 How do I get started?','It\'s simple. Contact us today, and we\'ll create a tailored billing solution to streamline your revenue cycle from day one.'],
            ].map(([q,a], idx) => (
              <details key={idx} className="card">
                <summary className="cursor-pointer text-lg font-semibold marker:hidden">{q}</summary>
                <p className="text-white/80 mt-2" dangerouslySetInnerHTML={{__html: a}} />
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <a className="btn" href="mailto:info@amararcm.com">Contact Us Today</a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-20">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold text-[#FFC53D]">Let's Connect</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="card">
              <h3 className="font-semibold text-xl">Contact Details</h3>
              <p className="text-white/80 mt-2">Email: <a className="underline" href="mailto:info@amararcm.com">info@amararcm.com</a></p>
              <p className="text-white/80">Website: <a className="underline" href="https://www.amararcm.com">www.amararcm.com</a></p>
              <p className="text-white/80">Based in the U.S | Serving Nationwide</p>
              <p className="text-xs opacity-70 mt-3">Do not submit patient PHI via this site. We offer HIPAA‑secure channels after engagement.</p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-xl mb-2">Quick Scheduler</h3>
              <p className="text-sm text-white/80 mb-3">Pick a time that works for you.</p>
              <a href="mailto:info@amararcm.com" className="btn">Open Scheduler</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-sm text-white/70 text-center">© {new Date().getFullYear()} Amara RCM Services</footer>
    </main>
  )
}
