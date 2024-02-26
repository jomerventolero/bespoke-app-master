import React from 'react'
import { lazy } from 'react'
import { Suspense } from 'react'
import Loader from '../../Loader'

const Login = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div>Login</div>
    </Suspense>
  )
}

export default Login