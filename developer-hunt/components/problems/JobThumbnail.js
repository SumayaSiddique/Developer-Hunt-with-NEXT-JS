import Link from "next/link"
const JobThumbnail = ({ jobTitle, company }) => {
    return (
        <Link href={"/jobs/" + "123123"} >
            <a>
                <div className="bg-gray-200 p-10 m-6 h-64 text-black rounded-lg transform hover:scale-110 transition duration-300 overflow-hidden">
                    <p className="text-3xl">{jobTitle ? jobTitle : "This is a sample title"}</p>
                    <p className="text-xl text-gray-400">{company ? company : "Sample User"}</p>
                </div>
            </a>
        </Link>

    );
}
export default JobThumbnail;