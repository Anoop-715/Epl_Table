import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";



export default function Login() {
    const [username, setusername] = useState();
    const [password, setpassword] = useState();
    const [auth, setAuthe] = useState(false);
    const [err, setError] = useState();

    const { register, errors, handleSubmit } = useForm();

    function isAuth() {
        // event.preventDefault();
        axios.post("/login", {
            "username": username,
            "password": password
        }).then(res => {
            if (res.data) {
                setAuthe(res.data);
                console.log(res);
            }
            else {
                setError("Your credientials are wrong");
            }

        }).catch(err => {
            console.log(err);
        })
    }

    const onSubmit = data => {
        console.log(data);
        isAuth();
    }

    if (auth) {
        localStorage.setItem("token", "AuthenticatedToTrue");
        return <Redirect to="/content" />
    }
    else {

        return (

            <Form className="alert alert-dark  position-absolute" style={{ marginLeft: "40%", marginTop: "10%" }} onSubmit={handleSubmit(onSubmit)}>
                {!auth ? <p>{err}</p> : null}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" name="username" onChange={e => setusername(e.target.value)}
                        ref={register({ required: true })} />
                    {errors.username && <p style={{ color: "red" }}>Your input is Required</p>}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={e => setpassword(e.target.value)}
                        ref={register({ required: true })} />
                    {errors.password && <p style={{ color: "red" }}>Enter your password here.</p>}
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Submit
             </Button>
            </Form>
        )
    }

}