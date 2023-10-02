"use client";

import ContactsForm from "../../components/ContactsForm/ContactsForm";
import data from "@/data/data.json";

export default function ContactsSection() {
  const { contacts } = data;
  const { title, contactsInfo, socialLinks, text } = contacts;

  return (
    <section
      className="contacts-section relative py-[55px] sm:py-[66px] md:py-[80px] w-[100%] max-w-[100%] bg-cover bg-no-repeat"
      id="contacts"
    >
      <div className="div absolute top-[0] bg-bgColor w-[100%] h-[100%]"></div>
      <div className="div w-[100%] h-[100%]">
        <div className="container px-[20px] z-[1] sm:flex-col text-white max-w-[480px] sm:max-w-[704px] md:max-w-[1280px] md:gap-[71px] md:px-[15px] flex flex-col relative sm:mt-[0] mx-[auto] mb-[0] sm:flex-row sm:gap-[48px]">
          <h2 className="order-[-1] sm:mb-[12px] mb-[24px] uppercase sm:text-[67px] sm:leading-[81px] text-[40px] font-thin leading-[56px] tracking-[-0.04em] sm:text-[67px] md:text-[98px] md:leading-[118px] md:tracking-[-0.04em]">
            {title.split(" ")[0]}{" "}
            <span className="font-medium">{contacts.title.split(" ")[1]}</span>
          </h2>
          <div className="md:flex md:justify-between">
            <div className="flex flex-col gap-[24px] sm:relative sm:items-start sm:w-[535px] sm:mb-[64px] md:mb-[0] md:justify-between md:items-center">
              {contactsInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row-reverse gap-[20px] sm:pl-[30px] md:pl-[0] sm:w-[331px] md:justify-start"
                >
                  <p className="pt-[3px] text-[12px] font-extralight leading-[20px] md:text-[12px] md:text-start md:leading-[24px] w-[81px] text-left">
                    {item.type}
                  </p>
                  <ul>
                    {item.numbers &&
                      item.numbers.map((number, numberIndex) => (
                        <li
                          key={numberIndex}
                          className="font-normal text-[14px] leading-[24px] sm:text-[16px]"
                        >
                          <a
                            href={`tel:${number.replace(/\s/g, "")}`}
                            className="hover:border-b-[1px] hover:border-white hover:pb-[1px] focus:border-b-[1px] focus:border-white focus:pb-[1px]"
                          >
                            {number}
                          </a>
                        </li>
                      ))}
                    {item.emails &&
                      item.emails.map((email, emailIndex) => (
                        <li
                          key={emailIndex}
                          className="font-normal text-[14px] leading-[24px] sm:text-[16px]"
                        >
                          <a
                            href={`mailto:${email}`}
                            className="hover:border-b-[1px] hover:border-white hover:pb-[1px] focus:border-b-[1px] focus:border-white focus:pb-[1px]"
                          >
                            {email}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
              <div className="flex flex-row gap-[20px] md:w-[331px] justify-end sm:absolute sm:right-[0] md:sticky md:flex-row-reverse md:justify-start">
                <p className="pt-[3px] text-[12px] font-extralight leading-[20px] text-end md:text-[12px] md:text-start md:leading-[24px] w-[81px]">
                  {text}
                </p>
                <ul className="w-[81px] sm:w-[auto]">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-normal text-[14px] sm:text-[16px] leading-[24px] hover:border-b-[1px] hover:border-white hover:pb-[1px]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <ContactsForm form={contacts.form} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
