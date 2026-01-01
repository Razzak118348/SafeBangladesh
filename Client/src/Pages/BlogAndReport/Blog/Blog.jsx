import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { MotionDiv, MotionH1 } from "../../../utils/MotionElements";
import Loading from "../../../Components/Loading/Loading";

const Blog = () => {
  const blogs = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Loading />;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <MotionH1
          className="text-3xl md:text-4xl font-bold text-green-800"
          text="Our Blogs & Stories"
        />
        <p className="mt-3 text-gray-600 dark:text-white max-w-2xl mx-auto">
          Stories, insights, and updates from SAFE Bangladesh’s work with
          communities and climate resilience initiatives.
        </p>
      </div>

      {/* Blog Grid */}
     <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {blogs.map((blog) => (
    <MotionDiv
      key={blog.id}
      className="group h-full bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-green-800 mb-2 line-clamp-2">
          {blog.title}
        </h3>

        <p className="text-gray-600 text-sm mb-6 line-clamp-3">
          {blog.description}
        </p>

        {/* Read More */}
        <Link
          to={`/blog/${blog.id}`}
          className="mt-auto inline-flex items-center text-green-700 font-medium hover:text-green-900 transition"
        >
          Read More
          <span className="ml-1 transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </MotionDiv>
  ))}
</div>

    </section>
  );
};

export default Blog;
