// weathering API
let APIKey = "84f2dea59fdab1950d54a8cde450e6eb";

//l URL where API is being pulled from
let queryURL = "api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}" + APIKey;

// AJAX call for API
$.ajax({
    url: queryURL,
    method: "GET"
})

    .then(function (response) {

        console.log(queryURL);

        console.log(response);

        $(".city").html("<h1>", response.name);
        $(".temp").text("Tempurature", response.);
        $(".humidity").text("Humidity", response.);
        $(".wind").text("Wind Speed", response.then);
        $(".uvIndex").text("UV Index", response.);

    });


then.preventDefault();
let searchBtn = document.querySelector(".searchBtn");
let mainCity = document.querySelector(".currentInfo");
let fourDays = document.querySelector(".fourDayInfo");



// onlcick for search button
function(event) {

    $(".searchBtn").on('click', function (event))
}
