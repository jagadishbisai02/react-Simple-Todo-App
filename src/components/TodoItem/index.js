import './index.css'

// Write your code here

const TodosItem = props => {
  const {details, deleteTodoItem} = props
  const {id, title} = details

  const deleteTodo = () => {
    deleteTodoItem(id)
  }

  return (
    <li className="todo-list">
      <p className="list-item">{title}</p>
      <div>
        <button className="delete-btn" type="button" onClick={deleteTodo}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodosItem
