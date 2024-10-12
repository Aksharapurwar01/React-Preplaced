import { useState } from "react";

export default function TelephoneFormatter() {
  const [phoneValue, setPhoneValue] = useState("");

  const formatPhone = (e) => {
    const input = e.target.value.replace(/\D/g, "");
    const formattedNumber =
      input.length > 5
        ? `+91-${input.substring(0, 5)}-${input.substring(5, 10)}`
        : `+91-${input}`;

    setPhoneValue(formattedNumber);
  };

  return (
    <div>
      <input
        type="tel"
        id="phone"
        maxLength={14}
        placeholder="Mobile number"
        autoComplete="off"
        value={phoneValue}
        onChange={formatPhone}
      />

      <div>
        <label htmlFor="phone">+91-12345-67890</label>
      </div>
    </div>
  );
}
