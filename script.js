// variable list
var searchCity = document.querySelector("#searchBtn");
var City = document.querySelector("#enterCity");
var searchesList = document.querySelector("#searchesList");


// click event
searchCity.addEventListener("click", citySearch);
// search function

// var recentSearches = [];

var searches = JSON.parse(localStorage.getItem("searches")) || [];
console.log(searches);
// function renderSearches() {

//   searches.innerHTML = "";

//   for (var i = 0; i < recentSearches.length; i++) {
// var recentSearches = recentSearches[i];

//     var li = document.createElement("li");
//     li.textContent = recentSearches

//     var button = document.createElement("button");
//     button.textContent = "complete";

//     li.appendChild(button);
//     recentSearches.appendChild(li);
// }
// }
// Retrieve history of searches if present otherwise setting up empty history
// function init () {

// var storedSearches = JSON.parse(localStorage.getItem("recentSearches"));

// if (storedSearches !== null) {
//   recentSearches = storedSearches;
// }


// //renders searches
//   renderSearches();
// }

// function storeRecents () {
//   localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
// }

// recentSearches.addEventListener("click", function(event) {
//   event.preventDefault();

//   var recentSearchesText = recentSearchesInput.value.trim();

//   if (recentSearchesText === "") {
//     return;
// }

// recentSearches.push(recentSearchesText);
// recentSearches.value = "";


// //stores and displays searches
// storeRecents();
// renderSearches();
// });
// console.log(searches);

// searchShow.addEventListener("click", showSearch);

function displayHistory() {
  $(".searches").empty();

  for (let i = 0; i < searches.length; i++) {
    console.log(i);

    var button = $("button");
    button.text(searches[i]);
    $(".searches").append(button);

    var searchBox = document.querySelector(".input-group");
    searchBox.innerHTML = "";
    var btn = document.createElement("button");
    btn.innerText = searches[i];
    btn.addEventListener("click", displayHistory);
    form - control.appendChild(btn);
    console.log(btn);
  }
  displayHistory();
}
// displayHistory();


//limits displays
const DISPLAY_LIMIT = 3;

// displays the searches 
function citySearch() {
  var input = City.value;

  //   if (!storedSearches.includes(input)){
  //     storedSearches.push(input)
  //  //    resaving
  //     localStorage.setItem("recentSearches", JSON.stringify(storedSearches));

  //     }

  if (!searches.includes(input)) {
    searches.push(input);
    //    resaving
    localStorage.setItem("searches", JSON.stringify(searches));
  }

  //watchmode API
  var url =
    "http://api.openweathermap.org/geo/1.0/direct?q= "+ input +",US&limit=5&appid=85a2d64b7fa797115388d73f9630cb86";
//   url = url + input;
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
        console.log(data);
      var resultsContainer = document.querySelector("#results");
      for (let index = 0; index < DISPLAY_LIMIT; index++) {
        const element = data[index];
        const itemContainer = document.createElement("div");
        const itemLat = element.lat;
        const itemLon = element.lon;
        itemContainer.setAttribute("data-lon", itemLon);
        itemContainer.setAttribute("data-lat", itemLat);
        const itemName = document.createElement("h2");
        // const itemTemp = document.createElement("p");
        // const itemID = document.createElement("p");
        itemName.textContent = element.name;
        // itemDesc.textContent = element.type;

        // Title
        itemName.innerHTML = "City: " + element.name;
        // Description
        // itemTemp.innerHTML = "Description: " + element.temp;

        itemContainer.append(itemName);
        resultsContainer.append(itemContainer);
        console.log(resultsContainer);
        console.log(itemContainer.getAttribute("data-lat"));
        console.log(itemContainer.getAttribute("data-lon"));
        addTrailer(itemLat, itemLon, itemContainer);

        // recentSearches.append();

      }
  // storeRecents();
    })
}

//k_72kh8az4
function addTrailer(itemLat,itemLon, itemContainer) {
  var url = "https://api.openweathermap.org/data/2.5/weather?lat="+ itemLat +"&lon="+ itemLon +"&appid=85a2d64b7fa797115388d73f9630cb86&units=imperial";
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      const element = data.main;
      console.log(element);
      const itemTemp = element.temp
      console.log(itemTemp);
      const itemTempName = document.createElement("p");
      itemTempName.innerHTML = "Temp :" + element.temp;
    //   const a = document.createElement("a");
    //   const link = document.createTextNode("Trailer");
    //   a.appendChild(link);
    //   a.href = element;
      itemContainer.append(itemTempName);
      console.log(itemContainer);
    });
}
// localStorage.setItem("searches", JSON.stringify({movietitle : input}));
// const savedSearches = JSON.parse(localStorage.getItem('searches'));
// document.getElementById('savedSearches').textContent = searches;


// function renderSearches() {

//   // recentSearches.innerHTML = "";

//   for (var i = 0; i < recentSearches.length; i++) {
//     var recentSearch = recentSearches[i];

//     var li = document.createElement("li");
//     li.textContent = recentSearch

//     var button = document.createElement("button");
//     button.textContent = "complete";

//     li.appendChild(button);
//     recentSearch.appendChild(li);
//   }
// }


// function init() {

//   var storedSearches = JSON.parse(localStorage.getItem("recentSearches"));

//   if (storedSearches !== null) {
//     recentSearches = storedSearches;
//   }


//   //renders searches
//   renderSearches();
// }

// function storeRecents() {
//   localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
// }

// // recentSearches.addEventListener("click", function(event) {
// //   event.preventDefault();

// //   var recentSearchesText = recentSearchesInput.value.trim();

// //   if (recentSearchesText === "") {

// //   }

// // recentSearches.push(recentSearchesText);
// // recentSearches.value = "";


// // //stores and displays searches
// storeRecents();
// renderSearches();