function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", function() {
  const rewardsSection = document.querySelector(".my-5");
  if (rewardsSection) {
    rewardsSection.style.display = "block"; // Ensure it's visible
  }
});
