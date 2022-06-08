import React from 'react';
import {National} from '../components/National'
import  {NavBar} from '../components/NavBar'
import  {Sports} from '../components/Sports'
import  {Tecnology} from '../components/Tecnology'
import  {International} from '../components/International'
import  {Society} from '../components/Society'


import { Footer } from '../components/Footer';



function MainPage() {
  return (


      <div>
        <NavBar/>
         <div style={bigContainer}>

          <div  style={container}>

            

            <National/>
            <Society/>
            <International/>
            <Sports/>
            <Tecnology/>
           




          </div>

          </div>

        
            <Footer/>
      </div>
         
  );
}
const container = {
  width:'80%',
  justifyContent: 'center'
}
const bigContainer = {
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  backgroundColor: '#f1f1f1'
  
}

export default MainPage;
