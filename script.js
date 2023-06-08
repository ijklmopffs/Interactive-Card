const labelName = document.getElementById("label_name");
const cardNumber = document.getElementById("card_number");
const title = document.querySelector(".title");
const zeros = document.querySelector(".zeros");

labelName.addEventListener("input", (e) => {
  const input = e.target.value;
  title.textContent = input;
});

cardNumber.addEventListener("input", (e) => {
  const input = e.target.value;
  zeros.textContent = input;
});
