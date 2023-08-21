"use client";
import CrossIcon from "../icons/CrossIcon";
import { useForm } from "react-hook-form";

export default function ContactsSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    // defaultValues: {
    //   tel: "",
    // },
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <section className="sixth-section" id="contacts">
      <div className="div relative bg-[#020F08BF]">
        <div className="container z-[1] sm:flex-col text-white max-w-[280px] sm:max-w-[704px] md:max-w-[1280px] md:gap-[71px] md:px-[15px] flex flex-col relative pt-[54px] sm:mt-[0] mx-[auto] mb-[0] sm:flex-row sm:gap-[48px] sm:pt-[66px]">
          <h2 className="order-[-1] sm:mb-[12px] mb-[24px] uppercase sm:text-[67px] sm:leading-[81px] text-[40px] font-thin leading-[56px] tracking-[-0.04em] sm:text-[67px] md:text-[98px] md:leading-[118px] md:tracking-[-0.04em]">
            Contact <span className="font-medium">us</span>
          </h2>
          <div className="md:flex md:justify-between">
            <div className="flex flex-col gap-[24px] sm:relative sm:items-start sm:w-[535px] sm:mb-[64px] md:mb-[0] md:justify-between md:items-center">
              <div className="flex flex-row-reverse gap-[20px] sm:pl-[30px] md:pl-[82px]">
                <p className="pt-[3px] text-[12px] font-extralight leading-[20px] text-end md:text-[12px] md:text-start md:leading-[24px]">
                  Phone number
                </p>
                <ul>
                  <li className="font-normal text-[14px] leading-[24px] sm:text-[16px]">
                    <a
                      href="tel: +38 (098) 12 34 567"
                      className="hover:border-b-[1px] hover:border-white hover:pb-[1px]"
                    >
                      +38 (098) 12 34 567
                    </a>
                  </li>
                  <li className="font-normal text-[14px] leading-[24px] sm:text-[16px]">
                    <a
                      href="tel: +38 (073) 12 34 567"
                      className="hover:border-b-[1px] hover:border-white hover:pb-[1px]"
                    >
                      +38 (073) 12 34 567
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row-reverse gap-[20px]">
                <p className="pt-[3px] text-[12px] font-extralight leading-[20px] text-end md:text-[12px] md:text-start md:leading-[24px]">
                  E-mail
                </p>
                <ul>
                  <li className="font-normal text-[14px] leading-[24px] sm:text-[16px]">
                    <a
                      href="mailto: support@carptravel.com"
                      className="hover:border-b-[1px] hover:border-white hover:pb-[1px]"
                    >
                      support@carptravel.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row gap-[20px] justify-end sm:absolute sm:right-[0] md:sticky md:flex-row-reverse md:pl-[122px]">
                <p className="pt-[3px] text-[12px] font-extralight leading-[20px] text-end md:text-[12px] md:text-start md:leading-[24px]">
                  Follow us
                </p>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="font-normal text-[14px] sm:text-[16px] leading-[24px] hover:border-b-[1px] hover:border-white hover:pb-[1px]"
                    >
                      facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-normal text-[14px] sm:text-[16px] leading-[24px] hover:border-b-[1px] hover:border-white hover:pb-[1px]"
                    >
                      instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-normal text-[14px] sm:text-[16px] leading-[24px] hover:border-b-[1px] hover:border-white hover:pb-[1px]"
                    >
                      youtube
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-normal text-[14px] sm:text-[16px] leading-[24px] hover:border-b-[1px] hover:border-white hover:pb-[1px]"
                    >
                      tiktok
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <form
                className="sm:flex-row flex flex-col gap-[16px] sm:gap-[20px] md:flex-col"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="sm:flex flex flex-col gap-[16px] sm:w-[222px] md:gap-[24px] md:w-[290px] sm:gap-[28px] md:flex-row md:w-[auto] md:gap-[20px]">
                  <div className="flex flex-col gap-[4px] relative sm:sticky md:w-[100%]">
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
                  <div className="flex flex-col gap-[4px] relative sm:sticky md:w-[100%]">
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
                </div>
                <div className="flex flex-col sm:w-[463px] md:w-[100%]">
                  <div className="flex flex-col gap-[4px] mb-[16px]">
                    <label className="text-[12px] leading-[24px] font-extralight tracking-[0.2em]">
                      Message
                    </label>
                    <textarea
                      className="bg-[#FFFFFF0D] py-[2px] px-[8px] focus:bg-[#FFFFFF1A] focus:outline-none sm:mb-[9px] md:w-[607px] md:h-[268px]"
                      rows={8}
                      {...register("message", {})}
                    ></textarea>
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
      </div>
    </section>
  );
}
