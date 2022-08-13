// variable list
var searchShow = document.querySelector("#searchBtn");
var show = document.querySelector("#enterShow");
var searchesList = document.querySelector("#searchesList");


// click event
searchShow.addEventListener("click", showSearch);
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
function showSearch() {
  var input = show.value;

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
    "https://api.watchmode.com/v1/search/?apiKey=BjJ1HfK8A6JaMjMk0UCbaDWrNACDpoIyzqqZEVDY&search_field=name&search_value=";
  url = url + input;
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var resultsContainer = document.querySelector("#results");
      for (let index = 0; index < DISPLAY_LIMIT; index++) {
        const element = data.title_results[index];
        const itemContainer = document.createElement("div");
        const itemId = element.imdb_id;
        itemContainer.setAttribute("data-imdbid", itemId);
        const itemTitle = document.createElement("h2");
        const itemDesc = document.createElement("p");
        // const itemID = document.createElement("p");
        itemTitle.textContent = element.name;
        itemDesc.textContent = element.type;

        // Title
        itemTitle.innerHTML = "Title: " + element.name;
        // Description
        itemDesc.innerHTML = "Description: " + element.type;

        itemContainer.append(itemTitle, itemDesc);
        resultsContainer.append(itemContainer);
        console.log(resultsContainer);
        console.log(itemContainer.getAttribute("data-imdbid"));
        addTrailer(itemId, itemContainer);

        // recentSearches.append();

      }
  // storeRecents();
    });
}

//k_72kh8az4
function addTrailer(itemId, itemContainer) {
  var url = "https://imdb-api.com/en/API/Trailer/k_5amc983n/" + itemId + "";
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      const element = data.linkEmbed;
      console.log(element);
      const a = document.createElement("a");
      const link = document.createTextNode("Trailer");
      a.appendChild(link);
      a.href = element;
      itemContainer.append(a);
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