"use client";
import { useState } from "react";

export default function PhoneInput({ className }) {
  const [phoneValue, setPhoneValue] = useState("");

  function handlePhoneInput(event) {
    const rawValue = event.target.value.replace(/\D/g, ""); // Убираем все, кроме цифр
    let formattedValue = "";

    if (rawValue.length > 0) {
      formattedValue = `(${rawValue.slice(0, 3)}`;
    }
    if (rawValue.length > 3) {
      formattedValue += `) ${rawValue.slice(3, 6)}`;
    }
    if (rawValue.length > 6) {
      formattedValue += ` ${rawValue.slice(6, 9)} ${rawValue.slice(9, 12)}`;
    }
    if (rawValue.length > 10) {
      formattedValue += ` ${rawValue.slice(rawValue.length)}`;
    }
    console.log(formattedValue);
    setPhoneValue(formattedValue);
  }
  return (
    <input
      type="tel"
      placeholder="(097) 12 34 567"
      value={phoneValue}
      onChange={handlePhoneInput}
      className={className}
    />
  );
}
