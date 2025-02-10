import * as yup from "yup";
export const personnelSchema = yup.object().shape({
    firstName: yup.string().required("Le prénom est requis").min(2, "Au moins 2 caractères"),
    lastName: yup.string().required("Le nom est requis").min(2, "Au moins 2 caractères"),
    sexe: yup.string().required("Veuillez sélectionner le sexe"),
    adresse: yup.string().required("L'adresse est requise"),
    cin: yup.string()
        .required("Le CIN est requis")
        .matches(/^[A-Z0-9]{6,10}$/, "CIN invalide (6 à 10 caractères, lettres et chiffres)"),
    matricule: yup.string().required("Le matricule est requis"),
    tel: yup.string()
        .required("Le téléphone est requis")
        .matches(/^\d{8,15}$/, "Numéro invalide (8-15 chiffres)"),
    dateN: yup.date().required("La date de naissance est requise"),
});
