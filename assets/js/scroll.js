function checkScrollPosition() {
  var w = window.innerWidth;
  var buttons = document.getElementById("float-buttons");
  var icons = document.getElementById("float-icons");
  if (w > 769) {
    if (window.scrollY <= 500) {
      buttons.style.display = "none";
      icons.style.display = "flex";
    } else {
      icons.style.display = "none";
      buttons.style.display = "flex";
    }
  } else {
    buttons.style.display = "none";
    icons.style.display = "none";
  }
}

document.getElementById('scroll-top-button').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Check scroll position on page load
window.onload = checkScrollPosition;

// Check scroll position on scroll
window.onscroll = checkScrollPosition;
