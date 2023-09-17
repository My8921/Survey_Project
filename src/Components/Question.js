import React from "react";

function Question(props) {

return(
<div>


  <div className="container-fluid">
<div className="col-md-5 m-auto">
<div className="mt-3">
<div className="card text-left">
<div className="card-body">

<form onSubmit={props.submited}>
<div className="form-group">
<label htmlFor="">
{" "}
<b>3.</b>What are you Currently doing ?
</label>
<br/>
<input 
type="radio" id="teacher" name="q1" autoComplete="off"
value="teacher"

/>

<label htmlFor="">
Teaching
</label>



<input 
type="radio" id="Stuent" name="q1" autoComplete="off"

value="student"
/>

<label htmlFor="">
Stuent
</label>



<input 
type="radio" id="Programming" name="q1" autoComplete="off"
value="programming"
/>
<label htmlFor="">
Programming
</label>










</div>


<div className="form-group">
<label htmlFor="">
{" "}
<b>4.</b>Please rate over course ?
</label>
<br/>
<input 
type="radio" id="Poor" name="q2" autoComplete="off"
value="poor"
/>

<label htmlFor="">
Poor
</label>



<input 
type="radio" id="Good" name="q2" autoComplete="off"

value="Good"

/>

<label htmlFor="">
Good
</label>



<input 
type="radio" id="Programminghj" name="q2" autoComplete="off"
value="programming"
/>
<label htmlFor="">
Excellent
</label>


<div className="form-group">
<label htmlFor="">
{" "}
<b>5.</b>Write your Review Here.{" "}
</label>
<textarea className="form-control" name="q3"></textarea>

</div>
</div>

<button type="submit" className="btn btn-primary">
Save
</button>

</form>
<center>
    <span className="badge badge-pill disabled">1</span>
    <span className="badge badge-pill badge-primary">2</span>
</center>
</div>
</div>

</div>
</div>
  </div>
  </div>
);
}

export default Question;