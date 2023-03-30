import React from "react";

const Cart = (props) => {
//   console.log(cart);
//   let quantity = 0
//   for(const meal of cart){
//     console.log(meal.strMeal)
//     quantity = quantity + meal.strMeal;
//   }
console.log(props.cart)
const allcart = props.cart
let items = 0;
let dessert = 0;
for(let pd of allcart){
  items = items + pd.strMeal;
  dessert = pd.strCategory;
}

  return (
    <div>
      <h2 className="my-8 px-2  text-lg text-white">
        order summary {props.cart.length}
       
      </h2>
      <p className=" p-2 text-base text-white">Meal name :{items} </p>
      <p className=" p-2 text-base text-white">
        Meal category :{dessert}
      </p>
      <p className=" p-2 text-base text-white">Meal area :{props.cart.strArea} </p>
    </div>
  );
};

export default Cart;
