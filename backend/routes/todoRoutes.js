const express = require( "express" );
const todoController = require( "../controllers/todoController" );
const authMiddleware = require( "../middleware/authMiddleware" );
const router = express.Router();
const app = express()
app.use( express.json() )

router.get( "/", authMiddleware, todoController.getTodoController )

router.post( "/", authMiddleware, todoController.addTodoController )

router.put( "/:id", authMiddleware, todoController.updateTodoController )

router.delete( "/:id", authMiddleware, todoController.deleteTodoController )

module.exports = router