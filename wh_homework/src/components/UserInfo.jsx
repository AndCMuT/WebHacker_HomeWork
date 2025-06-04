function UserInfo({isAdmin}) {
    return (
        isAdmin ? <p>Administrator</p> : <p>Обычный пользователь</p>
    )
}

export default UserInfo