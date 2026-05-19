const BlogsAdmin = () => {
    return (
      <div className="min-h-screen bg-[#020817] text-white p-10">
  
        <div className="flex items-center justify-between">
  
          <h1 className="text-5xl font-bold">
            Manage Blogs
          </h1>
  
          <button className="gradient-btn px-6 py-3 rounded-xl">
            Add Blog
          </button>
  
        </div>
  
        <div className="mt-16 glass-card p-8">
  
          <h2 className="text-2xl font-semibold">
            AI Future Blog
          </h2>
  
          <p className="text-gray-400 mt-4">
            AI trends and future technologies.
          </p>
  
          <div className="flex gap-4 mt-8">
  
            <button className="bg-blue-600 px-5 py-2 rounded-lg">
              Edit
            </button>
  
            <button className="bg-red-600 px-5 py-2 rounded-lg">
              Delete
            </button>
  
          </div>
  
        </div>
  
      </div>
    );
  };
  
  export default BlogsAdmin;