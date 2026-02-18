"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function page() {

    const router=useRouter();

    const [data,setData]=useState<any>([]);
    const [loading, setLoading]=useState<boolean>(true);

    const fetchData=async()=>{
        const res=await fetch("https://67b5841e07ba6e59083d1bb6.mockapi.io/users");
        const data=await res.json();

        setData(data);
        setLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">City</th>
              <th scope="col">Role</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>

            {loading && 
                <tr>
                    <td colSpan={5}>Loading data</td>
                </tr>
            }

            {data.map((user:any)=>{
                return(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.city}</td>
                        <td>{user.role}</td>
                        <td>
                            <button onClick={()=>{router.push(`/students/${user.id}`)}}>
                                View More
                            </button>
                        </td>
                    </tr>
                )
            })}
          </tbody>
        </table>
    </>
  )
}

export default page
