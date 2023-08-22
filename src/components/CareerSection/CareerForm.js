import InputMask from "react-input-mask";
import CheckBox from "../icons/CheckBox";
import CrossIcon from "../icons/CrossIcon";
import CheckBoxIcon from "../icons/CheckBoxIcon";
import { useForm } from "react-hook-form";

export default function CareerForm() {
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

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
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
            className="absolute top-[0] left-[0] whitespace-nowrap w-[24px] h-[24px] overflow-hidden border-0 p-0 cursor-pointer appearance-none z-[999]"
            type="checkbox"
            name="checkbox"
            id="checkbox"
            {...register("confirm", { required: true })}
          ></input>
          <CheckBox
            className={
              "checkbox-icon fill-white opacity-10 absolute top-[5px] left-[5px]"
            }
            width={14}
            height={14}
          />
          <CheckBoxIcon className={"absolute"} />
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
  );
}
