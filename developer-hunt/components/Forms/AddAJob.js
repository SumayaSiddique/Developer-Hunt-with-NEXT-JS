import { useState } from 'react';
import Axios from 'axios'

import firebase from 'firebase/app'
import 'firebase/auth'

import Router from 'next/router'


function AddAJob() {

    const [Job_name, setJob_name] = useState('')
    const [Company, setCompany] = useState('')
    const [Type, setType] = useState('')
    const [Skill, setSkill] = useState('')
    const [Job_description, setJob_description] = useState('')
    const [Salary, setSalary] = useState('')

    function addJobPost() {
        // console.log(title);
        // console.log(description);
        // console.log(category);
        const date = new Date()
        const postDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        // console.log(postDate);
        const auth = firebase.auth()

        Axios.post("http://localhost:3001/jobs", {
            Job_name: Job_name,
            Company: Company,
            Type: Type,
            Skill: Skill,
            Job_description: Job_description,
            Salary: Salary,
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
                <h1 className="text-4xl font-semibold ">Add a Job</h1>
                <div className="flex flex-col items-start">
                    <div className="my-4 w-full">
                        <label className="  font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Job Name
                    </label>
                        <input className="bg-gray-200  border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                            type="text" onChange={(e) => { setJob_name(e.target.value) }} />
                    </div>
                    <div className="my-4 w-full">
                        <label className="  font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Company
                    </label>
                        <input className="bg-gray-200  border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                            type="text" onChange={(e) => { setCompany(e.target.value) }} />
                    </div>
                    <div className="my-4 w-full">
                        <label className=" tet-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Skill
                    </label>
                        <textarea onChange={(e) => { setSkill(e.target.value) }} rows={3} className=" bg-gray-200 font-mono border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="my-4 w-full">
                        <label className=" tet-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Job Description
                    </label>
                        <textarea onChange={(e) => { setJob_description(e.target.value) }} rows={8} className=" bg-gray-200 font-mono border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="my-4 w-full">
                        <label className=" tet-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Salary
                    </label>
                        <textarea onChange={(e) => { setSalary(e.target.value) }} rows={1} className=" bg-gray-200 font-mono border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="text-xl">Choose Job Type : </label>
                        <select name="Category" onChange={(e) => { setType(e.target.value) }} className="rounded-lg text-black mx-4">
                            <option value="Remote" >Remote</option>
                            <option value="On Site">On Site</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center my-4">
                <button onClick={() => { addJobPost() }} className="bg-red-500 rounded p-4 w-48 hover:bg-red-600 text-black font-semibold transition transform hover:scale-125 duration-300">
                    Submit
                </button>
            </div>
        </div>
    );
}

export default AddAJob