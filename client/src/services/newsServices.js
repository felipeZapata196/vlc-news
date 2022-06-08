import axios from "axios";
import { showAlert } from './alerts';

export const get = async () =>{
    try{
        const res = await axios({
            method: 'GET',
            url:'http://localhost:9000/api/home/national',

        });  
       console.log(res.data, 'tu madre')

    }catch(err){
       console.log('error', err)
    }
}
export const getMainNew = () => {
    return new Promise(async (resolve,reject)=>{
        
       
            axios({
                method: 'GET',
                url: `http://localhost:9000/api/home/national`
               
            })
            .then((response)=> {
               
                resolve(response.data);
           
               
            })
            .catch((err) =>{
                reject(err)
            });
        
    })

}

export const postNew = async(title, content) => {
    return new Promise((resolve,reject)=>{
        axios({
            method: 'POST',
            url: 'http://localhost:9000/api/home/',
            data: {
                title,
                content,
              

            }
        })
        .then((response)=> {
          
            resolve(response.data)
            

          
        })
        .catch((err) =>{
            reject(err)
        });
    })
}



export const login = async (email, password) => {


    try{
       
    const res= await axios({
        method: 'POST',
        url: 'http://localhost:9000/api/home/users/login',
        data: {
            email,
            password
        }
    });
    if(res.data.status === 'success'){
        showAlert('success', 'sesión iniciada');
        window.setTimeout(()=>{
            window.location= "/"
        }, 1500);
    }


}catch(err){
   showAlert('error', err)
}
}


export const signUp = async (name, email, password, passwordConfirm) => {

    

    try{
    const res= await axios({
        method: 'POST',
        url: 'http://localhost:9000/api/home/users/signup',
        data: {
            name,
            email,
            password,
            passwordConfirm

        }
    })
    if(res.data.status === 'success'){
        showAlert('success', 'registrado satisfactoriamente');
        window.setTimeout(()=>{
            window.location= "/"
        }, 1500);
    }


    console.log(res);
}catch(err){
    showAlert('error', err)
}
}
 

