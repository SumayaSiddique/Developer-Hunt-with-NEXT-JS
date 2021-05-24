import Link from "next/link"
const JobThumbnail = ({ data }) => {
    console.log(data);
    const Job_Id = data.Job_Id
    return (
        <Link href={"/jobs/" + Job_Id} >
            <a>
                <div className="bg-gray-200 p-8 m-6 text-black rounded-lg transform hover:scale-110 transition duration-300 overflow-hidden ">
                    <p className="text-xl lg:text-3xl">{data.Job_name}</p>
                    <p className="text-lg text-gray-400">{data.Company}</p>
                </div>
            </a>
        </Link>

    );
}
export default JobThumbnail;