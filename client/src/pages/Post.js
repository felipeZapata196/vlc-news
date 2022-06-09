import React from 'react';

import  {NavBar} from '../components/NavBar'
import axios from 'axios'
import  {Society} from '../components/Society'
import { useParams } from 'react-router-dom'
import { Footer } from '../components/Footer';


function Post() {
    let {id} = useParams() 
   
    const baseURL =  `http://localhost:9000/api/home/${id}`
    const baseURL2 = `http://localhost:9000/api/home/top-five`
    const [post, setPost] = React.useState(null);
    const[topFive, setTopFive] = React.useState([]);

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data.post);
   
      });
    }, []);
    React.useEffect(() => {
      axios.get(baseURL2).then((response) => {
        console.log(response.data.posts)
        setTopFive(response.data.posts);
      
      });
    }, []);
  
    if (!post) return null;
    
  return (


      <div>


        
        <NavBar/>
         <div style={bigContainer}>

          <div  style={container}>


            <div style={newContainer}>
                <div style={post1}> 
               
                 <h1 style={{fontSize:'2.2rem', fontWeight:'700', width: ''}}>{post.title}</h1>
                 <h5> Lorem ipsum dolor sit amet</h5>
                 <img width={'80%'}  alt="" src={post.image}/>
                 <p style={{width:'80%'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              

                <p style={{width:'80%'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <span> {post.autor}</span>
                 </div>
                <div style={featured}>
                    <h2 style={{marginBottom:'4%'}}>Lo más destacado</h2>

                    {topFive.map((post)=>
                    <>
                     <hr style={{width:'100%' , color: '#e6e6e6', marginBottom:'2%'}}></hr>
                     <div style={item}>
                         <div style={title}>
 
                         <p>{post.title}</p>
                         </div >
 
                         <div style={image}>
 
                         <img  style={{width:'100%'}} alt="" src={post.image}/>
                         </div>
 
                         
                     </div>
                     
                     </>

                    )}

                   
                   

                  
                    

                    
                </div>

            </div>

          
            
           
            <Society/>
         
         




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
const newContainer = {
  display:'flex'
}

const featured ={
    marginTop: '2%',
    width: '30%',
    height: '40vh',
    display: 'block'
}


const post1 ={
    width: '70%',
   
}
const item ={
  display: 'flex'
}

const title ={
    width:'60%'
  }

  const image ={
    width: '40%'
  }
export default Post;
