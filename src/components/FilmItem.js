


const FilmItem = ({name, url}) => {




  return (
    <li className="film-item">
      <a href={url} id="film-item-anchor"><h5>{name}</h5></a>
      <button className="delete-button">Delete</button>
    </li>
  )
}

export default FilmItem