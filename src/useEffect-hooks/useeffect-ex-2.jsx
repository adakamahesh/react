import React,{useState,useEffect} from "react";

const URL="https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const UseEffectex2 =()=>{

    const [drinksData,setDrinksData]=useState([]);
    const [searchTerm,setsearchTerm]=useState("");

    const fetchDrinks= async(apiURL)=>{
        const response =await fetch(apiURL);
        const {drinks}=await response.json();
        setDrinksData(drinks);
    };

    useEffect(()=>{
        const correctURL=`${URL}${searchTerm}`;
        fetchDrinks(correctURL);
    },[searchTerm]);

    return (
        <div>
            <form>
                <input 
                 type="text"
                 name="search" 
                 id="search" 
                 placeholder="search something new.."
                 value={searchTerm}
                 onChange={(e)=> setsearchTerm(e.target.value)} />
            </form>

            <hr />

            <ul className="cocktail-data">
                {
                    drinksData.map((eachDrink)=>{
                        const {idDrink,strDrink,strDrinkThumb}=eachDrink
                        return <li key={idDrink}>
                            <div>
                                <img src={strDrinkThumb} alt={strDrink} />
                            </div>
                            <div className="text">
                                <h3>{strDrink}</h3>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default UseEffectex2;