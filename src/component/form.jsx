import {useState} from 'react'
import {Box , InputBase , Button, styled} from '@mui/material'
import { getWeather } from '../services/api'
// import setResult from '../pages/home'


const Container = styled(Box)({
  background : 'black',
  padding : 10,
  boxShadow: "0 0 15px aqua" ,
  borderRadius : '0 20px 0 0'

})

const Input = styled(InputBase)({
     
    color : 'white',
    boxShadow: "0 0 15px aqua" ,
    borderRadius : "20px",
    marginRight : 20 ,
    marginTop :  10,
    paddingLeft : 10,
    fontSize : 16
})

const GetButton = styled(Button)({
  background : "black",
  borderRadius : "20px",
  boxShadow: "0 0 15px orange" ,
  
})
const  Form = ({setResult}) => {

  const [data ,setData] = useState({city : '', country :''})

const handleC = (e)=>{
  setData({ ...data ,[e.target.name] : e.target.value} )
  console.log(data)

}

const getweatherInfo= async()=>{
 let response =  await getWeather(data.city , data.country);

 setResult(response);
 
}


  return (
    <Container>
 <Input  placeholder='City' onChange={(e)=>handleC(e)} name ="city"
 />
 <Input placeholder='Country'  onChange={(e)=>handleC(e)} name = "country"/>

<GetButton variant = "contained" onClick={()=>getweatherInfo()}>Get Weather</GetButton>
    </Container>
  )
}

export default Form 