'use client';
import { use, useState } from 'react';
import { EnvelopeIcon, DevicePhoneMobileIcon, GlobeAltIcon, ArrowRightIcon, CheckIcon, ComputerDesktopIcon } from "@heroicons/react/24/solid";
import LavalampLogoColoured from "../public/lavalamp-logo-coloured.png";
import React from 'react';
import Nav from './nav';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
const [openFaq, setOpenFaq] = useState<number[]>([]);  // Change from number | null to number[]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch("https://formspree.io/f/xnnvdqrv", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      {/* Navigation */}
      <Nav />

      {/* Hero */}
      <header className="text-center py-28 px-6 max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Gradient circle behind logo */}
        <img src={LavalampLogoColoured.src} alt="Lava Lamp Logo" className="w-40 h-auto rounded-full flex items-center justify-center shadow-lg" />

        {/* Title and subheading */}
        <h1 className="text-6xl font-extrabold tracking-tight">
          LAVA LAMP
          <span className="block text-3xl font-light mt-2 text-gray-300 max-w-md mx-auto">
            Digital Presence Agency
          </span>
        </h1>

        <span className="block mt-2 h-1 w-32 mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full" />

        <p className="mt-4 text-xl text-gray-300 max-w-xl mx-auto">
          Websites, Social Media, and Apps — all tailored for your business.
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
                       px-10 py-3 rounded-full font-semibold text-white shadow-lg hover:scale-105 
                       transition-transform duration-300"
          >
            Let's Talk
          </a>
          {/* <a
            href="#work"
            className="inline-block border border-gray-600 px-10 py-3 rounded-full font-semibold 
                       text-white shadow-lg hover:bg-gray-700 transition-colors duration-300"
          >
            View Work
          </a> */}
        </div>
      </header>

      {/* Services */}
      <section id="services" className="px-6 py-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              icon: <ComputerDesktopIcon className="h-10 w-10 text-indigo-400" />,
              title: "Websites",
              items: [
                "Static Sites",
                "Business Sites (CMS, forms)",
                "Ecommerce (Shopify, WooCommerce, custom)",
                "Custom Web Apps",
              ],
            },
            {
              icon: <GlobeAltIcon className="h-10 w-10 text-purple-400" />,
              title: "Social Media",
              items: [
                "Account Setup",
                "Content & Posting",
                "Ad Campaigns",
                "Analytics & Optimization",
              ],
            },
            {
              icon: <DevicePhoneMobileIcon className="h-10 w-10 text-pink-400" />,
              title: "Apps",
              items: [
                "Internal Tools",
                "Customer-Facing Apps",
                "Cross-Platform (Web/Mobile)",
              ],
            },
          ].map(({ icon, title, items }) => (
            <div
              key={title}
              className="bg-gray-800 rounded-xl p-8 border-1 border-indigo-400/20 shadow-lg hover:shadow-indigo-500/50 hover:scale-[1.03] transition-all duration-300"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{title}</h3>
              <ul className="text-gray-300 list-disc list-inside space-y-1">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
      <div className="px-10 py-10 bg-gray-800/50 rounded-2xl border-1 border-indigo-400/20">
        <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>

        <div className="grid md:grid-cols-4 gap-5 relative">
          {[
            { step: "01", title: "Discovery", desc: "We learn about your business and goals" },
            { step: "02", title: "Strategy", desc: "We create a tailored digital strategy" },
            { step: "03", title: "Development", desc: "We build your digital presence" },
            { step: "04", title: "Launch", desc: "We deploy and optimize your solution" },
          ].map((item, idx, arr) => (
            <div key={item.step} className="text-center flex flex-col items-center relative">
              {/* Step Circle */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-xl font-bold mb-4 z-10 shadow-lg">
                {item.step}
              </div>

              {/* Connector */}
              {idx < arr.length - 1 && (
                <div className="hidden md:block absolute right-0 top-8 w-full h-0.5">
                  <div className="absolute left-1/2 translate-x-[3.5rem] w-[calc(100%-5.5rem)] h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 opacity-60"></div>
                </div>
              )}

              {/* Text */}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>

              {/* Mobile vertical line */}
              {idx < arr.length - 1 && (
                <div className="md:hidden w-1 h-20 bg-gradient-to-b from-purple-500 to-pink-500 opacity-60 mt-4 mb-2"></div>
              )}
            </div>
          ))}
        </div>
        </div>
      </section>


      {/* Portfolio */}
      {/* <section id="work" className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Our Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Ecommerce Store",
              desc: "Custom Shopify store with integrated inventory system",
              tags: ["Ecommerce", "Shopify", "UI/UX"]
            },
            {
              title: "Restaurant Website",
              desc: "Interactive menu with online ordering system",
              tags: ["Web Design", "CMS", "Responsive"]
            },
            {
              title: "Mobile App",
              desc: "Cross-platform fitness tracking application",
              tags: ["React Native", "Mobile", "Health"]
            },
            {
              title: "Corporate Portal",
              desc: "Internal tools for employee management",
              tags: ["Web App", "Dashboard", "Custom"]
            },
            {
              title: "Social Media Campaign",
              desc: "Viral marketing campaign for new product launch",
              tags: ["Social", "Marketing", "Ads"]
            },
            {
              title: "Brand Website",
              desc: "Complete digital presence for fashion brand",
              tags: ["Branding", "Web Design", "Content"]
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-colors duration-300 group"
            >
              <div className="h-48 bg-gradient-to-r from-indigo-900/50 via-purple-900/50 to-pink-900/50 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400 group-hover:text-white transition-colors">Project Preview</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs bg-gray-700 px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <section id="testimonials" className="px-6 py-20 bg-gray-800/50">
        <h2 className="text-4xl font-bold text-center mb-16 max-w-6xl mx-auto">Client Testimonials</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "Lava Lamp transformed our online presence. Our website traffic increased by 300%!",
              name: "Sarah Johnson",
              company: "Bella Boutique"
            },
            {
              quote: "The team delivered our app ahead of schedule with exceptional quality. Highly recommend!",
              name: "Michael Chen",
              company: "FitTrack"
            },
            {
              quote: "Their social media strategy tripled our engagement in just two months.",
              name: "David Rodriguez",
              company: "Urban Eats"
            }
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/70 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors duration-300"
            >
              <div className="text-purple-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Contact Form */}
      <section
        id="contact"
        className="px-6 py-24 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900"
      >
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Ready to build?</h2>
            <p className="mb-6 text-gray-300">
              Fill out the form and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="h-5 w-5 text-purple-300" />
                <a href="mailto:contact@lavalampdigital.com" className="hover:text-purple-300 transition-colors">
                  contact@lavalampdigital.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <DevicePhoneMobileIcon className="h-5 w-5 text-purple-300" />
                <a href="tel:+61434631789" className="hover:text-purple-300 transition-colors">
                  +61 434 631 789
                </a>
              </div>
            </div>
          </div>

          {submitSuccess ? (
            <div className="bg-gray-800/30 p-8 rounded-xl border border-purple-500/30 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-teal-400 flex items-center justify-center mb-6">
                <CheckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-gray-300 mb-6">We'll get back to you as soon as possible.</p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="text-purple-300 hover:text-white flex items-center gap-1 transition-colors"
              >
                Send another message <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-800/30 p-8 rounded-xl border border-purple-500/30">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="mb-8">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
                           px-6 py-3 rounded-lg font-semibold text-white shadow-lg hover:opacity-90 
                           transition-opacity duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <div className="space-y-4">
            {[
            {
              question: "How long does a typical project take?",
              answer: "Project timelines vary based on scope, but most websites take 4-8 weeks from start to launch. We'll provide a detailed timeline after our initial consultation."
            },
            {
              question: "What's your pricing structure?",
              answer: "We offer both fixed-price projects for well-defined scopes and hourly rates for ongoing work. After discussing your needs, we'll provide transparent pricing options."
            },
            {
              question: "Do you provide ongoing support?",
              answer: "Yes! We offer maintenance plans and ongoing support packages to keep your digital presence running smoothly after launch."
            },
            {
              question: "Can you work with our existing design/development?",
              answer: "Absolutely. We're happy to audit existing work and either improve upon it or integrate with your current systems."
            }
            ].map((faq, index) => {
            const isOpen = Array.isArray(openFaq)
              ? openFaq.includes(index)
              : false;

            return (
              <div key={index} className="border-b border-gray-700 pb-4">
              <button
                type="button"
                className="flex justify-between items-center w-full text-left group focus:outline-none"
                onClick={() => {
                  setOpenFaq(prev => 
                    prev.includes(index) 
                      ? prev.filter(i => i !== index) 
                      : [...prev, index]
                  );
                }}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-medium text-gray-200 group-hover:text-purple-300 transition-colors py-2">
                {faq.question}
                </h3>
                <svg
                className={`w-5 h-5 text-gray-400 transform transition-transform ${isOpen ? "rotate-90" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
                </svg>
              </button>
              {isOpen && (
                <div
                className="text-gray-400 mt-2"
                id={`faq-answer-${index}`}
                >
                <p>{faq.answer}</p>
                </div>
              )}
              </div>
            );
            })}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={LavalampLogoColoured.src} alt="Lava Lamp Logo" className="w-8 h-auto" />
              <span className="text-xl font-bold">LAVA LAMP</span>
            </div>
            <p className="text-gray-400">Digital presence solutions tailored for your business.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">App Development</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Digital Strategy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-300 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Our Work</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              {/* <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a> */}
            </div>
            {/* <p className="text-gray-400">Subscribe to our newsletter</p>
            <div className="mt-2 flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-purple-500 w-full"
              />
              <button className="bg-purple-600 px-4 py-2 rounded-r-lg hover:bg-purple-700 transition-colors">
                Join
              </button>
            </div> */}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Lava Lamp Digital. All rights reserved.
        </div>
      </footer>
    </div>
  );
}