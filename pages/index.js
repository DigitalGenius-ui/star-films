import axios from 'axios';
import Head from 'next/head';
import styled from 'styled-components';
import Banner from '../components/Banner';
import Movies from '../components/Movies';
import Header from '../components/Header';
import { useState } from 'react';

export default function Home({movies}) {
  const [search, setSearch] = useState("");
  return (
      <>
        <Container>
          <Head>
            <title>Star Movies/Home</title>
            <meta name="description" content="Generated by create next app" />
          </Head>
          <Header
          search={search} 
          setSearch={setSearch}
          />
            <>
              <Banner/>
              <h1 className='title'>Movie Lists :</h1>
              <Cart>
                {movies.filter((item) => item.title.toLowerCase().includes(search))
                .map((movie, i) => (
                  <Movies movie={movie} key={i}/>
                ))}
              </Cart>
            </>
        </Container>
      </>
  )
}

const Container = styled.div`
  .title{
        font-size: 1rem;
        margin: 2rem 6rem;
        @media(max-width : 900px){
          margin: 2rem 1.5rem;
        } 
    }
`
const Cart = styled.div`
  width: 85%;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit , minmax(180px, 1fr));
  margin-bottom: 2rem;
  @media(max-width : 900px){
    width: 90%;
  } 
`
export const getStaticProps = async () => {
  const key = process.env.TMDB_API_KEY;
  const res = await axios
  .get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`);
  const movies = res.data.results;
  return{
    props : {
      movies
    }
  }
}
