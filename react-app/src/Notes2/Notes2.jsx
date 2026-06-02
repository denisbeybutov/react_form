import './Notes2.css'
import { useId, useState } from "react";


export default function Notes(){
    const noteId = useId();
    const [note, setNote] = useState('');
    const [notes, setNotes] = useState([]);
            
    function handleInput(e){        
        setNote(e.target.value)        
    }

    function addNote(){
        setNotes(prev => [
            ...prev,
            {
                
                text: note,
                completed: false,
                decoration: 'none'
            }
        ])
        setNote('');        
        
        
    }

    function deleteNote(index){
        setNotes(prev => prev.filter((n,i)=> i!== index))
    }
    
    function toogleNote(index){
        setNotes(prev => prev.map((item,i) => 
            i === index ? {...item, completed: !item.completed } : item        
            ))
        
        if(notes[index].decoration === 'none') {
            setNotes(prev => prev.map((item,i) => 
                i === index ? {...item, decoration: 'line-through'} : item
            ))
        }
        if(notes[index].decoration === 'line-through') {
            setNotes(prev => prev.map((item,i) => 
                i === index ? {...item, decoration: 'none'} : item
            ))
        }

    }

    return (
        <>
            <textarea
                value={note}
                className="text"
                onChange={handleInput}
                name="note"
                id={noteId}
                placeholder="Введите заметку...">
                
            </textarea>
            <button onClick={addNote}>Добавить заметку</button>
            
            {notes.map((item,index)=>{
                return (
                    <div className="note" key={index}>
                        <input 
                            onChange={() => toogleNote(index)}
                            type="checkbox"
                            checked={item.completed} 
                        />
                        <p style={{textDecoration: item.decoration}}>{item.text}</p>
                        <button onClick={()=>deleteNote(index)}>удалить</button>
                    </div>
                )
            })}
            
            
        </>
    )
}