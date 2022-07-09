import TasksListComponent from '../../components/container/task_list'

const TaskPage = ({children}) => {
    console.log(children)
    return(
        <div>
            <h1>Lista de Tareas</h1>
        <TasksListComponent></TasksListComponent>
        </div>
    )
}

export default TaskPage;