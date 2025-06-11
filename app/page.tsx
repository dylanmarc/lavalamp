import { EnvelopeIcon, DevicePhoneMobileIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import LavalampLogo from "../public/lavalamp-logo.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      {/* Hero */}
      <header className="text-center py-28 px-6 max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Gradient circle behind logo */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4 shadow-lg">
          <img src={LavalampLogo.src} alt="Lava Lamp Logo" className="w-10 h-auto filter invert" />
        </div>

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

        <a
          href="#contact"
          className="mt-12 inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
                     px-10 py-3 rounded-full font-semibold text-white shadow-lg hover:scale-105 
                     transition-transform duration-300"
        >
          Let’s Talk
        </a>
      </header>

      {/* Services */}
      <section className="px-6 py-20 max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {[
          {
            icon: <GlobeAltIcon className="h-10 w-10 text-indigo-400" />,
            title: "Websites",
            items: [
              "Static Sites",
              "Business Sites (CMS, forms)",
              "Ecommerce (Shopify, WooCommerce, custom)",
              "Custom Web Apps",
            ],
          },
          {
            icon: <EnvelopeIcon className="h-10 w-10 text-purple-400" />,
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
            className="bg-gray-800 rounded-xl p-8 border-1 border-indigo-400/20 shadow-lg hover:shadow-indigo-500/50 hover:scale-[1.03] transition-transform duration-300"
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
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-center py-24 px-6"
      >
        <h2 className="text-4xl font-bold mb-6">Ready to build?</h2>
        <p className="mb-10 text-gray-300 max-w-lg mx-auto">
          Email us or reach out to get started with your digital presence today.
        </p>
        <a
          href="mailto:you@example.com"
          className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 text-sm bg-gray-950">
        © {new Date().getFullYear()} LAVA LAMP
      </footer>
    </div>
  );
}
