  // Declaring the elements
// These are the future days
let weatherBox = document.querySelector('.weather-boxes')
let weatherBoxElement = document.querySelector('.weather-boxes p')
let weatherBoxElements = document.querySelector('.weather-boxes h3')
let searchBar = document.querySelector('input')
// this is the present time and day
let presentDayTime= document.querySelector(".time h1")
let presentSearchedLocation = document.querySelector(".place h1")
let presentDay = document.querySelector('.day p')

const apiKey = "15be66932cf77265d5f540a968dae6e0"
const getEvent = async() =>{
  const res =await fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&lang={lang}&appid={15be66932cf77265d5f540a968dae6e0}")
  const data = await res.json();
  console.log(data)
}
getEvent()