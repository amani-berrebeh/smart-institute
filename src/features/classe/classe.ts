import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Matiere {
  _id: string;
  code_matiere: string;
  matiere: string;
  type: string;
  semestre: string;
  volume: string;
  nbr_elimination: string;
}

export interface Classe {
  _id: string;
  nom_classe_fr: string;
  nom_classe_ar: string;
  departement: {
    _id: string;
    description: string;
    volume_horaire: string;
    nom_chef_dep: string;
    name_ar: string;
    name_fr: string;
    SignatureFileExtension: string;
    SignatureFileBase64String: string;
    signature: string;
  };
  niveau_classe: {
    _id: string;
    name_niveau_ar: string;
    name_niveau_fr: string;
    abreviation: string;
  };
  section_classe: {
    _id: string;
    name_section_fr: string;
    name_section_ar: string;
    abreviation: string;
  };
  matieres: Matiere[];
}

export interface AssignMatieresPayload {
  _id: string;
  matiereIds: string[];
}
export const classeSlice = createApi({
  reducerPath: "Classe",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/classe/`,
  }),
  tagTypes: ["Classe"],
  endpoints(builder) {
    return {
      fetchClasses: builder.query<Classe[], number | void>({
        query() {
          return `get-all-classe`;
        },
        providesTags: ["Classe"],
      }),

      addClasse: builder.mutation<void, Classe>({
        query(payload) {
          return {
            url: "/create-classe",
            method: "POST",
            body: payload,
          };
        },
        invalidatesTags: ["Classe"],
      }),
      updateClasse: builder.mutation<void, Classe>({
        query: ({ _id, ...rest }) => ({
          url: `/update-classe/${_id}`,
          method: "PUT",
          body: rest,
        }),
        invalidatesTags: ["Classe"],
      }),
      deleteClasse: builder.mutation<void, string>({
        query: (_id) => ({
          url: `delete-classe/${_id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Classe"],
      }),
      fetchClasseById: builder.mutation<void, Classe>({
        query: ({ _id, ...rest }) => ({
          url: `/get-classe/${_id}`,
          method: "GET",
          body: rest,
        }),
        invalidatesTags: ["Classe"],
      }),
      assignMatiereToClasse: builder.mutation<void, AssignMatieresPayload>({
        query: (payload) => ({
          url: `/assign-matieres-to-classe/${payload._id}`,
          method: "PUT",
          body: { matiereIds: payload.matiereIds },
        }),
        invalidatesTags: ["Classe"],
      }),
      deleteAssignedMatiereFromClasse: builder.mutation<void, { classeId: string; matiereId: string }>({
        query: ({ classeId, matiereId }) => ({
          url: `delete-assigned-matiere/${classeId}/${matiereId}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Classe"],
      }),
      getAssignedMatieres: builder.query<Matiere[], string>({
        query: (classeId) => `get-assigned-matieres/${classeId}`,
        providesTags: ["Classe"],
      }),
      
    };
  },
});

export const {
useFetchClassesQuery,
useAddClasseMutation,
useDeleteClasseMutation,
useUpdateClasseMutation, 
useFetchClasseByIdMutation,
useAssignMatiereToClasseMutation,
useDeleteAssignedMatiereFromClasseMutation,
useGetAssignedMatieresQuery
} = classeSlice;