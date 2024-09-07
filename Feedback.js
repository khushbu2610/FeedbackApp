import {useState,useRef} from "react";

function Feedback()
{
	const rName= useRef();
	const rExcellent= useRef();
	
	const[name,setName] = useState("");
	const[feedback,setFeedback] = useState("");
	const[msg,setMsg] = useState("");
	
	const hName =(event) => {setName(event.target.value);}
	const hFeedback =(event) => {setFeedback(event.target.value);}

	const show = (event) =>{
	event.preventDefault();
	if(name===""){
		alert("Please enter name");
		setMsg("");
		rName.current.focus();
		return;
	}
	
	if(feedback===""){
		alert("You did not select feedback");
		setMsg("");
		rExcellent.current.focus();
		return;
	}
	let a = "Name= "+name + " Feedback= "+feedback;
	setMsg(a);
	}
return(
	<>
	<center>
		<h1>Feedback App</h1>
		<form onSubmit={show}>
		<input type ="text"  placeholder="Enter your name" ref ={rName} onChange={hName}/>
		<br/><br/>
		<input type ="radio"  name="f" value="excellent" ref ={rExcellent} onChange={hFeedback}/>Excellent
		<input type ="radio"  name="f" value="superb" onChange={hFeedback}/>Superb
		<input type ="radio"  name="f" value="good" onChange={hFeedback}/>Good

		<br/><br/>
		<input type="submit"/>
		</form>
		<h2>{msg}</h2>
	</center>
	</>
);		
}
export default Feedback;