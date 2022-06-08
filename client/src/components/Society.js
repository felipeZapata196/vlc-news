import React, {useEffect, useState} from "react"
import axios from "axios";



const baseURL = "/api/home/society";


export const Society= () =>{
   
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
         <h2>Actualida Social</h2> 
     
        </div>

        <div class= "mainPage">

      <div>
      <div></div>
      <div></div>

      </div>
        <a  href={post[0]._id}>
        <div class="modulo8">
          <img class="image"  alt="" src={post[1].image}/>
          <div className="divHeader">
            <div className="titular">{post[0].title}</div>
            <div className="category"> <span> <span style={vl}></span>Actualidad social</span></div>
          </div>
        </div>
        </a>

        <a  href={post[1]._id}>
        <div class="modulo8">
          <img class="image" alt="S" src={post[1].image}/>
          <div className="divHeader">
            <div className="titular">{post[1].title}</div>
            <div className="category"> <span> <span style={vl}></span>Actualidad social</span></div>
          </div>
        </div>
        </a>

        <a  href={post[2]._id}>
        <div class="modulo8">
            <img class="image" alt="" src={post[2].image}/>
            <div className="divHeader">

              <div className="titular">{post[2].title}</div>
              <div className="category"> <span> <span style={vl}></span>Actualidad social</span></div>
            </div>
              
        </div>
        </a>

        

        <a c href={post[3]._id}>
        <div class="modulo8">
           <img class="image" alt="" src={post[3].image}/>
           <div className="divHeader">

              <div className="titular">{post[3].title}</div>
              <div className="category"> <span> <span style={vl}></span>Actualidad social</span></div>
            </div>
               
        </div>
        </a>

        <a href={post[5]._id}>
        <div class="modulo8">
          <img class="image"  alt="" src={post[5].image}/>
          <div className="divHeader">
              <div className="titular">{post[5].title}</div>
              <div className="category"> <span> <span style={vl}></span>Actualidad social</span></div>
          </div>
        </div>
        </a>

        
        <a href={post[4]._id}>
        <div class="modulo8">
           <img class="image"  alt=""src={post[4].image}/>
           <div className="divHeader">
              <div className="titular">{post[4].title}</div>
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
    borderLeft: '4px solid green',
    height: '8px',
    marginRight: '4px'
  
  
  }