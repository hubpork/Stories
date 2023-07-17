const activeImage = document.querySelector(".product-image .active");
const productImages = document.querySelectorAll(".image-list img");
const navItem = document.querySelector('a.toggle-nav');

function changeImage(e) {
  activeImage.src = e.target.src;
}

function toggleNavigation(){
  this.nextElementSibling.classList.toggle('active');
}

productImages.forEach(image => image.addEventListener("click", changeImage));
navItem.addEventListener('click', toggleNavigation);



const spinner =
  '<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><use href="#icon.spinner"></use></svg>';

const states = {
  idle: "Add To Cart",
  sending: `${spinner} working...`,
  done: "Done!"
};

demo.onclick = () => {
  setState("sending");
  setTimeout(() => setState("done"), 4000);
  setTimeout(() => setState("idle"), 6000);
};

function setState(state) {
  if (!document.startViewTransition) demo.innerHTML = states[state];
  else document.startViewTransition(() => (demo.innerHTML = states[state]));
}
