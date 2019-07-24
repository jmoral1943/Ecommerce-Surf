let navItems = document.querySelectorAll(".homescreen__navbar--mobile");


const openNav = () => {
  document.getElementById("homescreen__header--mobile").style.width = "100%";
  let i = 0;
  for (i ; i < navItems.length; i++) {
    navItems[i].style.opacity = 1;
  }
}

const closeNav = () => {
  document.getElementById("homescreen__header--mobile").style.width = "0";
  let i = 0;
  for (i ; i < navItems.length; i++) {
    navItems[i].style.transition = ".1s";
    navItems[i].style.opacity = 0;
  }
}
