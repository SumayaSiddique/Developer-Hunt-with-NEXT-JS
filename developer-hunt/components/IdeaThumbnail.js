import Link from "next/link"
const IdeaThumbnail = ({ data }) => {
    console.log(data);
    const Idea_Id = data.Idea_Id
    return (
        <Link href={"/ideas/" + Idea_Id} >
            <a>
                <div className="bg-gray-200 p-8 m-6  text-black rounded-lg transform hover:scale-110 transition duration-300 overflow-hidden ">
                    <p className="text-xl lg:text-3xl">{data.Idea_name}</p>
                    <p className="text-lg text-gray-400">{data.Category}</p>
                </div>
            </a>
        </Link>

    );
}
export default IdeaThumbnail;