import { useState } from "react";
import { useId } from "react";

export default function InputForm(){
    const loginId = useId();
    const passwordId = useId();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [greeting , setGreeting] = useState('');

    function submit(e){
        e.preventDefault();
        
        if(login.length === 0 || password.length === 0) {
            setGreeting('Пожалуйста, заполните все поля')
        }
        else {
            setGreeting(`Добро пожаловать, ${login}`)
        }
    }

    function writeLogin(e){
        setLogin(e.target.value)
    }
    function writePassword(e){
        setPassword(e.target.value)
    }



    return (
        <>
            <form onSubmit={submit} action="">
                <label htmlFor={loginId}>Логин</label>
                <input onChange={writeLogin} id={loginId} type="text" />
                <br />
                <label htmlFor={passwordId}>Пароль</label>
                <input onChange={writePassword} id={passwordId} type="password" />
                <br />
                <button>Войти</button>
            </form>
            <p>{greeting}</p>
        </>
    )
}