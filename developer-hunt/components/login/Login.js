import { Player } from "@lottiefiles/react-lottie-player";
import Head from "next/head";
import { FaGoogle } from 'react-icons/fa';


import firebase from 'firebase/app'
import 'firebase/auth'

import Axios from "axios";

function Login() {
  const auth = firebase.auth()
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

        {/* <h1 className="text-3xl">{auth.currentUser ? auth.currentUser.displayName : "Please Sign In"}</h1> */}

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
