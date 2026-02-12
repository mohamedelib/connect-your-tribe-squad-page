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
  });
}
