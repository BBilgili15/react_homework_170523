import Header from '../components/Header'
import FilmList from '../components/FilmList'
import Footer from '../components/Footer'
import {useState} from 'react'

const ContentBox = () => {

  const [films, setFilms] = useState(
    [
      {
        id: 1,
        name: "Spider-Man: Into the Spider-Verse",
        url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
      },
      {
        id: 2,
        name: "Life Itself",
        url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
      },
      {
        id: 3,
        name: "Mary Queen of Scots",
        url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
      },
      {
        id: 4,
        name: "The Lego Movie 2: The Second Part", 
        url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
      },
      {
        id: 5,
        name: "Captain Marvel",
        url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
      }
    ]
  )

  const addFilm = (newFilm) => {
    newFilm.id = Date.now()
    const newFilms = [...films, newFilm]
    setFilms(newFilms)
  }




  return (
    <div className='content-box'>
      <Header addFilm={addFilm}></Header>
      <FilmList films={films} ></FilmList>
      <Footer></Footer>
    </div>
  )
}

export default ContentBox