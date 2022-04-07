/* eslint-disable @next/next/link-passhref */
import { SearchOutlined } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import styled from 'styled-components';
import { MovieState } from '../context/Context';
import Link from 'next/link';
import { useRouter } from 'next/router'

const Header = ({searchBar, setSearch}) => {
    const {user, logOut} = MovieState();
    const [bar, setBar] = useState(false);
    const router = useRouter();
  return (
    <Container>
        <Logo>
            <h2><span>Star</span> Movie</h2>
        </Logo>
        <Search>
            <input placeholder="Search..."
            value={searchBar}
            onChange={(e) => setSearch(e.target.value)}
            />
            <SearchOutlined className='search'/>
        </Search>
        <Btn bar={bar}>
            {!user ? (
            <div>
                <Link href="/auth/signIn">
                <Button
                style={{marginRight: "0.5rem"}}
                className='btn'
                variant='contained'
                color='primary'
                >Sign In
                </Button></Link>
                <Link href="/auth/signUp">
                <Button
                className='btn'
                variant='contained'
                color='primary'
                >Sign Up
                </Button></Link>
            </div>
            ) : (
            <Button
            style={{fontSize : "0.7rem"}}
            className='btn'
            variant='contained'
            color='primary'
            onClick={() => {
                logOut()
                router.push("/auth/signIn")
            }}
            >Log Out
            </Button>)}
        </Btn>
        <Bar bar={bar} onClick={() => setBar(!bar)}>
            <Line bar={bar}></Line>
        </Bar>
    </Container>
  )
}

export default Header;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(32, 42, 42);
    gap: 2rem;
    height: 80px;
    padding: 0 3rem;
    position: relative;
    @media(max-width : 900px){
        padding: 0 1.5rem;
    } 
`
const Logo = styled.div`
@media(max-width : 500px){
        display: none;
    }
    h2{
        font-family: 'Lobster Two', cursive;
        font-size: 1.6rem;
        @media(max-width : 680px){
            font-size: 1.4rem;
        }
        span{
            color: #F82B60;
        }
    }
`
const Search = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    background-color: black;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    @media(max-width : 680px){
        padding: 0.4rem 1rem;
    }
    input{
        border: none;
        background-color: transparent;
        outline: none;
        color: white;
        width: 100%;
    }
    .search{
        color: #747474;
    }
`
const Btn = styled.div`
    text-align: right;
    @media(max-width : 768px){
        position: fixed;
        top: 70px;
        right: 0;
        background-color: rgb(32, 42, 42);
        padding: 0.5rem 0;
        overflow: hidden;
        transition: 400ms ease-in-out;
        height: 60px;
        transform: ${props => props.bar ? "translateX(0)" : "translateX(100px)"};
        transition: all 400ms ease-in-out;
    }
    .btn{
        font-size: 0.8rem;
        width: 5.5rem;
        height: 2.2rem;
        @media(max-width : 768px){
            display: block;
            font-size: 0.7rem;
            height: 0;
            margin-bottom: 0.5rem;
            background-color: transparent;
            box-shadow: none;
            text-transform: capitalize;
            :focus{
                background-color: transparent;
                box-shadow: none;
            }
        }
    }
`
const Bar = styled.div`
    display: none;
    @media(max-width : 768px){
        display: flex;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
const Line = styled.div`
    width: 25px;
    height: 1px;
    position: relative;
    background-color: ${props => props.bar ? "transparent" : "white"};
    transition: all 400ms ease-in-out;
    :before, :after{
        content: '';
        width: 25px;
        height: 1px;
        position: absolute;
        background-color: white;
    }
    :before{
        transition: all 400ms ease-in-out;
        transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(8px)"};
    }
    :after{
        transition: all 400ms ease-in-out;
        transform: ${props => props.bar ? "rotate(45deg)" : "translateY(-8px)"};
    }
`