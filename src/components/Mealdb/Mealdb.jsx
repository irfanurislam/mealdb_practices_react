import React, { useEffect, useState } from 'react';
import { addtodb, getMealcart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Mealdb.css'


const Mealdb = () => {
    const [meals,setmeal] = useState([])
    const [cart,setCart] =  useState([])


    useEffect(() =>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setmeal(data.meals))
    },[]);

    useEffect(() =>{
        const storedCart = getMealcart()
        const savedCart = [] 
        for(const  id in storedCart ){
            const addedmeal = meals.find(pd => pd.idMeal === id)
            if(addedmeal){
                savedCart.push(addedmeal)
            }
        }
      setCart(savedCart)

    },[meals])




    const handleCart = (meal) =>{
       /* let newCart = []
       const exist = cart.find(pd=> pd.idMeal === meal.idMeal)
       if(!exist){
        meal.strMeal = 1
        newCart = [...cart,meal]
       }
       else{
        exist.strMeal = exist.strMeal + 1;
        const remaining = cart.filter(pd => pd.idMeal !== meal.idMeal)
         newCart =[...remaining,exist]

       } */
       const getcart = cart.find(pd => pd.idMeal === meal.idMeal)
       if(getcart){
        
       }
      

       const newcart = [...cart,meal]
        setCart(newcart)
        addtodb(meal.idMeal)
    }
    return (
        <div className='px-4 mt-4 mealpart'>
            
            <div className=' my-10 border border-red-800 grid grid-cols-2 gap-5'>
                {
                    meals.map(meal => <Meal
                    key ={meal.idMeal}
                    meal ={meal}
                    handleCart = {handleCart}
                    ></Meal>)
                }
            </div>
            <div className='h-1/2 mb-10 border border-red-800 bg-pink-600 mt-10 sticky top-0 '>
               <Cart cart ={cart}></Cart>
            </div>

        </div>
    );
};

export default Mealdb;