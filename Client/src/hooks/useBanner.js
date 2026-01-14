import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const useBanner = () => {
    const { pathname } = useLocation();
    const [banner, setBanner] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://safebangladesh-server.vercel.app/banner?pagePath=${pathname}`)
            .then(res => {
                setBanner(res.data);
                setLoading(false);
            })
            .catch(() => {
                setBanner(null);
                setLoading(false);
            });
    }, [pathname]);

    return { banner, loading };
};

export default useBanner;
