import axios from 'axios'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'

const movie = ({movie}) => {
    console.log(movie)
  return (
    <Container movie={movie}>
      <Head>
        <title>Star Movies/{movie.title}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Content>
        <h1>{movie.title}</h1>
        <h4>{movie.tagline}</h4>
        <div>
          <h5 style={{paddingBottom : "0.5rem"}}>Short Story:</h5>
          <p>{movie.overview}</p>
        </div>
        <div className='flex'>
          <h5>Released Date:</h5>
          <p>{movie.release_date}</p>
        </div>
        <div className='flex'>
          <h5>Run Time:</h5>
          <p>{movie.runtime} Minutes</p>
        </div>
        <div className='btn'><a href={movie.homepage}>Watch now</a></div>
      </Content>
    </Container>
  )
}

export const getServerSideProps = async(context) => {
    const res = await axios
    .get(`https://api.themoviedb.org/3/movie/${context.params.id}?api_key=74206488d4fb5a679b81bb45afcb8173`);
    const movie = res.data;
    return{
      props : {
        movie
      }
    }
}

export default movie

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: ${props => `linear-gradient(#00000070, #00000070),url(https://image.tmdb.org/t/p/original/${props.movie.backdrop_path})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
const Content = styled.div`
  width: 75%;
  padding: 9rem 2rem 0 2rem;
  @media(max-width : 840px){
    width: 100%;
    padding: 9rem 1rem;
  }
  h4{
    padding-bottom: 0.5rem;
    font-weight: 400;
  }
  .flex{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
    p{
      font-size: 0.8rem;
    }
    h5{
      font-weight: 600;
    }
  }
  .btn{
    margin-top: 2rem;
    a{
      box-shadow: 0px 0px 0px 1px white;
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
      text-transform: uppercase;
      transition: background-color 300ms ease-in-out;
      border-radius: 5px;
      :hover{
        background-color: skyblue;
        color: black;
      }
    }
  }
`
