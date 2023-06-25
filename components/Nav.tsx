import React from 'react'
import Link from "next/link"
export default function Nav() {
  return (
     <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/quienesSomos">Quienes somos</Link>
        <Link href="/personas">Personas</Link>
    </nav>
  )
}
