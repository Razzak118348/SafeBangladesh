
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";
import { MotionDiv } from "../../../utils/MotionElements";

const BlogDetails = () => {
  const blog = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  // Convert content into paragraphs
  const paragraphs = blog.content
    ? blog.content.split("\n").filter((paragraph) => paragraph.trim() !== "")
    : [];

  // Collect available additional images
  const additionalImages = [
    blog.image1,
    blog.image2,
    blog.image3,
  ].filter(Boolean);

  // Decide where the image grid should appear
  const imagePosition =
    additionalImages.length > 0
      ? Math.floor(paragraphs.length / 2)
      : -1;

  return (
    <MotionDiv className="max-w-7xl mx-auto py-16 px-4">

      {/* Main Blog Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full md:h-[420px] object-cover rounded-2xl mb-8"
      />

      {/* Blog Title */}
      <h1 className="text-lg md:text-2xl font-bold text-green-600 mb-4">
        {blog.title}
      </h1>

      {/* Blog Description */}
      <p className="text-gray-700 font-bold dark:text-white leading-relaxed mb-6">
        {blog.description}
      </p>

      {/* Blog Content */}
      <div className="text-gray-700 dark:text-white leading-relaxed">

        {paragraphs.map((paragraph, index) => (
          <div key={index}>

            {/* Paragraph */}
            <p className="mb-2">
              {paragraph}
            </p>

            {/* Additional Images - Middle of the Article */}
            {index === imagePosition - 1 && additionalImages.length > 0 && (
              <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">

                {additionalImages.map((image, imageIndex) => (
                  <div key={imageIndex}>
                    <img
                      src={image}
                      alt={`${blog.title} illustration ${imageIndex + 1}`}
                      className="w-full h-[300px] object-cover rounded-2xl shadow-md"
                    />
                  </div>
                ))}

              </div>
            )}

          </div>
        ))}

      </div>
    </MotionDiv>
  );
};

export default BlogDetails;

