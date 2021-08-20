import React,{useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import './ExpenseForm.css'
const NewExpense = (props) => {
    
    const [toggle,setToggle]=useState(false);
    const saveExpenseHandler=(enteredExpenseData)=>{
        const expenseData={
            
            id:Math.random(),
            ...enteredExpenseData
        }
        props.onAddExpense(expenseData);
        console.log(expenseData)
       setToggle(false)
    }
    

   const toggleExpenseTrue=()=>{
       setToggle(true);
   }
   const toggleExpenseFalse=()=>{
       setToggle(false);
   }

    return (
        <div className="new-expense">
        

         {!toggle && (
        <button onClick={toggleExpenseTrue}>Add New Expense</button>
      )}
      {toggle && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancel={toggleExpenseFalse}
        />
      )}
        </div>
    )
}

export default NewExpense
