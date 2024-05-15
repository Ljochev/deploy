import React, { useState } from 'react'
import { ArrowUturnDownIcon, CheckIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import ToDoForm from './ToDoForm'

const ToDoTasks = ({ todos, updateTodo, updateChecked, deleteTodo }) => {
  const [editInput, setEditInput] = useState({
    id: null, // 0.412321321
    text: '', // niza03
    classInput: 'mt-4 flex items-center border bg-white border-white p-2 rounded-md',
  })

  const submitUpdate = (value) => {
    console.log("the new text is : ", value)
    updateTodo(editInput.id, {...editInput, text: value})
    console.log({...editInput, text: value})
    setEditInput({
      id: null,
      text: '',
      classInput: 'mt-4 flex items-center border bg-white border-white p-2 rounded-md',
    })
  }
  if (editInput.id) return <ToDoForm edit={editInput} handleAddToDo={submitUpdate} />

  return todos?.map((todo) => (
    <div
      key={todo.id}
      className={todo.classInput}
    >
      <input value={todo.text} className='bg-transparent flex-1 w-96 outline-none' type='text' />
      <div className='space-x-4'>
        {/* <button  onClick={() =>  updateChecked(todo.id, true)} className='bg-green-400 p-1 rounded-sm hover:bg-green-300'> */}
        <button  onClick={() =>  updateChecked(todo.id, true)} className='bg-green-400 p-1 rounded-sm hover:bg-green-300'>

          <CheckIcon
          className='h-6 w-6 text-white' />
        </button>
        {/* <button  onClick={() =>  updateChecked(todo.id, false)} className=' bg-red-500 p-1 rounded-sm hover:bg-red-400'> */}
        <button  onClick={() =>  updateChecked(todo.id, false)} className=' bg-red-500 p-1 rounded-sm hover:bg-red-400'>
          <ArrowUturnDownIcon
          className='h-6 w-6 text-white' />
        </button>
        <button
          onClick={() => setEditInput({ id: todo.id, text: todo.text, classInput: todo.classInput })}
          className='bg-red-400 p-1 rounded-sm hover:bg-red-300'
        >
          <PencilSquareIcon className='h-6 w-6 p-1 text-white' />
      
        </button >
        <button  onClick={() =>  deleteTodo(todo.id)} className=' bg-orange-500 p-1 rounded-sm hover:bg-orange-300'>
          <TrashIcon className='h-6 w-6 text-white' />
        </button>
      </div>
    </div>
  ))
}

export default ToDoTasks
