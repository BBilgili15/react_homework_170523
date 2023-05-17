import {useState} from 'react'

const Header = ({addFilm}) => {

  // States
  const [name, setFilmName] = useState("")
  const [url, setFilmURL] = useState("")

  // Handle Input Change Functions
  const handleNameChange = (event) => {
    setFilmName(event.target.value)
  }

  const handleURLChange = (event) => {
    setFilmURL(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const film = {name, url}
    addFilm(film)
    setFilmName("")
    setFilmURL("")
  }

  // ADD DELETE BUTTON FUNCTIONALITY

  return (
    <div className='header'>
      <h1>Upcoming Film Releases For UK</h1>

      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Film Name..." value={name} onChange={handleNameChange}></input>
        <input type="text" placeholder="URL..." value={url} onChange={handleURLChange}></input>
        <input type="submit" value="Post"></input>
      </form>
    </div>
  )
}

export default Header