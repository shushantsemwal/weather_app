import { useState} from "react" ;

import { Box , styled} from "@mui/material";
// import { useState } from "react";
// import { borderRadius, height } from "@mui/system";

import mount from '../assets/images/1.jpg';

import Form from '../component/form';
import Info from '../component/info'

const Component = styled(Box)({

    height : '100vh',
  pddingTop : '50%',
    // boxShadow: "0 0 15px aqua" ,
    width : '65%',
    display : 'flex',
    alignItems : 'center',
    margin : '0 auto',
    // left : "50%",
    // justifyContent : "center",
  
})

const Image = styled(Box)({
    backgroundImage : `url(${mount})`,
    width : '27%'  ,
    height : '60%',

    // marginTop : "20%",
    boxShadow: "0 0 15px aqua" ,
    backgroundSize : 'cover',
    borderRadius : '20px 0 0 20px'
})
const Boxx = styled(Box)({
  width :'75%' , 
  height : '60%' ,
  boxShadow: "0 0 15px aqua" ,
  borderRadius : '0 20px 20px 0'
})

const Home = () => {
  const[ result ,setResult] = useState({})
  return (
    <Component>
     
      <Image></Image>
      <Boxx>
<Form  setResult = {setResult}/>
<Info result = {result} />

      </Boxx>
      
      </Component>
  );  
};

export default Home;
