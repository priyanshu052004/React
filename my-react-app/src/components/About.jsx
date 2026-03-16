
import "../css/about.css"


export default function About(props){

    console.log("Props", props);
    
    return(
        <>
        <h1 id ="code">Thsi is About</h1>
        <h3>This is About : {props.name}</h3>
        <h3>This is About : {props.std.userName}</h3>

        </>
    )

}

