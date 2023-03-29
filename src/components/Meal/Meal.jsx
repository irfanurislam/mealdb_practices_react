import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Meal = (props) => {
  //console.log(props);
  const { idmeal,strArea, strMeal ,strMealThumb,strInstructions} = props.meal;
  
  const handleCart = props.handleCart;



  return (
    <div>
      <div className="card w-80 h-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={strMealThumb}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strMeal}</h2>
          <h5>{strArea}</h5>
          <p>{strInstructions.slice(0,30)}...</p>
          <div className="card-actions justify-end">
            <button onClick={() => handleCart(props.meal)} className="btn btn-primary">
                add cart   <FontAwesomeIcon icon={faShoppingCart} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meal;

