import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";
import { MotionDiv } from "../../../utils/MotionElements";

const BlogDetails = () => {
  const blog = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
     <Loading></Loading>
    );
  }

  return (
    <MotionDiv className="max-w-5xl mx-auto py-16 px-4">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full md:h-[420px] object-cover rounded-2xl mb-8"
      />

      <h1 className="text-lg md:text-2xl font-bold text-green-600 mb-4">
        {blog.title}
      </h1>

<p className="text-gray-700 dark:text-white leading-relaxed ">
{blog.description}
</p>
      <p className="text-gray-700 dark:text-white leading-relaxed">
        {blog.content}
      </p>
    </MotionDiv>
  );
};

export default BlogDetails;
