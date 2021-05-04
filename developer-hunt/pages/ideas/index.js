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
        <Player
          autoplay
          loop
          src="https://assets4.lottiefiles.com/packages/lf20_0cvczw8l.json"
          className="max-w-lg"
        />
        <div>
          <p className="text-5xl my-5 max-w-lg font-serif">
            Have an idea that can generate values?
          </p>
          <p className="text-xl font-mono text-gray-500 max-w-md">
            Getting sponsors for your project has never been easier.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Ideas;
