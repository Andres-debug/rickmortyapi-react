import { useState } from "react";

export const SearchInput = ({onSearch})=>{
    const [inputValue,setInputValue]=useState('');

    const handleClick=()=>{
        const valor = inputValue.trim()
        console.log(valor)
        if(valor !== ''){
            onSearch(valor)
        }
    }
    return(
        <div style={{display: 'flex', justifyContent:'center',gap:'1rem',
            marginBottom:'1rem'
        }}>
        <input
        type="text"
        placeholder="Escriba un nombre y presione Enter.."
        onChange={(e)=>setInputValue(e.target.value)}
        />
        <button onClick={handleClick}>Buscar</button>
        </div>
    );
}