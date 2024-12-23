export default function Model({isvisible,errorMeasage=null}){
    
    if(isvisible===true){
        return(
            <div id="model">
                <div id="modelContent"style={errorMeasage==null?{background:"white"}:{background:"white",color:"red"}} >
                    <h1>{errorMeasage==null?"the form has been submitted successfully":errorMeasage}</h1>
                </div>
            </div>
        );
    }
    else{
        return(<div></div>)
    }
}
