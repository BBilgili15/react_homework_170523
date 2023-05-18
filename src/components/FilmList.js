import FilmItem from "./FilmItem"

const FilmList = ({films}) => {

  const filmComponents = films.map((film) => {
    return (
      <FilmItem key={film.id} film={film}></FilmItem>
    )
  })


  return (
    <ul className="film-list">
      {filmComponents}
    </ul>
  )
}

export default FilmList