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
import Header from "@/Header";
import Bottom from "@/Bottom";
export default function Home() {
 
  return (
    <>
     <Header />
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
     <Bottom/>
    </>
  );
}
