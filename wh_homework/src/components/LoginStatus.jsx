function LoginStatus({isLoggedIn}) {

    const greeting = isLoggedIn ? <h3>Добро пожаловать</h3> : <h3>Пожалуйста, авторизуйтесь</h3>

    return (
     
        greeting

    )
}

export default LoginStatus