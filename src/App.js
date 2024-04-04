const data=[
  {
    title:"Guntur Kaaram",
    imgurl:"https://upload.wikimedia.org/wikipedia/en/3/3e/Guntur_Kaaram_film_poster.jpg",
    description:" Guntur Kaaram: Directed by Trivikram Srinivas. With Sreeleela, Mahesh Babu, Jayaram, Ramya Krishnan. Years after his mother abandons him and remarries, ..."
 } ,
 {
  title:"18pages",
  imgurl:"https://m.media-amazon.com/images/M/MV5BY2Q1ZjBjMTMtNjQxOS00OTRkLThmZjUtZWUyMzVhMTA4MGE1XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg",
  description:"18 Pages (2022) photos, including production stills, premiere photos and other event photos, publicity photos, behind-the-scenes, and more"
},
{
  title:"Aadikeshava",
  imgurl:"https://content.tupaki.com/en/feeds/2023/11/24/205400-aadikeshava.webp",
  description:"Aadikeshava is a 2023 Indian Telugu-language action drama film directed by Srikanth N. Reddy in his directorial debut. The film stars Panja Vaisshnav Tej, .."
 }
];

function App() {
  // let newtemparray=data.map((eachobj)=>{
  //   return<article>
  //     <h1>{eachobj.title}</h1>
  //     <img src={eachobj.imgurl}/>
  //     <p>{eachobj.description}</p>
  //   </article>
  // })
  return (
    <div>
    <div className="App">
      <h1> React Page </h1>
      <h3>hello {new Date().toLocaleTimeString()}</h3>
    </div>

    {/* props */}
    <section className="movie-container">
      {data.map((eachobj,index)=>{
        const {title,imgurl,description}=eachobj//Dstructuring
        return <Movie key={index} title={title} imgurl={imgurl}description={description}/>
      })}
      {/* {newtemparray} */}
      {/* <Movie title={data[0].title} imgurl={data[0].imgurl} description={data[0].description}/>
      <Movie title={data[1].title} imgurl={data[1].imgurl} description={data[1].description}/> 
      <Movie title={data[2].title} imgurl={data[2].imgurl} description={data[2].description}/>     */}
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
