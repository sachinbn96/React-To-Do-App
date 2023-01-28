import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';  //.. to go up one level
// import { useState } from 'react';
//hooks can only be called within componenet functions  and 
//nowhere else not even inside a nested function inside component function
//useState returns  an array with the value and the setter for that value which can be initialised with array destructuring

function ExpenseItem(props) {                     //props can be named anything ..  
                                                  //it is an object with properties as mentioned in app.js attributes
// const [title,setTitle]=useState(props.title)      //title becomes a state variable..be careful what u render in jsx..if u render props.title it will never change 

    // const clickHandler = () =>{                   //Handlers are eventlistener fucntions..just optional naming convention
    //     setTitle('Updated!')


    // }//this return has to return jsx as a single element so enclosed in a div
    return (   
        <li> 
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>                                     {/*can have single tag if theres nothing between the tags */}
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button>                 no parenthesis for clickhandler or the function will be executed when it is parsed for the first time */}
        </Card> 
        </li> 
        /*here the custom Card component encloses other elements this is done by {props.children} in Card.js file  */
    );
}
export default ExpenseItem