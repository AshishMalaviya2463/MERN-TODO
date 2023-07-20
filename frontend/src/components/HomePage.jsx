import React from 'react'
import Header from './header/Header'
import TodoesList from './TodoesList'
import TodoInput from './TodoInput'

const HomePage = () => {
    return (
        <>
            <Header />
            <TodoInput />
            <TodoesList />
        </>
    )
}

export default HomePage