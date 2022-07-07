import React, { useEffect, useState } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
import '../../styles/task.scss';
import TaskForm from "../pure/forms/taskForm";

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Default description Uno', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Default description Dos', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Default description Tres', false, LEVELS.BLOCKING);
    
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //Control de ciclo de vida del componente
    useEffect(() => {
        console.log(('Modificacion de Tareas'));
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        return () => {
            console.log('El TaskListComponent va a ser Desmontado...');
        }
    }, [tasks])

    function completeTask(task) {
        console.log('Completa esta tarea', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed
        setTasks(tempTasks)
    }

    function deleteTask(task) {
        console.log('Eliminar esta tarea', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1)
        setTasks(tempTasks)
    }

    function addTask(task) {
        console.log('Agregar una tarea', task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks)
    }

    const TasksTable = () => {
        return(
            <table>
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* iterar sobre una lista de tareas */}
                    {tasks.map((task, index) => {
                        return (
                            <TaskComponent key={index} 
                            task={task} 
                            complete={completeTask} 
                            remove={deleteTask}/>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    const loadingStyle = {
        color: 'gray',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    return (
        <div>
            <div className="col-12">
                <div className="card">
                    <div className="card-header p-3">
                        <h5>Your Task:</h5>
                    </div>
                    <div className="card-body" data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>
                        { loading ? <p style={loadingStyle}>Cargando tareas...</p> 
                        : tasks.length > 0 ? 
                        <TasksTable/> : 
                        <div>
                            <h3>No hay tareas por mostrar</h3>
                            <h5>Por favor, crea una.</h5>
                        </div>
                        }                          
                        
                    </div>
                </div>
            </div>
            
            <TaskForm add={addTask} length={tasks.length}/>
        </div>
    )
}

export default TaskListComponent