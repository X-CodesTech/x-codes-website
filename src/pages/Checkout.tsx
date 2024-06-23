// import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

const Checkout = () => {
  // const onCreateOrder = (data: any, actions: any) => {
  //   return actions.order.create({
  //     purchase_units: [
  //       {
  //         amount: {
  //           value: "8.99",
  //         },
  //       },
  //     ],
  //   });
  // };

  // const onApproveOrder = (data: any, actions: any) => {
  //   return actions.order.capture().then((details: any) => {
  //     const name = details.payer.name.given_name;
  //     alert(`Transaction completed by ${name}`);
  //   });
  // };

  return (
    <div className="py-5" style={{ height: "100%" }}>
      {/* <p style={{ marginTop: "400px" }}>Checkout</p>{" "}
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => onCreateOrder(data, actions)}
        onApprove={(data, actions) => onApproveOrder(data, actions)}
      /> */}
      <p>This is the checkout page</p>
    </div>
  );
};

export default Checkout;
