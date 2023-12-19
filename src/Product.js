import { useState } from "react";

function Product(props)
{

    // console.log(props);
    let [isAvailable,setIsAvailable] = useState("yes")
  

    function makeNotAvailable()
    {
        setIsAvailable("no");
    }

    return (

        <div className="product">
           
       
        <img className="img" src={props.url}/>
        <h4>{props.name}</h4>
        <h6>{props.price}rs</h6>
        {/* <button type="submit" class="btn btn-primary">Add to Cart</button> */}
        <p>{isAvailable}</p>
        <button onClick={makeNotAvailable}>Click</button>
       
        {/* <button onClick={()=>(
            setIsAvailable("NO")
        )}>Click</button> */} 
           



    </div>
         
    )
    
}
export default Product;