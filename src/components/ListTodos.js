import React, { useEffect, useState } from "react"
import axios from 'axios';
import { Link } from "react-router-dom";


const ListTodos = () => {
    const [todos, setTodos] = useState([])

    // const getTodos = () => {
    //   axios.get("https://jsonplaceholder.typicode.com/todos/")
    //     .then(res => setTodos(res.data))
    //     .catch(err => console.log(err))
    // }

    const getTodos = async () => {
        try {
            const res = await axios.get("")
            setTodos(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTodos()
    }, [])
    return (
        <div>
            {todos.map((el, i) => (<Link to={`/todo/${el.id}`}><h2 key={i}>{el.title}</h2></Link>))}

        </div>
    )
}

export default ListTodos