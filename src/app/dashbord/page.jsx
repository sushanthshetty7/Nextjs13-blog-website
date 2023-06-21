"use client"
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

function Dashbord() {
  // const [data,setData]= useState([])
  // const [loading,setLoading]=useState(false)
  // const[error,setError]= useState(false)

  // useEffect(()=>{
  //   const getdata = async()=>{
  //     setLoading(true)
  //     const resp =await fetch("https://jsonplaceholder.typicode.com/posts",{cache:"no-store"})
  //     if(!resp.ok){
  //       setError(true)
  //     }

  //     const data = await resp.json()
  //     setData(data)
  //     setLoading(false)

      
  //   }
  //   getdata();
  // },[])

  // console.log(data)
  const fetcher =(...args) => fetch(...args).then(resp =>resp.json())
  const {data , error,isloading} = useSWR("https://jsonplaceholder.typicode.com/posts",fetcher)  
  console.log(data)

  return (
    <div>Dashbord</div>
  )
}

export default Dashbord