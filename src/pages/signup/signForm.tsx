"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/router'

type Props = {}

const SignForm = (props: Props) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
  return (
    <div>SignForm</div>
  )
}

export default SignForm