import React from 'react'
import './ExpenseDate.css'
const ExpenseDate = (props) => {
    const Month= props.date.toLocaleString('en-US',{month:'long'});
    const day= props.date.toLocaleString('en-US',{day:'2-digit'});
    const year= props.date.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{Month}</div>
            <div className='expense-date__year'>{day}</div>
            <div className='expense-date__day'>{year}</div>
        </div>
    )
}

export default ExpenseDate
