import styles from './TaskList.module.css'

function SimpleList(items) {

    return (
        <ul className={`${styles.tasks}`}>
            {items.items.map(item => <li key={item}>{item}</li>)}
        </ul>
    )
}

export default SimpleList