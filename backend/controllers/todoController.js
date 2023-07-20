const Todo = require( "../models/todoModels" );
const User = require( "../models/userModel" )

const getTodoByUserandFilter = async ( req, res ) => {
    const { filter } = req.query
    const { authorization } = req.headers

    const token = authorization?.split( 'Bearer ' )[ 1 ];

    const user = await User.find( { token } )

    let todoes;
    if ( filter == "undefined" || filter == undefined ) {
        todoes = await Todo.find( { userId: user[ 0 ]?._id } )
    } else if ( filter == "active" ) {
        todoes = await Todo.find( { userId: user[ 0 ]?._id, status: false } )
    } else if ( filter == "completed" ) {
        todoes = await Todo.find( { userId: user[ 0 ]?._id, status: true } )
    }

    const allTodo = await Todo.find( { userId: user[ 0 ]?._id } )
    const activeTodo = await Todo.find( { userId: user[ 0 ]?._id, status: false } )
    const completedTodo = await Todo.find( { userId: user[ 0 ]?._id, status: true } )

    res.status( 200 ).send( {
        todoes,
        allTodo: allTodo?.length,
        activeTodo: activeTodo?.length,
        completedTodo: completedTodo?.length
    } )
}

exports.getTodoController = async ( req, res ) => {
    try {
        await getTodoByUserandFilter( req, res )
    } catch ( error ) {
        res.status( 500 ).send( {
            message: "Internal Server Error"
        } )
    }
}

exports.addTodoController = async ( req, res ) => {
    try {
        const body = req.body

        const todo = await Todo( body )
        await todo.save()

        await getTodoByUserandFilter( req, res )
    } catch ( error ) {
        res.status( 500 ).send( {
            message: error
        } )
    }
}

exports.updateTodoController = async ( req, res ) => {
    try {
        const body = req.body
        const { id } = req.params
        const todo = await Todo.findByIdAndUpdate( id, body )

        await getTodoByUserandFilter( req, res )
    } catch ( error ) {
        res.status( 500 ).send( {
            message: "Internal Server Error"
        } )
    }
}

exports.deleteTodoController = async ( req, res ) => {
    try {
        const { id } = req.params
        const { filter } = req.query

        await Todo.findByIdAndDelete( id )

        await getTodoByUserandFilter( req, res )
    } catch ( error ) {
        res.status( 500 ).send( {
            message: "Internal Server Error"
        } )
    }
}