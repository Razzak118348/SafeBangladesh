import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../../Components/Loading/Loading";

const Admin = () => {
  const [section, setSection] = useState("blogs");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newItem, setNewItem] = useState({});
  const [galleryInputs, setGalleryInputs] = useState({})
  const baseURL = "https://safebangladesh-server.vercel.app";

  // ================= FETCH (READ) =================
  useEffect(() => {
    fetchData();
  }, [section]);

  const fetchData = async () => {
    setLoading(true);
    try {
      let res;
      if (section === "blogs") res = await axios.get(`${baseURL}/blogs`,{withCredentials:true});
      if (section === "latestwork") res = await axios.get(`${baseURL}/latestwork`,{withCredentials:true});
      if (section === "team") res = await axios.get(`${baseURL}/team`,{withCredentials:true});
      if (section === "galleries") res = await axios.get(`${baseURL}/galleries`,{withCredentials:true});
      if (section === "allbanner") res = await axios.get(`${baseURL}/allbanner`,{withCredentials:true});

      // Ensure data is always an array
      if (section === "blogs") setData(res.data.blogs || res.data || []);
      else if (section === "latestwork") setData(res.data.latestwork || res.data || []);
      else if (section === "team") setData(res.data.team || res.data || []);
      else if (section === "galleries") setData(res.data || []);
      else if (section === "allbanner") setData(res.data || []);

    } catch (err) {
      console.error(err);
      setData([]); // fallback to empty array on error
    }
    setLoading(false);
  };

  ///=============Create
  const handleCreate = async () => {
    try {
      let url = "";
      if (section === "blogs") url = "/blogs";
      if (section === "latestwork") url = "/latestwork";
      if (section === "team") url = "/team";
      if (section === "galleries") url = "/galleries";
      if (section === "allbanner") url = "/allbanner";

      await axios.post(baseURL + url, newItem, { withCredentials: true });
      setNewItem({});
      fetchData();

      Swal.fire({
        icon: "success",
        title: "Created Successfully!",
        text: `New ${section} item has been added.`,
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Failed to create ${section} item!`,
      });
    }
  };

// ================= UPDATE (PATCH)
const handleUpdate = async ({ id, originalData, section }) => {
  try {
    const editedData = newItem[id];

    if (!editedData || Object.keys(editedData).length === 0) {
      return Swal.fire("Nothing to update");
    }

    //  only changed fields
    const changes = {};
    for (let key in editedData) {
      if (editedData[key] !== originalData[key]) {
        changes[key] = editedData[key];
      }
    }

    if (Object.keys(changes).length === 0) {
      return Swal.fire("No real changes detected");
    }

    const url = `${baseURL}/${section}/${id}`;

    const res = await axios.patch(url, changes, {
      withCredentials: true,
    });

    if (res.data.modifiedCount > 0 || res.data.matchedCount > 0) {
      setNewItem(prev => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });

      fetchData();

      Swal.fire({
        icon: "success",
        title: "Updated Successfully!",
        timer: 2000,
        showConfirmButton: false,
      });
    } else {
      throw new Error("No update applied");
    }

  } catch (error) {
    console.error("Patch error:", error.response?.data || error.message);
    Swal.fire({
      icon: "error",
      title: "Update Failed",
      text: error.response?.data?.message || "Check console",
    });
  }
};


  // ================= DELETE =================
  const handleDelete = async (idOrCategory, category = null) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert this ${section} item!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      let url = "";
      if (section === "blogs") url = `/blogs/${idOrCategory}`;
      if (section === "latestwork") url = `/latestwork/${idOrCategory}`;
      if (section === "team") url = `/team/${idOrCategory}`;
      if (section === "galleries") url = `/galleries/${idOrCategory}`;
      if (section === "allbanner") url = `/allbanner/${idOrCategory}`;

      await axios.delete(baseURL + url, { withCredentials: true });
      fetchData();

      Swal.fire({
        icon: "success",
        title: "Deleted Successfully!",
        text: `The ${section} item has been deleted.`,
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Failed to delete ${section} item!`,
      });
    }
  };

  // ================= GALLERY IMAGE REMOVE =================
  const removeGalleryImage = async (category, img) => {
    const result = await Swal.fire({
      title: "Remove this image?",
      text: "You won't be able to revert this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    });

    if (!result.isConfirmed) return;

    try {
      await axios.delete(`${baseURL}/galleries/${category}/images`, {
        data: { imageUrl: img },
        withCredentials: true,
      });

      Swal.fire({
        icon: "success",
        title: "Image Removed!",
        timer: 1500,
        showConfirmButton: false,
      });

      fetchData(); // refresh gallery
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed to remove image",
      });
    }
  };

  // ================= GALLERY IMAGE ADD =================
  const addGalleryImage = async (category, imageUrl) => {
    if (!imageUrl || !imageUrl.trim()) return;

    try {
      await axios.post(`${baseURL}/galleries/${category}/images`, { imageUrl, },
        { withCredentials: true });

      Swal.fire({
        icon: "success",
        title: "Image Added!",
        timer: 1500,
        showConfirmButton: false,
      });

      fetchData(); // refresh gallery
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed to add image",
      });
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-green-600">Admin Dashboard</h1>

      {/* SECTION SELECT */}
    <select
  className="
    w-full sm:w-64 md:w-80 lg:w-96
    px-4 py-3
    mb-6
    text-gray-700 dark:text-white
    bg-white dark:bg-gray-800
    border border-gray-300 dark:border-gray-600
    rounded-lg
    shadow-sm
    focus:outline-none
    focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    transition-colors duration-200
  "
  value={section}
  onChange={(e) => {
    setSection(e.target.value);
    setNewItem({});
  }}
