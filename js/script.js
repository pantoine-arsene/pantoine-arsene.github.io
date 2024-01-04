const className = "inverted";
const scrollTrigger = 60;

window.onscroll = function() {
    if (window.scrollY >= scrollTrigger) {
      document.getElementsByTagName("header")[0].classList.add(className);
    } else {
      document.getElementsByTagName("header")[0].classList.remove(className);
    }
  };