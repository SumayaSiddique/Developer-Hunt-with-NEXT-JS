import { Player } from '@lottiefiles/react-lottie-player';
import Head from "next/head";
import React, { useState } from 'react'

function Login() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  return (
    <div>
      <Head>
        <title>Login | Developer Hunt</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="grid sm:grid-cols-1  xl:grid-cols-2 items-center my-10">
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_i98z7y0a.json"
        />


      </div>

    </div>
  )
}

export default Login

