const addtodb =(id) =>{
    let mealCart = getMealcart()
    const quantity = mealCart[id]
    if(!quantity){
        mealCart[id] = 1;

    }
    else{
        const newQuantity = quantity + 1
        mealCart[id] = newQuantity 
    }
    localStorage.setItem('meal-cart',JSON.stringify(mealCart))

}
const getMealcart = () =>{
    let mealCart = {}
    const storedCart = localStorage.getItem('meal-cart')
    if(storedCart){
        mealCart = JSON.parse(storedCart)
    }
    return mealCart
}






export{addtodb,getMealcart}