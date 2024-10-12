import React from "react";
import StepperComponent from "./StepperComponent";

export default function Stepper() {
  const CHECKOUT_STEPS = [
    {
      name: "Customer Info",
      Component: () => <div>Provide your contact details.</div>,
    },
    {
      name: "Shipping Info",
      Component: () => <div>Enter your shipping address.</div>,
    },
    {
      name: "Payment",
      Component: () => <div>Complete payment for your order.</div>,
    },
    {
      name: "Delivered",
      Component: () => <div> Your order has been delivered.</div>,
    },
  ];

  return <div>
    <h1>Checkout</h1>
    <StepperComponent checkoutSteps = {CHECKOUT_STEPS}/>
  </div>;
}
