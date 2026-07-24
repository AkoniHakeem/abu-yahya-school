import React from 'react';
import Link from 'next/link';
import TopNavBar from '@/components/TopNavBar';

export default function LandingPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md pt-20 scroll-smooth">
      {/* TopNavBar Component */}
      <TopNavBar />

      <main>
        {/* Hero Section */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col lg:flex-row items-center gap-gutter">
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
            <span className="bg-surface-container-high text-primary px-4 py-1 rounded-full font-label-sm text-label-sm border border-outline-variant">
              Excellence in Islamic Education
            </span>
            <h1 className="font-display-lg text-display-lg text-on-surface">
              Master Arabic &amp; Quran from the Comfort of Your Home.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Join thousands of students worldwide in preserving tradition through structured, professional online learning with expert tutors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <Link className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-sm text-label-sm text-center shadow-ambient hover:bg-primary-container transition-all hover:-translate-y-1" href="/login">
                Get Started
              </Link>
              <Link className="border border-secondary text-secondary px-8 py-4 rounded-lg font-label-sm text-label-sm text-center hover:bg-secondary/5 transition-all" href="#classes">
                Explore Curriculum
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
            <img 
              className="w-full h-auto object-cover rounded-3xl shadow-ambient" 
              alt="A brightly lit, modern home office setting featuring a student attentively looking at a sleek laptop screen. The environment is calm and minimalist, decorated with subtle Islamic geometric art pieces on the wall and a small potted plant on the desk. The lighting is soft, natural daylight conveying a sense of focus, serenity, and professional educational excellence." 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9IKSgzUx_XZn7bgoyafOYlSKiA8xqgm1HfITcKYnucD7TewOSpTszBwjkBn3eq4ZdYDVeRS2B6Lj94grUIn0cBHIDK0KKWZUfDC-26hZVVjq5m8Mueqb0l1OoBd3T2_ZNiFdYIXmJeLKMQ8eKlsuz4brj0cDLHTHQRi63WbcljCuJxjW98wtrHTdV-2uECRrO3Tr6otASREH8NRXQR03GE1EPqilYhlddmTKmwUiCSoUV1mzsOAzg"
            />
          </div>
        </section>

        {/* Features Section (Bento Grid) */}
        <section className="w-full bg-surface-container-lowest py-section-gap" id="features">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Why Choose Abu-Yahya School?</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">We blend traditional pedagogy with modern technology to deliver an unparalleled learning experience.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="bg-surface rounded-2xl p-8 border border-outline-variant shadow-ambient flex flex-col items-start hover:border-primary transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined">videocam</span>
                </div>
                <h3 className="font-headline-md text-headline-md-mobile text-on-surface mb-3">Live Interactive Classes</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Engage directly with your instructors in real-time. Ask questions, participate in discussions, and get immediate feedback.</p>
              </div>
              {/* Feature 2 */}
              <div className="bg-surface rounded-2xl p-8 border border-outline-variant shadow-ambient flex flex-col items-start hover:border-primary transition-colors">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6">
                  <span className="material-symbols-outlined">play_circle</span>
                </div>
                <h3 className="font-headline-md text-headline-md-mobile text-on-surface mb-3">Lesson Recordings</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Never miss a concept. Access high-quality recordings of all your sessions to review and revise at your own pace.</p>
              </div>
              {/* Feature 3 */}
              <div className="bg-surface rounded-2xl p-8 border border-outline-variant shadow-ambient flex flex-col items-start hover:border-primary transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined">school</span>
                </div>
                <h3 className="font-headline-md text-headline-md-mobile text-on-surface mb-3">Professional Tutors</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Learn from certified, experienced educators dedicated to your spiritual and academic growth in an engaging environment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Classes Info Section */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col gap-24" id="classes">
          {/* Arabic Module */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img 
                className="w-full h-80 object-cover rounded-2xl shadow-ambient" 
                alt="A close-up shot of a student's hands carefully writing elegant Arabic calligraphy in a high-quality notebook using a specialized pen. The desk surface is a warm, light wood, illuminated by a modern, warm desk lamp. The overall mood is studious, deeply respectful of tradition, yet clearly situated in a modern, organized study space." 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB52iXagAhAmLU68QTYuUW1uFI5Zk0el7nGVWsc-6hH6O_5Lx0aHC8-Ia6mbQz1bM0ssC9gsl0JnBYTjXylwm4dCYUqiXCkvgbaCrv3RgyZLGTxewJ3EhiMdgb64dE_SU3VgJgmsPUDLMC9W5jIgsxL_opclvGRKd8XVizywRlI4sd6KNDTU1h4YvOa5z2TZ0N4Tel5QVO6fLPlmkNXgoIe_BL2Ktm63oEAYyZn162RxueVVmBDX3vP"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
              <h2 className="font-headline-md text-headline-md text-on-surface">Comprehensive Arabic Studies</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Our Arabic curriculum is structured to take you from absolute beginner to advanced fluency. We focus on grammar (Nahw), morphology (Sarf), vocabulary, and conversational skills to ensure a holistic understanding of the language.
              </p>
              <ul className="space-y-3 w-full">
                <li className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  Structured progression levels
                </li>
                <li className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  Modern standard &amp; classical Arabic
                </li>
                <li className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  Focus on reading, writing, and speaking
                </li>
              </ul>
            </div>
          </div>

          {/* Quran Module */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2">
              <img 
                className="w-full h-80 object-cover rounded-2xl shadow-ambient" 
                alt="An aesthetically pleasing, top-down view of an open, ornately decorated Quran resting on a clean, modern white desk. Beside the book are digital learning tools like a tablet displaying course progress and minimalist wireless headphones. The lighting is bright and airy, blending deep traditional respect with contemporary remote learning setups." 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv-uqzAk7r3UtRGwXhn72NUMlBGzJ0dvsYmS_LYgCsQ6H1A196pKmiGCi-RKto0OpbdWg7POAu7giZ-BQW-ePT5T78Oln1_mkvMNKgyZYsHcbCtrQTTYaO3yjhjJy6ev7yvrRLZsl95L4jl-PpY_oHjsk751__wp3q9CRMgbVqQlfb3kcZv4td9c1IY8FG3Mrpeis_IWnlT9TIrkzZzUX9bqHDfMXRmZ-mg7bPFj2Ofm3Y9U_f-T-I"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
              <h2 className="font-headline-md text-headline-md text-on-surface">Quranic Memorization &amp; Tajweed</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Perfect your recitation and deepen your connection with the Quran. Our expert tutors guide you through proper pronunciation (Tajweed) and effective memorization techniques (Hifz) tailored to your pace.
              </p>
              <ul className="space-y-3 w-full">
                <li className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary">star</span>
                  One-on-one recitation correction
                </li>
                <li className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary">star</span>
                  Detailed Tajweed rules application
                </li>
                <li className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary">star</span>
                  Progress tracking and revision plans
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full bg-surface-container-low py-section-gap" id="pricing">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Invest in Your Knowledge</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Choose a plan that fits your schedule and learning goals. Transparent pricing with no hidden fees.</p>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-surface-container-lowest rounded-2xl p-12 border-2 border-primary shadow-ambient flex flex-col items-center max-w-2xl text-center">
                <span className="material-symbols-outlined text-primary text-[48px] mb-4">mail</span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Ready to Start Learning?</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                  Book a call with our contact person to discuss your learning goals and find the perfect plan for you.
                </p>
                <a href="mailto:albasoiracademy@gmail.com" className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-sm text-label-sm shadow-sm hover:bg-primary-container transition-colors inline-flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">send</span>
                  Email albasoiracademy@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <footer className="w-full py-section-gap px-margin-desktop flex flex-col items-center gap-gutter bg-primary dark:bg-primary-container full-width bottom-0 no-shadows">
        <div className="font-headline-md text-headline-md text-on-primary mb-4">
          Abu-Yahya School
        </div>
        <ul className="flex flex-wrap justify-center gap-6 mb-4">
          <li>
            <Link className="text-on-primary/80 dark:text-on-primary-container/80 hover:text-secondary-fixed transition-colors font-body-md text-body-md opacity-80 hover:opacity-100" href="#">Privacy Policy</Link>
          </li>
          <li>
            <Link className="text-on-primary/80 dark:text-on-primary-container/80 hover:text-secondary-fixed transition-colors font-body-md text-body-md opacity-80 hover:opacity-100" href="#">Terms of Service</Link>
          </li>
          <li>
            <Link className="text-on-primary/80 dark:text-on-primary-container/80 hover:text-secondary-fixed transition-colors font-body-md text-body-md opacity-80 hover:opacity-100" href="#">Contact Us</Link>
          </li>
          <li>
            <Link className="text-on-primary/80 dark:text-on-primary-container/80 hover:text-secondary-fixed transition-colors font-body-md text-body-md opacity-80 hover:opacity-100" href="#classes">Curriculum</Link>
          </li>
        </ul>
        <div className="text-on-primary/80 dark:text-on-primary-container/80 font-body-md text-body-md text-center max-w-xl">
          © {new Date().getFullYear()} Abu-Yahya Arabic School. Preserving Tradition through Excellence.
        </div>
      </footer>
    </div>
  );
}
