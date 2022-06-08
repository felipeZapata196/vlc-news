import React, {useEffect, useState} from "react"
import axios from "axios";



const baseURL = "http://localhost:9000/api/home/sports";


export const Sports= () =>{
   
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
         <h2>Actualida deportiva</h2> 
     
        </div>
    <div class= "mainPage">                 
        <a class="link"  href={post[0]._id}>        
            <div class="modulo3"  >
            <img className="image" alt="" src={post[0].image}/>
            <div className="divHeader">
                    <div className="titular">{post[1].title}</div>
                    <div className="category"> <span> <span style={vl}></span>Actualidad social</span></div>
                </div>
            </div>
        </a>
        <a class="link"  href={post[1]._id}>
             <div class="modulo4"  >
               <img class="image"  alt="" src={post[1].image}/>
               <div className="divHeader">
                    <div className="titular">{post[1].title}</div>
                    <div className="category"> <span> <span style={vl}></span>Actualidad social</span></div>
                </div>
            </div>
        </a>

        <a class="link"  href={post[2]._id}>
            <div class="modulo4" >
                <img class="image"  alt=""src={post[2].image}/>
                <div className="divHeader">
                    <div className="titular">{post[1].title}</div>
                    <div className="category"> <span> <span style={vl}></span>Actualidad social</span></div>
                </div>
                
            </div>
        </a>
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
    borderLeft: '4px solid blue',
    height: '8px',
    marginRight: '4px'
  
  
  }