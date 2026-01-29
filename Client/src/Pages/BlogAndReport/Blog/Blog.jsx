// src/pages/Blog/Blog.jsx
import { useLoaderData, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Loading from "../../../Components/Loading/Loading";
import { MotionDiv, MotionH1, MotionH2, MotionP } from "../../../utils/MotionElements";
import PageBanner from "../../../Components/PageBanner/PageBanner";

const Blog = () => {
  const { blogs, totalPages, currentPage, totalBlogs } = useLoaderData();
  const navigate = useNavigate();
  console.log(blogs)
  // Show loading if needed
  if (!blogs) return <Loading />;

  // Handle page change
  const handlePageChange = (page) => {
    // Navigate programmatically without keeping any search param
    navigate(`/blog/page/${page}`);
  };

  return (
    <section className="px-4 py-6 ">
      <PageBanner></PageBanner>
      {/* HEADER */}
      <MotionDiv className="mt-6 lg:mt-16 text-center">
        <MotionH1
          className="text-3xl md:text-4xl p-4 font-bold text-green-800"
          text="Our Blogs & Stories"
        />
      </MotionDiv>

      {/* BLOG GRID */}
      <motion.div
        key={currentPage}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <MotionDiv
              key={blog._id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <MotionDiv className="p-6 flex flex-col flex-1">
                <h1 className="text-lg font-semibold">{blog.title}</h1>
                <MotionP className="text-sm text-gray-600 line-clamp-3 mt-2">
                  {blog.description}
                </MotionP>
                <Link
                  to={`/blog/${blog._id}`}
                  className="mt-4 text-green-700 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </MotionDiv>
            </MotionDiv>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No blogs found</p>
        )}
      </motion.div>


      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 gap-2 items-center">

          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md border ${currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white text-green-700 hover:bg-green-100"
              }`}
          >
            Previous
          </button>

          {/* Numbered Pages */}
          {[...Array(totalPages).keys()].map((number) => {
            const pageNum = number + 1;
            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`px-4 py-2 rounded-md border ${currentPage === pageNum
                    ? "bg-green-700 text-white"
                    : "bg-white text-green-700 hover:bg-green-100"
                  }`}
              >
                {pageNum}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md border ${currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white text-green-700 hover:bg-green-100"
              }`}
          >
            Next
          </button>

        </div>
      )}

    </section>
  );
};

export default Blog;
