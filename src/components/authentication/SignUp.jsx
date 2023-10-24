import React from 'react'

import { useEffect, useState } from 'react'
import { Client, Account, ID } from 'appwrite'

const SignUp = () => {

  const client = new Client();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
      
      client
          .setEndpoint('http://api.mybespokestaff.com:85/v1')
          .setProject('65157e9f553b3b4a0ec4');
  }, [])


  const account = new Account(client);

  const handleSignUp = (email, password) => {
      account.create(
        ID.unique(),
        email,
        password,
        name
      )
  }

  return (
    <div className="flex flex-col gap-4 m-8 justify-center">
            <input type="text" placeholder="Name" onChange={(e) => {setName(e.target.value)}}/>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={() => handleSignUp(email, password)}>Sign Up</button>
    </div>
  )
}

export default SignUp