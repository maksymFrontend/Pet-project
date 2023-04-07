export const actionAddDataWeather = (newDataWeather) => ({type:'ADD_WEATHER', newDataWeather})
export const actionRequestWeather = () => 
  async dispatch => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=50.0165144&lon=36.1167352&appid=c65b2d4db87518800fb5356d300a3f79`)
    .then((response) => response.json())
    .then((actualData) => dispatch(actionAddDataWeather(actualData)))
  }