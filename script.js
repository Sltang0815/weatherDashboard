// weathering API
let APIKey = "84f2dea59fdab1950d54a8cde450e6eb";

// URL where API is being pulled from
// currentCity function has the parameter of city where it will pull from the URL and the response being what I am pulling and placing it in the $().html();
function currentCity(city) {
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=84f2dea59fdab1950d54a8cde450e6eb&units=imperial";

    // AJAX call for API
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {

            console.log(queryURL);

            console.log(response);
            // let date vairable for date conversion slack

            $(".city").html("<h1>" + response.name + "</h1>");
            $(".temp").text("Tempurature " + response.main.temp);
            $(".humidity").text("Humidity " + response.main.humidity);
            $(".wind").text("Wind Speed " + response.wind.speed);
            // $(".uvIndex").text("UV Index", response.);

            // API for the uv data    let queryURL= https://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid=&appid=84f2dea59fdab1950d54a8cde450e6eb&units=imperial";

            // find out how to pull current city's long and lat  should bee in the "coord" of the console logged info
        });

}

let searchBtn = document.querySelector(".searchBtn");
let mainCity = document.querySelector(".currentInfo");
let fourDays = document.querySelector(".fourDayInfo");



// onlcick for search button

$(".searchBtn").on('click', function (event) {
    event.preventDefault();
    let cityName = $("#cityLookUp").val().trim();
    console.log(cityName);
    currentCity(cityName);
})


// for the history under searche engine
// localStorage.getItem();
// localStorage.setItem();
// JSON.stingify()      
//.value() returns an array containing all the enumerable property values of the given object


// addEventListener()  multiple click events


// section to print out the F day line up of tempuratures. Appending to the HTML " id='fiveDay' " <div>
//Figure out how to append


function fiveDayLineUp(cities) {
    let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cities + "&appid=84f2dea59fdab1950d54a8cde450e6eb&units=imperial";


    $.ajax({
        url: queryURL,
        method: "GET"
    })


        .then(function (response) {

            console.log(queryURL);

            console.log(response);
            // let date vairable for date conversion slack

            // appending for a five day line up id "history"
            $("#fiveDay").text.append(response);

        });





}