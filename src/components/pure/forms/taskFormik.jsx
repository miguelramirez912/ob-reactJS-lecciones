import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';


const TaskFormik = ({add, length}) => {

    const initialValues = {
        name: '',
        description: '',
        completed: false,
        level: LEVELS.NORMAL
    }

    const taskSchema = Yup.object().shape(
        {
            name: Yup.string()
            .min(5, 'Nombre muy corto')
            .max(15, 'Nombre muy largo')
            .required('Este campo es obligatorio'),
            description: Yup.string()
            .min(10, 'Descripción muy corta')
            .required('Debes ingresar la descripcion'),
            completed: Yup.boolean(),
            level: Yup.string().required('El nivel es obligatorio')
        }
    )

    const submit = (values) => {
        let task = new Task(values.name, values.description, values.completed, values.level);
        add(task)
    }
    return(
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={taskSchema}
                onSubmit={async (values, {resetForm}) => {
                    await new Promise((r) => setTimeout(r, 2000));
                    submit(values);
                    resetForm(initialValues);
                }}
            >
                {({isSubmitting}) => {
                    return(
                        <Form>
                            <p>Agregar tarea con Formik:</p>
                            <div className='form-outline flex-fill'>
                                <Field id="name" name="name" placeholder="Nombre de Tarea" className='form-control form-control-lg' />
                                <ErrorMessage name="name" />

                                <Field id="description" name="description" placeholder="Descripción de Tarea" className='form-control form-control-lg'/>
                                <ErrorMessage name="description" />
                               
                                <select className='form-control form-control-lg' defaultValue={LEVELS.NORMAL} name="level" id="level">
                                    <option value={LEVELS.NORMAL}>Normal</option>
                                    <option value={LEVELS.URGENT}>Urgente</option>
                                    <option value={LEVELS.BLOCKING}>Bloqueante</option>
                                </select>
                                <button type='submit' className='btn btn-primary btn-lg ms-2'>{length > 0 ? 'Agregar' : 'Crear'}</button>
                            </div>
                            {isSubmitting ? <p>Procesando datos</p> : null}
                        </Form>
                    )
                }}

            </Formik>
        </div>
    )
}

export default TaskFormik;