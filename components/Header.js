/* eslint-disable @next/next/link-passhref */
import { SearchOutlined } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import { MovieState } from '../context/Context';
import Link from 'next/link';
import { useRouter } from 'next/router'

const Header = ({searchBar, setSearch}) => {
    const {user, logOut} = MovieState();
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
        <Btn>
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
    @media(max-width : 900px){
        padding: 0 1.5rem;
    } 
`
const Logo = styled.div`
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
    @media(max-width : 500px){
        display: none;
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
    .btn{
        font-size: 0.8rem;
        width: 5.5rem;
        height: 2.2rem;
        @media(max-width : 680px){
            width: 5rem;
            height: 2rem;
            font-size: 0.7rem;
        } 
    }
`