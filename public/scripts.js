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
let hearts = document.querySelectorAll(".heart");
console.log(hearts);
hearts.forEach(function (heart) {
  // 2: wacht op een klik
  heart.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
