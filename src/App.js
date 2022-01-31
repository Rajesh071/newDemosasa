import "./styles.css";
import React, { useRef } from "react";

const APIKEY = "OPzSZvJ9FbJSkWzJx2y0ao1pdW8aKVBg";
export default function App() {
  return <ReactForm />;
}

function ReactForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleReset = () => {
    nameRef.current.value = "";
    passwordRef.current.value = "";

    emailRef.current.value = "";
  };

  const handleSearch = (e) => {
    // log your value here
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${e}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  function debounce(fn, time) {
    let timeoutId;
    return wrapper;
    function wrapper(...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        timeoutId = null;
        fn(...args);
      }, time);
    }
  }
  const debouncedSearch = debounce(handleSearch, 1000);
  return (
    <React.Fragment>
      <div>
        <p>part 1</p>
        <label>
          Name:
          <input placeholder="name" type="text" ref={nameRef} />
        </label>
        <label>
          Email:
          <input placeholder="email" type="text" ref={emailRef} />
        </label>

        <label>
          Password:
          <input placeholder="password" type="text" ref={passwordRef} />
        </label>
        <hr />
        <button onClick={() => nameRef.current.focus()}>
          Focus Name Input
        </button>
        <button onClick={() => emailRef.current.focus()}>
          Focus Email Input
        </button>
        <button onClick={() => passwordRef.current.focus()}>
          Focus Password Input
        </button>
        <hr />
        <button
          onClick={() => {
            console.log(nameRef.current.value);
            console.log(emailRef.current.value);

            console.log(passwordRef.current.value);
          }}
        >
          Submit
        </button>
        <button onClick={() => handleReset()}>Reset</button>
      </div>
      <div>
        <hr />
        <p>part 2</p>
        <label>
          Search:
          <input
            placeholder="search with debounce"
            type="text"
            onChange={debouncedSearch}
          />
        </label>
      </div>
    </React.Fragment>
  );
}
