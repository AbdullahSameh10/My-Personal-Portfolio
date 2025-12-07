const wrapper = document.querySelector(".learning__wrapper");

const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

rightArrow.addEventListener("click", () => {
  wrapper.scrollBy({ left: -1, behavior: "smooth" });
});

leftArrow.addEventListener('click', () => {
  wrapper.scrollBy({ left: 1, behavior: "smooth" });

});

//---------------
const toggleBtn = document.quarySelector(".toggle-label");

toggleBtn.addEventListner("keyup" , (event) => {
  if(event.key === "Enter"){
    toggleBtn.currentTarget.click();
  }
});
