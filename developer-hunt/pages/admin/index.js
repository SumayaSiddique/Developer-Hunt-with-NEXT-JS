import React from 'react'
import ProblemThumbnail from '../../components/problems/ProblemThumbnail'
import JobThumbnail from '../../components/problems/JobThumbnail'
function AdminPanel() {
    return (
        <div>
            <h1 className="text-5xl text-center font-bold">Admin Panel</h1>
            <hr className="my-4" />

            <div className="bg-green-600 p-8 rounded-lg m-4">
                <h1 className="text-2xl my-4 font-mono">Problems</h1>
                <div className="grid grid-flow-row md:grid-flow-col">
                    <ProblemThumbnail />
                    <ProblemThumbnail />
                    <ProblemThumbnail />
                </div>
            </div>
            <div className="bg-gray-600 p-8 rounded-lg m-4">
                <h1 className="text-2xl my-4 font-mono">Jobs</h1>
                <div className="grid grid-flow-row md:grid-flow-col">
                    <JobThumbnail />
                    <JobThumbnail />
                    <JobThumbnail />
                </div>
            </div>
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
            </div>
        </div>
    )
}

export default AdminPanel
