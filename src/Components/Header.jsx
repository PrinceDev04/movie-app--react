import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  const [input, setInput] = useState("");
  const history = useHistory();

  function searchMovie(event) {
    event.preventDefault();
    {
      input ? history.push(`/movie?text=${input}`) : setInput();
    }
  }

  // async function main () {
  //   const { data } = await axios.get(searchUrl)
  //   console.log(data)
  // }

  // useEffect(() => {
  //   main()
  // }, [])
    
  return (
    <section id="page">
      <div className="search">
        <div className="search__div">
          <h1 className="title">SEARCH FOR MOVIES</h1>
          <div className="form__div">
          <form>
            <input
              placeholder="Enter Movies Or Search Title"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <FontAwesomeIcon
              type="submit"
              icon="fa-solid fa-magnifying-glass"
              onClick={searchMovie}
            />
          </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
