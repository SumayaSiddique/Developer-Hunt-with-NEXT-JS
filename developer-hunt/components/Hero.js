import { Player } from '@lottiefiles/react-lottie-player';
const Hero = () => {
    return (
        <div className="py-10">

            <p className="text-7xl font-serif text-center">
                Developer Hunt
            </p>
            <Player
                autoplay
                loop
                src="https://assets5.lottiefiles.com/packages/lf20_b9s3zxh8.json"
                style={{ height: '800px' }}
                className="w-auto"
            />
            <p className="text-3xl font-serif text-center">
                Your next best friend when it comes to Software Development!
            </p>




        </div>
    );
}

export default Hero;