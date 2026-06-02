import { useState } from "react";
import { useId } from "react";
import './Mouse.css'

export default function Mouse(){
    const [position, setPosition] = useState({
        x:0,
        y:0
    })

    return (
        <div className="wrapper">
            <div className="mouse" onPointerMove={
                e => {
                    setPosition({
                        x: e.clientX-30,
                        y: e.clientY-485+window.pageYOffset
                    })
                    
                }}>
                    <div className="dot" style={{
                        transform: `translate(${position.x}px, ${position.y}px)`
                    }}>

                    </div>

            </div>
        </div>
        
    )
}