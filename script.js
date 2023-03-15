
let btnOne = document.querySelector(".btnOne")
let btnTwo = document.querySelector(".btnTwo")
let btnThree = document.querySelector(".btnThree")
let btnFour = document.querySelector(".btnFour")
let btnFive = document.querySelector(".btnFive")
let btnSix = document.querySelector(".btnSix")
let optionOneScreen = document.querySelector(".optionOneScreen")
let optionTwoScreen = document.querySelector(".optionTwoScreen")
let optionOneEnd = document.querySelector(".optionOneEnd")
let optionTwoEnd = document.querySelector(".optionTwoEnd")
let storyOpening = document.querySelector(".storyOpening")


btnOne.onclick = function(){
  storyOpening.style.display = "none";
  optionOneScreen.style.display = "block";
};

btnTwo.onclick = function(){
  storyOpening.style.display = "none";
  optionTwoScreen.style.display = "block";
};

btnThree.onclick = function(){
  optionOneScreen.style.display = "none";
  optionOneEnd.style.display = "block";
}

btnFour.onclick = function(){
  optionOneScreen.style.display = "none";
  optionTwoScreen.style.display = "block";
}

btnFive.onclick = function(){
  optionTwoScreen.style.display = "none";
  optionOneEnd.style.display = "block";
}

btnSix.onclick = function(){
  optionTwoScreen.style.display = "none";
  optionTwoEnd.style.display = "block";
}

