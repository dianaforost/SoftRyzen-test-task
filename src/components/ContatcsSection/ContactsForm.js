import CrossIcon from "../icons/CrossIcon";
import { useForm } from "react-hook-form";
import Icon from "../icons/CheckBoxIcon";
import CheckBox from "../icons/CheckBox";

export default function ContactsForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
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
              pattern: /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/i,
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
  );
}
