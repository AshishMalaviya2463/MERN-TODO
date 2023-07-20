import React from 'react'

const TodoListItem = ( { todoes, onClickDelete, onClickEdit, onClickCheckBox } ) => {
    return (
        <table className='mx-auto mt-5 border-0'>
            <thead>
                <tr>
                    <th>No.</th>
                    <th className='table_todo'>Todo</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {todoes?.length > 0
                    ?
                    todoes?.map( ( todo, i ) => {
                        return <tr key={i + 1}>
                            <td className='text-center'>{i + 1}</td>
                            <td className='table_todo'>
                                <label className="checkbox">
                                    <input type="checkbox" checked={todo?.status} onChange={() => onClickCheckBox( todo?._id, !todo?.status )} />
                                    <div className="checkbox-circle">
                                        <svg viewBox="0 0 52 52" className="checkmark">
                                            <circle fill="none" r={25} cy={26} cx={26} className="checkmark-circle" />
                                            <path d="M16 26l9.2 8.4 17.4-21.4" className="checkmark-kick" />
                                        </svg>
                                    </div>
                                </label>
                                <span className={`${todo?.status === true ? "completed_todo text-muted" : ""}`}>{todo.todo}</span>
                            </td>
                            <td className='action_btn'>
                                <button className='todo_btn text-danger' onClick={() => onClickDelete( todo?._id )}>Delete</button>
                                <button className='todo_btn text-success' onClick={() => onClickEdit( todo )}>Edit</button>
                            </td>
                        </tr>
                    } )
                    :
                    <tr>
                        <td colSpan={3} className='text-center'>No Todoes Available</td>
                    </tr>
                }
            </tbody>
        </table>
    )
}

export default TodoListItem