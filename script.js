const apiKey = '6789cc641f77b46fd0ba104436316b7d';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

let h2=document.querySelector('.temp');
let btn=document.querySelector('#search-btn');
let input=document.querySelector('#location');
let tempdata=document.querySelector('.temp-data');
let speed=document.querySelector('.speed');
let speedcontainer=document.querySelector('.speedcontainer');
let description=document.querySelector('.description');

let weatherimages=document.querySelector('.weatherimages');




btn.addEventListener('click',()=>{
     const location=input.value.trim();  //const or let is compulsory here
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then((response)=>response.json())
     .then((data)=>{
      // clearing previous data
      
      
        //temperature
         h2.textContent=`${Math.floor(data.main.temp)}°C`;
         //cretaing speedimage
         let img=document.createElement('img');
         img.setAttribute('class', 'speedimage');
        img.src = "./assests/windspeed.png";
        speedcontainer.appendChild(img);
        
           //wind speed
         speed.textContent=`wind speed:${data.wind.speed}Km/h`;
         console.log(data.weather[0].main);
         // weather image getting
         let cloudy=document.createElement('img');
         cloudy.setAttribute('class','weatherimg');
         //weather images
         if(data.weather[0].main=='Clouds'){
            
            cloudy.src="./assests/cloudysun1.webp";
            
            

         }
         else if(data.weather[0].main=='Haze'){
            
            cloudy.src='./assests/hazeimage.png';
            
         }
         else if(data.weather[0].main=='Clear'){
            
            cloudy.src='./assests/clearsky.png';
         
         }
         else if(data.weather[0].main=='Rain'){
            cloudy.src='./assests/rainy.webp';
         }
         weatherimages.appendChild(cloudy);

        // weather description
        description.textContent=data.weather[0].description;
        
     })
     .catch((error)=>{
       alert('no location was found');
     })
})




