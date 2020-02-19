//Variables 
var apiKey = "f3e794b6f19299364c3a368c93f4e895";
var cityPlacement = $(".cities");

//Click event to display the cities
$(".searchBtn").on("click", function (e) {
    e.preventDefault();
    var city = $(".searchCity").val();
    var state = $(".searchState").val();



    //API for 5 day forcast
    // var urlSearch = 
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + state + "&appid=" + apiKey,

        method: "GET"
    })
        .then(function (response) {

            console.log(response);
            console.log(response.list[0].dt_txt);
            console.log(response.list[0].main.temp);
            console.log(response.list[0].main.humidity);

            // $(".DayofWeek1").html("<div>" + response.list[0] + "<div>");
            // for (i = 0; i < response.list.length; i+=8){
            //Variables defined with the future stats of the city.
            var Daay = response.list[0].dt_txt
            var DaayTemp = response.list[0].main.temp
            var DaayHumid = response.list[0].main.humidity
            console.log(Daay)
            console.log(DaayTemp);
            console.log(DaayHumid);


            // }
            //Resets all of the data when a new city is entered 
            $("#itemA" + "#itemB" + "#itemC" + "#itemD" + "#itemE" + ".DayofWeek1" + ".DayofWeek2" + ".DayofWeek3" + ".DayofWeek4" + ".DayofWeek5").empty();

            //Place all of the current dates on the top of the card
            $(".DayofWeek1").html("<p>" + JSON.stringify(response.list[0].dt_txt) + "<p>");
            $(".DayofWeek2").html("<p>" + JSON.stringify(response.list[8].dt_txt) + "<p>");
            $(".DayofWeek3").html("<p>" + JSON.stringify(response.list[16].dt_txt) + "<p>");
            $(".DayofWeek4").html("<p>" + JSON.stringify(response.list[24].dt_txt) + "<p>");
            $(".DayofWeek5").html("<p>" + JSON.stringify(response.list[36].dt_txt) + "<p>");

            //Places the temperature
            $("#itemA").html("<li>" + "Temp: " + JSON.stringify(DaayTemp) + "</li>" + "<li>" + "Humidity: " + JSON.stringify(DaayHumid) + "</li>");
            $("#itemB").html("<li>" + "Temp: " + JSON.stringify(DaayTemp) + "</li>" + "<li>" + "Humidity: " + JSON.stringify(DaayHumid) + "</li>");
            $("#itemC").html("<li>" + "Temp: " + JSON.stringify(DaayTemp) + "</li>" + "<li>" + "Humidity: " + JSON.stringify(DaayHumid) + "</li>");
            $("#itemD").html("<li>" + "Temp: " + JSON.stringify(DaayTemp) + "</li>" + "<li>" + "Humidity: " + JSON.stringify(DaayHumid) + "</li>");
            $("#itemE").html("<li>" + "Temp: " + JSON.stringify(DaayTemp) + "</li>" + "<li>" + "Humidity: " + JSON.stringify(DaayHumid) + "</li>");

        });

    //API for city,temperature,humidty & windspeed
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + state + "&appid=" + apiKey,
        method: "GET"
    })
        .then(function (response) {
            lon = response.coord.lon;
            lat = response.coord.lat;
            console.log(lon);
            console.log(lat);
            
            
            console.log(response);
            // console.log(response.main.humidity);
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
            var currtime = moment().format('MM-DD-YYYY');
            var currday = $('#currentDay');
            var button = $("<button>");


            //This Section puts the current city forcast on page.
            button.text(cityname);
            button.addClass("cityInput");
            newCard.append(button);
            resultsPage.append(newCard);


            //Places the current stats of the city chosen on page.
            $("#list").empty();
            $("#cityTitle").html("<div>" + cityname + "</div>")
            $("#time").html("<p>" + currtime + "</p>")
            $("#list").append('<li> Current Temperature: ' + temperature + '</li>');
            $("#list").append('<li> Current Humidity : ' + humid + '</li>');
            $("#list").append('<li> Current WindSpeed : ' + windSpeed + '</li>');
            

            
            //API for current UV index 
            var UVIndex = "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;
            $.ajax({
                url: UVIndex,
                method: "GET"
            })
            .then(function (response) {
                console.log(response);
                var UV = response.value;
                console.log(UV);
                $("#list").append('<li> Current UV Index: ' + UV + '</li>');
            })
        })


});
        //Begin process of applying response data to HTML

//Functions 


//Event-Listers


/* When I hit search, I will display the current temperature and future temperatures of the city
I will then log the city when searching other cities.*/