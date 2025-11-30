import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";
import { config } from "../../constants/config";
import ProfileModal from "../atoms/ProfileModal";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    };

    if (profileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-5 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <p className="flex cursor-pointer text-[18px] font-bold text-white ">
            {config.html.title}
          </p>
        </Link>

        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-white" : "text-secondary"
              } cursor-pointer text-[18px] font-medium hover:text-white`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div ref={profileRef} className="relative hidden items-center sm:flex">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-700"
          >
            <img
              src={logo}
              alt={config.profile.name}
              className="h-9 w-9 rounded-full object-cover"
            />
          </button>

          {profileOpen && (
            <div className="black-gradient absolute right-0 top-14 w-72 rounded-lg border border-gray-700 p-4">
              <p className="mb-4 text-sm text-secondary">{config.profile.shortBio}</p>

              <div className="mb-4 flex gap-3">
                <a
                  href={config.profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
                  title="GitHub"
                >
                  <span className="text-xs font-bold">GH</span>
                </a>
                <a
                  href={config.profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
                  title="LinkedIn"
                >
                  <span className="text-xs font-bold">LI</span>
                </a>
                <a
                  href={config.profile.social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
                  title="LeetCode"
                >
                  <span className="text-xs font-bold">LC</span>
                </a>
              </div>

              <div className="space-y-2 border-t border-gray-700 pt-3">
                <a
                  href={`mailto:${config.profile.email}`}
                  className="block text-sm text-secondary hover:text-white"
                >
                  ✉ {config.profile.email}
                </a>
                <button
                  onClick={() => {
                    setShowModal(true);
                    setProfileOpen(false);
                  }}
                  className="w-full rounded bg-violet-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-violet-700"
                >
                  👤 View Profile
                </button>
                <a
                  href={config.profile.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded bg-gray-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-gray-600"
                >
                  📄 Resume
                </a>
              </div>
            </div>
          )}
        </div>
        <ProfileModal isOpen={showModal} onClose={() => setShowModal(false)} />

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] font-medium ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
