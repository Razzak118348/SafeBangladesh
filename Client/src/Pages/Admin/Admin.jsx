import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Admin = () => {
  const [section, setSection] = useState("blogs");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newItem, setNewItem] = useState({});

  const baseURL = "http://localhost:5000";

  // ================= FETCH (READ) =================
  useEffect(() => {
    fetchData();
  }, [section]);

  const fetchData = async () => {
  setLoading(true);
  try {
    let res;
    if (section === "blogs") res = await axios.get(`${baseURL}/blogs`);
    if (section === "latestwork") res = await axios.get(`${baseURL}/latestwork`);
    if (section === "team") res = await axios.get(`${baseURL}/team`);
    if (section === "galleries") res = await axios.get("http://localhost:5000/galleries");
    if (section === "allbanner") res = await axios.get(`${baseURL}/allbanner`);

    // Ensure data is always an array
    if (section === "blogs") setData(res.data.blogs || []);
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

console.log(data)
  // ================= CREATE (POST) =================
 const handleCreate = async () => {
  try {
    let url = "";
    if (section === "blogs") url = "/blogs";
    if (section === "latestwork") url = "/latestwork";
    if (section === "team") url = "/team";
    if (section === "galleries") url = "/galleries";
    if (section === "allbanner") url = "/allbanner";

    // POST request
    await axios.post(baseURL + url, newItem);

    // Reset the form
    setNewItem({});

    // Refetch data
    fetchData();

    // Success alert
    Swal.fire({
      icon: "success",
      title: "Created Successfully!",
      text: `New ${section} item has been added.`,
      timer: 2000,
      showConfirmButton: false,
    });
  } catch (error) {
    console.error(error);
    // Error alert
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Failed to create ${section} item!`,
    });
  }
};

// ================= UPDATE (PUT) =================
const handleUpdate = async (id, updatedData, category = null) => {
  try {
    let url = "";
    if (section === "blogs") url = `/blogs/${id}`;
    if (section === "latestwork") url = `/latestwork/${id}`;
    if (section === "team") url = `/team/${id}`;
    if (section === "galleries") url = `/galleries/${category}`;
    if (section === "allbanner") url = `/allbanner/${id}`; // id = pagePath

    await axios.put(baseURL + url, updatedData);
    fetchData();

    Swal.fire({
      icon: "success",
      title: "Updated Successfully!",
      text: `The ${section} item has been updated.`,
      timer: 2000,
      showConfirmButton: false,
    });
  } catch (error) {
    console.error(error);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Failed to update ${section} item!`,
    });
  }
};

// ================= DELETE =================
const handleDelete = async (id, category = null) => {
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
    if (section === "blogs") url = `/blogs/${id}`;
    if (section === "latestwork") url = `/latestwork/${id}`;
    if (section === "team") url = `/team/${id}`;
    if (section === "galleries") url = `/galleries/${category}`;
    if (section === "allbanner") url = `/allbanner/${id}`; // id = pagePath

    await axios.delete(baseURL + url);
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

  const gallery = data.find(g => g.category === category);
  const updatedImages = gallery.images.filter(i => i !== img);
  await handleUpdate(null, { images: updatedImages }, category);

  Swal.fire({
    icon: "success",
    title: "Image Removed!",
    timer: 2000,
    showConfirmButton: false,
  });
};

// ================= GALLERY IMAGE ADD =================
const addGalleryImage = async (category, imageUrl) => {
  const gallery = data.find(g => g.category === category);
  const updatedImages = [...gallery.images, imageUrl];
  await handleUpdate(null, { images: updatedImages }, category);

  Swal.fire({
    icon: "success",
    title: "Image Added!",
    timer: 2000,
    showConfirmButton: false,
  });
};


