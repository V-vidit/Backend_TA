"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

 function page({params}:{params:{id:number}}) {
    const {id} = useParams();
    const [data,setData]= useState<any>([])

    const fetchData=async()=>{
        const res =  await fetch(`/api/user/${id}`)
        const temp= await res.json()
        setData(temp);
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>

        <h1>hello</h1>
        {data.First}
        {data.Last}
        {data.City} 
    </div>
  )
}

export default page