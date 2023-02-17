var letsCookButton = document.querySelector('.lets-cook-button');
var clearButton = document.querySelector('.clear-button');
var radioButtons = document.querySelector('.radio-buttons');

// var selectSide = document.querySelector('#side-radio');
// var selectMain = document.querySelector('#main-radio');
// var selectDessert = document.querySelector('#dessert-radio');
// var selectMeal = document.querySelector('#meal-radio');

var multipurposeContainer = document.querySelector('.multipurpose-container');

var crockpotImage = document.querySelector('.crockpot-image');


var sides = [
    "Miso Glazed Carrots",
    "Coleslaw",
    "Garden Salad",
    "Crispy Potatoes",
    "Sweet Potato Tots",
    "Coconut Rice",
    "Caeser Salad",
    "Shrimp Summer Rolls",
    "Garlic Butter Mushrooms",
    "Hush Puppies"
]

var mains = [
    "Spaghetti and Meatballs",
    "Pineapple Chicken",
    "Shakshuka",
    "Thai Yellow Curry",
    "Bibimbap",
    "Chicken Parmesean",
    "Butternut Squash Soup",
    "BBQ Chicken Burgers",
    "Ramen",
    "Empanadas",
    "Chicken Fried Rice",
    "Sheet Pan Fajitas",
    "Margarita Pizza"
]

var desserts = [
    "Apple Pie",
    "Lemon Meringue Pie",
    "Black Forest Cake",
    "Banana Bread",
    "Peach Cobbler",
    "Cheesecake",
    "Funfetti Cake",
    "Baklava",
    "Flan",
    "Macarons",
    "Macaroons",
    "Chocolate Cupcakes",
    "Pavlova",
    "Pumpkin Pie",
    "Key Lime Pie",
    "Tart Tatin",
    "Croissants",
    "Eclairs"
]




letsCookButton.addEventListener('click', getRandomRecipe);
clearButton.addEventListener('click', clearRandomRecipe);


function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function getRandomRecipe()  {
    var toggleLetsCook = false;
    clearButton.style.visibility= "visible";
    var buttonOptions = document.getElementsByName("radio");
    for (var i = 0; i < buttonOptions.length; i++)  {
        if (buttonOptions[i].checked)   {
                var mealChoice = (buttonOptions[i].value);
        }
    }
    if (mealChoice === "side")  {
        multipurposeContainer.innerHTML = `
            <article class="recipe">
                <p class="you-should-make">You should make:</p>
                <p class="recipe-name">${sides[getRandomIndex(sides)]}</p>
            </article>
        `
        var toggleLetsCook = true;
    }
    if (mealChoice === "main") {
        multipurposeContainer.innerHTML = `
        <article class="recipe">
            <p class="you-should-make">You should make:</p>
            <p class="recipe-name">${mains[getRandomIndex(mains)]}</p>
        </article>
        `
        var toggleLetsCook = true;
    }
    if (mealChoice === "dessert") {
        multipurposeContainer.innerHTML = `
        <article class="recipe">
            <p class="you-should-make">You should make:</p>
            <p class="recipe-name">${desserts[getRandomIndex(desserts)]}</p>
        </article>
        `
        var toggleLetsCook = true;
    }
    if (mealChoice === "meal") {
        multipurposeContainer.innerHTML = `
        <article class="recipe">
            <p class="you-should-make">You should make:</p>
            <p class="recipe-name"><font size ="5">${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!</font></p>
        </article>
        `
        var toggleLetsCook = true;
    }
}


function clearRandomRecipe()    {
    clearButton.style.visibility = "hidden";
    multipurposeContainer.innerHTML = `
        <img class="crockpot-image" 
        src="https://raw.githubusercontent.com/emlindvall/whats-for-dinner/c0306412f5a0f723154ee8aea09191078d45869d/assets/cookpot.svg" 
        alt="Vector image of a crockpot"
        width="175px" height="175px">
        `
}

