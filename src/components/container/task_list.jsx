import React, { useEffect, useState } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
    
    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);
    //Control de ciclo de vida del componente
    useEffect(() => {
        console.log(('Modificacion de Tareas'));
        setLoading(false)
        return () => {
            console.log('El TaskListComponent va a ser Desmontado...');
        }
    }, [tasks])

    const changeCompleted = (id) => {
        console.log('Cambiar el estado de una tarea')
    }
    return (
        <div>
            <div>
                <h1>Your Task:</h1>
            </div>
            <TaskComponent task={defaultTask}/>
        </div>
    )
}

export default TaskListComponent