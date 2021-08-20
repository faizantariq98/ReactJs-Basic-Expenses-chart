import React,{useState} from 'react'
import './Expenses.css'
import Card from '../ui/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList'
import ExpenseChart from './ExpenseChart';
const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredDateArray=props.expenses.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })
    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseChart expenses={filteredDateArray}/>
        <ExpenseList items={filteredDateArray}/>
        </Card>
        </div>
    )
}

export default Expenses
