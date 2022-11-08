import { useEffect, useState } from "react";

interface Quote {
  quote: string
}

function App() {
  const [quote, setQuote] = useState<Quote>();

  // useEffect(() => {
  //   const fetchQuote = async () => {
  //     const response = await fetch("https://api.kanye.rest");
  //     const jsonBody = await response.json();
  //     setQuote(jsonBody.quote);
  //   }
  //   fetchQuote();
  // }, [])

  useEffect (() => {
    fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then ((jsonBody) => setQuote(jsonBody.quote));
  }, [])

  return (
    <>
      <h1>Kanye Quote app</h1>
      {quote && (
        <>
          <i>{quote}</i>
        </>
      )}
    </>
  );
}

export default App;
