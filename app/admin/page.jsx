const AdminPage = () => {
    return (
      <div>
  
        <h1 className="text-5xl font-bold">
          Dashboard
        </h1>
  
        <p className="text-gray-400 mt-4">
          Welcome to EliteAI Admin Panel
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
  
          <div className="glass-card p-8">
            <h2 className="text-4xl font-bold">
              12
            </h2>
  
            <p className="text-gray-400 mt-3">
              Total Blogs
            </p>
          </div>
  
          <div className="glass-card p-8">
            <h2 className="text-4xl font-bold">
              8
            </h2>
  
            <p className="text-gray-400 mt-3">
              Services
            </p>
          </div>
  
          <div className="glass-card p-8">
            <h2 className="text-4xl font-bold">
              5
            </h2>
  
            <p className="text-gray-400 mt-3">
              Case Studies
            </p>
          </div>
  
          <div className="glass-card p-8">
            <h2 className="text-4xl font-bold">
              4
            </h2>
  
            <p className="text-gray-400 mt-3">
              Why Choose Items
            </p>
          </div>
  
        </div>
  
      </div>
    );
  };
  
  export default AdminPage;