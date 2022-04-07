import React from 'react'
import styled from 'styled-components';

const Banner = () => {
  return (
    <Container>
        <h1>Welcome To Star <span>Movie</span></h1>
        <p>Lookup which shows are available on <span>Netflix, Prime, Disney, 
        HBO, Hulu</span> and many other services across 60 countries</p>
        <button>Get Started</button>
    </Container>
  )
}
export default Banner;

const Container = styled.div`
    width: 100%;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    background: linear-gradient(rgba(0, 0, 0, 0.678), rgba(0, 0, 0, 0.678)), 
  url("https://cinema.mu/wp-content/uploads/2019/07/banner-films.jpg");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  h1{
    font-family: 'Anton', sans-serif;
    letter-spacing: 0.2rem;
    font-size: 3rem;
    font-weight: 400;
    stroke: 10px white;
    color: white;
    @media(max-width : 680px){
      font-size: 2.5rem;
      text-align: center;
    }
    span{
        color: #F82B60;
    }
  }
  p{
      width: 35rem;
      text-align: center;
      line-height: 1.5rem;
      font-weight: 400;
      font-size: 1rem;
      @media(max-width : 680px){
        font-size: 0.9rem;
        width: 90%;
      }
      span{
        color: skyblue;
        font-weight: 500;
      }
  }
  button{
      padding: 0.6rem 1rem;
      background-color: transparent;
      border: none;
      cursor: pointer;
      font-weight: 600;
      margin-top: 1rem;
      background-color: #F82B60;
      color: black;
      transition: 300ms ease-in-out;
      border-radius: 5px;
      font-size: 0.7rem;
      :hover{
          color: #fff;
          background-color: transparent;
          box-shadow: 0px 0px 0px 1px #fff;
      }
  }
`