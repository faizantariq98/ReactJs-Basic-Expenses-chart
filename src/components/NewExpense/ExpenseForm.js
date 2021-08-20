import React,{useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [entertedAmount, setEnteredAmount] = useState('0.01')
    const [entertedDate, setEnteredDate] = useState('')

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    }
    const SubmitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:+entertedAmount,
            date:new Date(entertedDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }
    return (
        <form onSubmit={SubmitHandler}>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' value={entertedAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2021-12-31" value ={entertedDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            
            <div className="new-expense__actions">
            <button type='button'onClick={props.onCancel}>cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
        
    )
}

export default ExpenseForm
