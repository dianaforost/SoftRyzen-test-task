import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import PropTypes from "prop-types";
import { useState } from "react";

import CrossIcon from "../icons/CrossIcon";

export default function ContactsForm({ form }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const [formSubmitted, setFormSubmitted] = useState(null);
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
  const STORAGE_KEY = "contact_us_form";

  useFormPersist(STORAGE_KEY, {
    watch,
    storage: typeof window !== "undefined" ? window.localStorage : "",
    setValue,
  });
  return (
    <form
      className="sm:flex-row flex flex-col gap-[16px] sm:gap-[20px] md:flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="sm:flex flex flex-col gap-[16px] sm:w-[222px] md:gap-[24px] md:w-[290px] sm:gap-[28px] md:flex-row md:w-[auto] md:gap-[20px]">
        <div className="flex flex-col gap-[4px] relative sm:sticky md:w-[100%]">
          <label
            htmlFor="fullName"
            className={`${
              errors.fullName ? "text-red-500" : ""
            } text-[12px] leading-[24px] font-extralight tracking-[0.2em] `}
          >
            {form.fullName}
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="true"
            placeholder="John Smith"
            {...register("fullName", {
              required: true,
              minLength: 2,
            })}
            className={`${
              errors.fullName ? "text-red-500" : ""
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
                {form.fullNameInvalid}
              </span>
            </>
          )}
        </div>
        <div className="flex flex-col gap-[4px] relative sm:sticky md:w-[100%]">
          <label
            htmlFor="email"
            className={`${
              errors.email ? "text-red-500" : ""
            }  text-[12px] leading-[24px] font-extralight tracking-[0.2em]`}
          >
            {form.email}
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
              errors.email ? "text-red-500" : ""
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
                {form.emailInvalid}
              </span>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col sm:w-[463px] md:w-[100%]">
        <div className="flex flex-col gap-[4px] mb-[16px]">
          <label
            htmlFor="message"
            className="text-[12px] leading-[24px] font-extralight tracking-[0.2em]"
          >
            {form.message}
          </label>
          <textarea
            id="message"
            className="resize-none bg-inputBg py-[2px] px-[8px] sm:mb-[9px] md:w-[607px] md:h-[268px] hover:bg-inputFocusBg focus:bg-inputFocusBg transition duration-300"
            rows={8}
            {...register("message", {})}
          ></textarea>
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
            ? form.btnSuccess
            : formSubmitted === false
            ? form.btnError
            : form.btn}
        </button>
      </div>
    </form>
  );
}

ContactsForm.propTypes = {
  form: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    fullNameInvalid: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    emailInvalid: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    btn: PropTypes.string.isRequired,
  }).isRequired,
};
