import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import ToDoTasks from './ToDoTasks'
import History from './History'
const ToDoList = () => {
  const [todos, setTodos] = useState([]) // niza todos vo ova niza gi zacuvuvam site todos koi gi imam kreirano
  const [history, setHistory] = useState([]) // niza history vo ova niza gi zacuvuvam site todos koi gi imam kreirano
  // {
  //   id: 0.321421321,
  //   text: 'buy milk',
  //   isChecked: false, kako hint
  // }
  const addTodo = (value) => {
    if (!value.text || /^\s*$/.test(value.text)) {
      return
    }
    // spread operator [...todos]
    // buy some mulk
    // buy egs
    // buy watter
    // [{ id: 1, text: jajca }, { id:2, text: milk }, { id: 82, text: neshto }]
    setTodos([value, ...todos])
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    // toods.map mapirame proveruvame vo nizata
    // dali ova todoId koe go pushtame vo parametar go ima vo niza
    // ako go ima stavija ovaa newValue ako go nemash vratigo nazad (item)
    console.log("I'm in updateToDo in to do list", newValue)
    setTodos(todos.map((item) => (item.id === todoId ? newValue : item)))
  }
const updateChecked = (todoId, isClicked) => {
  let newClassName =''
  isClicked ? newClassName = 'mt-4 flex items-center border bg-green-200 border-white p-2 rounded-md'
  : newClassName = 'mt-4 flex items-center border bg-red-200 border-white p-2 rounded-md'
  setTodos(todos.map((item) => (item.id === todoId ? {...item, classInput: newClassName} : item)))
}

  const deleteTodo = (deleteId) => {
    const deleted = todos.find(todo => {if(todo.id === deleteId) return todo})
    // vo ovaa funkcija ke treba da ja izmapirate todos, da go izbrishte todos od originalna no pred da go izbrishite da go steapirate vo delete za history e ova
    setHistory([deleted, ...history])
    // proveruvame dali item.id === deleteId togash treba da go izbrisham toj obiekt od ovaa niza -- HOMEWORK.
    setTodos(todos.filter(element => { if(element.id !== deleteId) return element}))   

  }

  return (
    <div>
      <ToDoForm handleAddToDo={addTodo}  />
      <ToDoTasks todos={todos} updateTodo={updateTodo} updateChecked={updateChecked} deleteTodo={deleteTodo}/>
      <History history={history}/>
    </div>
  )
}

export default ToDoList
