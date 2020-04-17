import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import logo from './assets/drug.png';
import DrugList from './DrugList';
import DrugDetails from './DrugDetails';

function App() {
  const [drugs, setDrugs] = useState([]);
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState(null);
  const [selectedDrug, setSelectedDrug] = useState({});
  const [detailVisibility, setDetailVisibility] = useState('invisible');


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
      setUrl(`http://192.168.206.130:8080/api/drugs/brand_name/${query}`)
    }
  }

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  }

  const hideDrugDetais = (e) => {
    console.log('hide drug details');
    setDetailVisibility('invisible');
  }

  const showDrugDetais = (drug) => {
    setSelectedDrug(drug);
    setDetailVisibility('visible');
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

      <DrugList drugs={drugs} selectDrug={showDrugDetais}></DrugList>

      <div className={detailVisibility}>
        <div className="fixed custom-transparent inset-0 z-50 overflow-auto bg-gray-100 flex">
          <div className="relative bg-gray-100 w-full max-w-md lg:max-w-3xl m-auto flex-col flex">
            <span className="absolute top-0 right-0 pr-3 pt-3" onClick={hideDrugDetais}>
              <svg className="h-12 w-12 fill-current text-grey hover:text-grey-darkest" role="button"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
            <DrugDetails drug={selectedDrug}></DrugDetails>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
