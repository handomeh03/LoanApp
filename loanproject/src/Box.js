import './Box.css';
import {useState} from 'react';
import Check from './Check';
export default function Box(){
    let [inputs,setinput]=useState({name:"",number:"",age:"",check:false,select:""});
    return(
        <div className="main">
          <div className="main2">
          <div className="box">
           <div className="header">
           <h1>requesting a loan</h1>
           <hr></hr>
           </div>
           <div className="bodys">
             <form>
             <label>Name:</label>
             <br></br>
              <input value={inputs.name} onChange={(e)=>{setinput({...inputs,name:e.target.value})}}></input>
              <br></br>
              <label>phone number:</label>
              <br></br>
              <input value={inputs.number} onChange={(e)=>{setinput({...inputs,number:e.target.value})}}></input>
              <br></br>
              <label>age:</label>
              <br></br>
              <input value={inputs.age} onChange={(e)=>{setinput({...inputs,age:e.target.value})}}></input>
              <br></br>
              <label>Are Yoy an emplyee?</label>
              <br></br>
              <input className="check" type="checkBox" value={inputs.check} onChange={(e)=>{setinput({...inputs,check:e.target.checked})}}></input>
              <br></br>
              <label>salary</label>
              <br></br>
              <select value={inputs.select} onChange={(e)=>{setinput({...inputs,select:e.target.value})}}>
                <option>less than 500$</option>
                <option>less than 500$</option>
                <option>less than 500$</option>
              </select>
              <br></br>
              <button style={(inputs.name=="")||(inputs.number=="")||(inputs.age=="")?{background:"rgb(98, 90, 90)" }:{background:"green"}}>submit</button>
             </form>

           </div>

          </div>
          </div>
          
          
         
        </div>
    );
}
