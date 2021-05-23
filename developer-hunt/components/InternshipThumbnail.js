import Link from "next/link"
const IntenrshipThumbnail = ({ data }) => {

    const internship_Id = data.internship_Id
    return (
        <Link href={"/internships/" + internship_Id} >
            <a>
                <div className="bg-gray-200 p-8 m-6 text-black rounded-lg transform hover:scale-110 transition duration-300 overflow-hidden ">
                    <p className="text-xl lg:text-3xl font-semibold">{data.Department}</p>
                    <p className="text-lg text-gray-400 font-serif">{data.Company_name}</p>
                    <br />
                    <p className="text-md text-gray-400">{data.Type}</p>
                </div>
            </a>
        </Link>

    );
}
export default IntenrshipThumbnail;