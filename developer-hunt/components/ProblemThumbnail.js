import Link from "next/link"
const ProblemThumbnail = ({ data }) => {
    const P_Id = data.P_Id
    return (
        <Link href={"/problems/" + P_Id} >
            <a>
                <div className="bg-gray-200 p-10 m-6  text-black rounded-lg transform hover:scale-110 transition duration-300 overflow-hidden ">
                    <p className="text-xl lg:text-3xl">{data.P_Title}</p>
                    <p className="text-lg text-gray-400">{data.Category}</p>
                </div>
            </a>
        </Link>

    );
}

export default ProblemThumbnail;