import React from "react";
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
export default function Bottom() {
  return (
    <>
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
