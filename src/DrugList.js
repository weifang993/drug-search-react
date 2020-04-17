import React, { Fragment } from 'react';

function DrugList({drugs, selectDrug}) {
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
                                    <tr key={drug.din} >
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
        </Fragment>
    )
}

export default DrugList;