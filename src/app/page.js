"use client";
import { useState } from "react";
import {
  IconMenu2,
  IconX,
  IconChevronDown,
  IconArrowRight,
  IconCircleCheck,
  IconBrandFacebook,
  IconChevronRight,
  IconMapPin,
  IconClockHour3,
  IconPhone,
  IconMessage,
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
      <nav className="sticky top-0 bg-white shadow z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-5">
            {/* Logo */}
            <a className="flex gap-4 items-center">
              <span className="p-3 text-[var(--ve-dark)] rounded-[8px] flex items-center font-[900] text-[20px] w-[38px] h-[38px] bg-[var(--ve-gold)]">
                D
              </span>
              <span className="text-[20px] text-[var(--ve-dark)] font-[700] uppercase">
                dream{" "}
                <span className="text-[var(--ve-gold)] font-[900]">
                  {" "}
                  techsloutions
                </span>
              </span>
            </a>

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
      <section className="relative py-[30px] z-[-1] bg-[url('/main/banner.png')] bg-cover bg-center bg-no-repeat lg:min-h-[450px] min-h-[350px] flex items-center">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-6 items-center">
            {/* 8 Columns */}
            <div className="lg:col-span-8">
              <h1 className="text-[35px]  lg:text-[66px] leading-[42px] lg:leading-[72px] text-white font-[900]">
                The <span className="text-[var(--ve-gold)]">React </span>
                Framework for the Web
              </h1>

              <p className="text-white mt-4">
                Used by some of the world's largest companies, Next.js enables
                you to create high-quality web applications with the power of
                React components.
              </p>
              <div className="lg:py-[20px] py-[20px]">
                <button className="ve-cta-btn ">Explore Services</button>
              </div>
              <div className="flex gap-8">
                <div className="border-r border-gray-600 pr-4">
                  <p className="text-[20px] sm:text-[25px] font-black text-white">
                    $4.2B+
                  </p>
                  <p className="text-[10px] sm:text-[12px] font-bold uppercase tracking-wider text-[var(--accents-5)]">
                    Assets Managed
                  </p>
                </div>
                <div className="border-r border-gray-600 pr-4">
                  <p className="text-[20px] sm:text-[25px] font-black text-white">
                    97%
                  </p>
                  <p className="text-[10px] sm:text-[12px] font-bold uppercase tracking-wider text-[var(--accents-5)]">
                    Client Satisfaction
                  </p>
                </div>
                <div className="">
                  <p className="text-[20px] sm:text-[25px] font-black text-white">
                    12+
                  </p>
                  <p className="text-[10px] sm:text-[12px] font-bold uppercase tracking-wider text-[var(--accents-5)]">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Columns */}
            <div className="lg:col-span-4">
              <Image
                src="/main/programmer-night.jpg"
                className="rounded hidden sm:block"
                alt="Hero Image"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="lg:py-[60px] py-[30px] bg-slate-100">
        <div className="mx-auto max-w-7xl w-full px-2 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 justify-between">
            {" "}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Image
                src="/main/about.jpg"
                alt="Hero Image"
                width={600}
                height={490}
                className="rounded w-[400px] lg:h-[480px] object-cover"
              />
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="py-1  px-3  bg-stone-200 rounded-[10px] text-[12px] uppercase text-[var(--ve-gold)] font-[700]">
                Featured
              </span>
              <h2 className="text-[35px] mt-4 font-[900] leading-[42px]">
                A Smarter Way to Manage
                <br />{" "}
                <span className="text-[var(--ve-gold)]">Your Money</span>{" "}
              </h2>
              <p>
                We combine deep financial expertise with cutting-edge technology
                to deliver outcomes that consistently outperform the market —
                all while keeping your interests first.
              </p>
              <ul className="py-[20px]">
                <li className="flex gap-1 py-2">
                  <span className="p-1">
                    <IconCircleCheck
                      className="text-[var(--ve-gold)]"
                      size={25}
                    />
                  </span>
                  <span>
                    <p className="text-[18px] font-[700]">
                      Personalised Strategy
                    </p>
                    <p>
                      Every plan is crafted specifically for your unique
                      financial situation.
                    </p>
                  </span>
                </li>
                <li className="flex gap-1 py-2">
                  <span className="p-1">
                    <IconCircleCheck
                      className="text-[var(--ve-gold)]"
                      size={25}
                    />
                  </span>
                  <span>
                    <p className="text-[18px] font-[700]">
                      Personalised Strategy
                    </p>
                    <p>
                      Every plan is crafted specifically for your unique
                      financial situation.
                    </p>
                  </span>
                </li>
                <li className="flex gap-1 py-2">
                  <span className="p-1">
                    <IconCircleCheck
                      className="text-[var(--ve-gold)]"
                      size={25}
                    />
                  </span>
                  <span>
                    <p className="text-[18px] font-[700]">
                      Personalised Strategy
                    </p>
                    <p>
                      Every plan is crafted specifically for your unique
                      financial situation.
                    </p>
                  </span>
                </li>
              </ul>
              <div className="lg:py-[10px] py-[10px]">
                <button className="ve-cta-btn ">Discover Our Story</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-[30px] lg:min-h-[300px] min-h-[350px] flex items-center bg-[url('/main/backgound.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,27,42,0.92)_60%,rgba(13,27,42,0.6))]" />

        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
            {/* Left Content */}
            <div className="lg:col-span-8">
              <h2 className="text-[35px] font-black leading-[42px] text-white">
                Ready to Take Control of Your{" "}
                <span className="text-[var(--ve-gold)]">Financial Future?</span>
              </h2>

              <p className="mt-4 text-white/90">
                Book a free 30-minute consultation with one of our certified
                financial advisors today.
              </p>
            </div>

            {/* Right Button */}
            <div className="lg:col-span-4 lg:text-right">
              <button className="bg-white text-black px-6 py-3 rounded-md font-semibold transition hover:bg-[var(--ve-gold)] hover:text-white">
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:py-[60px] py-[30px]">
        <div className="mx-auto max-w-7xl w-full px-2 sm:px-6 lg:px-8">
          <h2 className="text-[35px] font-black leading-[42px] text-center mb-3">
            Comprehensive Financial{" "}
            <span className="text-[var(--ve-gold)]">Solutions</span>
          </h2>
          <p className="text-center mb-5 pb-5">
            From wealth building to retirement security — we cover every stage
            of your financial journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-[10px] border border-dotted border-gray-300 bg-white bg-[url('/main/download.png')] bg-cover bg-no-repeat transition-all duration-300 hover:scale-[1.03]">
              <div className="p-4">
                <h2 className="mt-4 mb-3 text-[20px] font-bold text-white">
                  Investment Planning
                </h2>

                <p className="text-white">
                  Tailored portfolios built around your goals, risk appetite,
                  and investment horizon.
                </p>

                <div className="py-5">
                  <a href="" className="text-[var(--ve-gold)]">
                    Read More
                  </a>
                </div>
              </div>

              {/* Animated Bottom Border */}
              <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--ve-gold)] transition-all duration-500 group-hover:w-full"></span>
            </div>
             <div className="group relative overflow-hidden rounded-[10px] border border-dotted border-gray-300 bg-white bg-[url('/main/download.png')] bg-cover bg-no-repeat transition-all duration-300 hover:scale-[1.03]">
              <div className="p-4">
                <h2 className="mt-4 mb-3 text-[20px] font-bold text-white">
                  Wealth Management
                </h2>

                <p className="text-white">
                  Tailored portfolios built around your goals, risk appetite,
                  and investment horizon.
                </p>

                <div className="py-5">
                  <a href="" className="text-[var(--ve-gold)]">
                    Read More
                  </a>
                </div>
              </div>

              {/* Animated Bottom Border */}
              <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--ve-gold)] transition-all duration-500 group-hover:w-full"></span>
            </div>
             <div className="group relative overflow-hidden rounded-[10px] border border-dotted border-gray-300 bg-white bg-[url('/main/download.png')] bg-cover bg-no-repeat transition-all duration-300 hover:scale-[1.03]">
              <div className="p-4">
                <h2 className="mt-4 mb-3 text-[20px] font-bold text-white">
                  Retirement Plans
                </h2>

                <p className="text-white">
                  Tailored portfolios built around your goals, risk appetite,
                  and investment horizon.
                </p>

                <div className="py-5">
                  <a href="" className="text-[var(--ve-gold)]">
                    Read More
                  </a>
                </div>
              </div>

              {/* Animated Bottom Border */}
              <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--ve-gold)] transition-all duration-500 group-hover:w-full"></span>
            </div>
          </div>
          
        </div>
      </section>
      <footer className="text-[rgb(255,255,255,0.5)] pt-[60px]  bg-[var(--ve-dark)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:gap-6 gap-8">
            <div className="lg:col-span-4 ">
              <a className="flex gap-4 items-center pb-4">
                <span className="p-3 text-[var(--ve-dark)] rounded-[8px] flex items-center font-[900] text-[20px] w-[38px] h-[38px] bg-[var(--ve-gold)]">
                  D
                </span>
                <span className="text-[20px] text-white font-[700] uppercase">
                  dream{" "}
                  <span className="text-[var(--ve-gold)] font-[900]">
                    {" "}
                    techsloutions
                  </span>
                </span>
              </a>
              <p className="mb-4">
                Empowering individuals and businesses with intelligent financial
                strategies since 2012.
              </p>
              <ul className="flex gap-2">
                <li className="flex h-[40px] w-[40px] items-center justify-center rounded-lg bg-white/10 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] transition-all duration-300">
                  <IconBrandFacebook size={20} className="text-[--accents-5]" />
                </li>
                <li className="flex h-[40px] w-[40px] items-center justify-center rounded-lg bg-white/10 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] transition-all duration-300">
                  <IconBrandFacebook size={20} className="text-[--accents-5]" />
                </li>
                <li className="flex h-[40px] w-[40px] items-center justify-center rounded-lg bg-white/10 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] transition-all duration-300">
                  <IconBrandFacebook size={20} className="text-[--accents-5]" />
                </li>
                <li className="flex h-[40px] w-[40px] items-center justify-center rounded-lg bg-white/10 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] transition-all duration-300">
                  <IconBrandFacebook size={20} className="text-[--accents-5]" />
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h5 className="uppercase text-white font-[900] border-b border-white/50 pb-2 mb-5">
                Quick Links
              </h5>{" "}
              <ul>
                <li className="pb-3">
                  <a
                    href="/"
                    className="group flex items-center gap-1 transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="text-[var(--ve-gold)] font-[900]">
                      <IconChevronRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1 "
                      />
                    </span>
                    <span>Home</span>
                  </a>
                </li>
                <li className="pb-3">
                  <a
                    href="/"
                    className="group flex items-center gap-1 transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="text-[var(--ve-gold)] font-[900]">
                      <IconChevronRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1 "
                      />
                    </span>
                    <span>About Us</span>
                  </a>
                </li>
                <li className="pb-3">
                  <a
                    href="/"
                    className="group flex items-center gap-1 transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="text-[var(--ve-gold)] font-[900]">
                      <IconChevronRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1 "
                      />
                    </span>
                    <span>Services</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-3">
              <h5 className="uppercase text-white font-[900] border-b border-white/50 pb-2 mb-5">
                Our Services
              </h5>{" "}
              <ul>
                <li className="pb-3">
                  <a
                    href="/"
                    className="group flex items-center gap-1 transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="text-[var(--ve-gold)] font-[900]">
                      <IconChevronRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1 "
                      />
                    </span>
                    <span>Investment Planning</span>
                  </a>
                </li>
                <li className="pb-3">
                  <a
                    href="/"
                    className="group flex items-center gap-1 transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="text-[var(--ve-gold)] font-[900]">
                      <IconChevronRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1 "
                      />
                    </span>
                    <span>Wealth Management</span>
                  </a>
                </li>
                <li className="pb-3">
                  <a
                    href="/"
                    className="group flex items-center gap-1 transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="text-[var(--ve-gold)] font-[900]">
                      <IconChevronRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1 "
                      />
                    </span>
                    <span>Retirement Plans</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-3">
              <h5 className="uppercase text-white font-[900] border-b border-white/50 pb-2 mb-5">
                Get In Touch
              </h5>{" "}
              <ul>
                <li className="pb-3">
                  <a
                    href="/"
                    className="group flex items-center gap-2 transition-all duration-300"
                  >
                    <span className="text-[var(--ve-gold)] font-[900]">
                      <IconMapPin
                        size={20}
                        className="transition-transform duration-300"
                      />
                    </span>
                    <span>42 Harbor View, San Francisco, CA</span>
                  </a>
                </li>
                <li className="pb-3">
                  <a
                    href="/"
                    className="group flex items-center gap-2 transition-all duration-300"
                  >
                    <span className="text-[var(--ve-gold)] font-[900]">
                      <IconPhone
                        size={20}
                        className="transition-transform duration-300"
                      />
                    </span>
                    <span>+91 9555787844</span>
                  </a>
                </li>
                <li className="pb-3">
                  <a
                    href="/"
                    className="group flex items-center gap-2 transition-all duration-300"
                  >
                    <span className="text-[var(--ve-gold)] font-[900]">
                      <IconMessage
                        size={20}
                        className="transition-transform duration-300"
                      />
                    </span>
                    <span>hello@vaultedge.com</span>
                  </a>
                </li>
                <li className="pb-3">
                  <a
                    href="/"
                    className="group flex items-center gap-2 transition-all duration-300"
                  >
                    <span className="text-[var(--ve-gold)] font-[900]">
                      <IconClockHour3
                        size={20}
                        className="transition-transform duration-300"
                      />
                    </span>
                    <span>Mon–Fri, 9am – 6pm</span>
                  </a>
                </li>
              </ul>
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
