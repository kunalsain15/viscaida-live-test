"use client";
import React from "react";
import Link from "next/link";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
// help to commit
import CommonForm from "@/components/CommonFormEvents/CommonForm";
const events = [
  {
    id: 3,
    title: "BIO International Convention 2025",
    slug: "bio-international-convention-2025",
    bgimagetwo: "/events/BIO_WHB-1.png",
    logosize: "/events/BIO-Logo-1-681x152.png",
    date: "June 16-19, 2025",
    location: "Boston Convention & Exhibition Center",
    about: {
      title: "About BIO",
      description: `The BIO International Convention is the largest and most comprehensive event for biotechnology, representing the full ecosystem of biotech with over 20,000 industry leaders from across the globe. BIO is where you’ll make valuable connections and build relationships. Don't miss out on this important event, and be sure to connect with us at the conference.
  `,
      image: "/events/BIO_About.png",
    },

    forecasting: [
      {
        id: 1,
        image: "/casestudies/SKK-LinkedIn-1-1.webp",
        name: "Satish K. Kauta",
        role: "Founder & CEO",
        description:
          "Satish guides Viscadia’s teams in corporate development and strategy, new product planning, and forecasting from our Washington, DC office. He has more than 25 years of experience working at and with large, mid-size, and specialty pharmaceutical companies.",
        click: "Click to learn more >",
        link: "/leadership-satish-k-kauta",
      },
      {
        id: 2,
        image: "/casestudies/Ramu-Ramalingam-1.png",
        name: "Ramu Ramalingam",
        role: "Principal",
        description:
          "His career spans over 20 years as a life sciences business development leader with experience in pharma R&D, clinical research and commercial operations. He is passionate about establishing and maintaining strong relationships with clients and delivering solutions that help them make critical strategic decisions.  ",
        click: "Click to learn more >",
        link: "/leadership-ramu-ramalingam",
      },
      {
        id: 3,
        image: "/casestudies/Jim-Martin-with-Viscadia-Background.png",
        name: "Jim Martin",
        role: "Head Of Client Development",
        description:
          "His career spans over 20 years of experience driving growth for strategic consulting firms operating in the biopharma and MedTech industries.",
        click: "Click to learn more >",
        link: "/leadership-jim-martin",
      },
      {
        id: 4,
        image: "/casestudies/Vipul_DP.png",
        name: "Vipul Vaid",
        role: "Associate Prinicple",
        description:
          "Vipul is an Associate Principal at Viscadia’s Cambridge, MA office, with over a decade of consulting experience in the pharmaceutical and biotech industry, including seven years dedicated exclusively to forecasting.",
        click: "Click to learn more >",
        link: "/leadership-vipul-vaid",
      },
    ],

    agendaforecasting: [
      {
        agenda: "Agenda",
      },
    ],
  },
];

