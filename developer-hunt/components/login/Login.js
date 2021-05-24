import { Player } from "@lottiefiles/react-lottie-player";
import Head from "next/head";
import { FaGoogle } from 'react-icons/fa';


import firebase from 'firebase/app'
import 'firebase/auth'

import Axios from "axios";
import { useState } from 'react'

function Login() {
  const auth = firebase.auth()
  const [password, setpassword] = useState('')
  const [email, setemail] = useState('')

  function adminSignIn() {
    console.log(email);
    console.log(password);
    const auth = firebase.auth()

    auth.signInWithEmailAndPassword(email, password).catch((e) => {
      console.log(e);
    }).then(() => {
      if (auth.currentUser) {
        console.log('Signed in Successfully!');
        // console.log(auth.currentUser.displayName);
        // console.log(auth.currentUser.email);
        // console.log(auth.currentUser.uid);        
      }
    })
  }
  return (
    <div>
      <Head>
        <title>Login | Developer Hunt</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col items-center py-12">
        <h1 className="text-4xl font-semibold text-center max-w-lg">Sign in to connect with other developers around the globe</h1>
        <Player
          autoplay
          loop
          src="https://assets3.lottiefiles.com/packages/lf20_BhWJsn.json"
          className="max-w-xl"
        />

        <div className="bg-red-500 p-4 rounded-xl flex flex-row items-center cursor-pointer my-4 hover:scale-125  transition transform duration-300" onClick={() => {
          signInWithGoogle();
        }}>
          <FaGoogle size="45" className="px-2 text-white" />
          <p className="text-white text-lg">
            Sign in with Google
          </p>
        </div>

        <div className="my-44 flex flex-col items-center">
          <h1 className="text-3xl ">Admin Login</h1>
          <div className="my-4 w-full">
            <label className="  font-bold md:text-right mb-1 md:mb-0 pr-4">
              Admin Email
                    </label>
            <input className="bg-gray-200  border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              type="email" onChange={(e) => { setemail(e.target.value) }} />
          </div>
          <div className="my-4 w-full">
            <label className="  font-bold md:text-right mb-1 md:mb-0 pr-4">
              Admin Password
                    </label>
            <input className="bg-gray-200  border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              type="password" onChange={(e) => { setpassword(e.target.value) }} />
          </div>
          <div className="bg-blue-500 p-4 rounded-xl flex flex-row items-center cursor-pointer my-4 hover:scale-125  transition transform duration-300" onClick={() => {
            adminSignIn()
          }}>
            <p className="text-white text-lg">
              Admin Login
          </p>
          </div>
        </div>
      </div>


    </div>
  );
}

function signInWithGoogle() {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  const auth = firebase.auth()

  auth.signInWithPopup(googleProvider).catch((e) => {
    console.log(e);
  }).then(() => {
    if (auth.currentUser) {
      console.log('Signed in Successfully!');
      // console.log(auth.currentUser.displayName);
      // console.log(auth.currentUser.email);
      // console.log(auth.currentUser.uid);

      Axios.post("http://localhost:3001/members/add", {
        UID: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        email: auth.currentUser.email
      }).catch((e) => {
        console.log(e);
      })
    }
  })
}



export default Login;
