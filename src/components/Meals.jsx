'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

const Meals = () => {

      const [search, setSearch] = useState('Apple')
      const [ meals, setMeals] = useState([])
      const [error, setError] = useState('')


      const loteData = async()=>{
            try{
                const res =  await  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
                const data = await res.json()
                  setMeals(data.meals)
                  setError('')
            }catch (error) {
            alert.setError('no data found')
            }
      }

      const handle = (e)=>{
           console.log(e.target.value);
           setSearch(e.target.value)
           
      }

      useEffect(()=>{
        loteData()
     },[ search])

    return (
        <div>
            <div  className=" flex justify-center mt-5"  >
            <input onChange={handle} className=" p-6 bg-red-600 rounded-lg" type="text" placeholder="Search Meals" />
            <button onClick={()=> loteData()}  className=" p-6 bg-red-600 border-4 border-black rounded-lg " > Search  </button>
            </div>

            <div className=" grid grid-cols-3  gap-3  mt-4 " >
                {
                  meals?.length > 0 && !error ? meals.map((meal)=>(
                        <div className=" border-2 border-orange-500 p-3" key={meal.idMeal} > 
                           <Image src={meal.strMealThumb} alt="jk" width={500} height={300} >{}</Image>
                           <h1> {meal.strMeal} </h1>
                           <h1> {meal.strInstructions} </h1>

                         </div>
                    )):

                    <h5> no data found </h5>
                    }
                  
                

            </div>

        </div>
    );
};

export default Meals;