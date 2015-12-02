
var dishes = [
  "Roasted Brussels Sprouts",
  "Truffel Salt Burrito",
  "Vegan Philly Style Cheese Steak",
  "Fresh Brussels Sprouts Soup",
  "Split Pea Pizza with Cherry Tomatoes and Chocolate Shavings",
  "Brussels Sprouts with Toasted Breadcrumbs, Parmesan, and Lemon",
  "Cheesy Maple Roasted Brussels Sprouts and Broccoli with Dried Cherries",
  "Parmesan Toast with Green Onions and Thyme",
  "Hot Cheesy Roasted Brussels Sprout Dip",
  "Gazpacho with Lime and Potato Sauce",
  "Pomegranate Roasted Brussels Sprouts with Red Grapes and Farro",
  "Roasted Brussels Sprout and Red Potato Salad",
  "Smoked Gouda and Poppy Seed Crackers",
  "Smoky Buttered Brussels Sprouts",
  "Margherita Pizza with Mushrooms and Canteloupe",
  "Orange Glazed Vegan Chicken Cutlet",
  "Sweet and Spicy Roasted Brussels Sprouts",
  "Smoky Buttered Brussels Sprouts",
  "Jelly Bean Ice Cream",
  "Brussels Sprouts and Egg Salad with Hazelnuts"
]

var goodDishes = sortDishes(dishes)[0];
var badDishes = sortDishes(dishes)[1];
var input = document.getElementsByTagName("input");
displayGoodDishes()


function sortDishes(array) {
  var goodDishes = []
  var badDishes = []
  for (var i = 0; i < array.length; i++) {
    if (array[i].indexOf('Brussels Sprout') != -1) {
      goodDishes.push(array[i] + ': This contains the vegetable that we need.');
    } else {
      badDishes.push(array[i] + ": We don't care for this dish.");
    }
  }
  return [goodDishes, badDishes];
}

function displayGoodDishes(array) {
  for (var i = 0; i < array.length; i++) {
    var paragraph = document.createElement("li");
    var text = document.createTextNode(goodDishes[i]);
    paragraph.appendChild(text);

    var body = document.getElementsByTagName("li")[0];
    body.appendChild(paragraph);
  }
}
