import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import logo from './assets/drug.png';
import DrugList from './DrugList';

function App() {
  const [drugs, setDrugs] = useState([]);
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setDrugs(result.data);
    }
    if (url != null) {
      fetchData();
    }
  }, [url]);

  const search = (e) => {
    if (e.key === 'Enter') {
      // for tekton-openshift pipeline 
      setUrl(`http://DPD_SERVER_ROUTE_NAME/api/drugs/brand_name/${query}`)
      // setUrl(`http://192.168.206.130:8080/api/drugs/brand_name/${query}`)
    }
  }

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <Fragment>
      <div className="flex items-center flex-wrap bg-teal-500 p-3">
        <div className="flex items-center text-white">
          <img className="p-3 h-24 w-24 flex-none bg-cover" src={logo} alt="Drug Information" />
          <span className="p-3 font-semibold text-3xl tracking-tight">Search Marketed Drugs by Brand Name</span>
        </div>
        <div className="pt-3 lg:pt-0 w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="mr-3 flex-grow">
            <div className="relative">
              <input type="text" className="rounded-lg w-full pl-12 py-2 px-3 text-2xl text-gray-800 " id="text"
                name="text" placeholder="cold or fever" value={query} onChange={handleQueryChange} onKeyUp={search} />
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
                <svg className="fill-current pointer-events-none text-gray-600 w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path
                    d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DrugList drugs={drugs}></DrugList>
      
    </Fragment>
  );
}

export default App;
