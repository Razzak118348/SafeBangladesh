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

  ///Create
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

// ================= UPDATE blog (PATCH) =================
// const handleUpdate = async (id, originalData) => {
//   try {
//     const editedData = newItem[id];

//     console.log("Edited:", editedData, "Original:", originalData);

//     if (!editedData || Object.keys(editedData).length === 0) {
//       return Swal.fire("Nothing to update");
//     }

//     //  only send actually changed fields
//     const changes = {};

//     for (let key in editedData) {
//       if (editedData[key] !== originalData[key]) {
//         changes[key] = editedData[key];
//       }
//     }

//     console.log("Final PATCH Changes:", changes);

//     if (Object.keys(changes).length === 0) {
//       return Swal.fire("No real changes detected");
//     }

//     const endpoint = section; // blogs, latestwork etc
//     const finalURL = `${baseURL}/${endpoint}/${id}`;

//     const res = await axios.patch(finalURL, changes, { withCredentials: true });

//     if (res.data.modifiedCount > 0 || res.data.matchedCount > 0) {
//       setNewItem(prev => {
//         const newState = { ...prev };
//         delete newState[id];
//         return newState;
//       });

//       fetchData();

//       Swal.fire({
//         icon: "success",
//         title: "Updated Successfully!",
//         timer: 2000,
//         showConfirmButton: false,
//       });
//     } else {
//       throw new Error("Database not modified");
//     }

//   } catch (error) {
//     console.error("Patch error:", error.response?.data || error.message);
//     Swal.fire({
//       icon: "error",
//       title: "Update Failed",
//       text: error.response?.data?.message || "Check console",
//     });
//   }
// };

// const handleBlogUpdate = async (id, originalData) => {
//   const updatedData = {
//     ...originalData,
//     ...newItem[id],
//   };

//   try {
//     let endpoint = section;
//     const res = await fetch(`${baseURL}/${endpoint}/${id}`, {
//       method: "PATCH",
//       credentials: "include", //  MUST for JWT cookie
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedData),
//     });

//     const result = await res.json();

//     if (res.ok) {
//       alert("Blog updated successfully");

