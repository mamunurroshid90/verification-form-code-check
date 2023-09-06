const input_number = document.querySelectorAll(".input-number");
input_number[0].focus();

input_number.forEach((number, index) => {
  number.addEventListener("keydown", (e) => {
    // console.log(e.key);
    if (e.key >= 0 && e.key <= 9) {
      setTimeout(() => input_number[index + 1].focus(), 10);
      input_number[index].value = "";
    } else if (e.key === "Backspace") {
      setTimeout(() => input_number[index - 1].focus(), 10);
    }
  });
});
