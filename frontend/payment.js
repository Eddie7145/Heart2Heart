let inputs = document.querySelectorAll(".donate_form input");

let userDetails = {
    email: "",
    full_name: "",
    phone_number: "",
    amount: "",
}
let updateDetails = (e) => {
    userDetails = {...userDetails, [e.name]: e.value};
}

inputs.forEach(input => input.oninput = (e) => updateDetails(e.target))

function makePayment() {
    let {amount, phone_number, email, full_name} = userDetails;
    if (!amount && !phone_number && !email && !full_name) {
        alert('check');
        return;
    }
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-e245be30f9f0a6434e740fa1ceb3337b-X",
      tx_ref: "titanic-48981487343MDI0NzMx",
      amount: parseInt(amount),
      currency: "NGN",
      payment_options: "card, ussd, banktransfer",
      redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
      customer: {
        email: email,
        phone_number: phone_number,
        name: full_name,
      },
      customizations: {
        title: "Heart2Heart Project",
        description: "Payment for an awesome cruise",
        logo: "./assets/asset.png",
      },
    });
  }