const page = () => {
  const slugify = (text) =>
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-");

  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          {/* Hero Section */}
          <div className="relative mt-20 w-full flex flex-col-reverse sm:flex-row">
            <div className="relative sm:px-0 px-3 w-full sm:w-[100px] lg:w-[500px] xl:w-[69%] h-full sm:h-[420px]">
              <div className="sm:absolute top-8 left-8 xl:left-10 flex flex-col items-start text-left logoeventsize">
                <img
                  src={event.logosize}
                  alt="event logo"
                  className="sm:mb-4 mt-[45px] sm:mt-[90px] h-[70px] sm:h-full"
                />

                {/* Title */}
                <h1 className="text-[#133D66] sm:mt-0 mt-4 text-[25px] font-light">
                  {event.title}
                </h1>
                {event.titletwo && (
                  <h2 className="text-[#133D66] text-[28px] font-light leading-none">
                    {event.titletwo}
                  </h2>
                )}

                {/* Date & Location */}
                <div className="xl:flex xl:space-y-0 space-y-2 items-center gap-6 mt-3 text-[#133D66] text-[14px] font-light whitespace-nowrap w-full overflow-x-auto">
                  <span className="flex text-[14px] items-center gap-2">
                    <FaCalendar className="text-[22px]" /> {event.date}
                  </span>
                  <span className="flex text-[14px] items-center gap-2">
                    <FaMapMarkerAlt className="text-[22px]" /> {event.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Background Section */}
            <div className="w-full ml-0 h-[200px] sm:h-[420px]">
              <div className="w-full h-full">
                <img
                  src={event.bgimagetwo}
                  alt="Background Two"
                  className="w-full h-full "
                />
                {event.bookameeting && (
                  <img
                    src={event.bookameeting}
                    onClick={scrollToForm}
                    alt="Book a Meeting"
                    className="fixed top-22 cursor-pointer right-10 w-[130px] h-auto z-[9999] "
                  />
                )}
              </div>
            </div>
          </div>

          {/* About Section */}
          {event.about && (
            <div className="font-sans sm:mt-0 mt-10 text-[#2e2e2e]">
              <img src="/BIO_About.png" className="w-full block sm:hidden" />
              <section
                className="relative sm:min-h-[400px] bg-cover bg-no-repeat bg-right-top sm:bg-left-top flex items-center"
                style={{ backgroundImage: `url(${event.about.image})` }}
              >
                <div className="container mx-auto px-5 lg:px-8 py-10 sm:py-12 md:py-16">
                  <div className="max-w-xl ml-auto text-left">
                    <h2 className="text-white text-xl sm:text-[32px] font-light leading-tight">
                      {event.about.title}
                    </h2>
                    <p className="mt-4 text-white font-light text-base leading-[1.1]">
                      {event.about.description}
                    </p>
                  </div>
                </div>
              </section>
            </div>
          )}

          {event.speaker && (
            <div className="bg-white py-10 px-4 sm:px-6 lg:px-24">
              {event.speaker.speaker && (
                <h2 className="text-center text-black text-3xl sm:text-4xl font-light mb-8">
                  {event.speaker.speaker}
                </h2>
              )}

              <div className="flex flex-col mx-auto md:flex-row items-center justify-center gap-8">
                {(event.speaker.imgone || event.speaker.imgtwo) && (
                  <div className="flex gap-4">
                    {event.speaker.imgone && (
                      <a
                        href={event.speaker.linkone || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={event.speaker.imgone}
                          alt="Speaker 1"
                          className="w-[195px] h-[185px] ml-0 md:ml-26 rounded-full object-cover"
                        />
                      </a>
                    )}
                    {event.speaker.imgtwo && (
                      <a
                        href={event.speaker.linktwo || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={event.speaker.imgtwo}
                          alt="Speaker 2"
                          className="w-[185px] h-[185px] object-cover rounded-full"
                        />
                      </a>
                    )}
                  </div>
                )}

                <div className="max-w-md text-left">
                  {event.speaker.headerone && (
                    <h4 className="text-[#BD302B] hover:text-[#F4D35E] text-lg font-normal mb-1">
                      {event.speaker.headerone}
                    </h4>
                  )}
                  {event.speaker.headertwo && (
                    <p className="text-black font-light text-[14px] mb-1">
                      {event.speaker.headertwo}
                    </p>
                  )}
                  {event.speaker.headerthree && (
                    <p className="text-black font-light text-[14px] mb-1">
                      {event.speaker.headerthree}
                    </p>
                  )}
                  {event.speaker.headerfour && (
                    <p className="text-black font-light text-[14px] mb-1">
                      {event.speaker.headerfour}
                    </p>
                  )}
                  {event.speaker.headerfive && (
                    <p className="text-black font-light text-[14px] mb-3">
                      {event.speaker.headerfive}
                    </p>
                  )}
                  {event.speaker.button && event.speaker.buttonLink && (
                    <a
                      href={event.speaker.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#BD302B] hover:bg-[#cf1e18] text-white text-base font-light py-2 px-6"
                    >
                      {event.speaker.button}
                    </a>
                  )}
                </div>
              </div>

              {event.speaker.headersix && (
                <p className="text-left mt-4 text-[#63666A] font-light">
                  {event.speaker.headersix}
                </p>
              )}
            </div>
          )}

          {/* Forecasting Specialists */}
          {event.forecasting && event.forecasting.length > 0 && (
            <>
              <div className="forcastingspeacialist mt-10 mb-8">
                <h1 className="text-black md:text-[38px] sm:px-0 px-2 text-[28px] text-center font-light">
                  Our Forecasting Specialists at the Event
                </h1>
              </div>
              <div className="grid grid-cols-1 xl:p-0 p-4 sm:grid-cols-2 md:grid-cols-4 mt-[20px] sm:mb-[30px] mb-[20px] gap-10 max-w-[1150px] mx-auto">
                {event.forecasting.map((person) =>
                  person.link ? (
                    <Link key={person.id} href={person.link}>
                      <div className="flex pb-3 hover:shadow-[0px_3px_6px_2px_rgba(0,_0,_0,_0.1)] flex-col items-center cursor-pointer">
                        <div className="relative w-full h-[260px] group overflow-hidden">
                          <img
                            src={person.image}
                            alt={person.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-[#BD302BB3] bg-opacity-70 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between">
                            <p className="text-[14px] leading-4">
                              {person.description}
                            </p>
                            {person.click && (
                              <span className="mt-4 text-[14px]">
                                {person.click}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="mt-2 text-center">
                          <h2 className="text-[#BD302B] font-roboto text-[20px] font-normal hover:text-[#E6BD2D]">
                            {person.name}
                          </h2>
                          <p className="text-black text-[14px] px-1 font-light">
                            {person.role}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div
                      key={person.id}
                      className="flex pb-3 hover:shadow-[0px_3px_6px_2px_rgba(0,_0,_0,_0.1)] flex-col items-center cursor-default"
                    >
                      <div className="relative w-full h-[260px] group overflow-hidden">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-2 text-center">
                        <h2 className="text-[#BD302B] font-roboto text-[20px] font-normal">
                          {person.name}
                        </h2>
                        <p className="text-black text-[14px] px-1 font-light">
                          {person.role}
                        </p>
                      </div>
                    </div>
                  )
                )}

                {event.agendaforecasting?.map((item, index) => (
                  <div
                    key={index}
                    className="col-span-full cursor-pointer flex justify-center"
                  >
                    <a href={item.agendaLink || "#"}>
                      <button className="bg-[#BD302B] cursor-pointer font-light text-white px-6 py-2">
                        {item.agenda}
                      </button>
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Highlights Section */}
          {event.HighlightsoftheEvent &&
            event.HighlightsoftheEvent.length > 0 && (
              <div className="bg-white py-10 px-4 sm:px-6 lg:px-24">
                <div className="text-center">
                  {event.HighlightsoftheEvent.map((highlight, i) => (
                    <div key={i}>
                      {highlight.text && (
                        <h2 className="text-2xl sm:text-3xl font-light text-black mb-8">
                          {highlight.text}
                        </h2>
                      )}
                      <div className="flex flex-col sm:flex-row justify-center gap-6">
                        {highlight.imgone && (
                          <a
                            href={highlight.linkone || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative w-full sm:w-[48%] rounded-lg shadow-md overflow-hidden"
                          >
                            <img
                              src={highlight.imgone}
                              alt="Event highlight 1"
                              className="w-full h-full object-cover transition duration-500 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition duration-500 ease-in-out"></div>
                          </a>
                        )}
                        {highlight.imgtwo && (
                          <a
                            href={highlight.linktwo || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative w-full sm:w-[48%] rounded-lg shadow-md overflow-hidden"
                          >
                            <img
                              src={highlight.imgtwo}
                              alt="Event highlight 2"
                              className="w-full h-full object-cover transition duration-500 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition duration-500 ease-in-out"></div>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
      ))}

      {/* Book a Meeting Form */}

      <CommonForm />
    </div>
  );
};

export default page;
