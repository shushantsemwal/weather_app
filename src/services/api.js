
import axios from 'axios';
//  const API_KEY = '5277574de057d5cce82710f52b0c382f ';
//  const API_KEY = '8d2a110b6ad468ae1a0e459757cf659d';
//  const API_KEY = '5844e28f56b2cc21ec1ebeaf927acaf6';
//  const API_URL = 'http://api.openweathermap.org/data/2.5/weather';
//  `${API_URL}?q=${city},${country}&appid= ${API_KEY}&units=metrics`

//  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
export const getWeather = async(city , country)=>{
try{

  let response =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`)
return response.data ;
} catch(error){

    console.log("error while calling the api" , error.message)
    return error.response ;
}

}