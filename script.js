const diasInput = document.getElementById("dias");
const priceText = document.getElementById("price");
const rechargeBtn = document.getElementById("recharge");
const helpBtn = document.getElementById("help");
const notify = document.getElementById("notify");

diasInput.addEventListener("input", () => {
  const dias = Number(diasInput.value || 0);
  priceText.textContent = (dias * 0.5).toFixed(2);
});

rechargeBtn.addEventListener("click", () => {
  notify.classList.add("show");

  setTimeout(() => {
    notify.classList.remove("show");
  }, 3000);
});

helpBtn.addEventListener("click", () => {
  window.open("https://example.com", "_blank");
});
