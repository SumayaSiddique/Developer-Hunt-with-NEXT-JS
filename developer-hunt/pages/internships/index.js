import { Player } from '@lottiefiles/react-lottie-player';
import Head from 'next/head'
const Internships = () => {
    return (
        <div>
            <Head>
                <title>Internships | Developer Hunt</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="grid sm:grid-cols-1  xl:grid-cols-2 items-center my-10">
                <Player
                    autoplay
                    loop
                    src="https://assets10.lottiefiles.com/packages/lf20_z2m65ck9.json"
                />

                <div>
                    <p className="text-5xl font-serif my-5 max-w-lg">Getting a job after graduation is a tough task</p>
                    <p className="text-xl font-mono text-gray-500 max-w-md">You have come to the right place where you can get internships for free.</p>

                </div>


            </div>
        </div>
    );
}

export default Internships;