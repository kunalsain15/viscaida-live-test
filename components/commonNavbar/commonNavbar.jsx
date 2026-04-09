"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";

const CommonNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState("");
  const [activeMenu, setActiveMenu] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileSocialOpen, setMobileSocialOpen] = useState(false);
  const [mobileForecastingOpen, setMobileForecastingOpen] = useState(false);
  const [mobileCustomOpen, setMobileCustomOpen] = useState(false);
  const [mobileMarketOpen, setMobileMarketOpen] = useState(false);
  const [mobileCaseStudiesOpen, setMobileCaseStudiesOpen] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [events, setEvents] = useState([]);
  const [webinars, setWebinars] = useState([]);
  const [mobileEventsWebinarsOpen, setMobileEventsWebinarsOpen] =
    useState(false);
  const [isDropdownItemClickedcasestudy, setIsDropdownItemClickedcasestudy] =
    useState(false);
  const [isDropdownItemClickedviscadia, setIsDropdownItemClickedviscadia] =
    useState(false);
  const [isDropdownItemClicked, setIsDropdownItemClicked] = useState("");

  const [
    isDropdownItemClickedforecasting,
    setIsDropdownItemClickedforecasting,
  ] = useState("");
  const [isSocialImpact, setIsSocialImpact] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  const [mobileWebinarsOpen, setMobileWebinarsOpen] = useState(false);
  const [mobileJoinOpen, setMobileJoinOpen] = useState(false);

  const pathname = usePathname();

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };
  useEffect(() => {
    if (
      pathname === "/expertise" ||
      pathname === "/forecasting-solutions" ||
      pathname === "/market-research" ||
      pathname === "/demand-studies" ||
      pathname === "/models-and-platforms" ||
      pathname === "/cycle-support" ||
      pathname === "/therapeutic-areas" ||
      pathname === "/who-we-serve"
    ) {
      setActiveTab("Forecasting Expertise");
    } else if (
      pathname === "/case-studies" ||
      pathname === "/case-studies#case-study" ||
      pathname === "/case-studies#white-paper"
    ) {
      setActiveTab("Case Studies & White Papers");
    } else if (
      pathname === "/events" ||
      pathname.startsWith("/events/") ||
      pathname === "/webinars" ||
      pathname.startsWith("/webinars/")
    ) {
      setActiveTab("Events & Webinars");
    } else if (
      pathname === "/about-us" ||
      pathname === "/core-values" ||
      pathname === "/social-impact" ||
      pathname === "/charity-water" ||
      pathname === "/viscadia-volunteers" ||
      pathname === "/news-press-releases"
    ) {
      setActiveTab("About Viscadia");
    } else if (pathname === "/leadership") {
      setActiveTab("Leadership");
    } else if (
      pathname === "/life-at-viscadia" ||
      pathname === "/careers" ||
      pathname === "/join-viscadia"
    ) {
      setActiveTab("Join Viscadia");
    } else {
      setActiveTab("");
    }
  }, [pathname]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const eventsItems = [
    "Events",
    "INTELLUS INSTITUTE 2025",
    "FPW 2025",
    "BIO 2025",
    "PMSA USA 2025",
    "PMRC EU 2025",
    "INTELLUS SUMMIT 2025",
    "PMRC USA 2025",
    "NPP 2024",
  ];
  const webinarsItems = [
    "Webinars",
    "Unpacking Vaccine Forecasting",
    "EU Pharma and MedTech Forecasts",
    "Global MedTech Forecasts",
    "Cervical Cancer Forecasts",
    "Early-Stage Risk Forecasts",
    "Begin With The End",
    "Estimating Bolus Patients",
    "Breast Cancer Forecasting",
  ];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("https://api.viscadia.com/api/v1/events");
        if (res.data?.success) {
          setEvents(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        const res = await axios.get("https://api.viscadia.com/api/v1/webinar");
        if (res.data?.success) {
          setWebinars(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching webinars:", error);
      }
    };
    fetchWebinars();
  }, []);
  return (
   <div className="fixed sm:h-auto sm:pt-0 pt-1 top-0 left-0 right-0 bg-white z-82 shadow-[0_2px_6.6px_0_#00000014]">
      <div className="container max-w-7xl px-2 md:px-2 mx-auto navbarmain items-center justify-center">
        <div className="relative">
          <nav className="navbarsight relative z-50">
            <div className="mx-auto">
              <div className="flex justify-between mx-auto cursor-pointer items-center">
                <div className="w-[20px] opacity-0 md:hidden block"></div>
                <div className="flex items-center">
                  <Link href={"/"}>
                    <img
                      src="/viscadiupdate.png"
                      className="logonavbar object-contain cursor-pointer"
                      alt="Flowbite Logo"
                    />
                  </Link>
                </div>
                <button
                  onClick={toggleMobileMenu}
                  className="p-1 hamburger"
                >
                  {isMobileMenuOpen ? (
                    <svg
                      className="w-6 h-6 text-[#4A4E51]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-[#4A4E51]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>

                {/* Desktop Menu */}
                <div className="desktophead mx-auto flex items-center gap-6">
                  <div className="desktopmenu ml-6 mx-auto desktopmenu_max_size flex items-center">
                    <div
                      className="relative group"
                      onMouseEnter={() => handleMouseEnter("about")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        href={"/about-us"}
                        onClick={() => {
                          handleTabClick("About Viscadia");
                          setIsDropdownItemClicked(false);
                        }}
                        className={`relative inline-block headevents [word-spacing:1px] py-5 tracking-normal text-base font-normal ${activeTab === "About Viscadia"
                          ? 'text-black font-normal after:content-[""] after:absolute after:left-0 after:bottom-3 after:h-[3px] after:w-full after:bg-black'
                          : 'text-[#BD302B] group-hover:text-black group-hover:after:content-[""] group-hover:after:absolute group-hover:after:left-0 group-hover:after:bottom-3 group-hover:after:h-[3px] group-hover:after:w-full group-hover:after:bg-black'
                          }`}
                      >
                        About Viscadia
                      </Link>

                      {activeDropdown === "about" && (
                        <div className="absolute tracking-normal top-[65px] left-0 w-max bg-white shadow-xl z-50">
                          {/* Core Values */}
                          <Link
                            href="/core-values"
                            onClick={() => {
                              setIsDropdownItemClicked("core-values");
                              setActiveTab("About Viscadia");
                            }}
                            className={`block px-4 py-1 text-sm whitespace-nowrap ${isDropdownItemClicked === "core-values"
                              ? "text-black font-normal"
                              : "text-[#63666A] font-normal hover:text-[#BD302B]"
                              }`}
                          >
                            Our Core Values
                          </Link>

                          <div className="relative group/social">
                            <Link
                              href="/social-impact"
                              onClick={() => {
                                setIsDropdownItemClicked("social-impact");
                                setActiveTab("About Viscadia");
                              }}
                              className={`block px-4 py-1 text-sm whitespace-nowrap ${isDropdownItemClicked === "social-impact"
                                ? "text-black font-normal"
                                : "text-[#63666A] font-normal hover:text-[#BD302B]"
                                }`}
                            >
                              Social Impact
                            </Link>

                            <div className="absolute top-0 ms-[2px] left-full hidden group-hover/social:block bg-white shadow-xl w-max z-50">
                              <Link
                                href="/charity-water"
                                onClick={() => {
                                  setIsDropdownItemClicked("charity-water");
                                  setActiveTab("About Viscadia");
                                }}
                                className={`block px-4 py-1 text-sm whitespace-nowrap ${isDropdownItemClicked === "charity-water"
                                  ? "text-black font-normal"
                                  : "text-[#63666A] font-normal hover:text-[#BD302B]"
                                  }`}
                              >
                                Charity:water
                              </Link>

                              <Link
                                href="/viscadia-volunteers"
                                onClick={() => {
                                  setIsDropdownItemClicked(
                                    "viscadia-volunteers"
                                  );
                                  setActiveTab("About Viscadia");
                                }}
                                className={`block px-4 py-1 text-sm whitespace-nowrap ${isDropdownItemClicked ===
                                  "viscadia-volunteers"
                                  ? "text-black font-normal"
                                  : "text-[#63666A] font-normal hover:text-[#BD302B]"
                                  }`}
                              >
                                Viscadia Volunteers
                              </Link>
                            </div>
                          </div>
                          <Link
                            href="/news-press-releases"
                            onClick={() => {
                              setIsDropdownItemClicked("news-press-releases");
                              setActiveTab("About Viscadia");
                            }}
                            className={`block px-4 py-1 text-sm whitespace-nowrap ${isDropdownItemClicked === "news-press-releases"
                              ? "text-black font-normal"
                              : "text-[#63666A] font-normal hover:text-[#BD302B]"
                              }`}
                          >
                            Latest News and Press Releases
                          </Link>
                        </div>
                      )}
                    </div>

                    <div
                      className="relative group"
                      onMouseEnter={() => handleMouseEnter("forecasting")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        href={"/expertise"}
                        onClick={() => {
                          handleTabClick("Forecasting Expertise");
                          setIsDropdownItemClickedforecasting("");
                        }}
                        className={`relative inline-block [word-spacing:1px] py-5 text-base font-normal ${activeTab === "Forecasting Expertise"
                          ? 'text-black font-light after:content-[""] after:absolute after:left-0 after:bottom-3 after:h-[3px] after:w-full after:bg-black'
                          : 'text-[#BD302B] group-hover:text-black group-hover:after:content-[""] group-hover:after:absolute group-hover:after:left-0 group-hover:after:bottom-3 group-hover:after:h-[3px] group-hover:after:w-full group-hover:after:bg-black'
                          }`}
                      >
                        Forecasting Expertise
                      </Link>

                      {activeDropdown === "forecasting" && (
                        <div className="absolute tracking-wide top-[65px] left-0 w-max bg-white shadow-xl z-50">
                          <div className="relative group/custom">
                            <Link
                              href="/forecasting-solutions"
                              onClick={() => {
                                setIsDropdownItemClickedforecasting(
                                  "forecasting-solutions"
                                );
                                setActiveTab("Forecasting Expertise");
                              }}
                              className={`block px-4 py-1 text-sm whitespace-nowrap ${isDropdownItemClickedforecasting ===
                                "forecasting-solutions"
                                ? "text-black font-normal"
                                : "text-[#63666A] hover:text-[#BD302B]"
                                }`}
                            >
                              Custom Forecasting Solutions
                            </Link>

                            <div className="absolute top-0 ms-[2px] left-full hidden group-hover/custom:block bg-white shadow-xl w-max z-50">
                              <div className="relative group/market">
                                <Link
                                  href="/market-research"
                                  onClick={() => {
                                    setIsDropdownItemClickedforecasting(
                                      "market-research"
                                    );
                                    setActiveTab("Forecasting Expertise");
                                  }}
                                  className={`block px-4 py-1 text-sm whitespace-nowrap ${isDropdownItemClickedforecasting ===
                                    "market-research"
                                    ? "text-black font-normal"
                                    : "text-[#63666A] hover:text-[#BD302B]"
                                    }`}
                                >
                                  Market Research
                                </Link>

                                <div className="absolute top-0 ms-[2px] left-full hidden group-hover/market:block bg-white shadow-xl w-max z-50">
                                  <Link
                                    href="/demand-studies"
                                    onClick={() => {
                                      setIsDropdownItemClickedforecasting(
                                        "demand-studies"
                                      );
                                      setActiveTab("Forecasting Expertise");
                                    }}
                                    className={`block px-4 py-1 text-sm whitespace-nowrap ${isDropdownItemClickedforecasting ===
                                      "demand-studies"
                                      ? "text-black font-normal"
                                      : "text-[#63666A] hover:text-[#BD302B]"
                                      }`}
                                  >
                                    Demand Studies
                                  </Link>
                                </div>
                              </div>

                              <Link
                                href="/models-and-platforms"
                                onClick={() => {
                                  setIsDropdownItemClickedforecasting(
                                    "models-and-platforms"
                                  );
                                  setActiveTab("Forecasting Expertise");
                                }}
                                className={`block px-4 py-1 text-sm whitespace-nowrap ${isDropdownItemClickedforecasting ===
                                  "models-and-platforms"
                                  ? "text-black font-normal"
                                  : "text-[#63666A] hover:text-[#BD302B]"
                                  }`}
                              >
                                Models & Platform
                              </Link>

                              <Link
                                href="/cycle-support"
                                onClick={() => {
                                  setIsDropdownItemClickedforecasting(
                                    "cycle-support"
                                  );
                                  setActiveTab("Forecasting Expertise");
                                }}
                                className={`block px-4 py-1 text-sm whitespace-nowrap ${isDropdownItemClickedforecasting ===
                                  "cycle-support"
                                  ? "text-black font-normal"
                                  : "text-[#63666A] hover:text-[#BD302B]"
                                  }`}
                              >
                                Cycle Support
                              </Link>
                            </div>
                          </div>

                          <Link
                            href="/therapeutic-areas"
                            onClick={() => {
                              setIsDropdownItemClickedforecasting(
                                "therapeutic-areas"
                              );
                              setActiveTab("Forecasting Expertise");
                            }}
                            className={`block px-4 py-1 text-sm whitespace-nowrap ${isDropdownItemClickedforecasting ===
                              "therapeutic-areas"
                              ? "text-black font-normal"
                              : "text-[#63666A] hover:text-[#BD302B]"
                              }`}
                          >
                            Forecasting in Therapeutic Areas
                          </Link>

                          <Link
                            href="/who-we-serve"
                            onClick={() => {
                              setIsDropdownItemClickedforecasting(
                                "who-we-serve"
                              );
                              setActiveTab("Forecasting Expertise");
                            }}
                            className={`block px-4 py-1 text-sm whitespace-nowrap ${isDropdownItemClickedforecasting ===
                              "who-we-serve"
                              ? "text-black font-normal"
                              : "text-[#63666A] hover:text-[#BD302B]"
                              }`}
                          >
                            Who We Serve – Clients and Partners
                          </Link>
                        </div>
                      )}
                    </div>

                    <div
                      className="relative group"
                      onMouseEnter={() => handleMouseEnter("casestudies")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link href="/case-studies"
                  
                          onClick={() => {
                            handleTabClick("Case Studies & White Papers");
                            setIsDropdownItemClickedcasestudy(false);
                          }}
                          className={`relative [word-spacing:1px] inline-block py-5 text-base font-normal ${activeTab === "Case Studies & White Papers"
                            ? 'text-black font-light after:content-[""] after:absolute after:left-0 after:bottom-3 after:h-[3px] after:w-full after:bg-black'
                            : 'text-[#BD302B] group-hover:text-black group-hover:after:content-[""] group-hover:after:absolute group-hover:after:left-0 group-hover:after:bottom-3 group-hover:after:h-[3px] group-hover:after:w-full group-hover:after:bg-black'
                            }`}
                        >
                          Case Studies & White Papers
              
                      </Link>

                      {activeDropdown === "casestudies" && (
                        <div className="absolute tracking-normal top-[65px] left-0 w-max bg-white shadow-xl z-50">
                          <Link
                            href="/case-studies#case-study"
                            onClick={() => {
                              setIsDropdownItemClickedcasestudy("case-study");
                              setActiveTab("Case Studies & White Papers");
                            }}
                            className={`block px-4 py-1 text-sm whitespace-nowrap ${isDropdownItemClickedcasestudy === "case-study"
                              ? "text-black font-normal"
                              : "text-[#63666A] font-normal hover:text-[#BD302B]"
                              }`}
                          >
                            Case Studies
                          </Link>
                          <Link
                            href="/case-studies#white-paper"
                            onClick={() => {
                              setIsDropdownItemClickedcasestudy("white-paper");
                              setActiveTab("Case Studies & White Papers");
                            }}
                            className={`block px-4 py-1 text-sm whitespace-nowrap ${isDropdownItemClickedcasestudy === "white-paper"
                              ? "text-black font-normal"
                              : "text-[#63666A] font-normal hover:text-[#BD302B]"
                              }`}
                          >
                            White Papers
                          </Link>
                        </div>
                      )}
                    </div>
                    {/* Leadership */}
                    <div
                      className="relative group"
                      onMouseEnter={() => handleMouseEnter("leadership")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link href="/leadership/"
                        // <span
                          onClick={() => handleTabClick("Leadership")}
                          className={`relative [word-spacing:1px] font-normal inline-block py-5 text-base ${activeTab === "Leadership"
                            ? 'text-black font-light after:content-[""] after:absolute after:left-0 after:bottom-3 after:h-[3px] after:w-full after:bg-black'
                            : 'text-[#BD302B] font-normal group-hover:text-black group-hover:after:content-[""] group-hover:after:absolute group-hover:after:left-0 group-hover:after:bottom-3 group-hover:after:h-[3px] group-hover:after:w-full group-hover:after:bg-black'
                            }`}
                        >
                          Leadership
                        {/* </span> */}
                      </Link>
                    </div>
                    <div
                      className="relative group eventsrepsonsive"
                      onMouseEnter={() => handleMouseEnter("events")}
                      onMouseLeave={handleMouseLeave}
                    >
                     <Link href=""
                        onClick={() => handleTabClick("Events & Webinars")}
                        className={`relative [word-spacing:1px] cursor-pointer inline-block py-5 text-base ${activeTab === "Events & Webinars"
                          ? 'text-black font-normal after:content-[""] after:absolute after:left-0 after:bottom-3 after:h-[3px] after:w-full after:bg-black'
                          : 'text-[#BD302B] font-normal group-hover:text-black group-hover:after:content-[""] group-hover:after:absolute group-hover:after:left-0 group-hover:after:bottom-3 group-hover:after:h-[3px] group-hover:after:w-full group-hover:after:bg-black'
                          }`}
                      >
                        Events & Webinars
                      {/* </span> */}
                      {activeDropdown === "events" && (
                        <div className="absolute cursor-pointer tracking-normal top-[65px] left-0 w-max bg-white shadow-xl z-50 group-hover:block">
                          <div className="relative group/custom">
                            <Link
                              href="/events"
                              onClick={() => setIsDropdownItemClicked("events")}
                              className={`block px-4 py-1 text-sm whitespace-nowrap ${isDropdownItemClicked === "events"
                                ? "text-black font-normal"
                                : "text-[#63666A] hover:text-[#BD302B]"
                                }`}
                            >
                              Events
                            </Link>

                            <div className="absolute top-0 left-full ms-[2px] hidden group-hover/custom:block bg-white shadow-xl w-max z-50">
                              {events?.map((event) => (
                                <Link
                                  key={event.id}
                                  href={`/events/${event.slug}`}
                                  onClick={() =>
                                    setIsDropdownItemClicked(event.slug)
                                  }
                                  className={`block px-4 py-1 text-sm whitespace-nowrap  ${isDropdownItemClicked === event.slug
                                    ? "text-black font-normal"
                                    : "text-[#63666A] hover:text-[#BD302B]"
                                    }`}
                                >
                                  {event.title}
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div className="relative z-[9999] group/custom">
                            <Link
                              href="/webinars"
                              onClick={() =>
                                setIsDropdownItemClicked("webinars")
                              }
                              className={`block px-4 py-1 text-sm whitespace-nowrap ${isDropdownItemClicked === "webinars"
                                ? "text-black font-normal"
                                : "text-[#63666A] hover:text-[#BD302B]"
                                }`}
                            >
                              Webinars
                            </Link>

                            <div className="absolute top-0 left-full  ms-[2px] hidden group-hover/custom:block bg-white shadow-xl w-max z-50">
                              {/* {webinars?.map((Webinar) => (
                                <Link
                                  key={Webinar.id}
                                  href={`/webinars/${Webinar.slug}`}
                                  className="block px-4 py-1 text-sm whitespace-nowrap text-[#63666A] hover:text-[#BD302B] capitalize"
                                >
                                  {Webinar.slug.replace(/-/g, " ")}
                                </Link>
                              ))} */}
                              {webinars?.map((Webinar) => (
                                <Link
                                  key={Webinar.id}
                                  href={`/webinars/${Webinar.slug}`}
                                  onClick={() =>
                                    setIsDropdownItemClicked(Webinar.slug)
                                  }
                                  className={`block px-4 py-1 text-sm whitespace-nowrap  ${isDropdownItemClicked === Webinar.slug
                                    ? "text-black font-normal"
                                    : "text-[#63666A] hover:text-[#BD302B]"
                                    }`}
                                >
                                  {Webinar.sub_heading}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                     </Link>
                    </div>
                    <div
                      className="relative group eventsrepsonsive"
                      onMouseEnter={() => handleMouseEnter("join")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        href={"/join-viscadia"}
                        onClick={() => {
                          handleTabClick("Join Viscadia");
                          setIsDropdownItemClickedviscadia(false);
                        }}
                        className={`relative [word-spacing:1px] inline-block py-5 text-base ${activeTab === "Join Viscadia"
                          ? `text-black ${isBold ? "font-bold" : "font-normal"
                          } after:content-[""] after:absolute after:left-0 after:bottom-3 after:h-[3px] after:w-full after:bg-black`
                          : 'text-[#BD302B] font-normal group-hover:text-black group-hover:after:content-[""] group-hover:after:absolute group-hover:after:left-0 group-hover:after:bottom-3 group-hover:after:h-[3px] group-hover:after:w-full group-hover:after:bg-black'
                          }`}
                      >
                        Join Viscadia
                      </Link>

                      {activeDropdown === "join" && (
                        <div className="absolute tracking-normal top-[65px] left-0 w-max bg-white shadow-xl z-50">
                          <Link
                            href="/life-at-viscadia"
                            onClick={() => {
                              setIsDropdownItemClickedviscadia("life");
                              setActiveTab("Join Viscadia");
                            }}
                            className={`block px-4 py-1 text-sm whitespace-nowrap ${isDropdownItemClickedviscadia === "life"
                              ? "text-black font-normal"
                              : "text-[#63666A] hover:text-[#BD302B]"
                              }`}
                          >
                            Life at Viscadia
                          </Link>

                          <Link
                            href="/careers"
                            onClick={() => {
                              setIsDropdownItemClickedviscadia("career");
                              setActiveTab("Join Viscadia");
                            }}
                            className={`block px-4 py-1 text-sm whitespace-nowrap ${isDropdownItemClickedviscadia === "career"
                              ? "text-black font-normal"
                              : "text-[#63666A] hover:text-[#BD302B]"
                              }`}
                          >
                            Careers
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>

                  <Link href="/contact-us" className="contactus ">
                    <button className="cursor-pointer bg-white text-[#BD302B] border border-[#BD302B] hover:text-white hover:bg-[#BD302B] px-3 xl:px-5 py-[5.5px] text-base font-light">
                      Contact Us
                    </button>
                  </Link>
                </div>
                {/* Desktop Contact Us Button */}
                <Link href="/contact-us" className="contactusdesktop ">
                  <button className="cursor-pointer bg-white text-[#BD302B] border border-[#BD302B] hover:text-white hover:bg-[#BD302B] px-3 xl:px-5 py-[5.5px] text-base font-light">
                    Contact Us
                  </button>
                </Link>
              </div>

              <div className="text-center eventsrepsonsivelg gap-5 flex mx-auto justify-center">
                {/* Events & Webinars - Dropdown */}
                <div
                  className="relative group eventsrepsonsivelg"
                  onMouseEnter={() => handleMouseEnter("events")}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Parent Tab */}
                  <span
                    onClick={() => handleTabClick("Events & Webinars")}
                    className={`relative cursor-pointer eventsrepsonsivelg inline-block text-base ${activeTab === "Events & Webinars"
                      ? 'text-black font-normal after:content-[""] after:absolute after:left-0 after:-bottom-[6px] after:h-[3px] after:w-full after:bg-black'
                      : 'text-[#BD302B] font-normal group-hover:text-black group-hover:after:content-[""] group-hover:after:absolute group-hover:after:left-0 group-hover:after:-bottom-[2px] group-hover:after:h-[2px] group-hover:after:w-full group-hover:after:bg-black'
                      }`}
                  >
                    Events & Webinars
                  </span>

                  {activeDropdown === "events" && (
                    <div className="absolute text-left eventsrepsonsivelg cursor-pointer tracking-wide top-[40px] left-0 w-max bg-white shadow-xl z-50 group-hover:block">
                      {/* Events Menu */}
                      <div className="relative group/custom">
                        <Link
                          href="/events"
                          className="block px-4 py-1 text-sm whitespace-nowrap text-[#63666A] hover:text-[#BD302B]"
                        >
                          Events
                        </Link>

                        {/* Sub-dropdown for Events */}
                        <div className="absolute top-0 left-full ms-[2px] hidden group-hover/custom:block bg-white shadow-xl w-max z-50">
                          {events?.map((event) => (
                            <Link
                              key={event.id}
                              href={`/events/${event.slug}`}
                              onClick={() =>
                                setIsDropdownItemClicked(event.slug)
                              }
                              className={`block px-4 py-1 text-sm whitespace-nowrap  ${isDropdownItemClicked === event.slug
                                ? "text-black font-normal"
                                : "text-[#63666A] hover:text-[#BD302B]"
                                }`}
                            >
                              {/* {event.slug.replace(/-/g, " ")} */}
                              {event.title}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Webinars Menu */}
                      <div className="relative group/custom">
                        <Link
                          href="/webinars"
                          className="block px-4 py-1 text-sm whitespace-nowrap text-[#63666A] hover:text-[#BD302B]"
                        >
                          Webinars
                        </Link>

                        {/* Sub-dropdown for Webinars */}
                        <div className="absolute top-0 left-full ms-[2px] hidden group-hover/custom:block bg-white shadow-xl w-max z-50">
                          {webinars?.map((Webinar) => (
                            <Link
                              key={Webinar.id}
                              href={`/webinars/${Webinar.slug}`}
                              onClick={() =>
                                setIsDropdownItemClicked(Webinar.slug)
                              }
                              className={`block px-4 py-1 text-sm whitespace-nowrap  ${isDropdownItemClicked === Webinar.slug
                                ? "text-black font-normal"
                                : "text-[#63666A] hover:text-[#BD302B]"
                                }`}
                            >
                              {/* {Webinar.slug.replace(/-/g, " ")} */}
                              {Webinar.sub_heading}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className="relative group mb-8 eventsrepsonsivelg"
                  onMouseEnter={() => handleMouseEnter("join")}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={"/join-viscadia"}
                    onClick={() => {
                      handleTabClick("Join Viscadia");
                      setIsDropdownItemClickedviscadia(false);
                    }}
                    className={`relative inline-block py-0 text-base ${activeTab === "Join Viscadia"
                      ? `text-black ${isBold ? "font-bold" : "font-normal"
                      } after:content-[""] after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-full after:bg-black`
                      : 'text-[#BD302B] font-normal group-hover:text-black group-hover:after:content-[""] group-hover:after:absolute group-hover:after:left-0 group-hover:after:-bottom-[2px] group-hover:after:h-[2px] group-hover:after:w-full group-hover:after:bg-black'
                      }`}
                  >
                    Join Viscadia
                  </Link>

                  {activeDropdown === "join" && (
                    <div className="absolute tracking-wide top-[40px] left-0 w-max bg-white shadow-xl z-50">
                      <Link
                        href="/life-at-viscadia"
                        onClick={() => setIsDropdownItemClickedviscadia(true)}
                        className={`block px-4 py-1 text-sm whitespace-nowrap ${isDropdownItemClickedviscadia
                          ? "text-black font-normal"
                          : "text-[#63666A] hover:text-[#BD302B]"
                          }`}
                      >
                        Life at Viscadia
                      </Link>
                      <Link
                        href="/careers"
                        onClick={() => setIsDropdownItemClickedviscadia(true)}
                        className={`block px-4 py-1 text-sm whitespace-nowrap ${isDropdownItemClickedviscadia
                          ? "text-black font-normal "
                          : "text-[#63666A] hover:text-[#BD302B]"
                          }`}
                      >
                        Careers
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {isMobileMenuOpen && (
                <div
                  className={`xl:hidden bg-white shadow-xl z-50 overflow-hidden ${isMobileMenuOpen ? "animate-slideDown" : "animate-slideUp"
                    }`}
                >
                  <div className="flex flex-col items-start p-4 animate-slideDown">
                    <div className="w-full">
                      <button
                        onClick={() => {
                          if (!mobileAboutOpen) {
                            setMobileAboutOpen(true);
                          } else {
                            window.location.href = "/about-us";
                          }
                          setActiveMenu("about");
                        }}
                        className={`w-full text-left py-2 text-base ${activeMenu === "about"
                          ? "text-[#BD302B] font-normal"
                          : "text-[#63666A] font-normal"
                          } hover:text-[#BD302B']`}
                      >
                        About Viscadia
                      </button>

                      {mobileAboutOpen && (
                        <div className="pl-4">
                          <Link
                            href="/core-values"
                            onClick={() => {
                              setActiveMenu("coreValues");
                              setIsMobileMenuOpen(false);
                            }}
                            className={`block py-1 text-sm ${activeMenu === "coreValues"
                              ? "text-[#BD302B]"
                              : "text-[#63666A]"
                              } hover:text-[#BD302B]`}
                          >
                            Our Core Values
                          </Link>

                          <div className="w-full">
                            <button
                              onClick={() => {
                                if (!mobileSocialOpen) {
                                  setMobileSocialOpen(true);
                                } else {
                                  window.location.href = "/social-impact";
                                }
                                setActiveMenu("socialImpact");
                              }}
                              className={`w-full text-left py-1 text-sm ${activeMenu === "socialImpact"
                                ? "text-[#BD302B]"
                                : "text-[#63666A]"
                                } hover:text-[#BD302B]`}
                            >
                              Social Impact
                            </button>

                            {mobileSocialOpen && (
                              <div className="pl-4">
                                <Link
                                  href="/charity-water"
                                  onClick={() => {
                                    setActiveMenu("charityWater");
                                    setIsMobileMenuOpen(false);
                                  }}
                                  className={`block py-1 text-sm ${activeMenu === "charityWater"
                                    ? "text-[#BD302B]"
                                    : "text-[#63666A]"
                                    } hover:text-[#BD302B]`}
                                >
                                  Charity:water
                                </Link>
                                <Link
                                  href="/viscadia-volunteers"
                                  onClick={() => {
                                    setActiveMenu("volunteers");
                                    setIsMobileMenuOpen(false);
                                  }}
                                  className={`block py-1 text-sm ${activeMenu === "volunteers"
                                    ? "text-[#BD302B]"
                                    : "text-[#63666A]"
                                    } hover:text-[#BD302B]`}
                                >
                                  Viscadia Volunteers
                                </Link>
                              </div>
                            )}
                          </div>

                          <Link
                            href="/news-press-releases"
                            onClick={() => {
                              setActiveMenu("news");
                              setIsMobileMenuOpen(false);
                            }}
                            className={`block py-1 text-sm ${activeMenu === "news"
                              ? "text-[#BD302B]"
                              : "text-[#63666A]"
                              } hover:text-[#BD302B]`}
                          >
                            Latest News and Press Releases
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Forecasting Expertise */}
                    <div className="w-full">
                      <button
                        onClick={() => {
                          if (!mobileForecastingOpen) {
                            setMobileForecastingOpen(true);
                          } else {
                            window.location.href = "/expertise";
                          }
                          setActiveMenu("forecasting");
                        }}
                        className={`w-full text-left py-2 text-base font-normal ${activeMenu === "forecasting"
                          ? "text-[#BD302B]"
                          : "text-[#63666A]"
                          } hover:text-[#BD302B]`}
                      >
                        Forecasting Expertise
                      </button>

                      {mobileForecastingOpen && (
                        <div className="pl-4">
                          <div className="w-full">
                            <button
                              onClick={() => {
                                if (!mobileCustomOpen) {
                                  setMobileCustomOpen(true);
                                } else {
                                  window.location.href =
                                    "/forecasting-solutions";
                                }
                                setActiveMenu("customForecasting");
                              }}
                              className={`w-full text-left py-1 text-sm ${activeMenu === "customForecasting"
                                ? "text-[#BD302B]"
                                : "text-[#63666A]"
                                } hover:text-[#BD302B]`}
                            >
                              Custom Forecasting Solutions
                            </button>

                            {mobileCustomOpen && (
                              <div className="pl-4">
                                <div className="w-full">
                                  <button
                                    onClick={() => {
                                      if (!mobileMarketOpen) {
                                        setMobileMarketOpen(true);
                                      } else {
                                        window.location.href =
                                          "/market-research";
                                      }
                                      setActiveMenu("marketResearch");
                                    }}
                                    className={`w-full text-left py-1 text-sm ${activeMenu === "marketResearch"
                                      ? "text-[#BD302B]"
                                      : "text-[#63666A]"
                                      } hover:text-[#BD302B']`}
                                  >
                                    Market Research
                                  </button>

                                  {mobileMarketOpen && (
                                    <div className="pl-4">
                                      <Link
                                        href="/demand-studies"
                                        onClick={() =>
                                          setActiveMenu("demandStudies")
                                        }
                                        className={`block py-1 text-sm ${activeMenu === "demandStudies"
                                          ? "text-[#BD302B]"
                                          : "text-[#63666A]"
                                          } hover:text-[#BD302B]`}
                                      >
                                        Demand Studies
                                      </Link>
                                    </div>
                                  )}
                                </div>

                                <Link
                                  href="/models-and-platforms"
                                  onClick={() => {
                                    setActiveMenu("models");
                                    setIsMobileMenuOpen(false);
                                  }}
                                  className={`block py-1 text-sm ${activeMenu === "models"
                                    ? "text-[#BD302B]"
                                    : "text-[#63666A]"
                                    } hover:text-[#BD302B]`}
                                >
                                  Models & Platform
                                </Link>
                                <Link
                                  href="/cycle-support"
                                  onClick={() => {
                                    setActiveMenu("cycleSupport");
                                    setIsMobileMenuOpen(false);
                                  }}
                                  className={`block py-1 text-sm ${activeMenu === "cycleSupport"
                                    ? "text-[#BD302B]"
                                    : "text-[#63666A]"
                                    } hover:text-[#BD302B]`}
                                >
                                  Cycle Support
                                </Link>
                              </div>
                            )}
                          </div>

                          <Link
                            href="/therapeutic-areas"
                            onClick={() => {
                              setActiveMenu("therapeutic");
                              setIsMobileMenuOpen(false);
                            }}
                            className={`block py-1 text-sm ${activeMenu === "therapeutic"
                              ? "text-[#BD302B]"
                              : "text-[#63666A]"
                              } hover:text-[#BD302B]`}
                          >
                            Forecasting in Therapeutic Areas
                          </Link>
                          <Link
                            href="/who-we-serve"
                            onClick={() => {
                              setActiveMenu("whoWeServe");
                              setIsMobileMenuOpen(false);
                            }}
                            className={`block py-1 text-sm ${activeMenu === "whoWeServe"
                              ? "text-[#BD302B]"
                              : "text-[#63666A]"
                              } hover:text-[#BD302B]`}
                          >
                            Who We Serve – Clients and Partners
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Case Studies */}
                    <div className="w-full">
                      <button
                        onClick={() => {
                          if (!mobileCaseStudiesOpen) {
                            setMobileCaseStudiesOpen(true);
                          } else {
                            window.location.href = "/case-studies";
                          }
                          setActiveMenu("caseStudies");
                        }}
                        className={`w-full text-left py-2 text-base font-normal ${activeMenu === "caseStudies"
                          ? "text-[#BD302B]"
                          : "text-[#63666A]"
                          } hover:text-[#BD302B']`}
                      >
                        Case Studies & White Papers
                      </button>

                      {mobileCaseStudiesOpen && (
                        <div className="pl-4">
                          <Link
                            href="/case-studies"
                            onClick={() => {
                              setActiveMenu("case");
                              setIsMobileMenuOpen(false);
                            }}
                            className={`block py-1 text-sm ${activeMenu === "case"
                              ? "text-[#BD302B]"
                              : "text-[#63666A]"
                              } hover:text-[#BD302B]`}
                          >
                            Case Studies
                          </Link>
                          <Link
                            href="/case-studies#white-paper"
                            onClick={() => {
                              setActiveMenu("whitepapers");
                              setIsMobileMenuOpen(false);
                            }}
                            className={`block py-1 text-sm ${activeMenu === "whitepapers"
                              ? "text-[#BD302B]"
                              : "text-[#63666A]"
                              } hover:text-[#BD302B]`}
                          >
                            White Papers
                          </Link>
                        </div>
                      )}
                    </div>
                    {/* Leadership */}
                    <Link
                      href="/leadership/"
                      onClick={() => {
                        setActiveMenu("leadership");
                        setIsMobileMenuOpen(false);
                      }}
                      className={`py-2 text-base font-normal ${activeMenu === "leadership"
                        ? "text-[#BD302B]"
                        : "text-[#63666A]"
                        } hover:text-[#BD302B]`}
                    >
                      Leadership
                    </Link>

                    {/* Events & Webinars */}
                    <div className="w-full">
                      <button
                        onClick={() => {
                          if (!mobileEventsWebinarsOpen) {
                            setMobileEventsWebinarsOpen(true);
                          } else {
                            window.location.href = "/events";
                          }
                          setActiveMenu("eventsWebinars");
                        }}
                        className={`w-full text-left py-2 text-base font-normal ${activeMenu === "eventsWebinars"
                          ? "text-[#BD302B]"
                          : "text-[#63666A]"
                          } hover:text-[#BD302B']`}
                      >
                        Events & Webinars
                      </button>

                      {mobileEventsWebinarsOpen && (
                        <div className="pl-4">
                          {/* Events */}
                          <div className="w-full">
                            <button
                              onClick={() => {
                                if (!mobileEventsOpen) {
                                  setMobileEventsOpen(true);
                                } else {
                                  window.location.href = "/events";
                                }
                                setActiveMenu("events");
                              }}
                              className={`w-full text-left py-1 text-sm ${activeMenu === "events"
                                ? "text-[#BD302B]"
                                : "text-[#63666A]"
                                } hover:text-[#BD302B]`}
                            >
                              Events
                            </button>

                            {mobileEventsOpen && (
                              <div className="pl-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-500">
                                {events?.map((event) => (
                                  <Link
                                    key={event.id}
                                    href={`/events/${event.slug}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block py-1 text-sm  text-[#63666A] hover:text-[#BD302B]"
                                  >
                                    {/* {event.slug?.replace(/-/g, " ")} */}
                                    {event.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Webinars */}
                          <div className="w-full">
                            <button
                              onClick={() => {
                                if (!mobileWebinarsOpen) {
                                  setMobileWebinarsOpen(true);
                                } else {
                                  window.location.href = "/webinars";
                                }
                                setActiveMenu("webinars");
                              }}
                              className={`w-full text-left py-1 text-sm ${activeMenu === "webinars"
                                ? "text-[#BD302B]"
                                : "text-[#63666A]"
                                } hover:text-[#BD302B']`}
                            >
                              Webinars
                            </button>

                            {mobileWebinarsOpen && (
                              <div className="pl-4">
                                {webinars?.map((webinar) => (
                                  <Link
                                    key={webinar.id}
                                    href={`/webinars/${webinar.slug}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-4 py-1 text-sm  whitespace-nowrap text-[#63666A] hover:text-[#BD302B]"
                                  >
                                    {/* {webinar.slug?.replace(/-/g, " ")} */}
                                    {webinar.sub_heading}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Join Viscadia */}
                    <div className="w-full">
                      <button
                        onClick={() => {
                          if (!mobileJoinOpen) {
                            setMobileJoinOpen(true);
                          } else {
                            window.location.href = "/join-viscadia";
                          }
                          setActiveMenu("join");
                        }}
                        className={`w-full text-left py-2 text-base font-normal ${activeMenu === "join"
                          ? "text-[#BD302B]"
                          : "text-[#63666A]"
                          } hover:text-[#BD302B]`}
                      >
                        Join Viscadia
                      </button>

                      {mobileJoinOpen && (
                        <div className="pl-4">
                          <Link
                            href="/life-at-viscadia"
                            // onClick={() => setActiveMenu("life")}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block py-1 text-sm ${activeMenu === "life"
                              ? "text-[#BD302B]"
                              : "text-[#63666A]"
                              } hover:text-[#BD302B]`}
                          >
                            Life at Viscadia
                          </Link>
                          <Link
                            href="/careers"
                            // onClick={() => setActiveMenu("careers")}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block py-1 text-sm ${activeMenu === "careers"
                              ? "text-[#BD302B]"
                              : "text-[#63666A]"
                              } hover:text-[#BD302B]`}
                          >
                            Careers
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Contact Us */}
                    <Link
                      href="/contact-us"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <button className="w-full bg-white text-[#BD302B] border border-[#BD302B] hover:text-white hover:bg-[#BD302B] px-5 py-1 text-base font-light mt-2">
                        Contact Us
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          <style jsx>
            {`
              @keyframes slideDown {
                from {
                  opacity: 0;
                  max-height: 0;
                  transform: translateY(-20px);
                }
                to {
                  opacity: 1;
                  max-height: 2000px;
                  transform: translateY(0);
                }
              }

              @keyframes slideUp {
                from {
                  opacity: 1;
                  max-height: 2000px;
                  transform: translateY(0);
                }
                to {
                  opacity: 0;
                  max-height: 0;
                  transform: translateY(-20px);
                }
              }

              .animate-slideDown {
                animation: slideDown 1.7s ease-out forwards;
              }

              .animate-slideUp {
                animation: slideUp 1.2s ease-in forwards;
              }

              @media (max-width: 1022px) {
                .flex.flex-wrap {
                  display: none;
                }
                .md\\:block.hidden {
                  display: none;
                }
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default CommonNavbar;
