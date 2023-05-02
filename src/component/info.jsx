import React from 'react'
import {Box, Typography,styled} from '@mui/material'
import {Brightness5, LocationOn, Opacity,SettingsBrightness ,Brightness6, Dehaze, Cloud } from  '@mui/icons-material'

const Row = styled(Typography)({

  color : "white",
  padding : 3 ,
  fontSize : 16,
  letterSpacing:2 ,

  '& > svg' : {
      marginRight : 5
  }
})

const Error  = styled(Typography)({
 color : 'red',
 margin : 50  , 
 padding :20,
 fontWeight:600,
 fontSize : "30px",
 fontFamily : 'Fira Sans'

})
const Info = ( { result }) => {
  return (
    result && Object.keys(result).length > 0 ?
    <Box style={{margin : '8px 40px'}}>

<Row><LocationOn />Location : {result.name},{result.sys.country}</Row>
<Row><SettingsBrightness /> Temprature : {result.main.temp /10  }</Row>
<Row>< Opacity/> Humidity: {result.main.humidity}</Row>
<Row>< Brightness5/> Sun Rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</Row>
<Row>< Brightness6/> Sun Set:  {new Date(result.sys.sunset * 1000).toLocaleTimeString()}</Row>
<Row>< Dehaze/> Humidity: {result.weather[0].main}</Row>
<Row>< Cloud/> Clouds: {result.clouds.all}%</Row>

    </Box>
   : <Error>GET DATA</Error>
  )
}

export default Info