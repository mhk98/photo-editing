import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Logo from "public/images/logo.png";
import LogoLight from "public/images/logo-light.png";
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

const HeaderOne = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const [OffInfo, setOffInfo] = useState(false);

  const handleInfo = () => {
    setOffInfo(!OffInfo);
  };

  const closeInfo = () => {
    setOffInfo(false);
  };

  const closeNav = () => {
    setOpenNav(false);
    setOpenSubMenu(null);
  };

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
      setOffInfo(false);
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

  let logoSrc = Logo;

  const router = useRouter();

  const defaultClasses = "header";

  const getPageHeaderClass = (pathname: string): string => {
    if (pathname === "/index-dark") {
      logoSrc = LogoLight;
    }
    return "";
  };

  const headerClass = getPageHeaderClass(router.pathname);

  const combinedClasses = `${
    scrolled ? " header-active" : " "
  } ${headerClass} ${defaultClasses}`;

  return (
    <>
      <header className={combinedClasses}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="nav">
                <div className="nav__content">
                  <div className="nav__logo">
                    <Link href="/">
                      <Image priority src={logoSrc} alt="Logo" />
                    </Link>
                    <button
                      aria-label="open sidebar"
                      className={
                        "sidedot" + (OffInfo ? " sidedot-active" : " ")
                      }
                      onClick={handleInfo}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                  <div
                    className={
                      (openNav ? " nav__menu-active" : " ") + " nav__menu"
                    }
                  >
                    <div className="nav__menu-logo d-flex d-xl-none">
                      <Link href="/" className="text-center hide-nav">
                        <Image priority src={Logo} alt="Logo" />
                      </Link>
                      <a className="nav__menu-close" onClick={closeNav}>
                        <i className="fa-solid fa-xmark"></i>
                      </a>
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
                        <Link
                          className="nav__menu-link hide-nav"
                          href="about-us"
                        >
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
                                  <Image
                                    priority
                                    src={iconone}
                                    alt="Services"
                                  />
                                  <span>convert any format</span>
                                </Link>
                              </div>
                              <div className="mega-menu__single-item">
                                <Link href="service-details">
                                  <Image
                                    priority
                                    src={icontwo}
                                    alt="Services"
                                  />
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
                                  <Image
                                    priority
                                    src={iconfour}
                                    alt="Services"
                                  />
                                  <span>image crop</span>
                                </Link>
                              </div>
                              <div className="mega-menu__single-item">
                                <Link href="service-details">
                                  <Image
                                    priority
                                    src={iconfive}
                                    alt="Services"
                                  />
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
                        <ul
                          className={`nav__dropdown ${isSubMenuOpen("pages")}`}
                        >
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
                        <ul
                          className={`nav__dropdown ${isSubMenuOpen("blog")}`}
                        >
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
                      <li className="nav__menu-item d-block d-md-none">
                        <Link href="get-quote" className="btn btn--secondary">
                          Get A proposal
                        </Link>
                      </li>
                    </ul>
                    <ul className="social d-flex d-xl-none">
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
                    <div className="nav__uncollapsed-item d-none d-md-flex">
                      <Link href="get-quote" className="btn btn--secondary">
                        get a proposal
                      </Link>
                    </div>
                    <button
                      className={
                        (openNav ? " nav__bar-toggle" : " ") +
                        " nav__bar d-block d-xl-none"
                      }
                      onClick={handleNav}
                    >
                      <span className="icon-bar top-bar"></span>
                      <span className="icon-bar middle-bar"></span>
                      <span className="icon-bar bottom-bar"></span>
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div
          className={(openNav ? " backdrop-active" : " ") + " backdrop"}
          onClick={closeNav}
        ></div>
      </header>
      <div className={"off-canvas" + (OffInfo ? " off-canvas-active" : " ")}>
        <div className="off-canvas__inner">
          <div className="off-canvas__head">
            <Link href="/">
              <Image priority src={Logo} alt="Logo" />
            </Link>
            <button
              aria-label="close off canvas"
              className="off-canvas-close"
              onClick={closeInfo}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="offcanvas__search">
            <form action="#">
              <input
                type="text"
                placeholder="What are you searching for?"
                required
              />
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
          <div className="off-canvas__contact">
            <h4 className="h4">Contact Info</h4>
            <div className="single">
              <span>
                <i className="fa-solid fa-phone-volume"></i>
              </span>
              <Link href="tel:1-732-798-0976">+1 (732) 798-0976</Link>
            </div>
            <div className="single">
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <Link href="mailto:company.info@mail.com">
                company.info@mail.com
              </Link>
            </div>
            <div className="single">
              <span>
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <Link
                href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                target="_blank"
              >
                Vietnam Office: #5 Nguyentrai street, Vinh
              </Link>
            </div>
          </div>
          <ul className="social-side">
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
      </div>
      <div
        className={
          "off-canvas-backdrop" +
          (OffInfo ? " off-canvas-backdrop-active" : " ")
        }
        onClick={closeInfo}
      ></div>
    </>
  );
};

export default HeaderOne;
