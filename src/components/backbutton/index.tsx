'use client'
import { CaretCircleLeft } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
 
export default function PageBack() {
  const router = useRouter()
 
  return (
    <button className='w-10 px-5' type="button" onClick={() => router.back()}>
     <CaretCircleLeft size={40} weight="fill"  />
    </button>
  )
}