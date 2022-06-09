import React from 'react';
import axios from 'axios';
import  {NavBar} from '../components/NavBar'
import { Footer } from '../components/Footer';
import { useParams } from 'react-router-dom'
import {Card} from '../components/Card';




function Category() {

    let {cat} = useParams() 
    
    const baseURL = `http://localhost:9000/api/home/${cat}`
    

   
    const [post, setPost] = React.useState(null);
   

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data.posts);
      
      });
    }, []);
   
  
    if (!post) return null;
    //tienes que meter todo el html en un componente y simplemente, en cada categoria pasarle por los props el resultado de la Api
  return (


      <div>
        <NavBar/>
         <div style={bigContainer}>

          <div  style={container}>
          <div class= "mainPage">
          <div style={titleStyle}>
                        <h1 > <span style={vl}></span>Actualidad {cat}</h1> 
                       
                    </div>

                    
    <div class="modulo1" style={{marginBottom:'1.5%'}}>
                    <a class="link" href={post[0]._id}>
                        <img class="image" alt=""src={post[0].image}/>
                        <div className="divHeader" style={{left:'2%'}}>
                            <div className="titular">{post[0].title}</div>
                            <div className="category"> <span> <span style={vl}></span>Actualidad social</span></div>
                        </div>
                    </a>

    </div>
    <div style={{display:'flex', marginBottom:'1.5%'}}>
         <div class="modulo7">
                    <a class="link" href={post[1]._id}>
                        <img class="image" alt=""src={post[1].image}/>
                        <div className="divHeader" style={{left:'5%'}}>
                            <div className="titular">{post[1].title}</div>
                            <div className="category"> <span> <span style={vl}></span>Actualidad social</span></div>
                        </div>
                    </a>
    </div>

    

    <div class="modulo7">
                    <a class="link" href={post[2]._id}>
                        <img class="image" alt=""src={post[2].image}/>
                        <div className="divHeader" style={{left:'5%'}}>
                            <div className="titular">{post[2].title}</div>
                            <div className="category"> <span> <span style={vl}></span>Actualidad social</span></div>
                        </div>
                    </a>
    </div>

    <div class="modulo6">
                    <a class="link" href={post[0]._id}>
                        <img class="image" alt=""src={post[0].image}/>
                        <div className="divHeader" style={{left:'2%'}}>
                            <div className="titular">{post[2].title}</div>
                            <div className="category"> <span> <span style={vl}></span>Actualidad social</span></div>
                        </div>
                    </a>
    </div>
    </div>

   

    <div style={{display:'flex', marginBottom:'1.5%'}}>
    <div class="modulo7">
                <a class="link" href={post[1]._id}>
                        <img class="image" alt=""src={post[1].image}/>
                        <div className="divHeader" style={{left:'5%'}}>
                            <div className="titular">{post[1].title}</div>
                            <div className="category"> <span> <span style={vl}></span>Actualidad social</span></div>
                        </div>
                    </a>
    </div>



    <div class="modulo7">
                    <a class="link" href={post[0]._id}>
                        <img class="image" alt=""src={post[0].image}/>
                        <div className="divHeader" style={{left:'5%'}}>
                            <div className="titular">{post[0].title}</div>
                            <div className="category"> <span> <span style={vl}></span>Actualidad social</span></div>
                        </div>
                    </a>
    </div>

    <div class="modulo7">
                    <a class="link" href={post[2]._id}>
                        <img class="image" alt=""src={post[2].image}/>
                        <div className="divHeader" style={{left:'5%'}}>
                            <div className="titular">{post[2].title}</div>
                            <div className="category"> <span> <span style={vl}></span>Actualidad social</span></div>
                        </div>
                    </a>
    </div>
    <div class="modulo7">
                    <a class="link" href={post[1]._id}>
                        <img class="image" alt=""src={post[1].image}/>
                        <div className="divHeader" style={{left:'5%'}}>
                            <div className="titular">{post[1].title}</div>
                            <div className="category"> <span> <span style={vl}></span>Actualidad social</span></div>
                        </div>
                    </a>
    </div>

    </div>



    <div class="modulo6">
                    <a class="link" href={post[3]._id}>
                        <img class="image" alt=""src={post[3].image}/>
                        <div className="divHeader" style={{left:'2%'}}>
                            <div className="titular">{post[3].title}</div>
                            <div className="category"> <span> <span style={vl}></span>Actualidad social</span></div>
                        </div>
                    </a>
    </div>
    <div class="modulo7">
                    <a class="link" href={post[1]._id}>
                        <img class="image" alt=""src={post[1].image}/>
                        <div className="divHeader" style={{left:'5%'}}>
                            <div className="titular">{post[1].title}</div>
                            <div className="category"> <span> <span style={vl}></span>Actualidad social</span></div>
                        </div>
                    </a>
    </div>



    <div class="modulo7">
                    <a class="link" href={post[0]._id}>
                        <img class="image" alt=""src={post[0].image}/>
                        <div className="divHeader" style={{left:'5%'}}>
                            <div className="titular">{post[0].title}</div>
                            <div className="category"> <span> <span style={vl}></span>Actualidad social</span></div>
                        </div>
                    </a>
    </div>









    </div>
                

            

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
  
}

const vl = {
    borderLeft: '4px solid yellow',
    height: '8px',
    marginRight: '4px'
  
  
  }

  const titleStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
    color: '#4a4a4a',
    margin:'0.8% 0'
  }
export default Category;
