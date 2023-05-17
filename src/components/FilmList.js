import FilmItem from "./FilmItem"

const FilmList = ({films}) => {

  const filmComponents = films.map((film) => {
    return (
      <FilmItem key={film.id} name={film.name} url={film.url}></FilmItem>
    )
  })


  return (
    <ul className="film-list">{filmComponents}</ul>
  )
}

export default FilmList