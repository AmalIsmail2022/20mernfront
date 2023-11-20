import { useEffect, useState } from "react";
import Student from "./component/student";
import axios from 'axios'
import Form from "./component/form";


function App() {

  const [students, setstudents] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');


 const getAllStudents = async () => {
    const res = await axios.get("http://localhost:9999/api/v1/students")
    setstudents(res.data.data)
  }
useEffect(() => {
    getAllStudents()
}, [students])
  
  const addNewStudent = async () => {
    if (name, age, email) {
    const res = await axios.post("http://localhost:9999/api/v1/students", {
    name:name,
    age:age,
    email:email
    })
  }
  
  }

 
   
  

  
  return (
  
    <div>
        
      <Student students={students} />
      {/* <Form createStudent={createStudent} /> */}
        <div>
            <input type='text' placeholder='name' onChange={e=>setName(e.target.value)}/>
            <input type='text' placeholder='age'  onChange={e=>setAge(e.target.value)} />
            <input type='text' placeholder='email' onChange={e=>setEmail(e.target.value)} />
            <button onClick={addNewStudent}>add new user</button>
            
        </div>
    </div>
  );
}

export default App;
