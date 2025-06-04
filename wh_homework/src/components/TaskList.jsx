import styles from './TaskList.module.css'

function TaskList({tasks}) {
   
    return (
        <ul className={`${styles.tasks}`}>
            {tasks.map(item => <li key={item}>{item}</li>) }
        </ul>
    )
}
export default TaskList