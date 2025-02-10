import React from "react";
import Car from "./Car";
import voitures from "../data/car";
function MyCars() {
    return (
        <div>
            <h1>Ma voiture</h1>
            {voitures.map(voiture => {
                return (
                    <div key={voiture.plaque}>
                        <Car couleur={voiture.couleur} marque={voiture.marque} plaque={voiture.plaque} image={voiture.image} />
                    </div>
                )
            }
            )}
        </div>
    )
}
export default MyCars