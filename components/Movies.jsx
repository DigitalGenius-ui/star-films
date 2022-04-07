import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import styled from 'styled-components'

const Movies = ({movie}) => {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href="/movie/[id]" as={`/movie/${movie.id}`}>
      <Container>
        <Cart>
          <Img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
          <h2>{movie.title}</h2>
          <p style={{fontSize : "0.6rem"}}>{movie.release_date}</p>
          <p className='star'><span>⭐</span>{movie.vote_average}</p>
        </Cart>
    </Container>
    </Link>
  )
}

export default Movies;

const Container = styled.div`
  background-color: rgb(32, 42, 42);
  padding: 0.5rem;
  border-radius: 5px;
  transition: 500ms ease-in-out;
  cursor: pointer;
  :hover{
    transform: scale(1.1);
  }
`

const Cart = styled.div`
  width: 100%;
  h2{
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.5rem 0 0.2rem 0;
  }
  .star{
    display: flex;
    align-items: center;
    gap: 0.1rem;
    font-size: 0.8rem;
    background-color: #1264a4;
    width: 2.5rem;
    margin-top: 0.2rem;
    border-radius: 50px;
    span{
      font-size: 0.7rem;
    }
  }
`
const Img = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
  opacity: 0.6;
  :hover{
    opacity: 1;
  }
`