return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* SECTION SELECT */}
      <select
        className="border-2 border-black p-2 mb-6"
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

      {loading && <p>Loading...</p>}

      {/* add blog  */}
 {section === "blogs" && (
  <div className="border-2 border-black p-4 mb-6">
    <h2 className="font-bold mb-2">Add Blog</h2>

    <input
      className="border-2 border-black p-1 w-full mb-2"
      placeholder="Title"
      onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
    />

    <input
      className="border-2 border-black p-1 w-full mb-2"
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
      className="border-2 border-black p-1 w-full mb-2"
      placeholder="Description"
      onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
    />

    <textarea
      className="border-2 border-black p-1 w-full mb-2"
      placeholder="Content"
      onChange={(e) => setNewItem({ ...newItem, content: e.target.value })}
    />

    <button
      onClick={handleCreate}
      className="bg-green-600 text-white px-4 py-1"
    >
      Create Blog
    </button>
  </div>
)}

{/* add latest work */}
      {section === "latestwork" && (
        <div className="border-2 border-black p-4 mb-6">
          <h2 className="font-bold mb-2">Add Latest Work</h2>
          <input className="border-2 border-black p-1 w-full mb-2" placeholder="Title"
            onChange={(e) => setNewItem({ ...newItem, title: e.target.value })} />
          <input className="border-2 border-black p-1 w-full mb-2" placeholder="Image URL"
            onChange={(e) => setNewItem({ ...newItem, image: e.target.value })} />
          <textarea className="border-2 border-black p-1 w-full mb-2" placeholder="Description"
            onChange={(e) => setNewItem({ ...newItem, description: e.target.value })} />
          <button onClick={handleCreate} className="bg-green-600 text-white px-4 py-1">
            Create Work
          </button>
        </div>
      )}

{/* add team member */}
      {section === "team" && (
        <div className="border-2 border-black p-4 mb-6">
          <h2 className="font-bold mb-2">Add Team Member</h2>
          <input className="border-2 border-black p-1 w-full mb-2" placeholder="Image URL"
            onChange={(e) => setNewItem({ ...newItem, img: e.target.value })} />
          <input className="border-2 border-black p-1 w-full mb-2" placeholder="Alt Text"
            onChange={(e) => setNewItem({ ...newItem, alt: e.target.value })} />
          <input className="border-2 border-black p-1 w-full mb-2" placeholder="Designation"
            onChange={(e) => setNewItem({ ...newItem, designation: e.target.value })} />
          <button onClick={handleCreate} className="bg-green-600 text-white px-4 py-1">
            Add Member
          </button>
        </div>
      )}

