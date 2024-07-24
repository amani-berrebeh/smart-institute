import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export interface FileDetail {
  name_ar: string;
  name_fr: string;
  file?: File | null;
  base64String?: string;
  extension?: string;
}
export interface Etudiant {
  _id: string;
  nom_fr: string;
  nom_ar: string;
  prenom_fr: string;
  prenom_ar: string;
  lieu_naissance_fr: string;
  lieu_naissance_ar: string;
  date_naissance: string;
  nationalite: string;
  etat_civil: string;
  sexe: string;
  num_CIN: string;
  face_1_CIN: string;
  face_2_CIN: string;
  fiche_paiement: string;
  etat_compte: {
    _id: string;
    value_etat_etudiant: string;
    etat_ar: string;
    etat_fr: string;
  };
  groupe_classe:{
    _id: string;
    nom_classe_fr: string,
    nom_classe_ar: string,
    departement: string ,
    niveau_classe: string,
    section_classe: string ,
    matieres: [string]
  },
  state: string;
  dependence: string;
  code_postale: string;
  adress_ar: string;
  adress_fr: string;
  num_phone: string;
  email: string;
  nom_pere: string;
  job_pere: string;
  nom_mere: string;
  num_phone_tuteur: string;
  moyen: string;
  session: string;
  filiere: string;
  niveau_scolaire: string;
  annee_scolaire: string;
  type_inscription: {
    _id: string;
    value_type_inscription: string;
    type_ar: string;
    type_fr: string;
    files_type_inscription:string[]
  };
  Face1CINFileBase64String: string;
  Face1CINFileExtension: string;
  Face2CINFileBase64String: string;
  Face2CINFileExtension: string;
  FichePaiementFileBase64String: string;
  FichePaiementFileExtension: string;
  files: string[];
  photo_profil: string;
  PhotoProfilFileExtension: string;
  PhotoProfilFileBase64String: string;
}
export const etudiantSlice = createApi({
  reducerPath: "Etudiant",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/etudiant/",
  }),
  tagTypes: ["Etudiant"],
  endpoints(builder) {
    return {
      fetchEtudiants: builder.query<Etudiant[], number | void>({
        query() {
          return `get-all-etudiant`;
        },
        providesTags: ["Etudiant"],
      }),

      addEtudiant: builder.mutation<void, Etudiant>({
        query(payload) {
          return {
            url: "/create-etudiant",
            method: "POST",
            body: payload,
          };
        },
        invalidatesTags: ["Etudiant"],
      }),
      //   updateEtatEtudiant: builder.mutation<void, EtatEtudiant>({
      //     query: ({ _id, ...rest }) => ({
      //       url: `/update-etat-etudiant/${_id}`,
      //       method: "PUT",
      //       body: rest,
      //     }),
      //     invalidatesTags: ["EtatEtudiant"],
      //   }),
      //   deleteEtatEtudiant: builder.mutation<void, string>({
      //     query: (_id) => ({
      //       url: `delete-etat-etudiant/${_id}`,
      //       method: "DELETE",
      //     }),
      //     invalidatesTags: ["EtatEtudiant"],
      //   }),
    };
  },
});

export const { useAddEtudiantMutation, useFetchEtudiantsQuery } = etudiantSlice;