import { useState } from "react";
import { useId } from "react";
import './UserList.css'

export default function UserList(){

    const initial = [
        {
            name: 'Вася',
            originalName: 'Вася',
            disabled: true,
            nameOfButton: 'Переименовать'
        },
        {
            name: 'Петя',
            originalName: 'Петя',
            disabled: true,
            nameOfButton: 'Переименовать'
        },
        {
            name: 'Иван',
            originalName: 'Иван',
            disabled: true,
            nameOfButton: 'Переименовать'
        }       
        
    ]
    
    const [users,setUsers] = useState(initial)

    function rename(index){
        setUsers(prev => 
            prev.map( (u,i) => 
                i === index && u.nameOfButton === 'Переименовать' ? 
                {...u, disabled: false, nameOfButton: 'Ок', originalName: u.name} : 
                i === index && u.nameOfButton === 'Ок' ? 
                {...u, disabled: true, nameOfButton: 'Переименовать'} : u
            )
        )

    }

    function input(e,index) {        
        setUsers(prev => 
            prev.map( (u,i) => 
                i === index ? {...u, name: e.target.value} : u
            )
        )
    }

    function cancel(index){
        setUsers(prev => 
            prev.map( (u,i) => 
                i === index ? 
                {...u, disabled: true, name: u.originalName, nameOfButton: 'Переименовать'} : u
            )
        )
    }

    function handleKeyDown(e,index){        
        if(e.key === 'Enter') rename(index)
        if(e.key === 'Escape') cancel(index)        
    }

    return (
        <>
            
            {users.map((u,index) => {
                return <div className="user__list" key={index}>  
                    <input
                        onChange={(e)=>input(e,index)}
                        type="text"
                        value={u.name}
                        disabled={u.disabled}
                        onKeyDown={(e)=>handleKeyDown(e,index)}
                    />

                    <button  onClick={()=>rename(index)}>{u.nameOfButton}</button>
                    <button onClick={()=>cancel(index)}>Отмена</button>
                </div>
                
            })}
        </>
    )

}