"use client";
import { useState } from "react";
import CheckBox from "../icons/CheckBox";
import CrossIcon from "../icons/CrossIcon";
import Icon from "../icons/Icon";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

export default function CareerSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      tel: "",
    },
  });
  const whyUsList = [
    {
      id: "1item",
      title: "Professional development",
      text: "We offer growth opportunities and a creative environment to nurture your talents.",
    },
    {
      id: "2item",
      title: "Teamwork",
      text: "Join our close-knit family, where support and inspiration abound.",
    },
    {
      id: "3item",
      title: "Stimulating work environment",
      text: "Flexibility and remote options for a comfortable experience.",
    },
    {
      id: "4item",
      title: "Exciting challenges",
      text: "Unleash your potential through unforgettable projects showcasing Carpathian beauty.",
    },
  ];

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section className="fourth-section" id="career">
      <div className="div relative bg-[#020F08BF]">
        <div className="container sm:gap-[0] sm:flex-col h-[200dvh] text-white max-w-[280px] sm:max-w-[704px] md:max-w-[1280px] md:gap-[23px] md:px-[15px] flex flex-col relative pt-[54px] sm:mt-[0] sm:pt-[64px] md:pt-[80px] mx-[auto] mb-[0] sm:flex-row">
          <h2 className="order-[-1] sm:mb-[12px] mb-[24px] uppercase sm:text-[67px] sm:leading-[81px] text-[40px] font-thin leading-[56px] tracking-[-0.04em] sm:text-[67px] md:text-[98px] md:leading-[118px] md:tracking-[-0.04em]">
            Choose <span className="font-medium">us</span>
          </h2>
          <h3 className="uppercase sm:ml-[80px] sm:mr-[auto] text-[30px] ml-[auto] mr-[39px] font-extralight leading-[36px] md:text-[36px] md:leading-[39px]">
            Why us ?
          </h3>
          <p className="sm:absolute sm:right-[0] mb-[36px] ml-[auto] order-[-1] text-[14px] leading-[20px] font-extralight w-[179px] sm:w-[221px] sm:text-[13px] sm:text-justify md:text-[18px] md:leading-[24px] md:w-[293px]">
            Your chance to join our passionate team in Carpathian tourism.
            Seeking talented professionals to share our common mission.{" "}
          </p>
          <ul className="flex flex-col gap-[16px] pt-[36px] z-[1] mb-[112px] sm:mb-[0] sm:gap-[24px] md:w-[562px]">
            {whyUsList.map((item, index) => (
              <li
                key={item.id}
                className="sm:w-[221px] md:flex md:w-[100%] md:gap-[24px]"
              >
                <h4 className="sm:text-[16px] sm:ml-[auto] sm:mr-[0] sm:text-right md:ml-[0] md:w-[253px] sm:ml-[20px] sm:w-[196px] text-[14px] font-normal leading-[20px] md:text-[18px] md:leading-[24px]  mb-[8px] w-[171px]">
                  {item.title}
                </h4>
                <p className="text-[12px] sm:w-[221px] font-extralight leading-[20px] w-[181px] text-end md:text-[12px] md:text-start md:leading-[24px] md:w-[285px]">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
          <div className="z-[1] sm:absolute sm:top-[230px] sm:right-[0] sm:w-[463px] md:left-[650px] md:w-[630px]">
            <p className="sm:inline-block mb-[24px] ml-[auto] text-[14px] leading-[20px] font-extralight w-[179px] sm:w-[221px] sm:text-[13px] sm:text-justify md:mb-[14px] md:text-[17px] md:leading-[24px] md:w-[234px]">
              Don`t miss your opportunity! Fill out the form right now and join
              our team!
            </p>
            <form
              className="sm:flex-row flex flex-col gap-[16px] sm:gap-[20px]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="sm:flex flex flex-col gap-[16px] sm:w-[222px] md:gap-[24px] md:w-[290px]">
                <div className="flex flex-col gap-[4px] relative sm:sticky">
                  <label
                    className={`${
                      errors.fullName ? "text-red-500" : ""
                    } text-[12px] leading-[24px] font-extralight tracking-[0.2em] `}
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    {...register("fullName", {
                      required: true,
                      minLength: 2,
                    })}
                    className={`${
                      errors.fullName ? "text-red-500" : ""
                    } bg-[#FFFFFF0D] pr-[5px] md:py-[2px] md:text-[20px] md:leading-[24px] text-[13px] leading-[24px] font-extralight pl-[8px] focus:bg-[#FFFFFF1A] focus:outline-none`}
                  ></input>
                  {errors.fullName && (
                    <>
                      <CrossIcon
                        className={
                          "absolute top-[57px] left-[149px] sm:left-[91px] md:top-[59px] md:left-[157px]"
                        }
                        width={18}
                        height={18}
                      />
                      <span className="right-[0] top-[50px] text-[#FF5757] pl-[19px] md:right-[0] absolute md:top-[53px] text-[12px] leading-[24px] font-extralight tracking-[0.2em]">
                        Incorrect name
                      </span>
                    </>
                  )}
                </div>
                <div className="flex flex-col gap-[4px] relative sm:sticky">
                  <label
                    className={`${
                      errors.email ? "text-red-500" : ""
                    }  text-[12px] leading-[24px] font-extralight tracking-[0.2em]`}
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="johnsmith@email.com"
                    {...register("email", {
                      required: true,
                      minLength: 2,
                      pattern:
                        /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/i,
                    })}
                    className={`${
                      errors.email ? "text-red-500" : ""
                    } bg-[#FFFFFF0D] pr-[5px] md:py-[2px] md:text-[20px] md:leading-[24px] text-[13px] leading-[24px] font-extralight pl-[8px] focus:bg-[#FFFFFF1A] focus:outline-none`}
                  ></input>
                  {errors.email && (
                    <>
                      <CrossIcon
                        className={
                          "absolute top-[57px] left-[165px] sm:left-[109px] md:top-[59px] md:left-[176px]"
                        }
                        width={18}
                        height={18}
                      />
                      <span className="right-[0] top-[50px] text-[#FF5757] absolute md:right-[0] md:pl-[19px] md:top-[53px] text-[12px] leading-[24px] font-extralight tracking-[0.2em]">
                        Invalid email
                      </span>
                    </>
                  )}
                </div>
                <div className="flex flex-col gap-[4px]">
                  <label className=" text-[12px] leading-[24px] font-extralight tracking-[0.2em]">
                    Position
                  </label>
                  <input
                    type="text"
                    placeholder="Movie maker"
                    {...register("position", {})}
                    className="bg-[#FFFFFF0D] pr-[5px] md:py-[2px] md:text-[20px] md:leading-[24px] text-[13px] leading-[24px] font-extralight pl-[8px] focus:bg-[#FFFFFF1A] focus:outline-none"
                  ></input>
                </div>
                <div className="flex flex-col gap-[4px] relative sm:sticky">
                  <label
                    className={`${
                      errors.tel ? "text-red-500" : ""
                    } text-[12px] leading-[24px] font-extralight tracking-[0.2em]`}
                  >
                    Phone
                  </label>
                  <InputMask
                    mask="(999) 99 99 999"
                    maskChar={null}
                    type="tel"
                    id="tel"
                    placeholder="(097) 12 34 567"
                    {...register("tel", {
                      required: true,
                      minLength: 15,
                    })}
                    className={`${
                      errors.tel ? "text-red-500" : ""
                    } bg-[#FFFFFF0D] pl-[48px] pr-[5px] md:py-[2px] md:text-[20px] md:leading-[24px] text-[13px] leading-[24px] font-extralight md:pl-[60px] focus:bg-[#FFFFFF1A] focus:outline-none`}
                  />
                  {errors.tel && (
                    <>
                      <CrossIcon
                        className={
                          "absolute top-[57px] left-[139px] sm:left-[84px] md:top-[59px] md:left-[150px]"
                        }
                        width={18}
                        height={18}
                      />
                      <span className="right-[0] top-[50px] text-[#FF5757] md:right-[0] absolute md:top-[53px] text-[12px] leading-[24px] font-extralight tracking-[0.2em]">
                        Incorrect phone
                      </span>
                    </>
                  )}
                  <span className="bottom-[0] absolute md:bottom-[2px] left-[8px] md:text-[20px] md:leading-[24px] text-[13px] leading-[24px] font-extralight">
                    + 38
                  </span>
                </div>
              </div>
              <div className="sm:w-[221px] flex flex-col">
                <div className="flex flex-col gap-[4px]">
                  <label className="text-[12px] leading-[24px] font-extralight tracking-[0.2em]">
                    Message
                  </label>
                  <textarea
                    className="bg-[#FFFFFF0D] py-[2px] px-[8px] focus:bg-[#FFFFFF1A] focus:outline-none sm:mb-[9px] md:w-[292px] md:h-[268px]"
                    rows={8}
                    {...register("message", { required: false })}
                  ></textarea>
                </div>
                <div className="flex flex-row gap-[4px] top-[16px] relative mb-[16px] sm:absolute sm:top-[355px] sm:left-[-5px] sm:w-[222px] sm:top-[357px] sm:mb-[0] md:top-[418px] md:w-[258px]">
                  <input
                    className="w-[1px] h-[1px]"
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    {...register("confirm", { required: true })}
                  ></input>
                  <CheckBox
                    className={"checkbox-icon absolute top-[5px] left-[5px]"}
                    width={14}
                    height={14}
                  />
                  <Icon className={"absolute"} />
                  <label className="pl-[32px] text-[12px] leading-[22px]">
                    I confirm my consent to the processing of personal data.
                  </label>
                  {errors.confirm && (
                    <>
                      <span className="right-[0] top-[50px] text-[#FF5757] left-[0] md:right-[0] absolute md:top-[53px] text-[12px] leading-[24px] font-extralight tracking-[0.2em]">
                        Please confirm.
                      </span>
                    </>
                  )}
                </div>
                <button
                  className="self-end uppercase text-[30px] font-medium leading-[36px] text-end sm:flex sm:ml-[auto]"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
