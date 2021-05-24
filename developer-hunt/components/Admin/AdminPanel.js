import React from 'react'
import ProblemThumbnail from '../../components/ProblemThumbnail'
import JobThumbnail from '../../components/JobThumbnail'
import InternshipThumbnail from '../../components/InternshipThumbnail'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Axios from 'axios'
import IdeaThumbnail from '../IdeaThumbnail'
import firebase from 'firebase/app'
import 'firebase/auth'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function AdminPanel() {
    const [ideaList, setideaList] = useState([])
    const [problemList, setproblemList] = useState([])
    const [jobList, setjobList] = useState([])
    const [internships, setinternships] = useState([])
    useEffect(() => {
        Axios.get('http://localhost:3001/idea').then((res) => {
            // console.log(res.data);
            setideaList(res.data)
        })
        Axios.get('http://localhost:3001/problem').then((res) => {
            // console.log(res.data);
            setproblemList(res.data)
        })
        Axios.get('http://localhost:3001/jobs').then((res) => {
            // console.log(res.data);
            setjobList(res.data)
        })
        Axios.get('http://localhost:3001/internship').then((res) => {
            // console.log(res.data);
            setinternships(res.data)
        })
    }, [])
    return (
        <div>
            <Head>
                <title>Admin Panel | Developer Hunt</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="flex flex-row justify-between m-8">
                <h1 className="text-5xl text-center font-bold my-12">Admin Panel</h1>
                <Popup modal={true} trigger={<button onClick={() => {
                    // const auth = firebase.auth()
                    // auth.signOut()
                }} className="h-20 bg-red-500 rounded-lg p-4 text-black transform transition duration-300 hover:scale-125">Sign Out</button>
                } position="center">
                    <div className="bg-black p-12 flex flex-col items-center">
                        <h1 className="text-3xl">Are you sure want to log out?</h1>
                        <button onClick={() => {
                            const auth = firebase.auth()
                            auth.signOut()
                        }} className="font-semibold bg-red-500 rounded-lg p-4 text-black">Yes, log me out</button>
                    </div>
                </Popup>

            </div>
            <hr className="my-4" />

            <div className="bg-green-600 p-8 rounded-lg m-4">
                <h1 className="text-2xl my-4 font-mono">Problems</h1>
                <div className="grid grid-flow-row md:grid-flow-col">
                    {
                        problemList.map((problem, index) => {
                            return <ProblemThumbnail key={index} data={problem} admin={true} />
                        })
                    }
                </div>
            </div>
            <div className="bg-gray-600 p-8 rounded-lg m-4">
                <h1 className="text-2xl my-4 font-mono">Jobs</h1>
                <div className="grid grid-flow-row md:grid-flow-col">
                    {
                        jobList.map((job, index) => {
                            return <JobThumbnail key={index} data={job} admin={true} />
                        })
                    }
                </div>
            </div>

            <div className="bg-purple-400 p-8 rounded-lg m-4">
                <h1 className="text-2xl my-4 font-mono">Ideas</h1>
                <div className="grid grid-flow-row md:grid-flow-col">
                    {
                        ideaList.map((idea, index) => {
                            return <IdeaThumbnail key={index} data={idea} admin={true} />
                        })
                    }
                </div>
            </div>

            <div className="bg-red-400 p-8 rounded-lg m-4">
                <h1 className="text-2xl my-4 font-mono">Internships</h1>
                <div className="grid grid-flow-row md:grid-flow-col">
                    {
                        internships.map((internship, index) => {
                            return <InternshipThumbnail key={index} data={internship} admin={true} />
                        })
                    }
                </div>
            </div>


            {/*
            <div className="bg-purple-400 p-8 rounded-lg m-4">
                <h1 className="text-2xl my-4 font-mono">Ideas</h1>
                <div className="grid grid-flow-row md:grid-flow-col">
                    <JobThumbnail />
                    <JobThumbnail />
                    <JobThumbnail />
                </div>
            </div>
            <div className="bg-red-400 p-8 rounded-lg m-4">
                <h1 className="text-2xl my-4 font-mono">Internships</h1>
                <div className="grid grid-flow-row md:grid-flow-col">
                    <JobThumbnail />
                    <JobThumbnail />
                    <JobThumbnail />
                </div>
            </div> */}
        </div>
    )
}

export default AdminPanel
