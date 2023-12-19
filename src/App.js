
import './App.css';
import Header from './Header';

import Products from './Products';

import { useState } from 'react';

function App() {
  
    // let[name,setName]= useState();
    // let[age,setAge]= useState();



  // let [name,setName] = useState("Shivani")
  // //let name = "Shivani" nrml way in js

  // function changeData()
  // {
  //   // name="Thor";  this is usual way 
  //   setName("munni")
  //   console.log(name); //this gives original name in console
  // }

  //  function doSomething(data)
  //  {
  //   console.log("Do something "+data)
  //  } 
   let countries = [
    {name:"India", capital:"New Delhi"},
    {name:"South Africa",capital:"Cape Town"},
    {name:"New zealand",capital:"wellington"}
   ]

  return (

    <div className="App">

    {

      countries.map((country,index)=>{     //we use map func to form loop without repeating
        return (
          <div className='data' key={index}>
            <h3>{country.name}</h3>
            <p>{country.capital}</p>
          </div>
        )
      })




    }


    {/* // ways to write props below */}

    {/* <div className='data'>
      <h3>{countries[0].name}</h3>
      <h5>{countries[0].capital}</h5>
    </div>
    
    <div className='data'>
      <h3>{countries[1].name}</h3>
      <h5>{countries[1].capital}</h5>
    </div> */}

    {/* <div className='data'>
      <h3>Australia</h3>
      <h5>Canberra</h5>
    </div>
    <div className='data'>
      <h3>Japan</h3>
      <h5>Tokyo</h5>
    </div> */}









       
       {/* <h2>Just a Component</h2>

       <h3>{name}</h3>

       <button onClick={changeData}>Click</button>
 */}

   {/* <h3>Name</h3>
    <h6>{name}</h6>
    <h6>{age}</h6>

   <input type='text' placeholder='Enter Name' onChange={(event)=>
    {  setName(event.target.value);
   }}>Name:</input>

   <input type='text' placeholder='Enter Age' onChange={(event)=>
    {  setAge(event.target.value);
   }}>Age:</input>

   <button type='button' onClick={()=>{
    console.log(name,age)
   }}> Submit </button> */}



      <Header></Header>

      <h3>Products</h3>

      <Products></Products>


      {/* <button className='btn' onClick={()=>{ doSomething("Shivani")}}>Click</button> */}


{/* 
      <button className='btn' onClick={(event)=>{
        console.log(event)
        doSomething("Shivani")
      }}></button> */}

    </div>
  );
}

export default App;
