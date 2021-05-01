import ProblemThumbnail from "../../components/problems/ProblemThumbnail"
import Head from 'next/head'
const problems = () => {
    return (
        <div>
            <Head>
                <title>Problems | Developer Hunt</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
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