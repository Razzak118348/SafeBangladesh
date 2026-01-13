import { useEffect, useState } from "react";
import axios, { all } from "axios";
import useAuth from "./useAuth";


const useGalleryData = (category) => {
 const {  allGalleryData, galleryLoading} =useAuth()

  const gallery = allGalleryData.find(
    b => b.category === category
  );
console.log(gallery)
  return { gallery, galleryLoading };
}

export default useGalleryData;
