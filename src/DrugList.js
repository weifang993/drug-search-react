import React, { useState, useEffect, Fragment } from 'react';
import DrugDetails from './DrugDetails';

function DrugList({ drugs, selectDrug }) {
    const [selectedDrug, setSelectedDrug] = useState({});
    const [detailVisibility, setDetailVisibility] = useState('invisible');

    const hideDrugDetais = (e) => {
        setDetailVisibility('invisible');
    }

    const showDrugDetais = (drug) => {
        setSelectedDrug(drug);
        setDetailVisibility('visible');
    }

    return (
        <Fragment>
            <div className="bg-gray-100 overflow-hidden p-4 ">
                <table className="table-auto w-full text-xl">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">DIN</th>
                            <th className="px-4 py-2">Brand Name</th>
                            <th className="px-4 py-2">Manufacturer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            drugs.map(drug => {
                                return (
                                    <tr key={drug.din} onClick={() => { showDrugDetais(drug)}}>
                                        <td className="border px-4 py-2 text-blue-500 font-bold"><a href="#{drug.din}">{drug.din}</a></td>
                                        <td className="border px-4 py-2" >{drug.brandName}</td>
                                        <td className="border px-4 py-2">{drug.manufacturer.companyName}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

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
    )
}

export default DrugList;