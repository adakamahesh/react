let ssmb28={
   title:"Guntur Kaaram",
   imgurl:"https://upload.wikimedia.org/wikipedia/en/3/3e/Guntur_Kaaram_film_poster.jpg",
   description:" Guntur Kaaram: Directed by Trivikram Srinivas. With Sreeleela, Mahesh Babu, Jayaram, Ramya Krishnan. Years after his mother abandons him and remarries, ..."
}
let pages={
  title:"18pages",
  imgurl:"https://m.media-amazon.com/images/M/MV5BY2Q1ZjBjMTMtNjQxOS00OTRkLThmZjUtZWUyMzVhMTA4MGE1XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg",
  description:"18 Pages (2022) photos, including production stills, premiere photos and other event photos, publicity photos, behind-the-scenes, and more"
}
 let Aadikeshava={
  title:"Aadikeshava",
  imgurl:"https://content.tupaki.com/en/feeds/2023/11/24/205400-aadikeshava.webp",
  description:"Aadikeshava is a 2023 Indian Telugu-language action drama film directed by Srikanth N. Reddy in his directorial debut. The film stars Panja Vaisshnav Tej, .."
 }
function App() {
  const firstname="mahesh";
  return (
    <div>
    <div className="App">
      <h1> React Page </h1>
      <h3>hello {new Date().toLocaleTimeString()}</h3>
    </div>

    {/* props */}
    <section className="movie-container">
      <Movie title={ssmb28.title} imgurl={ssmb28.imgurl} description={ssmb28.description}/>
      <Movie title={pages.title} imgurl={pages.imgurl} description={pages.description}/> 
      <Movie title={Aadikeshava.title} imgurl={Aadikeshava.imgurl} description={Aadikeshava.description}/>    
    </section>
    </div>
  );
}

const Movie=(props)=>{
  return(
    <article>
      <h2>{props.firstname}</h2>
      <h2>{props.lastname}</h2>
      <img
      src={props.imgurl}
      alt="NetFlix Movie"
      />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </article>
  );
}

// function getdata(firstname,lastname){
//   console.log(firstname);
//   console.log(lastname);
// }
// getdata("mahesh","babu");
export default App;
