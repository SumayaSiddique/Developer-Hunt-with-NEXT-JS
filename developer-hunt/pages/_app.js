import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Layout from '../components/Layout'

import Login from '../components/login/Login'


import firebase from 'firebase/app'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import AdminPanel from '../components/Admin/AdminPanel'


if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDsGgxNnRXVuT3uQ7S-xtbllPwGiJfoXzc",
    authDomain: "developer-hunt.firebaseapp.com",
    projectId: "developer-hunt",
    storageBucket: "developer-hunt.appspot.com",
    messagingSenderId: "17715492880",
    appId: "1:17715492880:web:31d2e46c7122c554b3f295"
  })
} else {
  firebase.app(); // if already initialized, use that one
}







function MyApp({ Component, pageProps }) {
  // return (
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  // )

  const auth = firebase.auth()
  const [user] = useAuthState(auth)

  if (user) {
    if (user.email == 'admin@dev-hunt.com') {
      return <AdminPanel />
    }
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
  return <Login />
}

export default MyApp
