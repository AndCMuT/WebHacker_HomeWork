import styles from './Notification.module.css'

function Notification({type}) {


    return (
        <div className={`${styles.notification} ${type === `success` ? styles.success : type === `warning` ? styles.warning : type === `error` ? styles.error : ''}`}>Информационное уведомление</div>
    )
}

export default Notification