import React from 'react';

import  {NavBar} from '../components/NavBar'
import axios from 'axios'
import  {Society} from '../components/Society'
import { useParams } from 'react-router-dom'
import { Footer } from '../components/Footer';


function Post() {
    let {id} = useParams() 
   
    const baseURL =  `http://localhost:9000/api/home/${id}`
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data.post);
   
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
               
                 <h1>{post.title}</h1>
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
                 </div>
                <div style={featured}>
                    <h3>Lo más destacado</h3>
                    <hr style={{width:'100%' , color: '#e6e6e6'}}></hr>
                    <div style={item}>
                        <div style={title}>

                        <p>{post.title}</p>
                        </div >

                        <div style={image}>

                        <p><img  style={{width:'100%'}} alt="" src={post.image}/></p>
                        </div>

                        
                    </div>
                    <hr style={{width:'100%' , color: '#e6e6e6'}}></hr>
                    <div style={item}>
                        <div style={title}>

                        <p>{post.title}</p>
                        </div >

                        <div style={image}>

                        <p><img  style={{width:'100%'}} alt="" src={post.image}/></p>
                        </div>

                        
                    </div>
                    <hr style={{width:'100%' , color: '#e6e6e6'}}></hr>
                    <div style={item}>
                        <div style={title}>

                        <p>{post.title}</p>
                        </div >

                        <div style={image}>

                        <p><img  style={{width:'100%'}} alt="" src={post.image}/></p>
                        </div>

                        
                    </div>
                    <hr style={{width:'100%' , color: '#e6e6e6'}}></hr>
                    <div style={item}>
                        <div style={title}>

                        <p>{post.title}</p>
                        </div >

                        <div style={image}>

                        <p><img  style={{width:'100%'}} alt="" src={post.image}/></p>
                        </div>

                        
                    </div>

                  
                    

                    
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
