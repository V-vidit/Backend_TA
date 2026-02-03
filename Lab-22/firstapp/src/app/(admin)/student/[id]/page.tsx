import React from 'react'

export default async function page({params,}: {params: Promise<{id: string, name: string}>}) {

    const {id, name}=await params
  return (
    <div>
        <h1>
            StudentID: {id}{name}
        </h1>
    </div>
  )
}
