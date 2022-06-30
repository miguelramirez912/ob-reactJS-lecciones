import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { Task } from "../../models/task.class";

const TaskComponent = ({task}) => {

    useEffect(() => {
      console.log('Tarea Creada');
      return () => {
        console.log(`La tarea ${task.name} esta a punto de ser eliminada del DOM`)
      }
    }, [task])

    return (
        <div>
            <h2>Nombre: {task.name}</h2>
            <h3>Descripción: {task.description}</h3>
            <h4>Level: {task.level}</h4>
            <h5>
                This task is: {task.completed ? 'Completed' : 'Pending'}  
            </h5>
        </div>
    )
}
// eslint-disable-next-line
TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
}

export default TaskComponent;