var letsCookButton = document.querySelector('.lets-cook-button');

var crockpotImage = document.querySelector('.crockpot-image');

var recipeContainer = document.querySelector('.recipe-container');











letsCookButton.addEventListener('click', getRandomRecipe);



const hide = (element) => {
    element.classList.add('hidden');
}
  
const show = (element) => {
    element.classList.remove('hidden');
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function getRandomRecipe()  {
    crockpotImage.style.visibility="hidden";
    recipeContainer.style.visibility="visible";
}