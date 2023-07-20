import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodoAction, updateTodoAction } from '../redux/actions/todoActions'
import { CANCEL_EDIT_TODO } from '../redux/ActionTypes'
import Typed from 'react-typed';

const TodoInput = () => {

    const todoFilter = useSelector( state => state.todoFilter )
    const todoes = useSelector( state => state.todoes )
    const auth = useSelector( state => state.auth )
    const dispatch = useDispatch()
    const [ todo, setTodo ] = useState( "" )

    useEffect( () => {
        if ( todoes?.isEdit ) {
            setTodo( todoes?.editTodo?.todo )
        } else {
            setTodo( "" )
        }
    }, [ todoes ] )

    const handleAddTodo = ( e ) => {
        e.preventDefault()
        if ( todo?.trim()?.length !== 0 ) {
            if ( todoes?.isEdit === true ) {
                dispatch( updateTodoAction( todoes?.editTodo?._id, { todo: todo }, todoFilter.filter, setTodo ) )
            } else {
                dispatch( addTodoAction( { todo, userId: auth?.user?._id }, todoFilter.filter, setTodo ) )
            }
        }
    }

    const handleCancelEdit = () => {
        dispatch( { type: CANCEL_EDIT_TODO } )
    }

    return (
        <>
            {
                auth?.user?.name && <h1 className='mt-5 text-center'>Hey, {auth?.user?.name}</h1>
            }
            <div className='text-center typed_container'>
                <Typed
                    strings={[
                        'Organize. Prioritize. Accomplish.',
                        'Stay on Track, Get Things Done.',
                        'Simplify Your Life, One Task at a Time.'
                    ]}
                    typeSpeed={30}
                    backSpeed={75}
                    attr="placeholder"
                    loop >
                    <input
                        type={"text"}
                        readOnly={true}
                    />
                </Typed>
            </div>
            <form className='container mt_5rem text-center' onSubmit={( e ) => handleAddTodo( e )}>
                <input
                    type={"text"}
                    placeholder="Enter Todo"
                    className='py-1 w-50 todo_input'
                    value={todo}
                    onChange={e => setTodo( e.target.value )}
                />
                <button className='todo_btn m-0 ms-3' type='submit'>
                    {todoes?.isEdit === true ? "Update" : "Add"}
                </button>
                {todoes?.isEdit === true
                    &&
                    <button className='todo_btn m-0 ms-3' type='button' onClick={handleCancelEdit}>
                        Cancel
                    </button>}
            </form>
        </>
    )
}

export default TodoInput
