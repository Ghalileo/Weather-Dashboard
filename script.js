//Variables 
var apiKey = "f3e794b6f19299364c3a368c93f4e895";
var cityPlacement = $(".cities");

//API Sever Connection
$(".searchBtn").on("click", function (e) {
    e.preventDefault();
    var city = $(".searchCity").val();
    var state = $(".searchState").val();

    //This point of undo, comment out ajax
    //URL search for current UV index 
    // var urlSearch = "http://api.openweathermap.org/data/2.5/forecast?id=524901" + city + "," + state + "&APPID=" + apiKey;
    // $.ajax({
    //     url: urlSearch,
    //     method:"GET"
    // })

    //URL search for 5 day forcast
    // var urlSearch = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + state + "&appid=" + apiKey;
    // $.ajax({
    //     url: urlSearch,
    //     method: "GET"
    // })
    

    //URL search for city,temperature,humidty & windspeed
    var urlSearch = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + state + "&appid=" + apiKey;
    $.ajax({
        url: urlSearch,
        method: "GET"
    })
        .then(function (response) {

            console.log(response);
            console.log(response.main.humidity);
            //For Loop after button press

            // console.log(response);
            var cityname = response.name;
            var temperature = response.main.temp;
            var humid = response.main.humidity;
            var windSpeed = response.wind.speed;
            var resultsPage = $(".cityResults");
            var statsResults = $(".cityForcast")
            var newCard = $("<ul>");
            var stats = $("<p>");
            var currtime = moment().format('MM DD YYYY');
            var currday = $('#currentDay');


            //This Section puts the current city forcast on page.
            newCard.append(cityname);
            resultsPage.append(newCard);

            //Displays the current stats of the city on the page
            // stats.append(temperature);
            // stats.append(humid);
            // stats.append(windSpeed);
            $("#list").empty();
            $("#cityTitle").html('<li>' + cityname + "<br>" + currtime + '</li>');
            $("#list").append('<li> Current Temperature: ' + temperature + '</li>');
            $("#list").append('<li> Current Humidity : ' + humid + '</li>');
            $("#list").append('<li> Current WindSpeed : ' + windSpeed + '</li>');
            $("#list").append('<li> Current UV Index: ' + humid + '</li>');

            // statsResults.append(stats);















        })


});
        //Begin process of applying response data to HTML

//Functions 


//Event-Listers


/* When I hit search, I will display the current temperature and future temperatures of the city
I will then log the city when searching other cities.*/