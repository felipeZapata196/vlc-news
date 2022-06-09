
import React, {useState, useEffect} from "react"
import InputAdorments from "./InputAdorments";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



export const NavBar= (props) =>{
   
    
    const [anchorEl, setAnchorEl] = useState(null)
    const [ withUser, setWithUser ] = useState(null)
    const [search, setSearch]= useState('')
  
    const openMenu = Boolean(anchorEl)

    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    /*SearchTask
    const filter = (itemSearch)=>{
        getTask().then((res) => {
            let results = res.filter( (item)=>{
                if(item.name.toLowerCase().includes(itemSearch.toLowerCase())){
                     return item
                 }});
            props.setTasks(results)
        })    
    }

   

    const handleChange = (e)=>{
        filter(e.target.value)
        setSearch(e.target.value)
    }

    const getUser = async () => {
        if (localStorage.getItem("user")) {
            const user = await JSON.parse(localStorage.getItem("user"));
            await setWithUser(user);
        }
    }
  
    
 */
    return(
        <nav style={navbarStyles}>
          <div  style={container}>
              <div style={left}>
                <h1><a href="/" style={{color:'#fff'}}>Valencia news</a></h1>
                
                     <a href="/login">
                     <div style={{marginLeft:'1rem',padding: '20px', display: 'flex'}}>
                        <AccountCircleIcon
                        style={{fontSize:'2rem', color: '#fff'}}/>
                        <span style={{padding:'0.5rem', color: '#fff'}}>Login</span>
                        </div>
                    </a> 
              

               
                
              </div>
              <div  style={middle}>
              <ul style={{height:'5%', backgroundColor:"#396EB0", color:'#fff'}}>
        
                
                <li ><a href="/category/national" >España</a></li>
                <li><a href="/category/sports" >Deporte</a></li>
                <li><a href="/category/international" >Internacional</a></li>
                <li><a href="/category/tecnology" >Tecnología</a></li>
                <li><a href="/category/society" >Social</a></li>
              </ul>
              </div>
              <div style={right}>
             
             
                    <InputAdorments
                    
                    />
                    



              </div>

            
          </div>
     </nav>
    )
} 

const navbarStyles ={
  
    display:'flex',
    flexDirection: 'row',
    height: '15%',
    justifyContent: 'space-between',
    padding: '0 50px',
    boxShadow: '3px 2px 3px rgb(0,0,0,0.1)',
    borderBottom: 'solid 2px #dbdbdb',
    backgroundColor: '#396EB0'
}
    const container = {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center'
    }
    const left = {
       display: 'flex',
        marginLeft: '8%',
        margingRigth: '10%',
        width: '30%'
       
    }
    const middle = {
        width: '50%'
    }

    const right = {
        marginRight: '7%',
        cursor: "pointer",
        display:'flex'
    }





    
  

