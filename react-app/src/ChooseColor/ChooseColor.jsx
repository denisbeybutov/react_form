import { useState } from "react";
import { useId } from "react";

export default function ChooseColor(){
    const [answer, setAnswer] = useState('');

    function choosingColor(e){        
        if(e.target.value === '--Выберите цвет--') return;        
        setAnswer(`Ваш любимый цвет - ${e.target.value}`);
    }

    return (
        <>
            <select onChange={choosingColor}>
                <option>--Выберите цвет--</option>
                <option value='красный'>Красный</option>
                <option value='синий'>Синий</option>
                <option value='зеленый'>Зеленый</option>
            </select>
            <p>{answer}</p>
        </>
       
    )
}