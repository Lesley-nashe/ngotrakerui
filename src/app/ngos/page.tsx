const ngos = [
    { name: "Green Africa", location: "Kenya", mission: "Promoting sustainable agriculture." },
    { name: "Future Girls", location: "Zimbabwe", mission: "Empowering young women through education." },
  ];
  
  
  const NGOListPage = () => {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Registered NGOs</h1>
  
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ngos.map((ngo, i) => (
            <div key={i} className="bg-white shadow-md rounded-2xl p-5 border border-gray-100">
              <h2 className="text-xl font-semibold text-indigo-600">{ngo.name}</h2>
              <p className="text-gray-500 text-sm">{ngo.location}</p>
              <p className="mt-2 text-gray-700 text-sm">{ngo.mission}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default NGOListPage
  