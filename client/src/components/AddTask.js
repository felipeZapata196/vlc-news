import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import {Button} from './Button'
import './Formulario.css'



export const AddTask = ({ open, setOpen})=>{

  const handleClose = () => setOpen(false);
  

  

  const [value, setValue] = useState({
    id: 0,
    name: '',
    description: '',
    completed: false,
    date:'May 26, 2022'
  });

  const handleChange = (event) => {
    setValue({
      ...value, 
      [event.target.name]: event.target.value,
     
    });
  };
  

  
  const HandleSubmit = async (e) =>{
    await e.preventDefault()
 
    handleClose()
  }
  
  return(
    <div style={funcionalitiesStyle}>
   
      
          <div style={modalStyle}>
            <h1 style={{textAlign:'center', paddingBottom: 30}}>Nueva noticia</h1>
            <TextField
              id="outlined-multiline-flexible"
              label="Name"
              name="title" 
              fullWidth
              margin="normal"
              multiline
              maxRows={4}
              onChange={handleChange}
            />
            <TextField
              id="outlined-multiline-static"
              fullWidth
              label="Description"
              name="content" 
              onChange={handleChange}
              margin="normal"
              multiline
              rows={2}
            />
           
            <div style={{paddingTop:60}}>
              <Button onClick={HandleSubmit} >Save </Button>
            </div>
          </div>
     
      </div>
   

  )
}
const modalStyle = {
 

 
  width: '70%',
  height: 480,
  bgcolor: 'background.paper',
  border: '0,5px solid #000',
  boxShadow: 24,
  borderRadius: '3px',
  p: 4,
  justifyContent: 'center'
 
};


const funcionalitiesStyle = {
  
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}