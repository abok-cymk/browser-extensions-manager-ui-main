import React, { useState } from 'react';
import data from '../../data.json'
import Extenstions from './Extenstions';
import Tab from './Tab';

const ExtensionsLayout = () => {
    const [tab, setTab] = useState("All");
    const [extensions, setExtensions] = useState(data); // Manage extensions as state
    
    const handleFilterExtenstions = () => {
        if (tab === "All") {
            return data;
        }
        return data.filter(extension => 
            tab === "Active" ? extension.isActive : !extension.isActive
        );
    };
    const handleRemoveExtension = (name) => {
        setExtensions(extensions.filter(extension => extension.name !== name))
    }
    const filteredExtensions = handleFilterExtenstions();
  return (
    <div>
      <div className="flex-cols text-center md:flex items-center md:justify-between mb-5">
        <h1 className='text-2xl font-700 text-center md:text-left mb-2 md:mb-0'>Extensions List</h1>
        <div className="flex items-center justify-center gap-2">
          <Tab tabTitle="All" onClick={() => setTab("All")} isTabActive={tab === "All"}/>
          <Tab tabTitle="Active" onClick={() => setTab("Active")} isTabActive={tab === "Active"}/>
          <Tab tabTitle="Inactive" onClick={() => setTab("Inactive")} isTabActive={tab === "Inactive"}/>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {filteredExtensions.map((extension, extension_idx) => (
          <Extenstions
            key={extension_idx}
            logo={extension.logo}
            name={extension.name}
            description={extension.description}
            isActive={extension.isActive}
            handleRemove={handleRemoveExtension}
          />
        ))}
      </div>
    </div>
  );
}

export default ExtensionsLayout;
