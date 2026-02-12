"use client"
import React, { useEffect, useState } from 'react'

function page() {

    const [students,setStudents]=useState([]);
    const [formData, setFormData]=useState({
        name: ""
    })
    const [editingID, setEditingID]=useState<number | null>(null);

    const fetchStudents=async()=>{
        const res=await fetch("/api/student");
        const data=await res.json();

        setStudents(data);
    }

    useEffect(()=>{
        fetchStudents()
    },[])

    const addStudent=async()=>{
        const res=await fetch("/api/student",{
            method: "POST",
            body: JSON.stringify(formData),
            headers:{
                "Content-type": "application/json"
            }
        });

        fetchStudents();
        setFormData({name: ""})
    }

    const deleteStudent=async(id:number)=>{
        const res=await fetch(`/api/student/${id}`,{
            method: "DELETE"
        });

        // fetchStudents();

        if (!res.ok) {

            return;
        }

        setStudents(students.filter((stu)=>stu.id!==id))
    }

    const startEditing=async(stu:any)=>{
        setEditingID(stu.id);
        setFormData({name: stu.name})
    }

    const updateStudent=async()=>{
        const res=await fetch(`/api/student/${editingID}`,{
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
                "content-type": "application/json"
            }
        });

        fetchStudents();
        setFormData({name: ""});
        setEditingID(null);
    }

  return (
    <>
        <input type='text'
        placeholder='Enter name'
        value={formData.name}
        onChange={(e)=>setFormData({...formData, name: e.target.value})}
        />
        <button onClick={editingID? updateStudent : addStudent}>
            {editingID? "Update": "Add"}
        </button>

        <ul>
            {students.map(stu=>(
                <li key={stu.id}>
                    {stu.id}: {stu.name}
                    <button onClick={()=>deleteStudent(stu.id)}>
                        Delete
                    </button>
                    <button onClick={()=>startEditing(stu)}>
                        Edit
                    </button>
                </li>
            ))}
        </ul>
    </>
  )
}

export default page
