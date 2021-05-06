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

      <div className="grid sm:grid-cols-1  xl:grid-cols-2 items-center my-10 mx-20">
        <div className="flex flex-col max-w-md">
          <h1 className="text-5xl my-5">Enter your credentials to login</h1>

          <input
            type="email"
            class="form-input p-3 rounded-lg text-black my-3"
            placeholder="Email Address"
            onChange={(e) => setemail(e.target.value)}
          />

          <input
            type="password"
            class="form-input p-3 rounded-lg text-black my-3"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />

          <button
            className="p-3 bg-blue-300 text-black text-2xl text-center rounded-md mx-auto cursor-pointer"
            onClick={() => {
              login(email, password)
            }}
          >Login</button>

        </div>

        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_i98z7y0a.json"
        />

      </div>

    </div>
  )
}

function login(email, password) {
  console.log(email, password);
}

export default Login

