import { useState } from "react";
import { useId } from "react";

export default function Post(){
    const [status, setStatus] = useState('Ожидаем действия');
    const [value, setValue] = useState('');
    const [color, setColor] = useState('green');


    function reset(){
        setValue('');
        setStatus('Ожидаем действия')
        setColor('green');
    }

    function handleChange(e){
        setValue(e.target.value);        
    }

    function saveAsDraft(){
        setStatus('Сохранено как черновик');
        setColor('yellow');
    }

    function publish(){
        setStatus('Публикация...');
        setColor('green');
        
        setTimeout(() => {
            const chance = Math.random();            
            if(chance > 0.3) setStatus('Пост опубликован!');
            else { 
                setStatus('Ошибка публикации');
                setColor('red');
            }
        }, 1500);
    }

    return (
        <>
            Пост
            <textarea onChange={handleChange} value={value} placeholder='Введите текст...'></textarea>
            <button onClick={publish} disabled={status === 'Пост опубликован!' ? true : false}>Опубликовать</button>
            <button onClick={saveAsDraft} disabled={status === 'Пост опубликован!' ? true : false}>Сохранить как черновик</button>
            <button onClick={reset}>Сбросить</button>
            <p style={{color: color}}>{status}</p>
        </>
    )
}