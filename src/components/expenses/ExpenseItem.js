import React from 'react'
import ExpenseDate from './ExpenseDate.js'
import './ExpenseItem.css'
import Card from '../ui/Card';
const ExpenseItem = (props) => {
    // const [title,setTitle]=useState(props.title);
    //     // const clicked=()=>{
    //     //     setTitle('Updated')
    //     // }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>  
            {/* <button onClick={clicked}>click me</button>    */}
        </Card>
    )
}

export default ExpenseItem
