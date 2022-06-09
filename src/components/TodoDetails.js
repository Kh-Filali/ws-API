import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const TodoDetails = () => {
    const [todo, setTodo] = useState({})

    const params=useParams()

    const getTodoById = async () => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
            setTodo(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTodoById()
    }, [params])
    

  return (
    <div>
        <h3>{todo.title}</h3>
        <h5>{todo.id}</h5>
    </div>
  )
}

export default TodoDetails