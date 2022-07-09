import {useParams} from 'react-router-dom';

const TaskDetailPage = ({tasks}) => {
    const misParametros = useParams();
    const {id} = useParams();
    let task = tasks[id-1]
    console.log(misParametros)
    

    return(
        <div>
            <h1>Tasks Detail - {id}</h1>
            <h2>{task.name}</h2>
            <h3>{task.description}</h3>
        </div>
    )
}

export default TaskDetailPage;