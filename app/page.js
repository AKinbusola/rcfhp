export default function RCFCampusLandingPage() {
  const campuses = [
    'University of Illinois',
    'Texas Tech University',
    'University of Houston',
    'Dallas College'
  ];

  const pillars = [
    {
      title: 'Know Christ',
      text: 'Helping students encounter Jesus deeply through worship, prayer, discipleship, and biblical teaching.'
    },
    {
      title: 'Make Him Known',
      text: 'Empowering students to boldly share the Gospel and influence campuses with the love of Christ.'
    },
    {
      title: 'Build Community',
      text: 'Creating authentic Christ-centered relationships where students can grow spiritually and personally.'
    }
  ];

  const experiences = [
    {
      title: 'Build Local Campus Fellowship',
      desc: 'Spirit-filled gatherings with worship, teaching, prayer, and connection.'
    },
    {
      title: 'Campus Evangelism',
      desc: 'Reaching campuses through outreach, discipleship, prayer walks, and revival initiatives.'
    },
    {
      title: 'FIRE Conference',
      desc: 'A transformational experience gathering students hungry for revival and spiritual growth.'
    },
    {
      title: 'Leadership Development',
      desc: 'Raising the next generation of Christian leaders on college campuses.'
    }
  ];

  return (
    <div className="bg-[#040815] text-white overflow-hidden min-h-screen">
      {/* Glow Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-purple-600/20 blur-3xl rounded-full" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-2xl bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>

            <img
    src="https://images.squarespace-cdn.com/content/v1/67494eee59c5d57a039ec568/e6a99f5d-c03d-45dd-a4d6-0c830e74d7fb/full-color-logo-horizontal-light.png?format=1500w"
    alt="RCF Campus Logo"
    className="w-[160px] h-auto"
  />
          
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm text-white/70">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Campuses</a>
            <a href="#" className="hover:text-white transition">Events</a>
            <a href="#" className="hover:text-white transition">FIRE Conference</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </nav>

          <button className="bg-white text-black px-5 py-3 rounded-full font-semibold hover:scale-105 transition duration-300">
            Join RCF
          </button>
          
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-28 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm text-white/70 tracking-wide uppercase">
                To Know Christ & Make Him Known
              </span>
            </div>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-8">
              Reaching
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500">
                Campuses
              </span>
              For Christ.
            </h2>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-10">
              RCF is a Christ-centered student movement committed to revival, discipleship, evangelism, leadership, and transforming college campuses through the power of Jesus Christ.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-2xl font-bold shadow-2xl hover:scale-105 transition duration-300">
                Join The Movement
              </button>

              <button className="border border-white/15 bg-white/5 px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition duration-300 backdrop-blur-xl">
                Watch Highlights
              </button>
            </div>

            <div className="flex flex-wrap gap-10">
              <div>
                <h3 className="text-4xl font-black">50+</h3>
                <p className="text-white/50 text-sm mt-2">Campus Chapters</p>
              </div>

              <div>
                <h3 className="text-4xl font-black">5K+</h3>
                <p className="text-white/50 text-sm mt-2">Students Impacted</p>
              </div>

              <div>
                <h3 className="text-4xl font-black">100+</h3>
                <p className="text-white/50 text-sm mt-2">Leaders Raised</p>
              </div>
            </div>
          </div>

          {/* Hero Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-600/30 blur-3xl rounded-[40px]" />

            <div className="relative bg-white/10 border border-white/10 rounded-[40px] p-5 backdrop-blur-2xl overflow-hidden shadow-2xl">
              <img
                src="https://raw.githubusercontent.com/AKinbusola/rcfhp/221484d234a303473ddd74b8f393406aeef8b7f5/IMG_9881.jpg"
                alt="Students worshipping"
                className="rounded-[28px] w-full h-[620px] object-cover"
              />

              <div className="absolute bottom-10 left-10 right-10 bg-black/50 border border-white/10 backdrop-blur-2xl rounded-3xl p-6">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="text-white/60 text-sm mb-2">Upcoming Experience</p>
                    <h3 className="text-2xl font-black">FIRE Conference 2026: Back to the Basics</h3>
                    <p className="text-white/70 mt-1">Revival • Worship • Prayer • Encounter</p>
                  </div>

                  <button className="bg-white text-black px-5 py-3 rounded-xl font-bold whitespace-nowrap">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl hover:-translate-y-2 transition duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-8" />

              <h3 className="text-3xl font-black mb-5">{pillar.title}</h3>

              <p className="text-white/65 leading-relaxed text-lg">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 border-y border-white/10 bg-white/[0.03] backdrop-blur-2xl py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-cyan-300 text-sm mb-6">
              About The Movement
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
              A Generation
              <span className="block text-white/60">
                Set On Fire For Jesus.
              </span>
            </h2>

            <p className="text-lg text-white/70 leading-relaxed mb-8">
              RCF exists to raise students who passionately pursue Christ, live boldly for the Gospel, and bring revival to campuses across the nation.
            </p>

            <div className="space-y-5">
              {[
                'Campus prayer and worship gatherings',
                'Student-led Bible studies and discipleship',
                'Leadership mentorship and training',
                'National outreach and evangelism initiatives'
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                  <p className="text-white/75 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <img
              src="https://raw.githubusercontent.com/AKinbusola/rcfhp/main/IMG_9819.jpg"
              alt="RCF Students"
              className="rounded-[32px] h-[260px] object-cover w-full"
            />

            <img
              src="https://raw.githubusercontent.com/AKinbusola/rcfhp/main/A7409729.jpg"
              alt="RCF Worship"
              className="rounded-[32px] h-[260px] object-cover w-full mt-12"
            />

            <img
              src="https://raw.githubusercontent.com/AKinbusola/rcfhp/main/uniform.png"
              alt="RCF Uniform"
              className="rounded-[32px] h-[260px] object-cover w-full -mt-10"
            />

            <img
              src="https://raw.githubusercontent.com/AKinbusola/rcfhp/main/iup_evangel.png"
              alt="RCF Evangelism"
              className="rounded-[32px] h-[260px] object-cover w-full" 
            />
          </div>
        </div>
      </section>

{/* Experiences */}
<section className="relative z-10 max-w-7xl mx-auto px-6 py-28">
  <div className="text-center max-w-3xl mx-auto mb-16">
    <p className="uppercase tracking-[0.35em] text-purple-300 text-sm mb-5">
      What We Do
    </p>

    <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
      Building Revival On Campus.
    </h2>

    <p className="text-white/65 text-lg leading-relaxed">
      Through worship, discipleship, outreach, and leadership development,
      students are equipped to impact their campuses for Christ.
    </p>
  </div>

  <div className="grid lg:grid-cols-2 gap-6">
    {experiences.map((item, index) => (
      <div
        key={item.title}
        className="bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-xl hover:bg-white/10 transition duration-500"
      >
        <div className="flex items-start justify-between gap-8">
          <div>
            <h3 className="text-3xl font-black mb-5">
              {item.title}
            </h3>

            <p className="text-white/65 text-lg leading-relaxed max-w-xl">
              {item.desc}
            </p>
          </div>

          <div className="text-6xl font-black text-white/10">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
     
      {/* Campuses */}
      <section className="relative z-10 py-24 bg-gradient-to-r from-[#0b1020] to-[#0b1228] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.35em] text-cyan-300 text-sm mb-5">
            Our Campuses
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-12">
            Growing Across Universities.
          </h2>

          <div className="flex flex-wrap justify-center gap-5">
            {campuses.map((campus) => (
              <div
                key={campus}
                className="px-8 py-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-lg font-semibold"
              >
                {campus}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-28">
        <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-12 md:p-20 relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_40%)]" />

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-3xl">
              <p className="uppercase tracking-[0.35em] text-white/70 text-sm mb-5">
                Join The Revival
              </p>

              <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
                Your Campus
                <span className="block text-white/70">
                  Needs Jesus.
                </span>
              </h2>

              <p className="text-lg text-white/80 leading-relaxed">
                Become part of a generation passionately pursuing Christ and making Him known on campuses everywhere.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-2xl font-black hover:scale-105 transition duration-300">
                Join RCF Today
              </button>

              <button className="border border-white/30 px-8 py-4 rounded-2xl font-black hover:bg-white/10 transition duration-300">
                Explore Campuses
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-2xl">
      <div className="flex flex-col items-center lg:items-start gap-4">
  <img
    src="https://images.squarespace-cdn.com/content/v1/67494eee59c5d57a039ec568/e6a99f5d-c03d-45dd-a4d6-0c830e74d7fb/full-color-logo-horizontal-light.png?format=1500w"
    alt="RCF Campus Logo"
    className="w-[160px] h-auto"
  />

  <p className="text-white/50 max-w-md text-center lg:text-left">
    To Know Christ and Make Him Known on Every Campus.
  </p>
</div>

          <div className="flex flex-wrap gap-6 text-white/60">
                  <a
  href="https://www.youtube.com/@RCFCAMPUS"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition"
>
  YouTube
</a>

    <a
  href="https://www.instagram.com/rcfcampus?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition"
>
  Instagram
</a>

     <a
  href="https://chat.whatsapp.com/IWDnXK6Y5ca3SzQ3BtVqRN"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition"
>
  Whatsapp
</a>

     <a
  href="mailto:rcfcampus@gmail.com" 
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition"
>
  Contact
</a>

        </div>
      </footer>
    </div>
  );
}
