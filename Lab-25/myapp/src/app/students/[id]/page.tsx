import React from 'react'

async function page({params}: {params: Promise<{id: number}>}) {

  const {id}=await params;

  const res=await fetch(`https://67b5841e07ba6e59083d1bb6.mockapi.io/users/${id}`);
  const data=await res.json();



  return (
    <div>
        <h1>{data.id}</h1>
        <img src={data.avatar}/>
    </div>
  )
}

export default page
