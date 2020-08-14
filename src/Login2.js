import React from "react";
import {useForm} from  "react-hook-form";

export default function Login2(){
    const {register,handleSubmit,errors} =useForm();

    const onSubmit = data =>{
        console.log(data);
    }

    return(
        <form onSubmit ={handleSubmit(onSubmit)}>
            <input type="text" placeholder ="Username" name="username" ref={register} />
            <input type="password" placeholder="Enter password"
             name="password" ref={register({required:true,minLength:2})}/>
             {errors.password &&"Required"}
             <input type="submit"/>
        </form>
    );
}