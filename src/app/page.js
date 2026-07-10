"use client";
import { useState } from "react";
import {
  IconMenu2,
  IconX,
  IconChevronDown,
  IconArrowRight,
} from "@tabler/icons-react";
import Image from "next/image";
export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const menuItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Docs",
      children: [
        {
          title: "Documentation",
          href: "/documentation",
        },
        {
          title: "API Reference",
          href: "/api",
        },
        {
          title: "Guides",
          href: "/guides",
        },
      ],
    },
    {
      title: "Blog",
      children: [
        {
          title: "Latest Posts",
          href: "/blog",
        },
        {
          title: "News",
          href: "/news",
        },
      ],
    },
    {
      title: "Templates",
      children: [
        {
          title: "Next.js",
          href: "/templates/next",
        },
        {
          title: "React",
          href: "/templates/react",
        },
        {
          title: "Laravel",
          href: "/templates/laravel",
        },
      ],
    },
    {
      title: "Enterprise",
      children: [
        {
          title: "Solutions",
          href: "/enterprise",
        },
        {
          title: "Pricing",
          href: "/pricing",
        },
      ],
    },
    {
      title: "Showcase",
      children: [
        {
          title: "Customers",
          href: "/customers",
        },
        {
          title: "Gallery",
          href: "/gallery",
        },
      ],
    },
  ];
  return (
    <>
      <nav className="bg-white shadow relative z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-5">
            {/* Logo */}
            <img src="/main/next.svg" alt="Logo" className="max-w-[100px]" />

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-8 text-[var(--accents-5)]  font-[700]">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group">
                  {item.children ? (
                    <>
                      <button className="flex items-center gap-1 hover:text-black transition">
                        {item.title}
                        <IconChevronDown
                          size={16}
                          className="transition group-hover:rotate-180"
                        />
                      </button>

                      <div className="absolute left-0 top-full mt-4 w-56 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        {item.children.map((child, i) => (
                          <a
                            key={i}
                            href={child.href}
                            className="block px-5 py-3 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                          >
                            {child.title}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a href={item.href} className="hover:text-black">
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Login */}
            <div className="hidden lg:block">
              <a
                href=""
                className="ve-cta-btn text-white px-5 py-2 rounded-md transition"
              >
                Get Started <IconArrowRight size={16} />
              </a>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden"
            >
              {mobileMenu ? <IconX size={28} /> : <IconMenu2 size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenu && (
            <div className="lg:hidden border-t py-5">
              <ul className="space-y-3">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === index ? null : index,
                            )
                          }
                          className="flex justify-between items-center w-full py-2 font-medium"
                        >
                          {item.title}

                          <IconChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${
                              openDropdown === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {openDropdown === index && (
                          <ul className="pl-4 border-l ml-2 mt-2 space-y-2">
                            {item.children.map((child, i) => (
                              <li key={i}>
                                <a
                                  href={child.href}
                                  className="block py-2 text-gray-600 hover:text-black"
                                >
                                  {child.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <a href={item.href} className="block py-2 font-medium">
                        {item.title}
                      </a>
                    )}
                  </li>
                ))}

                <li className="pt-4">
                  <a
                    href="/login"
                    className="block text-center bg-black text-white py-3 rounded-md"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <section className="relative z-[-1] bg-[url('/main/banner.png')] bg-cover bg-center bg-no-repeat lg:min-h-[450px] min-h-[350px] flex items-center">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* 8 Columns */}
            <div className="lg:col-span-8">
              <h1 className="text-[35px] lg:text-[66px] leading-[42px] lg:leading-[72px] text-white font-[900]">
                The <span className="text-[var(--ve-gold)]">React </span>
                Framework for the Web
              </h1>

              <p className="text-white mt-4">
                Used by some of the world's largest companies, Next.js enables
                you to create high-quality web applications with the power of
                React components.
              </p>
              <div className="lg:py-[20px]">
                <button className="ve-cta-btn ">Explore Services</button>
              </div>
              <div className="flex gap-8">
                <div className="border-r border-gray-600 pr-4">
                  <p className="text-[25px] font-black text-white">$4.2B+</p>
                  <p className="text-[13px] font-bold uppercase tracking-wider text-[var(--accents-5)]">
                    Assets Managed
                  </p>
                </div>
                <div className="border-r border-gray-600 pr-4">
                  <p className="text-[25px] font-black text-white">97%</p>
                  <p className="text-[13px] font-bold uppercase tracking-wider text-[var(--accents-5)]">
                    Client Satisfaction
                  </p>
                </div>
                <div className="">
                  <p className="text-[25px] font-black text-white">12+</p>
                  <p className="text-[13px] font-bold uppercase tracking-wider text-[var(--accents-5)]">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Columns */}
            <div className="lg:col-span-4">
              <Image
                src="/main/programmer-night.jpg"
                className="rounded"
                alt="Hero Image"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="lg:py-[60px] py-[30px]">
        <div className="mx-auto max-w-7xl w-full px-2 sm:px-6 lg:px-8">
          <h2 className="text-[30px] font-bold mb-5 text-center">
            What's in Next.js?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-dotted border-gray-300 rounded-[10px] overflow-hidden bg-white bg-[url('/main/download.png')] bg-cover ">
              <div className="p-4">
                <img
                  src="/main/spheres-light.avif"
                  alt="Built-in Optimizations"
                  className="w-full h-[150px] object-contain rounded-md"
                />

                <h2 className="mt-4 text-white text-[20px] font-bold mb-3">
                  Built-in Optimizations
                </h2>

                <p className="text-gray-600 text-white">
                  Automatic Image, Font, and Script Optimizations for improved
                  UX and Core Web Vitals.
                </p>
                <div className="py-5">
                  <a
                    href=""
                    className="inline-block bg-blue-900 text-white px-5 py-2 rounded-md hover:bg-blue-800 transition duration-300"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company */}
            <div>
              <img
                src="/main/next.svg"
                alt="Logo"
                className="max-w-[180px] bg-white p-3 rounded-lg"
              />

              <p className="mt-5 text-gray-400 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, asperiores. We provide quality solutions for
                businesses with modern web technologies.
              </p>

              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-sky-500 flex items-center justify-center transition"
                >
                  <i className="fab fa-twitter"></i>
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition"
                >
                  <i className="fab fa-instagram"></i>
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-700 flex items-center justify-center transition"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>

              <ul className="space-y-3">
                {[
                  "Home",
                  "About Us",
                  "Services",
                  "Portfolio",
                  "Blog",
                  "Contact Us",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white duration-300 flex items-center gap-2"
                    >
                      <span>➜</span> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Our Services</h3>

              <ul className="space-y-3">
                {[
                  "Web Development",
                  "Mobile Apps",
                  "UI/UX Design",
                  "Digital Marketing",
                  "SEO Services",
                  "Consulting",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white duration-300 flex items-center gap-2"
                    >
                      <span>➜</span> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Info</h3>

              <div className="space-y-5 text-gray-400">
                <div className="flex gap-3">
                  <span>📍</span>
                  <p>New Delhi, India</p>
                </div>

                <div className="flex gap-3">
                  <span>📞</span>
                  <a href="tel:+919999999999" className="hover:text-white">
                    +91 99999 99999
                  </a>
                </div>

                <div className="flex gap-3">
                  <span>✉️</span>
                  <a
                    href="mailto:info@example.com"
                    className="hover:text-white"
                  >
                    info@example.com
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-8">
                <h4 className="font-semibold mb-3">Newsletter</h4>

                <div className="flex">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-l-md px-4 py-3 bg-gray-900 border border-gray-700 focus:outline-none"
                  />

                  <button className="bg-blue-600 hover:bg-blue-700 px-5 rounded-r-md">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Your Company. All Rights Reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-white">
                Privacy Policy
              </a>

              <a href="#" className="text-gray-500 hover:text-white">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
