import Head from 'next/head'
import Axios from "axios";
const IdeaDetails = ({ data, userDetails }) => {


    const date = new Date(data.Date_posted)
    return (
        <div>
            <Head>
                <title>Idea Details | Developer Hunt</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="my-10 flex flex-col items-center">
                <div className="max-w-lg">
                    <p className="text-3xl  my-5 font-medium">{data.Idea_name}</p>
                    <p className="text-lg  my-5 opacity-40 font-semibold ">Category : {data.Category}</p>
                    <p className="text-lg  my-5 opacity-40 ">Duration: {data.Duration}</p>
                    <p className="text-xl  my-5 font-semibold">Budget : {data.Budget} </p>
                    <hr />
                    <p className="text-xl  my-5 opacity-70">Posted By : {userDetails.DisplayName} </p>
                    <p className="text-xl  my-5">Date : {date.toDateString()}</p>
                    <p className="text-lg font-mono my-10">
                        {data.Idea_description}
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

    const result = await Axios.get('http://localhost:3001/idea/id', { params: { Idea_Id: params.slug } })
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

    const res = await fetch(`http://localhost:3001/idea`)

    const items = await res.json()

    const paths = items.map(item => {
        return {
            params: { slug: item.Idea_Id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}



export default IdeaDetails;


