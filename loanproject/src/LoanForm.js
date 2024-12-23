import { useState } from 'react';
import './FormStyle.css'
import Model from './Model';
import MyComponents from './MyComponents';
export default function LoanForm(){
    let[showmodel,setshowmodel]=useState(false);
    let [inputs,setinputs]=useState({name:"",phoneNumber:"",age:"",check:false,select:""});
    let [error,seterror]=useState(null);
    let dis=inputs.name===""||inputs.age===""||inputs.phoneNumber==="";
  
    function click(e){  
     e.preventDefault();  
    setshowmodel(true);  

    seterror(null);
    if(inputs.age>100){
        seterror("the age is incoorect");
    }
    else if(inputs.phoneNumber.length>10){
         seterror("the phone number is incoorect ");
    }
    else{
        seterror(null);
    }
    }
    function outdiv(){
        if(showmodel===true){
        setshowmodel(false);
        }
    }
   function handleNamechange(value){
     setinputs({...inputs,name:value});
    }
    function handlephoneNumberchange(value){
        setinputs({...inputs,phoneNumber:value});
    }
    function handleageChange(value){
        setinputs({...inputs,age:value});
    }
    return(
        <div onClick={outdiv} className='flex' style={{flexDirection:"column"}}>
            <form id='loan-form' className='flex' style={{flexDirection:"column"}}>
                <h1>requesting a loan</h1>
                <hr></hr>
                {/*<label>Name:</label>
                <input value={inputs.name} onChange={(e)=>{setinputs({...inputs,name:e.target.value})}}></input>*/}
                <MyComponents labelName="name" value={inputs.name} handlechange={handleNamechange}/>
                <MyComponents labelName="phone number" value={inputs.phoneNumber} handlechange={handlephoneNumberchange}/>
                <MyComponents labelName="age" value={inputs.age} handlechange={handleageChange}/>
                {/*<label>phone number</label>
                <input value={inputs.phoneNumber} onChange={(e)=>{setinputs({...inputs,phoneNumber:e.target.value})}}></input>*/}
                {/*<label>age</label>
                <input value={inputs.age} onChange={(e)=>{setinputs({...inputs,age:e.target.value})}}></input>*/}
                <label style={{marginTop:"30px"}}>Are you emplyee:</label>
                <input type={"checkbox"} checked={inputs.check} onChange={(e)=>{setinputs({...inputs,check:e.target.checked})}}></input>
                <label>salary</label>
                <select value={inputs.select} onChange={(e)=>{setinputs({...inputs,select:e.target.value})}}>
                    <option>less than 500$</option>
                    <option>between 500 and 2000</option>
                    <option>above 2000$</option>
                </select>
                <button disabled={dis} style={inputs.name===""||inputs.age===""||inputs.phoneNumber===""?{background:"pink"}:{background:"green", color:"white"}} id='bot' onClick={click}>submit</button>
            </form>
          <Model errorMeasage={error} isvisible={showmodel}/>
        </div>
    );
}