import { useState } from 'react';
import Axios from 'axios'

import firebase from 'firebase/app'
import 'firebase/auth'
import Router from 'next/router'



function AddAProblem() {
    const [category, setcategory] = useState('')
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')

    function addPost() {
        // console.log(title);
        // console.log(description);
        // console.log(category);
        const date = new Date()
        const postDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        // console.log(postDate);
        const auth = firebase.auth()

        Axios.post("http://localhost:3001/problem", {
            P_Title: title,
            P_description: description,
            Category: category,
            Date_posted: postDate,
            UID: auth.currentUser.uid
        }).then((res) => {
            console.log(res.data);

            Router.reload(window.location.pathname);
        })
            .catch((e) => {
                console.log(e);
            })
    }
    return (
        <div className="my-12">
            <div className="grid grid-cols-1 justify-items-center">
                <h1 className="text-4xl font-semibold ">Add a problem</h1>
                <div className="flex flex-col items-start">
                    <div className="my-4 w-full">
                        <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Title
                    </label>
                        <input className="bg-gray-200  border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                            type="text" onChange={(e) => { settitle(e.target.value) }} />
                    </div>
                    <div className="my-4 w-full">


                        <label className=" tet-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Details
                    </label>
                        <textarea onChange={(e) => { setdescription(e.target.value) }} rows={8} className=" bg-gray-200 font-mono border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="text-xl">Choose a category:</label>
                        <select name="Category" onChange={(e) => { setcategory(e.target.value) }} className="rounded-lg text-black mx-4">
                            <option value="Programing" >Programing</option>
                            <option value="Backup & Recovery">Backup & Recovery</option>
                            <option value="UI UX">UI UX</option>
                            <option value="Software Pattern & Design">Software Pattern & Design</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center my-4">
                <button onClick={() => { addPost() }} className="bg-red-500 rounded p-4 w-48 hover:bg-red-600 text-black font-semibold transition transform hover:scale-125 duration-300">
                    Submit
                </button>
            </div>
        </div>
    );
}

export default AddAProblem