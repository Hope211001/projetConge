import React from "react";

function Car({ couleur, marque, plaque, image }) {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
                    <img
                        src={image}
                        className="w-full h-48 object-cover"
                        alt={`Image of the car ${marque}`}
                    />
                    <div className="p-4">
                        <h5 className="text-lg font-bold text-gray-800">Marque: {marque}</h5>
                        <p className="text-gray-600">Couleur: {couleur}</p>
                        <p className="text-gray-600">Plaque: {plaque}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Car;
