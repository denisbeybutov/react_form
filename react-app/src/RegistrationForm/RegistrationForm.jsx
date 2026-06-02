import { useState } from "react";
import { useId } from "react";

export default function RegistrationForm(){
    const nameId = useId();
    const emailId = useId();
    const passwordId = useId();
    const ageId = useId();
    const cityId = useId();

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [age,setAge] = useState('');
    const [city,setCity] = useState('');

    function writeName(e){
        setName(e.target.value)        
    }
    function writeEmail(e){
        setEmail(e.target.value)        
    }
    function writePassword(e){
        setPassword(e.target.value)        
    }
    function writeAge(e){
        setAge(e.target.value)        
    }
    function writeCity(e){
        setCity(e.target.value)        
    }

    function outputData(e){
        e.preventDefault();    
        console.log('Name: ',name,'Email: ', email, 'Password: ', password, 'Age: ',age, 'City: ',city)    
    }

    return (
        <form onSubmit={outputData}>
            <label htmlFor={nameId}>Введите имя: </label>
            <input onChange={writeName} id={nameId} type="text" />
            <br />
            <label htmlFor={emailId}>Введите e-mail: </label>
            <input onChange={writeEmail} id={emailId} type="email" />
            <br />
            <label htmlFor={passwordId}>Введите пароль: </label>
            <input onChange={writePassword} id={passwordId} type="password" />
            <br />
            <label htmlFor={ageId}>Введите возраст: </label>
            <input onChange={writeAge} id={ageId} type="number" />
            <br />
            <label htmlFor={cityId}>Введите город: </label>
            <input onChange={writeCity} id={cityId} type="text" />
            <br />
            <button type="submit">Отправить</button>
        </form>
    )
}