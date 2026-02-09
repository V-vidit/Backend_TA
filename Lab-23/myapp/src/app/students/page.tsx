"use client"
import React, { useEffect, useState } from 'react'

function page() {

    const [student, setStudent]=useState<any[]>([]);
    const [editID, setEditID]=useState<number | null>(null);

    const [formData,setFormData]=useState({
        name: ""
    });

    const addStudent=async()=>{
        const res=await fetch("api/student",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        })

        const data=await res.json();
        setStudent((prev)=>[...prev, data.newStudent]);
        setFormData({name:""});
    }

    const fetchStudents=async()=>{
        const res=await fetch("api/student");
        const data=await res.json();
        setStudent(data);
    }

    useEffect(()=>{
        fetchStudents()
    },[]);

    const deleteStudent=async(id:number)=>{
        const res=await fetch(`api/student/${id}`,{
            method: "DELETE"
        });

        setStudent((stu)=>stu.filter((s)=> s.id!==id));
    }

    const updateStudent=async()=>{
        const res=await fetch(`api/student/${editID}`,{
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData)
        });        

        fetchStudents();

        setEditID(null);
        setFormData({name: ""})
    }

    return (
      <>
        <input 
        type='text'
        placeholder='Enter name'
        value={formData.name}
        onChange={(e)=>setFormData({...formData, name: e.target.value})}
        />

        <br/>
        <button onClick={editID!==null ? updateStudent : addStudent}>{editID!==null? "Update" : "Add"}</button>

        <ul>
            {student.map((s)=>(
                <li key={s.id}>
                    {s.id}: {s.name}
                    <button onClick={()=>deleteStudent(s.id)}>
                        Delete
                    </button>
                    <button onClick={()=>{
                        setEditID(s.id);
                        setFormData({name: s.name})
                    }}>
                        Edit
                    </button>
                </li>
            ))}
        </ul>
      </>
    )
}

export default page
