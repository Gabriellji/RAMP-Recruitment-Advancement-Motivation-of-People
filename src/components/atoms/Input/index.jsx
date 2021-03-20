import React, {useState} from 'react'

export const Input = ({placeholder, onChange, type}) => {
const [value, setValue] = useState("")

const handleChange = (e)=>{
    setValue(e.target.value)
    onChange(e.target.value)
}

return (
    <input
        placeholder = {placeholder}
        onChange={(e)=>handleChange(e)}
        value={value}
        type={type}
    />
)
}

export default Input