import { useState } from "react";

export default function Myform({fun}){
//   const [v1, SetV1 ] =useState('')
//   const [v2, SetV2 ] =useState('')
const [data , setMydata ] = useState({
    name:"",
    Age:0
})
  
    return (
            <form>
            <div>Name:</div>
                
                <input type="text" value={data.name} onChange={ (e)=>setMydata({...data ,name:e.target.value}) }></input>
           
                <div></div>
                Age:
                <input type="number"value={data.value} onChange={ (e)=>setMydata({...data ,Age:e.target.value }) }></input>
            
            <button onClick={()=>fun(data)}>sub</button>
            <input type="reset"></input>
            </form>
    );
}