//       setNewItem(prev => {
//         const copy = { ...prev };
//         delete copy[id];
//         return copy;
//       });
//       Swal.fire({
//         icon: "success",
//         title: "Updated Successfully!",
//         timer: 2000,
//         showConfirmButton: false,
//       });
//     } else {
//       alert(result.message || "Update failed");
//     }
//   } catch (error) {
//     console.error("Update error:", error);
//     console.error("Patch error:", error.response?.data || error.message);
//     Swal.fire({
//       icon: "error",
//       title: "Update Failed",
//       text: error.response?.data?.message || "Check console",
//     });
//   }
// };
const handleUpdate = async ({ id, originalData, section }) => {
  try {
    const editedData = newItem[id];

    if (!editedData || Object.keys(editedData).length === 0) {
      return Swal.fire("Nothing to update");
    }

    // ✅ only changed fields
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
  //new
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
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* SECTION SELECT */}
      <select
        className="border-2 border-gray-400 p-2 mb-6"
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
          <h2 className="font-bold mb-2">Add Blog</h2>

          <input
            className="border-2 border-gray-400 p-1 w-full mb-2"
            placeholder="Title"
            onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
          />

          <input
            className="border-2 border-gray-400 p-1 w-full mb-2"
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
            className="border-2 border-gray-400 p-1 w-full mb-2"
            placeholder="Description"
            onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
          />

          <textarea
            className="border-2 border-gray-400 p-1 w-full mb-2"
            placeholder="Content"
            onChange={(e) => setNewItem({ ...newItem, content: e.target.value })}
          />

          <button
            onClick={handleCreate}
            className="bg-green-600 button rounded-md text-white px-4 py-1"
          >
            Create Blog
          </button>
        </div>
      )}

      {/* add latest work */}
      {section === "latestwork" && (
        <div className="border-2 border-gray-400 p-4 mb-6">
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
        <div className="border-2 border-gray-400 p-4 mb-6 rounded-lg">
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
        <div className="border-2 border-gray-400 p-4 mb-6">
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
    {/* Blogs Section */}
{section === "blogs" &&
  data.map((item) => (
    <div
      key={item._id}
      className="border-2 border-green-700 shadow-xl p-4 mb-6 rounded-lg grid grid-cols-1 lg:flax gap-5"
    >
      {/* Image Preview */}
      <div className="grid lg:flex-auto">
        <img
          src={newItem[item._id]?.image || item.image || item.img}
          alt={item.title}
          className="w-full h-48 object-cover rounded-md border"
        />
      </div>

      {/* Form Area */}
      <div className="grid lg:flax-1">
        {/* Title */}
        <div className="flex items-center mb-3">
          <p className="w-28 font-semibold">Title:</p>
          <input
            className="border-2 border-gray-400 p-2 flex-1 rounded"
            defaultValue={item.title}
            onChange={(e) =>
              setNewItem(prev => ({ ...prev, [item._id]: { ...prev[item._id], title: e.target.value } }))
            }
          />
        </div>
        {/* Image URL */}
        <div className="flex items-center mb-3">
          <p className="w-28 font-semibold">Image URL:</p>
          <input
            className="border-2 border-gray-400 p-2 flex-1 rounded"
            defaultValue={item.image || item.img}
            onChange={(e) =>
              setNewItem(prev => ({ ...prev, [item._id]: { ...prev[item._id], image: e.target.value } }))
            }
          />
        </div>
        {/* Description */}
        <div className="flex items-start mb-3">
          <p className="w-28 font-semibold pt-1">Description:</p>
          <textarea
            className="border-2 border-gray-400 p-2 flex-1 rounded min-h-[80px]"
            defaultValue={item.description}
            onChange={(e) =>
              setNewItem(prev => ({ ...prev, [item._id]: { ...prev[item._id], description: e.target.value } }))
            }
          />
        </div>
        {/* Content */}
        <div className="flex items-start mb-3">
          <p className="w-28 font-semibold pt-1">Content:</p>
          <textarea
            className="border-2 border-gray-400  p-2 flex-1 rounded min-h-[120px]"
            defaultValue={item.content}
            onChange={(e) =>
              setNewItem(prev => ({ ...prev, [item._id]: { ...prev[item._id], content: e.target.value } }))
            }
          />
        </div>
        {/* Buttons */}
        <div className="flex gap-3 mt-3">
          <button
            onClick={() =>
  handleUpdate({
    id: item._id,
    originalData: item,
    section: "blogs",
  })
}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-1.5 rounded"
          >
            Update
          </button>
        <button
                  onClick={() => handleDelete(item._id, "blogs")}
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-1.5 rounded"
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
            className="border-2 border-green-700 shadow-xl p-4 mb-6 rounded-lg flex gap-5"
          >
            {/* Image Preview */}
            <div className="w-48 flex-shrink-0">
              <img
                src={item.image || item.img}
                alt={item.title}
                className="w-full h-48 object-cover rounded-md border"
              />
            </div>

            {/* Form Area */}
            <div className="flex-1">
              {/* Title */}
              <div className="flex items-center mb-3">
                <p className="w-28 font-semibold">Title:</p>
                <input
                  className="border-2 border-gray-400 p-2 flex-1 rounded"
                  defaultValue={item.title}
                  onChange={(e) =>
                    setNewItem(prev => ({ ...prev, [item._id]: { ...prev[item._id], title: e.target.value } }))
                  }
                />
              </div>
              {/* Image URL */}
              <div className="flex items-center mb-3">
                <p className="w-28 font-semibold">Image URL:</p>
                <input
                  className="border-2 border-gray-400 p-2 flex-1 rounded"
                  defaultValue={item.image || item.img}
                  onChange={(e) =>
                    setNewItem(prev => ({ ...prev, [item._id]: { ...prev[item._id], image: e.target.value } }))
                  }
                />
              </div>
              {/* Description */}
              <div className="flex items-start mb-3">
                <p className="w-28 font-semibold pt-1">Description:</p>
                <textarea
                  className="border-2 border-gray-400 p-2 flex-1 rounded min-h-[80px]"
                  defaultValue={item.description}
                  onChange={(e) =>
                    setNewItem(prev => ({ ...prev, [item._id]: { ...prev[item._id], description: e.target.value } }))
                  }
                />
              </div>
              {/* Buttons */}
              <div className="flex mt-3">
                <button
                  onClick={() => handleDelete(item._id, "latestwork")}
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-1.5 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}

      {/* //team section */}
      {section === "team" &&
        data.map(member => (
          <div
            key={member._id}
            className="border-2 border-green-700 shadow-xl  p-4 mb-4 rounded-md  flex gap-8"
          >
            {/* Image Preview */}
            <div className="w-32 flex-shrink-0">
              <img
                src={member.img}
                alt={member.alt}
                className="w-32 h-32 object-cover rounded-md border"
              />
            </div>

            {/* Form Fields */}
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <p className="w-32 font-semibold">Image URL:</p>
                <input
                  className="border-2 border-gray-400 p-1 flex-1"
                  defaultValue={member.img}
                  onChange={(e) =>
                    setNewItem(prev => ({ ...prev, [member._id]: { ...prev[member._id], img: e.target.value } }))
                  }
                />
              </div>

              <div className="flex items-center mb-2">
                <p className="w-32 font-semibold">Alt Text:</p>
                <input
                  className="border-2 border-gray-400 p-1 flex-1"
                  defaultValue={member.alt}
                  onChange={(e) =>
                    setNewItem(prev => ({ ...prev, [member._id]: { ...prev[member._id], alt: e.target.value } }))
                  }
                />
              </div>

              <div className="flex items-center mb-3">
                <p className="w-32 font-semibold">Designation:</p>
                <input
                  className="border-2 border-gray-400 p-1 flex-1"
                  defaultValue={member.designation}
                  onChange={(e) =>
                    setNewItem(prev => ({ ...prev, [member._id]: { ...prev[member._id], designation: e.target.value } }))
                  }
                />
              </div>

              <div className="flex mt-3">
                <button
                  onClick={() => handleDelete(member._id)}
                  className="bg-red-500 text-white px-4 py-1 rounded"
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


      {/* //allbanner */}
      {section === "allbanner" &&
        data.map((banner) => (
          <div
            key={banner._id}
            className="border-2 border-green-700 shadow-xl p-5 mb-6 rounded-lg flex gap-5"
          >
            {/* Image Preview */}
            <div className="w-48 flex-shrink-0">
              {banner.backgroundImage && (
                <img
                  src={banner.backgroundImage}
                  alt={banner.altText}
                  className="w-full h-48 object-cover rounded-md border"
                />
              )}
            </div>

            {/* Form Area */}
            <div className="flex-1">
              {/* Page Path */}
              <div className="flex items-center mb-3">
                <p className="w-28 font-semibold">Page Path:</p>
                <input
                  className="border-2 border-gray-400 p-2 flex-1 rounded"
                  defaultValue={banner.pagePath}
                  onChange={(e) =>
                    setNewItem({ ...banner, pagePath: e.target.value })
                  }
                />
              </div>

              {/* Title */}
              <div className="flex items-center mb-3">
                <p className="w-28 font-semibold">Title:</p>
                <input
                  className="border-2 border-gray-400 p-2 flex-1 rounded"
                  defaultValue={banner.title}
                  onChange={(e) =>
                    setNewItem({ ...banner, title: e.target.value })
                  }
                />
              </div>

              {/* Image URL */}
              <div className="flex items-center mb-3">
                <p className="w-28 font-semibold">Image URL:</p>
                <input
                  className="border-2 border-gray-400 p-2 flex-1 rounded"
                  defaultValue={banner.backgroundImage}
                  onChange={(e) =>
                    setNewItem({ ...banner, backgroundImage: e.target.value })
                  }
                />
              </div>

              {/* Alt Text */}
              <div className="flex items-center mb-3">
                <p className="w-28 font-semibold">Alt Text:</p>
                <input
                  className="border-2 border-gray-400 p-2 flex-1 rounded"
                  defaultValue={banner.altText}
                  onChange={(e) =>
                    setNewItem({ ...banner, altText: e.target.value })
                  }
                />
              </div>

              {/* Buttons */}
              <div className="flex mt-3">
                <button
                  onClick={() => handleDelete(banner._id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-1.5 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}


    </div>
  );
};

export default Admin;
