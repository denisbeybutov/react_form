import './Notes.css'
import { useId, useState } from "react";


export default function Notes(){
    const noteId = useId();
    const [note, setNote] = useState('');
    const [arrOfNotes, setArrOfNotes] = useState([]);
    const [arrOfDecorations, setArrOfDecorations] = useState([]);
    const [arrOfChecked, setArrOfChecked] = useState([]);

    
        
    function handleInput(e){        
        setNote(e.target.value)        
    }

    function addNote(){
        setArrOfNotes(prev=> [...prev, note]);
        setArrOfDecorations(prev=>[...prev, 'none'])
        setArrOfChecked(prev=>[...prev, false])
        setNote('');        
        document.querySelector('.text').value = '';
        
    }

    function deleteWrapper(index){
        return function deleteNote(e){
            console.log(e.target)
            console.log(index)
            let newArr = arrOfNotes.filter((note,i)=> i !== index)
            setArrOfNotes(newArr);

            let newDecor = arrOfDecorations.filter((dec,i)=> i !==index)
            setArrOfDecorations(newDecor)

            let newCheck = arrOfChecked.filter((chec,i)=> i !== index)
            setArrOfChecked(newCheck)
        }
    }

    function changeDecorWrapper(index) {
        return function changeDecoration(){
            
            if(arrOfDecorations[index] === 'none') {
                const newArr = [...arrOfDecorations]
                newArr[index] = 'line-through'
                setArrOfDecorations(newArr);    

                const newCheck = [...arrOfChecked]
                newCheck[index] = true
                setArrOfChecked(newCheck)
            }
            if(arrOfDecorations[index] === 'line-through') {
                const newArr = [...arrOfDecorations]
                newArr[index] = 'none'
                setArrOfDecorations(newArr);    

                const newCheck = [...arrOfChecked]
                newCheck[index] = false
                setArrOfChecked(newCheck)
            }
        }
    }
    

    return (
        <>
            <textarea className="text" onChange={handleInput} name="note" id="noteId" placeholder="Введите заметку..."></textarea>
            <button onClick={addNote}>Добавить заметку</button>
            
            {arrOfNotes.map((note,index)=>{
                return (
                    <div className="note" key={index}>
                        <input onChange={changeDecorWrapper(index)} type="checkbox" checked={arrOfChecked[index]} />
                        <p style={{textDecoration: arrOfDecorations[index]}}>{note}</p>
                        <button onClick={deleteWrapper(index)}>удалить</button>
                    </div>
                )
            })}
            
            
        </>
    )
}