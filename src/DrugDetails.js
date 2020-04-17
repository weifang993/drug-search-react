import React, { Fragment } from 'react';
import logo from './assets/drug.png';

function DrugDetails({ drug }) {    

    return (
        <Fragment>
            <div className="w-full rounded shadow-lg">
                <img className="p-3 h-24 w-24 flex-none bg-cover" src={logo} alt="Drug Information"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{drug.brandName}</div>
                    <table className="table-auto w-full text-xl">
                        <tbody>
                            <tr>
                                <td className="px-4 py-2">Current Status</td>
                                <td className="px-4 py-2">{drug.statuses && drug.statuses[0].status}</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Status Date</td>
                                <td className="px-4 py-2">{drug.statuses && drug.statuses[0].historyDate}</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">DIN</td>
                                <td className="px-4 py-2">{drug.din}</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Class</td>
                                <td className="px-4 py-2">{drug.className}</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Product Name</td>
                                <td className="px-4 py-2">{drug.brandName}</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Company Name</td>
                                <td className="px-4 py-2">{drug.manufacturer && drug.manufacturer.companyName}</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Dosage Form</td>
                                <td className="px-4 py-2">{drug.forms && drug.forms[0].pharmaceuticalForm}</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Schedule</td>
                                <td className="px-4 py-2">{drug.schedules && drug.schedules[0]}</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Route of Administration</td>
                                <td className="px-4 py-2">{drug.routes && drug.routes[0] ? drug.routes[0].name : ""}</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">American Hospital Formulary Service (AHFS)</td>
                                <td className="px-4 py-2">{drug.therapeuticClasses && drug.therapeuticClasses[0] ? drug.therapeuticClasses[0].ahfs : ""}
                                    {drug.therapeuticClasses && drug.therapeuticClasses[0] ? drug.therapeuticClasses[0].ahfsNumber : ""}</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Anatomical Therapeutical Chemical (ATC)</td>
                                <td className="px-4 py-2">{drug.therapeuticClasses && drug.therapeuticClasses[0] ? drug.therapeuticClasses[0].atc : ""}
                                    {drug.therapeuticClasses && drug.therapeuticClasses[0] ? drug.therapeuticClasses[0].atcNumber : ""}</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Active Ingredient Group Number (AIG)</td>
                                <td className="px-4 py-2">{drug.activeIngredientGroupNo}</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Number of Active Ingredients</td>
                                <td className="px-4 py-2">{drug.numbOfIngredients}</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="table-auto w-full text-xl">
                        <thead>
                            <tr className="text-left">
                                <th>Active Ingredient</th>
                                <th>Strength</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                drug.activeIngredients && drug.activeIngredients.map(ingredient => {
                                    return (
                                        <tr key={ingredient.din} >
                                            <td>{ingredient.name}</td>
                                            <td>{ingredient.strength}{ingredient.strengthUnit}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment >
    )
}

export default DrugDetails;