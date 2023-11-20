import React, { useState } from 'react';

const Form = ({ createStudent }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const addNewStudent = () => {
        createStudent()
    }
    return (
        <div>
            <input type='text' placeholder='name' onChange={e=>setName(e.target.value)}/>
            <input type='text' placeholder='age'  onChange={e=>setAge(e.target.value)} />
            <input type='text' placeholder='email' onChange={e=>setEmail(e.target.value)} />
            <button onClick={addNewStudent}>add new user</button>
            
        </div>
    );
}

export default Form;
