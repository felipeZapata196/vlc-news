import React, {useEffect, useState} from "react"
import axios from "axios";



const baseURL = "http://localhost:9000/api/home/international";


export const International= () =>{
   
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data.posts);
      
      });
    }, []);
  
    if (!post) return null;
    
  
    return(
        <div>
  <div style={titleStyle}>
         <h2>Política internacional</h2> 
     
        

        </div>

        <div class= "mainPage">

                 
            <div class="modulo1">
                <a class="link" href={post[3]._id}>
                    <img class="image" alt=""src={post[3].image}/>
                    <div className="divHeader" style={{left:'2%'}}>
                        <div className="titular">{post[3].title}</div>
                        <div className="category"> <span> <span style={vl}></span>Actualidad social</span></div>
                    </div>
                </a>
            </div>
            <div class="modulo2">
                <a class="link"  href={post[0]._id}>
                    <img class="image" alt="" src={post[0].image}/>
                    <div className="divHeader">
                        <div className="titular">{post[0].title}</div>
                        <div className="category"> <span> <span style={vl}></span>Actualidad social</span></div>
                    </div>
                </a>
            </div>
           

            
            <div class="modulo2">
                <a class="link"  href={post[1]._id}>
                    <img class="image" alt="" src={post[1].image}/>
                    <div className="divHeader">
                        <div className="titular">{post[1].title}</div>
                        <div className="category"> <span> <span style={vl}></span>Actualidad social</span></div>
                    </div>
                </a>
            </div>
            

            
            <div class="modulo2">
                <a class="link"  href={post[2]._id}>
                    <img class="image" alt="" src={post[2].image}/>
                    <div className="divHeader">
                        <div className="titular">{post[2].title}</div>
                        <div className="category"> <span> <span style={vl}></span>Actualidad social</span></div>
                    </div>
                </a>
            </div>


       
   
            

            </div>
        </div>
                      
    )
} 


const titleStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
    color: '#4a4a4a'
  }
  const vl = {
    borderLeft: '4px solid #396EB0',
    height: '8px',
    marginRight: '4px'
  
  
  }