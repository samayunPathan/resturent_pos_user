import React from 'react'
import Image from 'next/image'
import google from '@/public/g.png'
import facebook from '@/public/fb.png'
import Link from 'next/link'

export function SignUpButtonG(){
    return (
        <div className=''style={{backgroundColor:'gray-100'}}>
      <Link href="#">
        <div className='flex items-center'>
            <Image src={google} alt='google'/>
              <p className='text-xs ml-2'>Sign up with Facebook</p>
              </div>
        </Link>
    </div>
      
    )
}
export function SignUpButtonF(){
    return (
    <div className=''>
      <Link href="#">
        <div className='flex items-center'>
            <Image src={facebook} alt='google' width={21}height={21}/>
              <p className='text-xs ml-2'>Sign up with Facebook</p>
              </div>
        </Link>
    </div>
    )
}