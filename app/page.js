import { Button } from '@/components/ui/button'
import React from 'react'
import Hero from './_components/Hero'
import Header from './_components/Header'
import Image from 'next/image'


export default function Home() {
  return (
   <div>
     {/* HEADER  */}
      <Header/>
     {/* Hero Section  */}
      <Hero/>
   </div>
  );
}
