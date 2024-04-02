let title="Guntur Kaaram";
let imgurl="https://upload.wikimedia.org/wikipedia/en/3/3e/Guntur_Kaaram_film_poster.jpg";

function App() {
  const firstname="mahesh";
  return (
    <div>
    <div className="App">
      <h1> React Page </h1>
      <h3>hello {new Date().toLocaleTimeString()}</h3>
      <p>
      The export default keywords specify the main component in the file. If you’re not familiar with some piece of JavaScript syntax, MDN and javascript.info have great references. 
      </p>
    </div>


    <section className="Movie-container">
      <Movie/>
    </section>
    </div>
  );
}

const Movie=()=>{
  return(
    <article>
      <img
      src={imgurl}
      alt="NetFlix Movie"
      />
      <h1>{title}</h1>
    </article>
  );
}
export default App;
