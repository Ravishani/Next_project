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
import Link from "next/link";
export default function Header() {
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
                          <Link
                            key={i}
                            href={child.href}
                            className="block px-5 py-3 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link href={item.href} className="hover:text-black">
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Login */}
            <div className="hidden lg:block">
              <Link
                href="/auth/login"
                className="ve-cta-btn inline-flex items-center gap-2 text-white px-5 py-2 rounded-md transition"
              >
                Get Started
                <IconArrowRight size={16} />
              </Link>
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
    </>
  );
}
