import { useState } from 'react';
import Axios from 'axios'

import firebase from 'firebase/app'
import 'firebase/auth'

import Router from 'next/router'


function AddAnInternship() {

    const [department, setdepartment] = useState('')
    const [Company, setCompany] = useState('')
    const [Type, setType] = useState('')

    function addAnInternship() {
        // console.log(title);
        // console.log(description);
        // console.log(category);
        const date = new Date()
        const postDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        // console.log(postDate);
        const auth = firebase.auth()

        Axios.post("http://localhost:3001/internship", {
            Department: department,
            Company_name: Company,
            Type: Type,
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
                <h1 className="text-4xl font-semibold ">Add an Internship</h1>
                <div className="flex flex-col items-start">
                    <div className="my-4 w-full">
                        <label className=" tet-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Department
                    </label>
                        <textarea onChange={(e) => { setdepartment(e.target.value) }} rows={3} className=" bg-gray-200 font-mono border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="my-4 w-full">
                        <label className="  font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Company Name
                    </label>
                        <input className="bg-gray-200  border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                            type="text" onChange={(e) => { setCompany(e.target.value) }} />
                    </div>
                    <div className="my-4 w-full">
                        <label className=" tet-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Type
                    </label>
                        <input type="text" onChange={(e) => { setType(e.target.value) }} className=" bg-gray-200 font-mono border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>

                </div>
            </div>
            <div className="flex flex-col items-center my-4">
                <button onClick={() => { addAnInternship() }} className="bg-red-500 rounded p-4 w-48 hover:bg-red-600 text-black font-semibold transition transform hover:scale-125 duration-300">
                    Submit
                </button>
            </div>
        </div>
    );
}

export default AddAnInternship