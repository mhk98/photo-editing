import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import Logo from "public/images/logo.png";
import sOne from "public/images/services/two.png";
import sTwo from "public/images/services/three.png";
import sThree from "public/images/services/four.png";
import sFour from "public/images/services/five.png";
import sFive from "public/images/services/six.png";
import sSix from "public/images/services/one.png";
import iconone from "public/images/services/icon-one.png";
import icontwo from "public/images/services/icon-two.png";
import iconthree from "public/images/services/icon-three.png";
import iconfour from "public/images/services/icon-four.png";
import iconfive from "public/images/services/icon-five.png";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const HeaderTwo = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? " nav__dropdown-active" : " ";
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu ? " nav__menu-link--dropdown-active" : " ";
  };

  // window resize
  useEffect(() => {
    const handleResizeHeader = (): void => {
      setOpenNav(false);
      setOpenSubMenu(null);
    };

    window.addEventListener("resize", handleResizeHeader);

    return () => {
      window.removeEventListener("resize", handleResizeHeader);
    };
  }, []);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={
        "header header-two" +
        (scrolled ? " header-active header-two-active" : " ")
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="nav">
              <div className="nav__content">
                <div className="nav__logo">
                  <Link href="/">
                    <Image priority src={Logo} alt="Logo" />
                  </Link>
                </div>
                <div
                  className={
                    "nav__menu" + (openNav ? " nav__menu-active" : " ")
                  }
                >
                  <div className="nav__menu-logo d-flex">
                    <Link href="/" className="text-center hide-nav">
                      <Image priority src={Logo} alt="Logo" />
                    </Link>
                    <button
                      className="nav__menu-close"
                      onClick={() => setOpenNav(false)}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <ul className="nav__menu-items">
                    <li className="nav__menu-item nav__menu-item--dropdown">
                      <button
                        aria-label="dropdown menu container"
                        className={`nav__menu-link nav__menu-link--dropdown ${isSubMenuButton(
                          "home"
                        )}`}
                        onClick={() => handleSubmenu("home")}
                      >
                        Home
                      </button>
                      <div
                        className={`nav__dropdown nav__dropdown--alt ${isSubMenuOpen(
                          "home"
                        )}`}
                      >
                        <ul>
                          <li>
                            <Link
                              className="nav__dropdown-item hide-nav"
                              href="/"
                            >
                              Home 01
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="nav__dropdown-item hide-nav"
                              href="index-two"
                            >
                              Home 02
                            </Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link
                              className="nav__dropdown-item hide-nav"
                              href="index-dark"
                            >
                              Home 01 Dark
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="nav__dropdown-item hide-nav"
                              href="index-two-dark"
                            >
                              Home 02 Dark
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav__menu-item">
                      <Link className="nav__menu-link hide-nav" href="about-us">
                        About Us
                      </Link>
                    </li>
                    <li className="nav__menu-item nav__menu-item--dropdown">
                      <button
                        aria-label="dropdown menu container"
                        className={`nav__menu-link nav__menu-link--dropdown ${isSubMenuButton(
                          "services"
                        )}`}
                        onClick={() => handleSubmenu("services")}
                      >
                        Services
                      </button>
                      <div
                        className={`nav__dropdown mega-menu ${isSubMenuOpen(
                          "services"
                        )}`}
                      >
                        <div className="mega-menu__inner">
                          <div className="mega-menu__single">
                            <div className="mega-menu__single-head">
                              <h5 className="h5">Main Services</h5>
                            </div>
                            <div className="mega-menu__single-item">
                              <Link href="service-details">
                                <Image priority src={sOne} alt="Services" />
                                <span>Clipping path services</span>
                              </Link>
                            </div>
                            <div className="mega-menu__single-item">
                              <Link href="service-details">
                                <Image priority src={sTwo} alt="Services" />
                                <span>product color schem</span>
                              </Link>
                            </div>
                            <div className="mega-menu__single-item">
                              <Link href="service-details">
                                <Image priority src={sThree} alt="Services" />
                                <span>photo retouch</span>
                              </Link>
                            </div>
                            <div className="mega-menu__single-item">
                              <Link href="service-details">
                                <Image priority src={sFour} alt="Services" />
                                <span>Clipping path services</span>
                              </Link>
                            </div>
                            <div className="mega-menu__single-item">
                              <Link href="service-details">
                                <Image priority src={sFive} alt="Services" />
                                <span>photo colorize</span>
                              </Link>
                            </div>
                            <div className="mega-menu__single-item">
                              <Link href="service-details">
                                <Image priority src={sSix} alt="Services" />
                                <span>Clipping path services</span>
                              </Link>
                            </div>
                          </div>
                          <div className="mega-menu__single mega-menu__single-img">
                            <div className="mega-menu__single-head">
                              <h5 className="h5">Photo editing</h5>
                            </div>
                            <div className="mega-menu__single-item">
                              <Link href="service-details">
                                <Image priority src={iconone} alt="Services" />
                                <span>convert any format</span>
                              </Link>
                            </div>
                            <div className="mega-menu__single-item">
                              <Link href="service-details">
                                <Image priority src={icontwo} alt="Services" />
                                <span>photo enlarge</span>
                              </Link>
                            </div>
                            <div className="mega-menu__single-item">
                              <Link href="service-details">
                                <Image
                                  priority
                                  src={iconthree}
                                  alt="Services"
                                />
                                <span>image compress</span>
                              </Link>
                            </div>
                            <div className="mega-menu__single-item">
                              <Link href="service-details">
                                <Image priority src={iconfour} alt="Services" />
                                <span>image crop</span>
                              </Link>
                            </div>
                            <div className="mega-menu__single-item">
                              <Link href="service-details">
                                <Image priority src={iconfive} alt="Services" />
                                <span>Special tools</span>
                              </Link>
                            </div>
                          </div>
                          <div className="mega-menu__single mega-menu__single--alt">
                            <div className="rangu">
                              <ReactCompareSlider
                                itemOne={
                                  <ReactCompareSliderImage
                                    src="/images/services/before.png"
                                    alt="Image one"
                                  />
                                }
                                itemTwo={
                                  <ReactCompareSliderImage
                                    src="/images/services/after.png"
                                    alt="Image two"
                                  />
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav__menu-item nav__menu-item--dropdown">
                      <button
                        aria-label="dropdown menu container"
                        className={`nav__menu-link nav__menu-link--dropdown ${isSubMenuButton(
                          "pages"
                        )}`}
                        onClick={() => handleSubmenu("pages")}
                      >
                        Pages
                      </button>
                      <ul className={`nav__dropdown ${isSubMenuOpen("pages")}`}>
                        <li>
                          <Link
                            className="nav__dropdown-item hide-nav"
                            href="portfolio"
                          >
                            Portfolio
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav__dropdown-item hide-nav"
                            href="pricing"
                          >
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav__dropdown-item hide-nav"
                            href="teams"
                          >
                            Our Teams
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav__dropdown-item hide-nav"
                            href="get-quote"
                          >
                            Get A Quote
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav__dropdown-item hide-nav"
                            href="service-details"
                          >
                            Service Details
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav__dropdown-item hide-nav"
                            href="sign-in"
                          >
                            Sign In
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav__dropdown-item hide-nav"
                            href="sign-up"
                          >
                            Create Account
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav__menu-item nav__menu-item--dropdown">
                      <button
                        aria-label="dropdown menu container"
                        className={`nav__menu-link nav__menu-link--dropdown ${isSubMenuButton(
                          "blog"
                        )}`}
                        onClick={() => handleSubmenu("blog")}
                      >
                        Blog
                      </button>
                      <ul className={`nav__dropdown ${isSubMenuOpen("blog")}`}>
                        <li>
                          <Link
                            className="nav__dropdown-item hide-nav"
                            href="blog"
                          >
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav__dropdown-item hide-nav"
                            href="blog-single"
                          >
                            Blog Single
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav__menu-item">
                      <Link
                        className="nav__menu-link hide-nav"
                        href="contact-us"
                      >
                        Contact
                      </Link>
                    </li>
                    <li className="nav__menu-item d-block">
                      <Link href="get-quote" className="btn btn--primary">
                        Get A proposal
                      </Link>
                    </li>
                  </ul>
                  <ul className="social d-flex">
                    <li>
                      <Link href="/" aria-label="social media">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" aria-label="social media">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" aria-label="social media">
                        <i className="fa-brands fa-pinterest-p"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" aria-label="social media">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="nav__uncollapsed">
                  <button
                    aria-label="open sidebar"
                    className="sidedot-two"
                    onClick={() => handleNav()}
                  >
                    <span className="sidedot-inner">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div
        className={"backdrop" + (openNav ? " backdrop-active" : " ")}
        onClick={() => setOpenNav(false)}
      ></div>
    </header>
  );
};

export default HeaderTwo;
