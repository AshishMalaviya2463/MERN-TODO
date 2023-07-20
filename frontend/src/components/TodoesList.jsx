import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodoAction, getTodoesAction, getTodoesByFilterAction, updateTodoAction } from '../redux/actions/todoActions'
import { changeTodoFilterAction } from '../redux/actions/todoFilterAction'
import { EDIT_TODO } from '../redux/ActionTypes'
import TodoListItem from './TodoListItem'

const TodoesList = () => {

    const { todoes, todoFilter, auth } = useSelector( state => state )
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch( getTodoesAction() )

        return () => {
            dispatch( changeTodoFilterAction( undefined ) )
        }
    }, [] )

    const handleTodoFilter = ( filter ) => {
        dispatch( getTodoesByFilterAction( filter ) )
        dispatch( changeTodoFilterAction( filter ) )
    }

    const handleDeleteTodo = ( id ) => {
        dispatch( deleteTodoAction( id, todoFilter.filter ) )
    }

    const handleEditTodo = ( todo ) => {
        dispatch( {
            type: EDIT_TODO, payload: {
                editTodo: todo, isEdit: true
            }
        } )
    }

    const handleCheckTodo = ( id, status ) => {
        dispatch( updateTodoAction( id, { status }, todoFilter.filter ) )
    }

    return (
        <div className='container mt-4'>
            <div className='text-center mt-5'>
                <button className={`todo_btn m-0 mx-3 mb_sm_5 ${todoFilter.filter === undefined ? "active" : ""}`} onClick={() => {
                    dispatch( getTodoesAction() )
                    dispatch( changeTodoFilterAction( undefined ) )
                }}>
                    All<span className='text-primary'>({todoes?.allTodo})</span>
                </button>
                <button className={`todo_btn m-0 mx-3 mb_sm_15 ${todoFilter.filter === "active" ? "active" : ""}`} onClick={() => handleTodoFilter( "active" )}>
                    Active<span className='text-danger'>({todoes?.activeTodo})</span>
                </button>
                <button className={`todo_btn m-0 mx-3 ${todoFilter.filter === "completed" ? "active" : ""}`} onClick={() => handleTodoFilter( "completed" )}>
                    Completed<span className='text-success'>({todoes?.completedTodo})</span>
                </button>
            </div>
            <TodoListItem todoes={todoes?.todoes} onClickDelete={handleDeleteTodo} onClickEdit={handleEditTodo} onClickCheckBox={handleCheckTodo} />
        </div >
    )
}

export default TodoesList