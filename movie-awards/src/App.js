import React, { useState, useRef } from 'react';
import './App.css';
import Movies from './Movies';

function App() {
  const movieNameRef = useRef()

  const [name, setName] = useState('angry birds')
  const [reRenderMovies, setRenderMovies] = useState(0)

  console.log(name)

  // let movies = { Title: "Hello", Poster: "https://m.media-amazon.com/images/M/MV5BMjI0MDk2MmQtZmEzNS00MWFiLWJkMzktMDAzMTcwNjA3MjgxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg", Year: 2020 };
  // const [error, setError] = useState(null)
  // const [isLoaded, setIsLoaded] = useState(false)
  // const [items, setItems] = useState([])

  // function getMovies() {
  //   const movieInput = handleSearch()
  //   const url = `http://www.omdbapi.com/?s=${movieInput}&plot=full&apikey=d78f4d96`
  //   console.log(url)

  //   // useEffect(() => {
  //   fetch(url)
  //     .then(res => res.json())

  //     .then(
  //       (result) => {
  //         // setIsLoaded(true);
  //         setItems(result.items);
  //         console.log(result)
  //         // console.log(items)
  //         // console.log(result.movies)
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         // setIsLoaded(true);
  //         setError(error)
  //         console.log(error)
  //       }
  //     )

  //   if (error) {
  //     return <div>Error: {error.message}</div>;
  //   } else if (!isLoaded) {
  //     return <div>Loading...</div>;
  //   } else {
  //     return (
  //       // items
  //       <ul>
  //         {items.map(item => (
  //           <li key={item.Title}>
  //             {item.poster} {item.year}
  //           </li>
  //         ))}
  //       </ul>
  //     );
  //   }
  //   // return result;
  // }

  function handleSearch() {
    let movieName = movieNameRef.current.value
    setName(movieName)
    setRenderMovies(reRenderMovies + 1)
    // return name
  }

  return (
    <>
      <header>
        <h1>OMDB Movie Awards</h1>
        <input ref={movieNameRef} type="text" name="movieName" id="input" />
        {/* <button onClick={getMovies}>Search</button> */}
        <button onClick={handleSearch}>Search</button>
      </header>
      <main>
        {reRenderMovies && <div id="movieList">
          <Movies name={name} />
        </div>}
        <div id="awards"></div>
      </main>
      <footer></footer>
    </>
  )
}

export default App;
