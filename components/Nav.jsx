'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {getProviders, signOut, signIn, useSession} from 'next-auth/react'

const Nav = () => {
    // const isUserLoggedIn = true;
    const {data: session } = useSession();

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, settoggleDropdown] = useState(false)

    useEffect(() => {
        const fetchProviders = async () =>{
            const response = await getProviders()
            
            //issue with the line below
            setProviders(response)
        }
        fetchProviders();
    },[])
  return (

    
    <nav className='flex-between w-full mb-12 pt-3'>

    <Link href="/" className='flex gap-2 flex-center'>
        <Image 
            src="/assets/images/logo.svg"
            width={30}
            height={30}
            alt='prompedia'
            className='object-contain'        
        />
        <p className="logo_text">Prompedia</p>
    </Link>
        Nav
    {/* {alert(providers)} */}
    {/* Bigger than Mobile */}
    <div className="sm:flex hidden">
        {session?.user ? (
            <div className='flex gap-3 md:gap-5'>
                <Link
                href="/create-post"
                className='black_btn'
                >
                Create Post
                </Link>
                <button type='button' className='outline_btn'
                onClick={signOut}
                >
                    Sign Out
                </button>
                <Link href='/profile'>
                    <Image src="/assets/images/logo.svg"
                    width={40}
                    height={40}
                    className='rounded-full'
                    alt='profile'
                    />
                </Link>
            </div>
        ):(
            <>
            {/* we'll see this later when we setup the next-auth */}
            {providers && Object.values(providers).map((provider) => (
                <button
                type='button'
                key={providers.name}
                onClick={() => signIn(provider.id)}
                className='black_btn'
                >
                    Sign In
                </button>
            )
            )}
            </>
        )}
    </div>

    {/* Mobile Navigation*/}
    
    <div className="sm:hidden flex  relative" >
    {session?.user ? (
            <div className='flex'>
                    <Image src="/assets/images/logo.svg"
                    width={40}
                    height={40}
                    className='rounded-full'
                    alt='profile'
                    onClick={() => settoggleDropdown((prev)=>!prev)}
                    />

                   {toggleDropdown && (
                    <div className="dropdown">
                        <Link
                        href='/profile'
                        className='drowndown_link'
                        onClick={() => settoggleDropdown(false)}
                        >
                            My Profile
                        </Link>
                        <Link
                        href='/create-prompt'
                        className='drowndown_link'
                        onClick={() => settoggleDropdown(false)}
                        >
                            Create Prompt
                        </Link>
                        <button type='button'
                               className='mt-5 w-full black_btn'
                               onClick={() =>{
                                settoggleDropdown(false);
                                signOut();
                            }}
                        >Sign Out</button>
                    </div>
                   )}

            </div>
        ):(
            <>
            {/* { we'll see this later when we setup the next-auth } */}
            {providers && Object.values(providers).map((provider) => (
                <button
                type='button'
                key={providers.name}
                onClick={() => signIn(provider.id)}
                className='black_btn'
                >
                    Sign In
                </button>
            )
            )}
            </>
        )}
    </div>

    </nav>
  )
}

export default Nav