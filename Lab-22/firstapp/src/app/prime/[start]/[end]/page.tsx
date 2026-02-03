import { Trykker } from 'next/font/google';
import React from 'react'

export default async function page({
    params
}:{
    params: Promise<{
        start: number,
        end: number
    }>
}) {
    const {start,end}=await params;
    const primes: number[]=[];

    const isPrime=(n:number)=>{
        if(n<2) return false;
        for(let i=2;i<n;i++){
            if(n%i==0){
                return false
            }
        }
        return true
    }

    for(let i=start; i<end; i++){
        if (isPrime(i)) {
            primes.push(i);
        }
    }
  return (
    
    <div>
        <h1>Prime numbers between {start} and {end}</h1>
        <h3>{primes.join(",")}</h3>
    </div>
  )
}
