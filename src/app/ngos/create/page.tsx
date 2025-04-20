 const CreateNGO = () => {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Register New NGO</h1>
  
  
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">NGO Name</label>
              <input
                type="text"
                placeholder="e.g. Clean Water Initiative"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
  
  
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                placeholder="City, Country"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
  
  
            <div>
              <label className="block text-sm font-medium text-gray-700">Mission Statement</label>
              <textarea
                rows={4}
                placeholder="What is your organization’s mission?"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
  
  
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Submit NGO
            </button>
          </form>
        </div>
      </div>
    );
  }

  export default CreateNGO
  