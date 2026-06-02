import { useState } from "react";
import { useId } from "react";

export default function RegistrationForm1(){
    const nameId = useId();
    const emailId = useId();
    const passwordId = useId();
    const ageId = useId();
    const cityId = useId();

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        age: '',
        city:''
    })

    function write(e){        
        const { name, value } = e.target;        
        setForm(prevForm=>({...prevForm, [name]: value}))
        
    }

    function outputData(e){
        e.preventDefault();    
        console.log('Name: ',form.name,'Email: ', form.email, 'Password: ', form.password, 'Age: ',form.age, 'City: ',form.city)    
    }

    return (
        <form onSubmit={outputData}>
            <label htmlFor={nameId}>Введите имя: </label>
            <input name='name' value={form.name} onChange={write} id={nameId} type="text" />
            <br />
            <label htmlFor={emailId}>Введите e-mail: </label>
            <input name='email' value={form.email} onChange={write} id={emailId} type="email" />
            <br />
            <label htmlFor={passwordId}>Введите пароль: </label>
            <input name='password' value={form.password} onChange={write} id={passwordId} type="password" />
            <br />
            <label htmlFor={ageId}>Введите возраст: </label>
            <input name='age' value={form.age} onChange={write} id={ageId} type="number" />
            <br />
            <label htmlFor={cityId}>Введите город: </label>
            <input name='city' value={form.city} onChange={write} id={cityId} type="text" />
            <br />
            <button type="submit">Отправить</button>
        </form>
    )
}