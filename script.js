const url='https://api.openweathermap.org/data/2.5/'
const key='93a487f7bfd3bfbab8706d17be893dc0'

const setQuery= (e) =>{

    if(e.keyCode=='13')
    getResult(searchBar.value)
}

const getResult=(cityName)=>{
    
    let query= `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`
    fetch(query)

    .then(weather=>{
return weather.json()
    })
.then(displayResult)
}

const displayResult=(result)=>{
 let city=document.querySelector('.city')
 city.innerText=`${result.name},${result.sys.country}`

 let temp=document.querySelector('.temp')
 temp.innerText=`${Math.round(result.main.temp)}°C`


 let desc=document.querySelector('.desc')
 desc.innerText=result.weather[0].description

 let minmax=document.querySelector('.minmax')
 minmax.innerText=`${Math.round(result.main.temp_min)}°C/
 ${Math.round(result.main.temp_max)}°C`

    changeBackground(result.weather[0].main);
};
const changeBackground = (weather) => {
    const body = document.querySelector('body');

    if (weather.toLowerCase().includes('rain')) {
        body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?rain')";
    } else if (weather.toLowerCase().includes('clear')) {
        body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?clear')";
    } else if (weather.toLowerCase().includes('cloud')) {
        body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?cloud')";
    }else if (weather.toLowerCase().includes('snow')) {
        body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?snow')";
    }
    else {
        body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?weather')";
    }
};

const searchBar=document.getElementById('searchBar')
searchBar.addEventListener('keypress' ,setQuery)