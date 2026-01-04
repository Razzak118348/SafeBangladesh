import useBanner from "../../hooks/useBanner";
import { MotionH1 } from "../../utils/MotionElements";
import Banner from "../Banner/Banner";
import Loading from "../Loading/Loading";


const PageBanner = () => {
    const { banner, loading } = useBanner();
console.log(banner)
    return (
        <div className="relative w-full">
            {loading ? (<Loading>
            </Loading>
            ) : (
                <Banner
                    imageUrl={banner?.backgroundImage}
                    altText={banner?.altText}
                />
            )}

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <MotionH1
                    text={banner?.title}
                    className="bg-gradient-to-r from-lime-200 to-green-500 bg-clip-text text-transparent"
                />
            </div>
        </div>
    );
};

export default PageBanner;
