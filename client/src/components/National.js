import React, {useEffect, useState} from "react"
import axios from "axios";



const baseURL = "/api/home/national";


export const National= () =>{
   
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
                        <h2 >Lo más destacado de la semana</h2> 
                        <h3 style={{color: '#757575'}}>June, 10 of 2022</h3>
                    </div>
      <div style={container}>
        <div style={firstContainer}>
            <a href={post[1]._id}>

            <img className="image" alt=""   src={post[1].image} />
            <div className="divHeader">

                <div className="titular">{post[1].title}</div>
                <div className="category"> <span> <span style={vl}> </span>Politica nacional</span></div>
            </div>
            
            </a>
           
        </div>
      <div style={secondContainer}>
        <div style={row}>
          <div style={card}>

            <a href={post[0]._id}>

                  <img className="image"  alt="" src={post[0].image} />
                  <div className="divHeader">
                    <div className="titular">{post[0].title}</div>
                    <div className="category"> <span> <span style={vl}></span>Politica nacional</span></div>
                  </div>
            </a>
          </div>
        
            
          <div style={card}>
            <a href={post[1]._id}>
              <img className="image"   src={post[2].image} />
              <div className="divHeader">

              <div className="titular">{post[2].title}</div>
              <div className="category"> <span> <span style={vl}></span>Politica nacional</span></div>
              </div>
            </a>
          </div>
        </div><div style={row}>
          <div style={card}>

            <a href={post[0]._id}>

                  <img className="image" alt=""  src={post[3].image} />
                  <div className="divHeader">
                    <div className="titular">{post[3].title}</div>
                    <div className="category"> <span > <span style={vl}></span>Politica nacional</span></div>
                  </div>
            </a>
          </div>
        
            
          <div style={card}>
            <a href={post[1]._id}>
              <img className="image" alt=""   src={post[1].image} />
              <div className="divHeader">
                <div className="titular" >{post[1].title}</div>
                <div className="category"> <span><span style={vl}></span>Politica nacional</span></div>
              </div>
            </a>
          </div>
        </div>
      
       
      </div>


  

      </div>
    
    </div>
    )
} 

const row ={
  display:'flex',
  height: '50%',
  justifyContent: 'center',
  alignItems: 'center',

  }


const card = {
  width: '50%',
  height: '95%',
  backgroundColor: 'black',
  justifyContent: 'center',
  margin: '6px',
  borderRadius: 5,
  boxShadow: '3px 2px 3px rgb(0,0,0,0.1)',
  position: 'relative',
  fontSize: '1.2rem'
}
const container ={
display:'flex'
}
const firstContainer ={
  height: '54vh',
  width: '50%',
  position: 'relative',
  padding: '5px',
  fontSize: '2rem'
 
 

}

const secondContainer ={
  height: '55vh',
  width: '50%',
 
 
 
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
  borderLeft: '4px solid red',
  height: '8px',
  marginRight: '4px'


}