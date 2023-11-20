import React from 'react';

const Student = ({students}) => {
    
    return (
        <div className='card'>

            {
                students.map((student) => {
                    return (

                        <ul key={student.id}>
                            <li>name:{student.name }</li>
                            <li>age:{student.age }</li>
                            <li>email:{student.email }</li>
                
            </ul>
                    )
                })
            }
            
        </div>
    );
}

export default Student;
