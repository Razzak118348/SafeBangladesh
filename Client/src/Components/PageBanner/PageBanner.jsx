import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import useBanner from "../../hooks/useBanner";
import { MotionH1 } from "../../utils/MotionElements";
import Banner from "../Banner/Banner";
import Loading from "../Loading/Loading";


const PageBanner = () => {
    const {banner, bannerLoading } =useAuth();
console.log(banner)
const location = useLocation()
  const currentBanner = banner.find(
    b => b.pagePath === location.pathname
  );
    return (
        <div className="relative w-full">
            {bannerLoading ? (<Loading>
            </Loading>
            ) : (
                <Banner
                    imageUrl={currentBanner?.backgroundImage}
                    altText={currentBanner?.altText}
                />
            )}

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <MotionH1
                    text={currentBanner?.title}
                    className="bg-gradient-to-r from-lime-200 to-green-500 bg-clip-text text-transparent"
                />
            </div>
        </div>
    );
};

export default PageBanner;
