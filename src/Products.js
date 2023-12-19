import Product from "./Product"

function Products()
{
    let products = [
        {id:1,name:"levis jeans",price:2000,url:"https://www.shutterstock.com/image-photo/blue-levis-jeans-pocket-on-260nw-558966082.jpg"},
        {id:2,name:"Samsung" ,price:"3400" ,url:"https://media.wired.com/photos/6202b99c2c286ef2d70b5b0a/1:1/w_1281,h_1281,c_limit/Gear-Samsung-Galaxy-S22-Ultra.jpg "},
        {id:3,name:"Nike Shoes", price:"1500" ,url:"https://static.footshop.com/img/p/2/5/4/9/0/25490-full_product.jpg"}
    ]

    return (
    
      <div className='products'>
      
         {

            products.map((product)=>{
                return(
                    <Product  name={product.name}  price={product.price} url={product.url} key={product.key}></Product>
                )
            })
         }
          
            {/* <Product name="Levis Jeans" price="2000" url="https://www.shutterstock.com/image-photo/blue-levis-jeans-pocket-on-260nw-558966082.jpg"></Product>
            
            <Product name="Samsung" price="3400" url="https://media.wired.com/photos/6202b99c2c286ef2d70b5b0a/1:1/w_1281,h_1281,c_limit/Gear-Samsung-Galaxy-S22-Ultra.jpg "/>
            
            <Product name="Nike Shoes" price="1500" url="https://static.footshop.com/img/p/2/5/4/9/0/25490-full_product.jpg"></Product> */}
      </div>
    )
}

export default Products;