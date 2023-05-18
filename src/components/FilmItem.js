


const FilmItem = ({film}) => {




  return (
    <li className="film-item">
      <a href={film.url} id="film-item-anchor"><h5>{film.name}</h5></a>
      <button className="delete-button">Delete</button>
    </li>
  )
}

export default FilmItem