{/* add all banner  */}
      {section === "allbanner" && (
        <div className="border-2 border-black p-4 mb-6">
          <h2 className="font-bold mb-2">Add Banner</h2>
          <input className="border-2 border-black p-1 w-full mb-2" placeholder="Page Path"
            onChange={(e) => setNewItem({ ...newItem, pagePath: e.target.value })} />
          <input className="border-2 border-black p-1 w-full mb-2" placeholder="Banner Image URL"
            onChange={(e) => setNewItem({ ...newItem, image: e.target.value })} />
          <input className="border-2 border-black p-1 w-full mb-2" placeholder="Title"
            onChange={(e) => setNewItem({ ...newItem, title: e.target.value })} />
          <button onClick={handleCreate} className="bg-green-600 text-white px-4 py-1">
            Create Banner
          </button>
        </div>
      )}

      {/* ================= READ / UPDATE / DELETE ================= */}
{(section === "blogs" || section === "latestwork") &&
  data.map(item => (
    <div key={item._id} className="border-2 border-black p-4 mb-4 rounded-md shadow-sm">

      {/* Title */}
      <div className="flex items-center mb-2">
        <p className="w-28 font-semibold">Title:</p>
        <input
          className="border-2 border-black p-1 flex-1"
          defaultValue={item.title}
          onChange={(e) => setNewItem({ ...item, title: e.target.value })}
          placeholder="Title"
        />
      </div>

      {/* Image URL */}
      <div className="flex items-center mb-2">
        <p className="w-28 font-semibold">Image URL:</p>
        <input
          className="border-2 border-black p-1 flex-1"
          defaultValue={item.image || item.img}
          onChange={(e) => setNewItem({ ...item, image: e.target.value })}
          placeholder="Image URL"
        />
      </div>

      {/* Show image preview */}
      {item.image || item.img ? (
        <img
          src={item.image || item.img}
          alt={item.title}
          className="w-full h-48 object-cover mb-2 rounded-md"
        />
      ) : null}

      {/* Description */}
      <div className="flex items-start mb-2">
        <p className="w-28 font-semibold pt-1">Description:</p>
        <textarea
          className="border-2 border-black p-1 flex-1"
          defaultValue={item.description}
          onChange={(e) => setNewItem({ ...item, description: e.target.value })}
          placeholder="Description"
        />
      </div>

      {/* Content (only for blogs) */}
      {section === "blogs" && (
        <div className="flex items-start mb-2">
          <p className="w-28 font-semibold pt-1">Content:</p>
          <textarea
            className="border-2 border-black p-1 flex-1"
            defaultValue={item.content}
            onChange={(e) => setNewItem({ ...item, content: e.target.value })}
            placeholder="Content"
          />
        </div>
      )}

      {/* Action buttons */}
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => handleUpdate(item._id, { ...item })}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Update
        </button>
        <button
          onClick={() => handleDelete(item._id)}
          className="bg-red-500 text-white px-4 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
))}

     {section === "team" &&
  data.map(member => (
    <div
      key={member._id}
      className="border-2 border-black p-4 mb-4 rounded-md shadow-sm flex gap-4"
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

        {/* Image URL */}
        <div className="flex items-center mb-2">
          <p className="w-32 font-semibold">Image URL:</p>
          <input
            className="border-2 border-black p-1 flex-1"
            defaultValue={member.img}
            onChange={(e) =>
              setNewItem({ ...member, img: e.target.value })
            }
          />
        </div>

        {/* Alt Text / Name */}
        <div className="flex items-center mb-2">
          <p className="w-32 font-semibold">Alt Text:</p>
          <input
            className="border-2 border-black p-1 flex-1"
            defaultValue={member.alt}
            onChange={(e) =>
              setNewItem({ ...member, alt: e.target.value })
            }
          />
        </div>

        {/* Designation */}
        <div className="flex items-center mb-3">
          <p className="w-32 font-semibold">Designation:</p>
          <input
            className="border-2 border-black p-1 flex-1"
            defaultValue={member.designation}
            onChange={(e) =>
              setNewItem({ ...member, designation: e.target.value })
            }
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => handleUpdate(member._id, newItem._id ? newItem : member)}
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            Update
          </button>

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


      {section === "galleries" &&
        data?.map(gallery => (
          <div key={gallery._id} className="border-2 border-black p-4 mb-6">
            <h2 className="font-bold">{gallery.title}</h2>

            <input className="border-2 border-black p-1 w-full my-2"
              placeholder="New Image URL (Press Enter)"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addGalleryImage(gallery.category, e.target.value);
                  e.target.value = "";
                }
              }} />

            <div className="grid grid-cols-3 gap-3">
              {gallery?.images?.map(img => (
                <div key={img} className="relative">
                  <img src={img} className="w-full h-32 object-cover" />
                  <button
                    onClick={() => removeGalleryImage(gallery.category, img)}
                    className="absolute top-1 right-1 bg-red-600 text-white px-2">
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

      {section === "allbanner" &&
        data.map(banner => (
          <div key={banner._id} className="border-2 border-black p-4 mb-4">
            <p className="font-bold mb-2">Page: {banner.pagePath}</p>

            <input className="border-2 border-black p-1 w-full mb-2" defaultValue={banner.title}
              onChange={(e) => setNewItem({ ...banner, title: e.target.value })} />
            <input className="border-2 border-black p-1 w-full mb-2" defaultValue={banner.image}
              onChange={(e) => setNewItem({ ...banner, image: e.target.value })} />

            <button onClick={() => handleUpdate(banner.pagePath, { ...banner })}
              className="bg-blue-500 text-white px-3 py-1 mr-2">
              Update
            </button>
            <button onClick={() => handleDelete(banner.pagePath)}
              className="bg-red-500 text-white px-3 py-1">
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default Admin;
