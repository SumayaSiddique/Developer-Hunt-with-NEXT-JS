import Head from 'next/head'
import { useEffect, useState } from 'react'
import Axios from "axios";




export default function ProblemDetails({ data, userDetails }) {
    const date = new Date(data.Date_posted)
    console.log(userDetails);
    return (
        <div>
            <Head>
                <title>Problem Details | Developer Hunt</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="my-10 flex flex-col items-center">
                <div className="max-w-lg">
                    <p className="text-3xl  my-5">{data.P_Title}</p>
                    <p className="text-lg  my-5 opacity-40 ">Category: {data.Category}</p>
                    <hr />
                    <p className="text-xl  my-5 opacity-70">Posted By : {userDetails.DisplayName} </p>
                    <p className="text-xl  my-5">Date : {date.toDateString()}</p>
                    <p className="text-lg font-mono my-10">
                        {data.P_description}
                    </p>

                </div>
                {/* comments and other things */}
                <div className="my-10">

                </div>
            </div>
        </div>
    );
}




export async function getStaticProps({ params }) {

    const result = await Axios.get('http://localhost:3001/problem/id', { params: { P_Id: params.slug } })
        .catch((e) => { console.log(e); })
    const userDetails = await Axios.get('http://localhost:3001/member/id', { params: { IdNo: result.data[0].IdNo } })
        .catch((e) => { console.log(e); })
    return {
        props: {
            data: result.data[0],
            userDetails: userDetails.data[0]
        }
    }


}

export const getStaticPaths = async () => {

    const res = await fetch(`http://localhost:3001/problem`)

    const items = await res.json()

    const paths = items.map(item => {
        return {
            params: { slug: item.P_Id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}
