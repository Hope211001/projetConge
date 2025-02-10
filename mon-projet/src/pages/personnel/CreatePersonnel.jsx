import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { personnelSchema } from "../../validation/Personnel"; // 🔹 Import du schéma de validation
import { Create } from "../../service/Personnel"; // 🔹 Fonction API pour envoyer les données

function CreatePersonnel() {
    //  Configuration du formulaire avec react-hook-form et Yup
    const methods = useForm({
        resolver: yupResolver(personnelSchema), // 🔹 Applique le schéma de validation
    });

    //  Extraction des fonctions utiles de react-hook-form
    const { register, handleSubmit, formState: { errors } } = methods;

    //  Fonction exécutée lors de la soumission du formulaire
    async function onSubmit(data) {
        try {
            const res = await Create(data); // Envoi des données à l'API
            console.log(res);
            
        } catch (error) {
            console.error("Erreur lors de la soumission :", error);
        }
    }

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Formulaire Personnel</h2>

            {/*  Fournir le contexte du formulaire à tous les champs */}
            <FormProvider {...methods}>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

                    {/*  Champ : Prénom */}
                    <div>
                        <label className="block text-gray-700">Prénom</label>
                        <input {...register("firstName")}
                            className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500" />
                        <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
                    </div>

                    {/* Champ : Nom */}
                    <div>
                        <label className="block text-gray-700">Nom</label>
                        <input {...register("lastName")}
                            className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500" />
                        <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
                    </div>

                    {/*  Champ : Sexe */}
                    <div>
                        <label className="block text-gray-700">Sexe</label>
                        <select {...register("sexe")}
                            className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500">
                            <option value="">Sélectionner</option>
                            <option value="Homme">Homme</option>
                            <option value="Femme">Femme</option>
                        </select>
                        <p className="text-red-500 text-sm">{errors.sexe?.message}</p>
                    </div>

                    {/*  Champ : Adresse */}
                    <div>
                        <label className="block text-gray-700">Adresse</label>
                        <input {...register("adresse")}
                            className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500" />
                        <p className="text-red-500 text-sm">{errors.adresse?.message}</p>
                    </div>

                    {/*  Champ : CIN */}
                    <div>
                        <label className="block text-gray-700">CIN</label>
                        <input {...register("cin")}
                            className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500" />
                        <p className="text-red-500 text-sm">{errors.cin?.message}</p>
                    </div>

                    {/*  Champ : Matricule */}
                    <div>
                        <label className="block text-gray-700">Matricule</label>
                        <input {...register("matricule")}
                            className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500" />
                        <p className="text-red-500 text-sm">{errors.matricule?.message}</p>
                    </div>

                    {/*  Champ : Téléphone */}
                    <div>
                        <label className="block text-gray-700">Téléphone</label>
                        <input {...register("tel")}
                            className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500" />
                        <p className="text-red-500 text-sm">{errors.tel?.message}</p>
                    </div>

                    {/*  Champ : Date de naissance */}
                    <div>
                        <label className="block text-gray-700">Date de Naissance</label>
                        <input type="date" {...register("dateN")}
                            className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500" />
                        <p className="text-red-500 text-sm">{errors.dateN?.message}</p>
                    </div>

                    {/*  Bouton de soumission */}
                    <button type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                        Soumettre
                    </button>
                </form>
            </FormProvider>
        </div>
    );
}

export default CreatePersonnel;
