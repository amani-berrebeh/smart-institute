import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";

import LayoutReducer from "../slices/layouts/reducer";
// Authentication
import ForgetPasswordReducer from "../slices/auth/forgetpwd/reducer";
import ProfileReducer from "../slices/auth/profile/reducer";
import DashboardReducer from "../slices/dashboard/reducer";
import authSlice from "features/account/authSlice";
import { accountSlice } from "features/account/accountSlice";
import { permissionSlice } from "features/userPermissions/userPermissionSlice";
import { etatPersonnelSlice } from "features/etatPersonnel/etatPersonnelSlice";
import { postePersonnelSlice } from "features/postePersonnel/postePersonnel";
import { categoriePersonnelSlice } from "features/categoriePersonnel/categoriePersonnel";
import { gradePersonnelSlice } from "features/gradePersonnel/gradePersonnel";
import { etatEnseignantSlice } from "features/etatEnseignant/etatEnseignant";
import { posteEnseignantSlice } from "features/posteEnseignant/posteEnseignant";
import { gradeEnseignantSlice } from "features/gradeEnseignant/gradeEnseignant";
import { specialiteEnseignantSlice } from "features/specialiteEnseignant/specialiteEnseignant";
import { servicePersonnelSlice } from "features/servicePersonnel/servicePersonnel";
import { etatEtudiantSlice } from "features/etatEtudiants/etatEtudiants";
import { typeInscriptionEtudiantSlice } from "features/typeInscriptionEtudiant/typeInscriptionEtudiant";
import { matiereSlice } from "features/matiere/matiere";
import { niveauSlice } from "features/niveau/niveau";
import { departementSlice } from "features/departement/departement";
import { salleSlice } from "features/salles/salles";
import { sectionSlice } from "features/section/section";
import { classeSlice } from "features/classe/classe";
import {reclamationsEtudiantSlice} from "features/reclamationEtudiant/recalamationEtudiantSlice"
import { etudiantSlice } from "features/etudiant/etudiantSlice";
import { enseignantSlice } from "features/enseignant/enseignantSlice";
import { personnelSlice } from "features/personnel/personnelSlice";
import { reclamationsEnseignantSlice } from "features/reclamationEnseignant/reclamationEnseignantSlice";
import { reclamationsPersonnelSlice } from "features/reclamationPersonnel/reclamationPersonnelSlice"
import { demandeEtudiantSlice } from "features/demandeEtudiant/demandeEtudiantSlice";
import { demandePersonnelSlice } from "features/demandePersonnel/demandePersonnelSlice";
import { demandeEnseignantSlice } from "features/demandeEnseignant/demandeEnseignantSlice"
import { avisEtudiantSlice } from "features/avisEtudiant/avisEtudiantSlice";

export const store = configureStore({
    reducer: { 
    [accountSlice.reducerPath]: accountSlice.reducer,
    [permissionSlice.reducerPath]: permissionSlice.reducer,
    [etatPersonnelSlice.reducerPath]: etatPersonnelSlice.reducer,
    [etatEtudiantSlice.reducerPath]: etatEtudiantSlice.reducer,
    [typeInscriptionEtudiantSlice.reducerPath]: typeInscriptionEtudiantSlice.reducer,
    [postePersonnelSlice.reducerPath]: postePersonnelSlice.reducer,
    [categoriePersonnelSlice.reducerPath]: categoriePersonnelSlice.reducer,
    [gradePersonnelSlice.reducerPath]: gradePersonnelSlice.reducer,
    [servicePersonnelSlice.reducerPath]: servicePersonnelSlice.reducer,
    [etatEnseignantSlice.reducerPath]: etatEnseignantSlice.reducer,
    [posteEnseignantSlice.reducerPath]: posteEnseignantSlice.reducer,
    [gradeEnseignantSlice.reducerPath]: gradeEnseignantSlice.reducer,
    [specialiteEnseignantSlice.reducerPath]: specialiteEnseignantSlice.reducer,
    [matiereSlice.reducerPath]: matiereSlice.reducer,
    [niveauSlice.reducerPath]: niveauSlice.reducer,
    [departementSlice.reducerPath]: departementSlice.reducer,
    [salleSlice.reducerPath]: salleSlice.reducer,
    [sectionSlice.reducerPath]: sectionSlice.reducer,
    [classeSlice.reducerPath]: classeSlice.reducer,
    [reclamationsEtudiantSlice.reducerPath]: reclamationsEtudiantSlice.reducer,
    [reclamationsEnseignantSlice.reducerPath]: reclamationsEnseignantSlice.reducer,
    [reclamationsPersonnelSlice.reducerPath]: reclamationsPersonnelSlice.reducer,
    [demandePersonnelSlice.reducerPath]: demandePersonnelSlice.reducer,
    [demandeEnseignantSlice.reducerPath]: demandeEnseignantSlice.reducer,
    [demandeEtudiantSlice.reducerPath]: demandeEtudiantSlice.reducer,
    [etudiantSlice.reducerPath]: etudiantSlice.reducer,
    [enseignantSlice.reducerPath]: enseignantSlice.reducer,
    [personnelSlice.reducerPath]: personnelSlice.reducer,
    [avisEtudiantSlice.reducerPath]: avisEtudiantSlice.reducer,

      auth: authSlice,
      Layout: LayoutReducer,
      ForgetPassword: ForgetPasswordReducer,
      Profile: ProfileReducer,
      Dashboard: DashboardReducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat([
        accountSlice.middleware, 
        permissionSlice.middleware,
        etatPersonnelSlice.middleware,
        postePersonnelSlice.middleware,
        categoriePersonnelSlice.middleware,
        gradePersonnelSlice.middleware,
        etatEnseignantSlice.middleware,
        posteEnseignantSlice.middleware,
        gradeEnseignantSlice.middleware,
        specialiteEnseignantSlice.middleware,
        servicePersonnelSlice.middleware,
        etatEtudiantSlice.middleware,
        typeInscriptionEtudiantSlice.middleware,
        matiereSlice.middleware,
        niveauSlice.middleware,
        departementSlice.middleware,
        salleSlice.middleware,
        sectionSlice.middleware,
        classeSlice.middleware,
        etudiantSlice.middleware,
        enseignantSlice.middleware,
        personnelSlice.middleware,
        reclamationsEtudiantSlice.middleware,
        reclamationsEnseignantSlice.middleware,
        reclamationsPersonnelSlice.middleware,
        demandePersonnelSlice.middleware,
        demandeEtudiantSlice.middleware,
        demandeEnseignantSlice.middleware,
        avisEtudiantSlice.middleware
      ]
        
      );
    },
  });
  // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
  setupListeners(store.dispatch);
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  