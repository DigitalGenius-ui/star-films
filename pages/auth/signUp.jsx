import React, { useState } from 'react'
import styled from 'styled-components'
import { MovieState } from '../../context/Context'
import { useRouter } from 'next/router'
import Head from 'next/head'

const SignUp = () => {
    const {signUp} = MovieState();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("");
    const router = useRouter();

    const handleSubmit = async () => {
        try {
            if(rePassword != password){
                alert("passwords does not match")
            }
            await signUp(email, password);
            router.push('/')
        } catch (error) {
            console.log(error);
        }
        setEmail("");
        setPassword("");
        setRePassword("");
    }
  return (
    <Container>
         <Head>
            <title>Movie Star/Sign Up</title>
        </Head>
        <Form>
            <h1>Sign <span>Up</span></h1>
            <input type="text" placeholder='Email...'
            value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" placeholder='Password...'
            value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <input type="password" placeholder='Re-password...'
            value={rePassword} onChange={(e) => setRePassword(e.target.value)}
            />
            <button
            onClick={handleSubmit}
            >Sign Up</button>
        </Form>
    </Container>
  )
}

export default SignUp

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Form = styled.div`
    width: 28rem;
    background-color: #fffbfb;
    color: black;
    border-radius: 5px;
    padding: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media(max-width : 500px){
        width: 90%;
    } 
    h1{
        font-family: 'Lobster Two', cursive;
        text-align: center;
        font-size: 1.4rem;
        span{
            color: #F82B60;
        }
    }
    input{
        width: 100%;
        margin-top: 1rem;
        padding: 0.8rem;
        outline: none;
        border: none;
        background-color: #22222b;
        color: white;
        border-radius: 5px;
        ::-webkit-placeholder{
            color: white;
        }
    }
    button{
        margin-top: 1rem;
        width: 100%;
        padding: 0.7rem;
        text-transform: uppercase;
        background-color: #F82B60;
        border: none;
        color: white;
        cursor: pointer;
        border-radius: 5px;
        :hover{
            background-color: #ab1e43;
        }
    }
`