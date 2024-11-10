/*--------------------------------------------------
               Caraousel code starts
---------------------------------------------------*/
let next = document.getElementById("next");
let autoplay =   setInterval(() => { next.click() },3000);

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  clearInterval(autoplay);
  autoplay =   setInterval(() => { next.click() },3000);
}

function currentSlide(n){
  slideIndex = n;
  showSlides(slideIndex);
  clearInterval(autoplay);
  autoplay =   setInterval(() => { next.click() },3000);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { 
      slideIndex = 1
    }
  if (n < 1) {
    slideIndex = slides.length
   }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  
}

/*--------------------------------------------------
               Caraousel code ends
---------------------------------------------------*/


/*--------------------------------------------------
               Our Services tabs code starts
---------------------------------------------------*/
const tabPanels = Array.from(document.querySelectorAll(".tab-panels > div"));
const tabs = Array.from(document.querySelectorAll(".tab"));
const tabsContainer = document.querySelector(".tab-menu");

tabPanels.forEach((tab, index) => {
  if (index > 0) tab.setAttribute("hidden", "");
});

const switchTab = (e) => {
  // Find the clicked Tab
  const clickedTab = e.target.closest("li");
  if (!clickedTab) return;

  // Remove the "active" class from all Tabs
  tabs.forEach((tab) => tab.classList.remove("active"));
  // Add the "active" class to the clicked Tab
  clickedTab.classList.add("active");

  // Get the associated PANEL for the clicked tab
  const activePanelId = clickedTab.children[0].getAttribute("href");
  const activePanel = document.querySelector(activePanelId);

  // Hide all the Tab Panels
  tabPanels.forEach((panel) => {
    panel.setAttribute("hidden", "");
  });
  // Show the panel associated with the clicked tab
  activePanel.removeAttribute("hidden", "");
};

tabsContainer.addEventListener("click", switchTab);
/*--------------------------------------------------
               Our Services tabs code ends
---------------------------------------------------*/

/*--------------------------------------------------
              FAQ code ends
---------------------------------------------------*/

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
})
/*--------------------------------------------------
          FAQ code ends
---------------------------------------------------*/