>
  <option value="blogs">Blogs</option>
  <option value="latestwork">Latest Work</option>
  <option value="team">Team</option>
  <option value="galleries">Galleries</option>
  <option value="allbanner">All Banner</option>
</select>

      {loading && <Loading></Loading>}

      {/* add blog  */}
      {section === "blogs" && (
        <div className="border-2 border-gray-400 rounded-lg p-4 mb-6">
          <h2 className="font-bold mb-2 text-green-600">Add Blog</h2>

          <input
            className="border-2 border-gray-400 p-1 w-full mb-2 dark:bg-white dark:text-black"
            placeholder="Title"
            onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
          />

          <input
            className="border-2 border-gray-400 p-1 w-full mb-2 dark:bg-white dark:text-black"
            placeholder="Image URL"
            onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
          />

          {/* Image preview */}
          {newItem.image && (
            <img
              src={newItem.image}
              alt={newItem.title || "Preview"}
              className="w-full h-48 object-cover mb-2"
            />
          )}

          <textarea
            className="border-2 border-gray-400 p-1 w-full mb-2 dark:bg-white dark:text-black"
            placeholder="Description"
            onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
          />

          <textarea
            className="border-2 border-gray-400 p-1 w-full mb-2 dark:bg-white dark:text-black"
            placeholder="Content"
            onChange={(e) => setNewItem({ ...newItem, content: e.target.value })}
          />

          <button
            onClick={handleCreate}
            className="bg-green-600 button rounded-md text-white  px-4 py-1"
          >
            Create Blog
          </button>
        </div>
      )}

      {/* add latest work */}
      {section === "latestwork" && (
        <div className="border-2 border-gray-400 p-4 mb-6 dark:bg-white dark:text-black">
          <h2 className="font-bold mb-2">Add Latest Work</h2>
          <input className="border-2 border-gray-400 p-1 w-full mb-2" placeholder="Title"
            onChange={(e) => setNewItem({ ...newItem, title: e.target.value })} />
          <input className="border-2 border-gray-400 p-1 w-full mb-2" placeholder="Image URL"
            onChange={(e) => setNewItem({ ...newItem, image: e.target.value })} />
          <textarea className="border-2 border-gray-400 p-1 w-full mb-2" placeholder="Description"
            onChange={(e) => setNewItem({ ...newItem, description: e.target.value })} />
          <button onClick={handleCreate} className="bg-green-600 button rounded-md text-white px-4 py-1">
            Create Work
          </button>
        </div>
      )}

      {/* add team member */}
      {section === "team" && (
        <div className="border-2 border-gray-400 p-4 mb-6 rounded-lg dark:bg-white dark:text-black">
          <h2 className="font-bold mb-2">Add Team Member</h2>
          <input className="border-2 border-gray-400 p-1 w-full mb-2" placeholder="Image URL"
            onChange={(e) => setNewItem({ ...newItem, img: e.target.value })} />
          <input className="border-2 border-gray-400 p-1 w-full mb-2" placeholder="Alt Text"
            onChange={(e) => setNewItem({ ...newItem, alt: e.target.value })} />
          <input className="border-2 border-gray-400 p-1 w-full mb-2" placeholder="Designation"
            onChange={(e) => setNewItem({ ...newItem, designation: e.target.value })} />
          <button onClick={handleCreate} className="bg-green-600 button rounded-md text-white px-4 py-1">
            Add Member
          </button>
        </div>
      )}

      {/* add  banner  */}
      {section === "allbanner" && (
        <div className="border-2 border-gray-400 p-4 mb-6 dark:bg-white dark:text-black">
          <h2 className="font-bold mb-2">Add Banner</h2>
          <input className="border-2 border-gray-400 p-1 w-full mb-2" placeholder="Page Path"
            onChange={(e) => setNewItem({ ...newItem, pagePath: e.target.value })} />
          <input className="border-2 border-gray-400 p-1 w-full mb-2" placeholder="Banner Image URL"
            onChange={(e) => setNewItem({ ...newItem, image: e.target.value })} />
          <input className="border-2 border-gray-400 p-1 w-full mb-2" placeholder="Title"
            onChange={(e) => setNewItem({ ...newItem, title: e.target.value })} />
          <button onClick={handleCreate} className="bg-green-600 button rounded-md text-white px-4 py-1">
            Create Banner
          </button>
        </div>
      )}


      {/* ================= READ / UPDATE / DELETE ================= */}

    {/* Blogs Section */}
{section === "blogs" &&
  data.map((item) => (
    <div
      key={item._id}
      className="border-2 border-green-700 shadow-xl p-4 mb-6 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-5 dark:border-green-500 dark:shadow-gray-700"
    >
      {/* Image Preview */}
      <div className="w-full md:w-auto md:col-span-1 flex justify-center items-center">
        <img
          src={newItem[item._id]?.image || item.image || item.img}
          alt={item.title}
          className="w-full md:w-48 h-48 md:h-48 object-cover rounded-md border dark:border-gray-600"
        />
      </div>

      {/* Form Area */}
      <div className="col-span-1 md:col-span-2 flex flex-col gap-3">
        {/* Title */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <p className="w-full sm:w-28 font-semibold text-gray-800 dark:text-white">Title:</p>
          <input
            className="border-2 border-gray-400 dark:border-gray-600 p-2 flex-1 rounded bg-white dark:bg-gray-800 text-black"
            defaultValue={item.title}
            onChange={(e) =>
              setNewItem(prev => ({ ...prev, [item._id]: { ...prev[item._id], title: e.target.value } }))
            }
          />
        </div>

        {/* Image URL */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <p className="w-full sm:w-28 font-semibold text-gray-800 dark:text-white">Image URL:</p>
          <input
            className="border-2 border-gray-400 dark:border-gray-600 p-2 flex-1 rounded bg-white dark:bg-gray-800 text-black "
            defaultValue={item.image || item.img}
            onChange={(e) =>
              setNewItem(prev => ({ ...prev, [item._id]: { ...prev[item._id], image: e.target.value } }))
            }
          />
        </div>

        {/* Description */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-2">
          <p className="w-full sm:w-28 font-semibold pt-1 text-gray-800 dark:text-white">Description:</p>
          <textarea
            className="border-2 border-gray-400 dark:border-gray-600 p-2 flex-1 rounded min-h-[80px] bg-white dark:bg-gray-800 text-black "
            defaultValue={item.description}
            onChange={(e) =>
              setNewItem(prev => ({ ...prev, [item._id]: { ...prev[item._id], description: e.target.value } }))
            }
          />
        </div>

        {/* Content */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-2">
          <p className="w-full sm:w-28 font-semibold pt-1 text-gray-800 dark:text-white">Content:</p>
          <textarea
            className="border-2 border-gray-400 dark:border-gray-600 p-2 flex-1 rounded min-h-[120px] bg-white dark:bg-gray-800 text-black "
            defaultValue={item.content}
            onChange={(e) =>
              setNewItem(prev => ({ ...prev, [item._id]: { ...prev[item._id], content: e.target.value } }))
            }
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-3">
          <button
            onClick={() =>
              handleUpdate({
                id: item._id,
                originalData: item,
                section: "blogs",
              })
            }
            className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white px-5 py-1.5 rounded w-full sm:w-auto"
          >
            Update
          </button>
          <button
            onClick={() => handleDelete(item._id, "blogs")}
            className="bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white px-5 py-1.5 rounded w-full sm:w-auto"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ))}


   {/* Latest Work Section */}
{section === "latestwork" &&
  data.map((item) => (
    <div
      key={item._id}
      className="border-2 border-green-700 shadow-xl p-4 mb-6 rounded-lg flex flex-col md:flex-row gap-5 dark:border-green-500 dark:shadow-gray-700"
    >
      {/* Image Preview */}
      <div className="w-full md:w-48 flex-shrink-0 flex justify-center items-center">
        <img
          src={item.image || item.img}
          alt={item.title}
          className="w-full md:w-48 h-48 object-cover rounded-md border dark:border-gray-600"
        />
      </div>

      {/* Form Area */}
      <div className="flex-1 flex flex-col gap-3">
        {/* Title */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <p className="w-full sm:w-28 font-semibold text-gray-800 dark:text-white">Title:</p>
          <input
            className="border-2 border-gray-400 dark:border-gray-600 p-2 flex-1 rounded bg-white dark:bg-gray-800 text-black"
            defaultValue={item.title}
            onChange={(e) =>
              setNewItem(prev => ({ ...prev, [item._id]: { ...prev[item._id], title: e.target.value } }))
            }
          />
        </div>

        {/* Image URL */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <p className="w-full sm:w-28 font-semibold text-gray-800 dark:text-white">Image URL:</p>
          <input
            className="border-2 border-gray-400 dark:border-gray-600 p-2 flex-1 rounded bg-white dark:bg-gray-800 text-black"
            defaultValue={item.image || item.img}
            onChange={(e) =>
              setNewItem(prev => ({ ...prev, [item._id]: { ...prev[item._id], image: e.target.value } }))
            }
          />
        </div>

        {/* Description */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-2">
          <p className="w-full sm:w-28 font-semibold pt-1 text-gray-800 dark:text-white">Description:</p>
          <textarea
            className="border-2 border-gray-400 dark:border-gray-600 p-2 flex-1 rounded min-h-[80px] bg-white dark:bg-gray-800 text-black"
            defaultValue={item.description}
            onChange={(e) =>
              setNewItem(prev => ({ ...prev, [item._id]: { ...prev[item._id], description: e.target.value } }))
            }
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-3">
          <button
            onClick={() =>
              handleUpdate({
                id: item._id,
                originalData: item,
                section: "latestwork",
              })
            }
            className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white px-5 py-1.5 rounded w-full sm:w-auto"
          >
            Update
          </button>

          <button
            onClick={() => handleDelete(item._id, "latestwork")}
            className="bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white px-5 py-1.5 rounded w-full sm:w-auto"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
))}

     {/* Team Section */}
{section === "team" &&
  data.map((member) => (
    <div
      key={member._id}
      className="border-2 border-green-700 shadow-xl p-4 mb-4 rounded-md flex flex-col md:flex-row gap-5 dark:border-green-500 dark:shadow-gray-700"
    >
      {/* Image Preview */}
      <div className="w-full md:w-32 flex-shrink-0 flex justify-center items-center">
        <img
          src={member.img}
          alt={member.alt}
          className="w-full md:w-32 h-32 object-cover rounded-md border dark:border-gray-600"
        />
      </div>

      {/* Form Fields */}
      <div className="flex-1 flex flex-col gap-3">
        {/* Image URL */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <p className="w-full sm:w-32 font-semibold text-gray-800 dark:text-white">Image URL:</p>
          <input
            className="border-2 border-gray-400 dark:border-gray-600 p-2 flex-1 rounded bg-white dark:bg-gray-800 text-black"
            defaultValue={member.img}
            onChange={(e) =>
              setNewItem(prev => ({ ...prev, [member._id]: { ...prev[member._id], img: e.target.value } }))
            }
          />
        </div>

        {/* Alt Text */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <p className="w-full sm:w-32 font-semibold text-gray-800 dark:text-white">Alt Text:</p>
          <input
            className="border-2 border-gray-400 dark:border-gray-600 p-2 flex-1 rounded bg-white dark:bg-gray-800 text-black"
            defaultValue={member.alt}
            onChange={(e) =>
              setNewItem(prev => ({ ...prev, [member._id]: { ...prev[member._id], alt: e.target.value } }))
            }
          />
        </div>

        {/* Designation */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <p className="w-full sm:w-32 font-semibold text-gray-800 dark:text-white">Designation:</p>
          <input
            className="border-2 border-gray-400 dark:border-gray-600 p-2 flex-1 rounded bg-white dark:bg-gray-800 text-black"
            defaultValue={member.designation}
            onChange={(e) =>
              setNewItem(prev => ({ ...prev, [member._id]: { ...prev[member._id], designation: e.target.value } }))
            }
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-3">
          <button
            onClick={() =>
              handleUpdate({
                id: member._id,
                originalData: member,
                section: "team",
              })
            }
            className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white px-5 py-1.5 rounded w-full sm:w-auto"
          >
            Update
          </button>
          <button
            onClick={() => handleDelete(member._id)}
            className="bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white px-5 py-1.5 rounded w-full sm:w-auto"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
))}


{/* All Banner Section */}
{section === "allbanner" &&
  data.map((banner) => (
    <div
      key={banner._id}
      className="border-2 border-green-700 shadow-xl p-4 mb-4 rounded-md flex flex-col md:flex-row gap-5 dark:border-green-500 dark:shadow-gray-700"
    >
      {/* Image Preview */}
      <div className="w-full md:w-32 flex-shrink-0 flex justify-center items-center">
        <img
          src={banner.backgroundImage || banner.image}
          alt={banner.altText}
          className="w-full md:w-32 h-32 object-cover rounded-md border dark:border-gray-600"
        />
      </div>

      {/* Form Fields */}
      <div className="flex-1 flex flex-col gap-3">
        {/* Page Path */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <p className="w-full sm:w-32 font-semibold text-gray-800 dark:text-white">Page Path:</p>
          <input
            className="border-2 border-gray-400 dark:border-gray-600 p-2 flex-1 rounded bg-white  text-black "
            defaultValue={banner.pagePath}
            onChange={(e) =>
              setNewItem(prev => ({
                ...prev,
                [banner._id]: { ...prev[banner._id], pagePath: e.target.value }
              }))
            }
          />
        </div>

        {/* Title */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <p className="w-full sm:w-32 font-semibold text-gray-800 dark:text-white">Title:</p>
          <input
            className="border-2 border-gray-400 dark:border-gray-600 p-2 flex-1 rounded bg-white text-black"
            defaultValue={banner.title}
            onChange={(e) =>
              setNewItem(prev => ({
                ...prev,
                [banner._id]: { ...prev[banner._id], title: e.target.value }
              }))
            }
          />
        </div>

        {/* Image URL */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <p className="w-full sm:w-32 font-semibold text-gray-800 dark:text-white">Image URL:</p>
          <input
            className="border-2 border-gray-400 dark:border-gray-600 p-2 flex-1 rounded bg-white  text-black"
            defaultValue={banner.backgroundImage || banner.image}
            onChange={(e) =>
              setNewItem(prev => ({
                ...prev,
                [banner._id]: { ...prev[banner._id], backgroundImage: e.target.value }
              }))
            }
          />
        </div>

        {/* Alt Text */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <p className="w-full sm:w-32 font-semibold text-gray-800 dark:text-white">Alt Text:</p>
          <input
            className="border-2 border-gray-400 dark:border-gray-600 p-2 flex-1 rounded bg-white  text-black"
            defaultValue={banner.altText}
            onChange={(e) =>
              setNewItem(prev => ({
                ...prev,
                [banner._id]: { ...prev[banner._id], altText: e.target.value }
              }))
            }
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-3">
          <button
            onClick={() =>
              handleUpdate({
                id: banner._id,
                originalData: banner,
                section: "allbanner",
              })
            }
            className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white px-5 py-1.5 rounded w-full sm:w-auto"
          >
            Update
          </button>
          <button
            onClick={() => handleDelete(banner._id)}
            className="bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white px-5 py-1.5 rounded w-full sm:w-auto"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
))}


      {/* //galleries */}
      {section === "galleries" &&
        data?.map(gallery => (
          <div
            key={gallery._id}
            className="bg-white border border-gray-200 rounded-xl shadow-lg p-5 mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800">{gallery.title}</h2>
                <p className="text-sm text-gray-500 font-bold">
                  Category: <span className="font-bold text-black">{gallery.category}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Total Images: <span className="font-medium">{gallery.images?.length || 0}</span>
                </p>
              </div>

              <div className="flex gap-2 w-full md:w-1/2">
                <input
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Paste image URL"
                  value={galleryInputs[gallery.category] || ""}
                  onChange={(e) =>
                    setGalleryInputs({
                      ...galleryInputs,
                      [gallery.category]: e.target.value,
                    })
                  }
                />

                <button
                  onClick={() => {
                    const url = galleryInputs[gallery.category];
                    if (!url || !url.trim()) return;

                    addGalleryImage(gallery.category, url);

                    setGalleryInputs({
                      ...galleryInputs,
                      [gallery.category]: "",
                    });
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 rounded-lg"
                >
                  Add Image
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {gallery?.images?.map((img, index) => (
                <div
                  key={index}
                  className="relative group rounded-lg overflow-hidden border shadow-sm"
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                    <button
                      onClick={() => removeGalleryImage(gallery.category, img)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

    </div>
  );
};

export default Admin;
