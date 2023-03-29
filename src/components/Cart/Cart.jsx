import React from "react";

const Cart = ({ cart }) => {
//   console.log(cart);
//   let quantity = 0
//   for(const meal of cart){
//     console.log(meal.strMeal)
//     quantity = quantity + meal.strMeal;
//   }

  return (
    <div>
      <h2 className="my-8 px-2  text-lg text-white">
        order summary {cart.length}
       
      </h2>
      <p className=" p-2 text-base text-white">Meal name :{cart.strMeal} </p>
      <p className=" p-2 text-base text-white">
        Meal category :{cart.strCategory}
      </p>
      <p className=" p-2 text-base text-white">Meal area :{cart.strArea} </p>
    </div>
  );
};

export default Cart;
