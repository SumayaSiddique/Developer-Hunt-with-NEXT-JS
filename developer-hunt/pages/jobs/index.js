import { Player } from '@lottiefiles/react-lottie-player';
import JobThumbnail from "../../components/problems/JobThumbnail"
import Head from 'next/head'
const Jobs = () => {
    return (
        <div>
            <Head>
                <title>Jobs | Developer Hunt</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="grid sm:grid-cols-1  xl:grid-cols-2 items-center my-10">
                <div>
                    <p className="text-5xl font-mono my-5 ">Trying to land a job in the tech industry?</p>
                    <p className="text-xl font-mono text-gray-500">You have come to the right place!</p>

                </div>
                <Player
                    autoplay
                    loop
                    src="https://assets2.lottiefiles.com/packages/lf20_i98z7y0a.json"
                />

            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                <JobThumbnail company="Developer Hunt" jobTitle="Junior Software Engineer" details="asdasdasd" />
                <JobThumbnail />
                <JobThumbnail />
                <JobThumbnail company="ABC Company Limited" jobTitle="Senior React Developer" details="asdasdasd" />
                <JobThumbnail />
                <JobThumbnail />
            </div>
        </div>
    );
}

export default Jobs;