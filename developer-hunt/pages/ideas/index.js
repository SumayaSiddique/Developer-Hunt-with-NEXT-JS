import { Player } from "@lottiefiles/react-lottie-player";
import Head from "next/head";
const Ideas = () => {
  return (
    <div>
      <Head>
        <title>Ideas | Developer Hunt</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="grid sm:grid-cols-1  xl:grid-cols-2 items-center my-10">
        <div>
          <p className="text-5xl font-mono my-5 ">
            Pulling out your hair for a bug?
          </p>
          <p className="text-xl font-mono text-gray-500">
            Come, seek help to your new online colleagues
          </p>
        </div>
        <Player
          autoplay
          loop
          src="https://assets4.lottiefiles.com/packages/lf20_0cvczw8l.json"
        />
      </div>
    </div>
  );
};

export default Ideas;
