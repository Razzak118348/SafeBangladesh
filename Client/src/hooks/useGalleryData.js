import { useEffect, useState } from "react";
import axios from "axios";


const useGalleryData = (category) => {
  const [gallery, setGallery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category) return;
    setLoading(true);
axios.get(`http://localhost:5000/galleries/${category}`)
      .then(res => {
        setGallery(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [category]);

  return { gallery, loading, error };
};

export default useGalleryData;
