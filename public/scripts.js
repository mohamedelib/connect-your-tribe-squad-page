const filter = document.getElementById("filter-select");
console.log(filter);
if (filter) {
  filter.addEventListener("change", function () {
    if (this.value === "za") {
      window.location.href = "/z-a";
    }

    if (this.value === "az") {
      window.location.href = "/";
    }

    if (this.value === "birthdate") {
      window.location.href = "/birthdate";
    }
  });
}

// 1: selecteer de button
let heartButton = document.querySelector(".heart");
console.log(heartButton);

// 2: wacht op een klik
heartButton.addEventListener("click", function () {
  // 3: maakt de hart rood , door een class toe te voegen aan die sectie..
  heartButton.classList.toggle("active");
});
