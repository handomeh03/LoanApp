export default function MyComponents({labelName,value,handlechange}){
    return(
        <>
          <label>{labelName}</label>
          <input value={value} onChange={(e)=>{handlechange(e.target.value)}}></input>
        </>
    );
}