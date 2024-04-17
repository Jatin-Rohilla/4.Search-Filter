import JSONDATA from "../assets/MOCK_DATA.json"
import { useState } from "react";

const Searching = () => {
const[search,setSearch]=useState('')

const searchThing=(event)=>{
    setSearch(event.target.value)
}

  return (
    <>
      <h1>Searching</h1>
      <div className="App">
        <input type="text" placeholder="Search Any Name..." onChange={searchThing}/>
        {JSONDATA.filter((val)=>{
            if(search==""){
                return val
            }
            else if(val.first_name.toLowerCase().includes(search.toLowerCase())){
                return val
            }
        }).map((val,key)=>{
            return <div key={key}>{val.first_name}</div>
        })}
      </div>
    </>
  );
};

export default Searching;
