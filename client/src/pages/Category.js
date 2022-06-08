import React from 'react';
import axios from 'axios';
import  {NavBar} from '../components/NavBar'
import { Footer } from '../components/Footer';
import { useParams } from 'react-router-dom'




function Category() {

    let {cat} = useParams() 
    
    const baseURL = `http://localhost:9000/api/home/${cat}`
    console.log(cat)
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

                 
<div class="modulo1">
    <a class="link" href="/noticia/ayuso">
        <img class="image" src={post[3].image}/>
        <a class="titular" href="">{post[3].title}</a>
    </a>
</div>


<div class="modulo7">
    <a class="link" href="/noticia/joe">
        <img class="image" src={post[0].image}/>
        <a class="titular" href="">{post[0].title}</a>
    </a>
</div>



<div class="modulo7">
    <a class="link" href="/noticia/merkel">
        <img class="image" src={post[1].image}/>
        <a class="titular" href="">{post[1].title}</a>
    </a>
</div>

<div class="modulo6">
    <a class="link" href="/noticia/xijiping">
        <img class="image" src={post[2].image}/>
        <a class="titular" href="">{post[2].title}</a>
    </a>
</div>


<div class="modulo7">
    <a class="link" href="/noticia/joe">
        <img class="image" src={post[0].image}/>
        <a class="titular" href="">{post[0].title}</a>
    </a>
</div>



<div class="modulo7">
    <a class="link" href="/noticia/merkel">
        <img class="image" src={post[1].image}/>
        <a class="titular" href="">{post[1].title}</a>
    </a>
</div>

<div class="modulo7">
    <a class="link" href="/noticia/xijiping">
        <img class="image" src={post[2].image}/>
        <a class="titular" href="">{post[2].title}</a>
    </a>
</div>
<div class="modulo7">
    <a class="link" href="/noticia/xijiping">
        <img class="image" src={post[2].image}/>
        <a class="titular" href="">{post[2].title}</a>
    </a>
</div>





<div class="modulo6">
    <a class="link" href="/noticia/xijiping">
        <img class="image" src={post[2].image}/>
        <a class="titular" href="">{post[2].title}</a>
    </a>
</div>
<div class="modulo7">
    <a class="link" href="/noticia/joe">
        <img class="image" src={post[0].image}/>
        <a class="titular" href="">{post[0].title}</a>
    </a>
</div>



<div class="modulo7">
    <a class="link" href="/noticia/merkel">
        <img class="image" src={post[1].image}/>
        <a class="titular" href="">{post[1].title}</a>
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

export default Category;
