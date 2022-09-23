import { useState, useEffect } from 'react';

const useTodoList = (initState) => {


    let localState = window.localStorage.getItem("todoList", false)
    if (localState) {
        localState = JSON.parse(localState)
        initState = localState
    }
    const [todoList, setTodo] = useState(initState)



    useEffect(() => {

        document.title = "New Todo Added!"
        window.localStorage.setItem("todoList", JSON.stringify(todoList))
    })

    const addTodo = (text, duedate) => {
        setTodo([...todoList, { "text": text, "duedate": duedate, "completed": false }])
    }
    const markTodo = (idx) => {
        let todos = getTodoWithDefaultDate(todoList)
        todos = todos.map((ele, i) => {
            if (i === idx) {
                ele.completed = !ele.completed
            }
            return ele
        })
        setTodo(todos)
    }

    const deleteTodo = (idx) => {
        let todos = getTodoWithDefaultDate(todoList)
        todos = todos.filter((ele, i) => {
            console.log(i, "xxx", idx)
            if (idx === i) {
                return false
            } else {
                return true
            }
        })
        setTodo(todos)
    }

    const getTodoWithDefaultDate = (initState) => {
        if (initState) {

            return initState.map((ele) => {
                if (typeof (ele) == "object") {
                    return ele
                } else {
                    return {
                        "text": ele,
                        "duedate": new Date(),
                        "completed": false
                    }
                }
            })
        } else {
            return initState
        }

    }

    return [getTodoWithDefaultDate(todoList), addTodo, markTodo, deleteTodo]

}

export default useTodoList