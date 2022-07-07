import PropTypes from 'prop-types';
import { useRef } from 'react';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({add, length}) => {

    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const levelRef = useRef(LEVELS.NORMAL);

    function createTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )

        add(newTask)
    }

    
    return (
        <form onSubmit={createTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='input-name' type="text" className='form-control form-control-lg' required autoFocus placeholder='Nombre de la tarea'/>
                <input ref={descriptionRef} id='input-description' type="text" className='form-control form-control-lg' required placeholder='Descripcion de la tarea'/>
                <select className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL} name="" id="selectLevel">
                    <option value={LEVELS.NORMAL}>Normal</option>
                    <option value={LEVELS.URGENT}>Urgente</option>
                    <option value={LEVELS.BLOCKING}>Bloqueante</option>
                </select>
                <button type='submit' className='btn btn-primary btn-lg ms-2'>{length > 0 ? 'Agregar' : 'Crear'}</button>
            </div>
        </form>
    )
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskForm;