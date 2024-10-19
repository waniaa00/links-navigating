'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter} from "next/navigation"

const  homePage = () => {
  const router = useRouter();
  return (
    <div>
      Home Page <br />
      <Link href="/about" > go to About Page </Link> <br />
      <Link href="/footer" > go to Footer Page </Link><br />
      <Link href="/contact" > go to Contact Page </Link> <br />
      <Link href="/navbar" > go to Navbar </Link>



      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <button onClick={() => router.push("/login")}>Go to Login Page button</button>

   
    </div>
    
      )
}

export default homePage

