import React from "react";
import "../assets/css/car.css"
function Car({ couleur, marque, plaque, image }) {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <img src={image} className="card-img-top imageCar" alt={`Image de la voiture ${marque}`} />
                <div className="card-body">
                    <h5 className="card-title">Marque: {marque}</h5>
                    <p className="card-text">Couleur: {couleur}</p>
                    <p className="card-text">Plaque: {plaque}</p>
                </div>
            </div>
        </div>
    )
}
export default Car