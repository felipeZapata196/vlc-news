import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => {
  return (
  <div style={{height:'30vh'}}>
   <div style={header}>
   <div style={{display:'flex',width:'80%', justifyContent:'center', }}>

    <div style={{ width:'50%'}}><span>Get connected with us on social networks:</span></div>
    <div style={{ width:'50%', textAlign: 'right'}}>
        <FacebookIcon style={icon}></FacebookIcon>
        <LinkedInIcon style={icon}></LinkedInIcon>
        <InstagramIcon style={icon}></InstagramIcon>
        <TwitterIcon style={icon}></TwitterIcon>
      
      </div>


    </div>

   </div>
   
    <hr style={{width:'80%' , color: '#e6e6e6'}}></hr>
    
   <div style={footerContainer}>
          
          <div style={listContainer}>

          <div className="foot-modulo">
              <div style={child}>
                    <h3>About us</h3>
                    <p>hola</p>
                    <p>hola</p>
                 </div>
              </div>
           
              <div className="foot-modulo">
                 <div style={child}>
                    <h3>Contact</h3>
                    <p>hola</p>
                    <p>hola</p>
                 </div>
              </div>
              <div className="foot-modulo">
              <div style={child}>
                    <h3>Categorías</h3>
                    <p>hola</p>
                    <p>hola</p>
                 </div>
              </div>
              <div className="foot-modulo">
              <div style={child}>
                    <h3>Enlaces útiles</h3>
                    <p>hola</p>
                    <p>hola</p>
                 </div>
              </div>
              
          
          </div> 
   </div>
    <div style={foot}>
       <p style={{paddingTop: '10px'}}>Do it with love for Felipe Zapata</p>
       <p>© 2022 Copyright</p>
       </div>
    </div>
  );
}

const icon = {
  marginRight: '50px',
  color: '#757575'
}
const footerContainer ={
  height: '25vh',
  justifyContent: 'center',
  width:'100%',
  alignItems: 'center',
  display: 'flex',
  color: '#757575'
}
const header ={
  marginTop: '10px',
  height: '8vh',
  justifyContent: 'center',
  width:'100%',
  alignItems: 'center',
  display: 'flex',
  color: '#757575'
}
const foot= {
  
  textAlign: 'center',
  color: '#757575',
  backgroundColor: '#eeeeee',
  position: 'bottom'
 
}
const listContainer ={
  display: 'flex',
  width:'80%',
  height: '90%',

}
const child ={
  display: 'block',
  textAlign:'center'
  
}