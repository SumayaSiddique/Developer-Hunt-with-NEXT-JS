import Link from "next/link"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Axios from 'axios'
import Router from 'next/router'
const ProblemThumbnail = ({ data, admin }) => {
    const P_Id = data.P_Id

    return (
        !admin ? <Link href={"/problems/" + P_Id} >
            <a>
                <div className="bg-gray-200 p-10 m-6  text-black rounded-lg transform hover:scale-110 transition duration-300 overflow-hidden ">
                    <p className="text-xl lg:text-3xl">{data.P_Title}</p>
                    <p className="text-lg text-gray-400">{data.Category}</p>
                </div>
            </a>
        </Link> : <div className="cursor-pointer" onClick={() => {
            console.log('problem clicked');
        }}>

            <Popup modal={true} trigger={
                <div className="bg-gray-200 p-10 m-6  text-black rounded-lg transform hover:scale-110 transition duration-300 overflow-hidden ">
                    <p className="text-xl lg:text-3xl">{data.P_Title}</p>
                    <p className="text-lg text-gray-400">{data.Category}</p>
                </div>
            } position="right center">
                <div className="bg-black p-12 flex flex-col items-center">
                    <h1 className="text-3xl">Are you sure want to delete?</h1>
                    <button onClick={() => {
                        Axios.delete('http://localhost:3001/problem', { params: { P_Id: data.P_Id } })
                            .catch((e) => { console.log(e); })
                        Router.reload(window.location.pathname);
                    }} className="font-semibold my-4 bg-red-500 rounded-lg p-4 text-black">Delete this post</button>
                </div>
            </Popup>



        </div>




    );
}

export default ProblemThumbnail;