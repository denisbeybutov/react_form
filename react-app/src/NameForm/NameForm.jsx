import { useId } from "react"
import { useState } from "react";

export default function NameForm(){
    const formId =  useId();
    const [name, setName] = useState('');

    function send(e){
        e.preventDefault();        
        console.log(name)
        
    }

    return (
        <>
            <form>
                <label htmlFor={formId}>Введите имя: </label>
                <input 
                    id={formId}
                    type="text"
                    onChange={ e => setName(e.target.value) }
                />
                <button 
                    onClick={send} 
                    type="submit"
                >Отправить</button>
            </form>
            <p>{name}</p>
        </>
        
    )
}