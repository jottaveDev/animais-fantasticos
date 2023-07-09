import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    outsideClick(this, ["click", "touchstart"], () => {
      this.classList.remove("active");
    });
  }

  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  dropdownMenus.forEach((menu) => {
    ["click", "touchstart"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
