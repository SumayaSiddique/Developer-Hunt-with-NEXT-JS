import { Player } from '@lottiefiles/react-lottie-player';
import ProblemThumbnail from "../../components/problems/ProblemThumbnail"
import Head from 'next/head'
const problems = () => {
    return (
        <div>
            <Head>
                <title>Problems | Developer Hunt</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="grid sm:grid-cols-1 xl:grid-cols-2 items-center my-10 ">
                <div>
                    <p className="text-5xl font-serif my-5 ">Pulling out your hair for a bug?</p>
                    <p className="text-xl font-mono text-gray-500 max-w-md">Come, seek help to your new online colleagues</p>

                </div>
                <Player
                    autoplay
                    loop
                    src="https://assets8.lottiefiles.com/private_files/lf30_foIGdO.json"
                />

            </div>
            {/* problem list with the ProblemThumbnail */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                <ProblemThumbnail userName="Imran" title="NEXT JS tailwind not working" details="asdasdasd" />
                <ProblemThumbnail />
                <ProblemThumbnail />
                <ProblemThumbnail userName="Imran" title="NEXT JS tailwind not working" details="asdasdasd" />
                <ProblemThumbnail />
                <ProblemThumbnail />
            </div>

        </div>
    );
}

export default problems;