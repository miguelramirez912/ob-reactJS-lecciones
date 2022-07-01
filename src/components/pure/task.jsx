import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { Task } from "../../models/task.class";
import '../../styles/task.scss';
import { LEVELS } from "../../models/levels.enum";


const TaskComponent = ({task, complete, remove}) => {

    useEffect(() => {
      console.log('Tarea Creada');
      return () => {
        console.log(`La tarea ${task.name} esta a punto de ser eliminada del DOM`)
      }
    }, [task]);

    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                    <h6 className="mb-0">
                        <span className="badge bg-primary">
                            {task.level}
                        </span>
                    </h6>
                );
            case LEVELS.URGENT:
                return(
                    <h6 className="mb-0">
                        <span className="badge bg-warning">
                            {task.level}
                        </span>
                    </h6>
                );
            case LEVELS.BLOCKING:
                return(
                    <h6 className="mb-0">
                        <span className="badge bg-danger">
                            {task.level}
                        </span>
                    </h6>
                );
        
            default:
                break;
        }
    };

    function taskCompletedIcon() {
        if(task.completed){
            return (
                <i onClick={() => complete(task)} className="bi-toggle-on task-action" style={{color: 'green'}}></i> 
            )
        }
        return (
            <i onClick={() => complete(task)} className="bi-toggle-off task-action" style={{color: 'grey'}}></i>
        )
    }

    return (
        <tr className="fw-normal">
            <th>
                <span className="ms-2">{task.name}</span>
            </th>
            <td className="align-middle">
                <span>{task.description}</span>
            </td>
            <td className="align-middle">
                {taskLevelBadge()}
            </td>
            <td className="align-middle">
                {/* sustituir por iconos */}
                {taskCompletedIcon()}
                <i onClick={() => remove(task)} className="bi-trash task-action" style={{color: 'tomato'}}></i>
            </td>
            
        </tr>
       
    )
}
// eslint-disable-next-line
TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default TaskComponent;