
let mydate = new Date()
console.log(mydate);


<<<<<<< HEAD
let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sat"];
=======
<<<<<<< HEAD
let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sat"];
=======
let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sat"];
>>>>>>> 23f6707 (Update Second Time)
>>>>>>> 2ea4f08 (Update Second Data)
let day = weekday[mydate.getDay()]
document.getElementById("day").innerHTML = day
// console.log(day);


// ===============
<<<<<<< HEAD
let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug", "Sep", "Oct", "Nov", "Dec" ];
=======
<<<<<<< HEAD
let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug", "Sep", "Oct", "Nov", "Dec" ];
=======
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
>>>>>>> 23f6707 (Update Second Time)
>>>>>>> 2ea4f08 (Update Second Data)
let month = months[mydate.getMonth()]
document.getElementById("month").innerHTML = month
// console.log(month);

// ==============
let date = mydate.getDate()
document.getElementById("date").innerHTML = date
// console.log(date);

//=================
let year = mydate.getFullYear()
document.getElementById("year").innerHTML = year
// console.log(year);


//====================


<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2ea4f08 (Update Second Data)

const searchData = ()=>{
    let cityName = document.getElementById("cityName").value
    
    if(cityName == ""){
        // alert("type cityName")
        document.getElementById("content").innerHTML = "Please enter the city name"
        
    }
    else{
        
        console.log(cityName);
        
        // let empty = ""
        // document.getElementById("cityName").value = empty
        
        let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a261137010e9d448dc3892355830df0a`
        
        async function getApi (url) {
            try{
                
                document.getElementById("content").innerHTML = ""
                let response = await fetch(url)
                let data = await response.json()
                console.log(data);
                
                let icon = data.weather[0].main
                console.log(icon);
    
    
                 if(icon === "Clouds"){
                    document.getElementById("icon").innerHTML = `<i class="fa fa-cloud" style="font-size:100px; color:cornflowerblue;"></i>`
                }
                else if(icon === "Clear"){
                    document.getElementById("icon").innerHTML = `<i class="fa-solid fa-cloud-sun"style="font-size:100px; color: orange" ></i>`
                }
                else if(icon === "Rain"){
                    document.getElementById("icon").innerHTML = `<i class="fa-solid fa-cloud-rain" style="font-size:100px; color:cornflowerblue;"></i>`
                }
    
    
<<<<<<< HEAD
=======
=======
document.getElementById("content").innerHTML = "Enter the City Name"

const searchData = () => {
    let cityName = document.getElementById("cityName").value

    if (cityName == "") {
        // alert("type cityName")
        document.getElementById("content").innerHTML = "Please enter the city name"
        document.getElementById("icon").innerHTML = ""
        document.getElementById("temp").innerHTML = ""
        document.getElementById("city").innerHTML = ""
        document.getElementById("country").innerHTML = ""

    }
    else {

        console.log(cityName);

        // let empty = ""
        // document.getElementById("cityName").value = empty

        let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a261137010e9d448dc3892355830df0a`

        async function getApi(url) {
            try {

                document.getElementById("content").innerHTML = ""


                let response = await fetch(url)
                let data = await response.json()
                console.log(data);

                let icon = data.weather[0].main
                console.log(icon);


                if (icon === "Clouds") {
                    document.getElementById("icon").innerHTML = `<i class="fa fa-cloud" style="font-size:100px; color:cornflowerblue;"></i>`
                }
                else if (icon === "Clear") {
                    document.getElementById("icon").innerHTML = `<i class="fa-solid fa-cloud-sun"style="font-size:100px; color: orange" ></i>`
                }
                else if (icon === "Rain") {
                    document.getElementById("icon").innerHTML = `<i class="fa-solid fa-cloud-rain" style="font-size:100px; color:cornflowerblue;"></i>`
                }


>>>>>>> 23f6707 (Update Second Time)
>>>>>>> 2ea4f08 (Update Second Data)
                document.getElementById("country").innerText = "Country: " + data.sys.country
                document.getElementById("city").innerText = data.name
                let temp = data.main.temp - 273.15
                document.getElementById("temp").innerText = Math.round(temp) + "°C"
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2ea4f08 (Update Second Data)
                }
                catch{
                    document.getElementById("content").innerHTML = "Please enter the VALID CITY NAME"
                    document.getElementById("icon").innerHTML = ""
                    document.getElementById("temp").innerHTML = ""
                    document.getElementById("city").innerHTML = ""
                    document.getElementById("country").innerHTML = ""
                    
                }
                
            }
            getApi(ApiUrl)
        
       

        
<<<<<<< HEAD
=======
=======
                document.getElementById("cityName").value = ""

            }
            catch {
                document.getElementById("content").innerHTML = "Please enter the VALID CITY NAME"
                document.getElementById("icon").innerHTML = ""
                document.getElementById("temp").innerHTML = ""
                document.getElementById("city").innerHTML = ""
                document.getElementById("country").innerHTML = ""

            }

        }
        getApi(ApiUrl)




>>>>>>> 23f6707 (Update Second Time)
>>>>>>> 2ea4f08 (Update Second Data)

    }
}

