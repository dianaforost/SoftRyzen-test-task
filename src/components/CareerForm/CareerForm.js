import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import PropTypes from "prop-types";
import { useState } from "react";

import CheckBox from "../icons/CheckBox";
import CrossIcon from "../icons/CrossIcon";
import CheckBoxIcon from "../icons/CheckBoxIcon";

export default function CareerForm({ form }) {
  const [formSubmitted, setFormSubmitted] = useState(null);
  const {
    fullName,
    fullNameInvalid,
    email,
    emailInvalid,
    position,
    phone,
    phoneNumber,
    phoneInvalid,
    message,
    confirm,
    confirmInvalid,
    btn,
    btnSuccess,
    btnError,
  } = form;
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      tel: "",
    },
  });
  const STORAGE_KEY = "choose_us_form";

  useFormPersist(STORAGE_KEY, {
    watch,
    storage: typeof window !== "undefined" ? window.localStorage : "",
    setValue,
  });

  const onSubmit = (data) => {
    if (data) {
      console.log(data);
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(null);
      }, 3000);
      reset();
    } else {
      setFormSubmitted(false);
      setTimeout(() => {
        setFormSubmitted(null);
      }, 3000);
    }
  };

  return (
    <form
      className="sm:flex-row flex flex-col gap-[16px] sm:gap-[20px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="sm:flex flex flex-col gap-[16px] sm:w-[222px] md:gap-[24px] md:w-[290px]">
        <div className="flex flex-col gap-[4px] relative sm:sticky">
          <label
            htmlFor="fullName"
            className={`${
              errors.fullName ? "text-formErrorColor" : ""
            } text-[12px] leading-[24px] font-extralight tracking-[0.2em] `}
          >
            {fullName}
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="John Smith"
            autoComplete="true"
            {...register("fullName", {
              required: true,
              minLength: 2,
            })}
            className={`${
              errors.fullName ? "text-formErrorColor" : ""
            } bg-inputBg pr-[5px] md:py-[2px] md:text-[20px] md:leading-[24px] text-[13px] leading-[24px] font-extralight pl-[8px] hover:bg-inputFocusBg focus:bg-inputFocusBg transition duration-300`}
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
              <span className="right-[0] top-[50px] text-formErrorColor pl-[19px] md:right-[0] absolute md:top-[53px] text-[12px] leading-[24px] font-extralight tracking-[0.2em]">
                {fullNameInvalid}
              </span>
            </>
          )}
        </div>
        <div className="flex flex-col gap-[4px] relative sm:sticky">
          <label
            htmlFor="tel"
            className={`${
              errors.email ? "text-formErrorColor" : ""
            }  text-[12px] leading-[24px] font-extralight tracking-[0.2em]`}
          >
            {email}
          </label>
          <input
            type="email"
            id="email"
            autoComplete="true"
            placeholder="johnsmith@email.com"
            {...register("email", {
              required: true,
              minLength: 2,
              pattern: /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/i,
            })}
            className={`${
              errors.email ? "text-formErrorColor" : ""
            } bg-inputBg pr-[5px] md:py-[2px] md:text-[20px] md:leading-[24px] text-[13px] leading-[24px] font-extralight pl-[8px] hover:bg-inputFocusBg focus:bg-inputFocusBg transition duration-300`}
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
              <span className="right-[0] top-[50px] text-formErrorColor absolute md:right-[0] md:pl-[19px] md:top-[53px] text-[12px] leading-[24px] font-extralight tracking-[0.2em]">
                {emailInvalid}
              </span>
            </>
          )}
        </div>
        <div className="flex flex-col gap-[4px]">
          <label
            htmlFor="position"
            className=" text-[12px] leading-[24px] font-extralight tracking-[0.2em]"
          >
            {position}
          </label>
          <input
            type="text"
            id="position"
            placeholder="Movie maker"
            {...register("position", {})}
            className="bg-inputBg pr-[5px] md:py-[2px] md:text-[20px] md:leading-[24px] text-[13px] leading-[24px] font-extralight pl-[8px] hover:bg-inputFocusBg focus:bg-inputFocusBg transition duration-300"
          ></input>
        </div>
        <div className="flex flex-col gap-[4px] relative sm:sticky">
          <label
            htmlFor="tel"
            className={`${
              errors.tel ? "text-formErrorColor" : ""
            } text-[12px] leading-[24px] font-extralight tracking-[0.2em]`}
          >
            {phone}
          </label>
          <InputMask
            mask="(999) 99 99 999"
            maskChar={null}
            type="tel"
            id="tel"
            placeholder="(097) 12 34 567"
            autoComplete="true"
            {...register("tel", {
              required: true,
              minLength: 15,
            })}
            className={`${
              errors.tel ? "text-formErrorColor" : ""
            } bg-inputBg pl-[48px] pr-[5px] md:py-[2px] md:text-[20px] md:leading-[24px] text-[13px] leading-[24px] font-extralight md:pl-[60px] hover:bg-inputFocusBg focus:bg-inputFocusBg transition duration-300`}
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
              <span className="right-[0] top-[50px] text-formErrorColor md:right-[0] absolute md:top-[53px] text-[12px] leading-[24px] font-extralight tracking-[0.2em]">
                {phoneInvalid}
              </span>
            </>
          )}
          <span className="bottom-[0] absolute md:bottom-[2px] left-[8px] md:text-[20px] md:leading-[24px] text-[13px] leading-[24px] font-extralight">
            {phoneNumber}
          </span>
        </div>
      </div>
      <div className="sm:w-[221px] flex flex-col">
        <div className="flex flex-col gap-[4px]">
          <label
            htmlFor="message"
            className="text-[12px] leading-[24px] font-extralight tracking-[0.2em]"
          >
            {message}
          </label>
          <textarea
            id="message"
            className="resize-none bg-inputBg py-[2px] px-[8px] sm:mb-[9px] md:w-[292px] md:h-[268px] hover:bg-inputFocusBg focus:bg-inputFocusBg transition duration-300"
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
              "checkbox-icon fill-white opacity-10 absolute top-[5px] left-[5px] hover:opacity-70 focus:opacity-70 transition duration-300"
            }
            width={14}
            height={14}
          />
          <CheckBoxIcon className={"absolute"} />
          <label
            htmlFor="checkbox"
            className="pl-[32px] text-[12px] leading-[22px]"
          >
            {confirm}
          </label>
          {errors.confirm && (
            <>
              <span className="right-[0] top-[50px] text-formErrorColor left-[0] md:right-[0] absolute md:top-[53px] text-[12px] leading-[24px] font-extralight tracking-[0.2em]">
                {confirmInvalid}
              </span>
            </>
          )}
        </div>
        <button
          className={`${
            formSubmitted === true
              ? "text-[#05f224] hover:text-[#039616] focus:text-[#039616]"
              : formSubmitted === false
              ? "text-[#f20505] hover:text-[#a80505] focus:text-[#a80505]"
              : "text-white"
          } self-end uppercase text-[30px] font-medium leading-[36px] text-end sm:flex sm:ml-[auto] hover:text-darkGrayColor focus:text-darkGrayColor transition duration-300`}
          type="submit"
        >
          {formSubmitted === true
            ? btnSuccess
            : formSubmitted === false
            ? btnError
            : btn}
        </button>
      </div>
    </form>
  );
}

CareerForm.propTypes = {
  form: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    fullNameInvalid: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    emailInvalid: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    phoneInvalid: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    confirm: PropTypes.string.isRequired,
    confirmInvalid: PropTypes.string.isRequired,
    btn: PropTypes.string.isRequired,
  }).isRequired,
};
