
import React from 'react';
import Details from './detail';
import Question from './Question';

import { initializeApp } from 'firebase/app';
import { getDatabase,ref as sRef,set,push, onValue} from 'firebase/database';

import { v4 as uuidv4 } from 'uuid';


const firebaseConfig = {
    apiKey: "AIzaSyDjAj-FjdJIL5eBt1H6t7Erq2dujhxa6UQ",
    authDomain: "survey-9fceb.firebaseapp.com",
    databaseURL: "https://survey-9fceb-default-rtdb.firebaseio.com",
    projectId: "survey-9fceb",
    storageBucket: "survey-9fceb.appspot.com",
    messagingSenderId: "461544541427",
    appId: "1:461544541427:web:f06386c0dbb1d0be057b86"
  };
  
  
    const firebaseApp = initializeApp(firebaseConfig);
    const database = getDatabase(firebaseApp);


    // Get a reference to the Realtime Database
 
class Container extends     React.Component{

constructor(props){
    super(props);

    this.state={
        id:uuidv4(),                
        name:null,
        email:null,
        questions:{
            q1:null,
            q2:null,
            q3:null,
            other:null,
            
        },
       isSubmiited:false,
    }
    this.props=props;
}

detailSubmitHandler=(event)=>{

    const name=event.target.name.value;
    const email=event.target.email.value;

    this.setState({name,email},()=>{
        console.log(this.state);
    });
   
event.preventDefault();

};

questionSubmitHandler=(event)=>{

    event.preventDefault();
    
const questions={};

 questions.q1=event.target.q1.value;
 questions.q2=event.target.q2.value;
 questions.q3=event.target.q3.value; 

this.setState({questions,isSubmiited:true});

const databaseRef = sRef(database,"Survey",this.state.id);
const dataToStore = {
    key1: 'value1',
    key2: 'value2',
  };

  set(databaseRef, dataToStore)
  .then(() => {
    console.log('Data was successfully stored in the database.');
  })
  .catch((error) => {
    console.error('Error storing data: ', error);
  });
// firebase.database().ref("Survey/"+this.state.id).set(
//    { name:this.state.name,
//     email:this.state.email,
//     questions:this.state.questions,
//    }
// )
    
}

render() {
    return (
        <>
               <div className='container-fluid'>
<div className='container card mt-2'>

<h1 className='text-center text-primary'>Survey form</h1>
</div>
         </div>
         {this.state.isSubmiited===true ? (<div className='card'>
<h1>Thank you your form is Submiited</h1>
         </div>
         )
: this.state.name===null  && this.state.email===null ? (<Details submit={this.detailSubmitHandler}></Details>):(<Question submited={this.questionSubmitHandler}></Question>)
    }
        </>
  

    );
}



}
export default Container;