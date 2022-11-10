fetch("https://dummyjson.com/quotes/random")
  .then((response) => console.log(response))
  .then((data) => console.log(`${data.quote} ${data.author}`))
  .catch((error) => console.log(`URL invalda ${error}`));
