"use client"
import React, { useEffect, useState } from 'react'

function page() {

  const [data,setData]=useState<any>([]);

  const fetchData=async()=>{
    const res=await fetch("/api/users");
    const data=await res.json();

    setData(data);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user:any)=>{
            return(
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.full_name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default page
