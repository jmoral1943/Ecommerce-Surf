let items = document.querySelectorAll(".item");
let checkedSurf = false;
let checkedShoes = false;
let checkedShirts = false;
let checkedLess = false;
let checked = false;


const surfboards = () => {
  checkedSurf = !checkedSurf;
  filter();
}

const shoes = () => {
  checkedShoes = !checkedShoes;
  filter();
}

const shirts = () => {
  checkedShirts = !checkedShirts;
  filter();
}

const filter = () => {
  for (let i =0; i < items.length; i++) {
    items[i].style.display = "none";
  }
  if (checkedSurf && checkedShoes && checkedShirts) {
    document.querySelector(".products__grid").style.gridTemplateRows = "1fr 1fr 1fr 1fr";
    for (let i =0; i < items.length; i++) {
      items[i].style.display = "block";
    }
  } else if (checkedSurf && checkedShoes) {
    document.querySelector(".products__grid").style.gridTemplateRows = "1fr 1fr 1fr";
    for(let i = 0; i < 6; i++) {
      items[i].style.display = "block";
    }
    for(let i = 9; i < 12; i++) {
      items[i].style.display = "block";
    }
  } else if (checkedSurf && checkedShirts) {
    document.querySelector(".products__grid").style.gridTemplateRows = "1fr 1fr 1fr";
    for(let i = 0; i < 6; i++) {
      items[i].style.display = "block";
    }
    for(let i = 6; i < 9; i++) {
      items[i].style.display = "block";
    }
  } else if (checkedShoes && checkedShirts) {
    document.querySelector(".products__grid").style.gridTemplateRows = "1fr 1fr";
    for(let i = 9; i < 12; i++) {
      items[i].style.display = "block";
    }
    for(let i = 6; i < 9; i++) {
      items[i].style.display = "block";
    }
  } else if (checkedSurf) {
    document.querySelector(".products__grid").style.gridTemplateRows = "1fr 1fr";
    for(let i = 0; i < 6; i++) {
      items[i].style.display = "block";
    }
  } else if (checkedShoes) {
    document.querySelector(".products__grid").style.gridTemplateRows = "1fr";
    for(let i = 9; i < 12; i++) {
      items[i].style.display = "block";
    }
  } else if (checkedShirts) {
    document.querySelector(".products__grid").style.gridTemplateRows = "1fr";
    for(let i = 6; i < 9; i++) {
      items[i].style.display = "block";
    }
  }  else {
    document.querySelector(".products__grid").style.gridTemplateRows = "1fr 1fr 1fr 1fr";
    for (let i =0; i < items.length; i++) {
      items[i].style.display = "block";
    }
  }
}