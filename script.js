//Variables 


//API Sever Connection
$(".searchBtn").on("click",function(e){
    e.preventDefault();
    var city = $(".search").val();
    
    // var condition= $(".condition").val();
    

    // var temperature = $(".temperature").val();
   

    // var humidity = $(".humdidity").val();

    // var windspeed = $(".windspeed").val();
  

    var urlSearch = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=f3e794b6f19299364c3a368c93f4e895";
    $.ajax({
        url: urlSearch,
        method:"GET"
        
    }).then(function(response){

        console.log(response);

    });
}); 
//Functions 


//Event-Listers


/* When I hit search, I will display the current temperature and future temperatures of the city
I will then log the city when searching other cities.*/