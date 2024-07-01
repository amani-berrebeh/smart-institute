import React, { useEffect, useState } from "react";
import { useAppSelector } from "app/hooks";
import { selectCurrentUser } from "features/account/authSlice";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";
import {useFetchUserPermissionsByUserIdQuery} from "../features/userPermissions/userPermissionSlice"

const Navdata = () => {
  const user: any = useSelector((state: RootState) => selectCurrentUser(state));

  // const { data: userPermissions } = useFetchUserPermissionsByUserIdQuery({ userId: user?._id! });
  // console.log(userPermissions)
  
  const { data: userPermissions, error, isLoading } = useFetchUserPermissionsByUserIdQuery( { userId: user?._id! });

  useEffect(() => {
    if (error) {
      console.error('Error fetching user permissions:', error);
    } else if (isLoading) {
      console.log('Fetching user permissions...');
    } else {
      // console.log('User permissions:', userPermissions);
    }
  }, [userPermissions, error, isLoading]);
  // console.log(userPermissions)
 
    const [isEcommerce, setIsEcommerce] = useState(false);
    const [isOrder, setIsOrder] = useState(false);
    const [isAvisEtudiant, setIsAvisEtudiant] = useState(false);
    const [isAvisEnseignant, setIsAvisEnseignant] = useState(false);
    const [isAvisPersonnel, setIsAvisPersonnel] = useState(false);
    const [isActualite, setIsActualite] = useState(false);
    const [isParametreEtudiant, setIsParametreEtudiant] = useState(false);
    const [isParametreEnseignant, setIsParametreEnseignant] = useState(false);
    const [isParametrePersonnel, setIsParametrePersonnel] = useState(false);
    const [isSellers, setIsSellers] = useState(false);
    const [isInvoice, setIsInvoice] = useState(false);
    const [isParametre, setIsParametre] = useState(false);
    const [isLocalization, setIsLocalization] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [isMultiLevel, setIsMultiLevel] = useState(false);
    const [isEtudiant, setIsEtudiant] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isEnseignant, setIsEnseignant] = useState(false);
    const [isPersonnel, setIsPersonnel] = useState(false);
    const [isDeaprtement, setIsDeaprtement] = useState(false);
    const [isLevel1, setIsLevel1] = useState(false);
    const [isLevel2, setIsLevel2] = useState(false);
    const [isLevel3, setIsLevel3] = useState(false);
    const [isLevel4, setIsLevel4] = useState(false);
    const [isLevel5, setIsLevel5] = useState(false);

   

    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e: any) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul: any = document.getElementById("two-column-menu");
            const iconItems: any = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                // var id: any = item.getAttribute("subitems");
                // if (document.getElementById(id)){
                //     document.getElementById(id).classList.remove("show");
                // }
            });
        }
    }
    function linkInRoutes(link: string, routes: string[]): boolean {
      return routes.includes(link);
    }
  
    function filterMenuItems(menuItems: any[], routes: string[]): any[] {
      return menuItems.filter((item) => {
        if (item.subItems) {
          item.subItems = filterMenuItems(item.subItems, routes);
          // Keep the item if it has subItems left after filtering
          return item.subItems.length > 0;
        }
        return linkInRoutes(item.link, routes);
      });
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (iscurrentState !== 'Ecommerce') {
            setIsEcommerce(false);
        }
        if (iscurrentState !== 'Orders') {
            setIsOrder(false);
        }
        if (iscurrentState !== 'Sellers') {
            setIsSellers(false);
        }
        if (iscurrentState !== 'Invoice') {
            setIsInvoice(false);
        }
        if (iscurrentState !== 'Parametre') {
            setIsParametre(false);
        }
        if (iscurrentState !== 'Localization') {
            setIsLocalization(false);
        }
        if (iscurrentState !== 'Auth') {
            setIsAuth(false);
        }
        if (iscurrentState !== 'AvisEtudiant') {
            setIsAvisEtudiant(false);
        }
        if (iscurrentState !== 'AvisEnseignant') {
            setIsAvisEnseignant(false);
        }
        if (iscurrentState !== 'AvisPersonnel') {
            setIsAvisPersonnel(false);
        }
        if (iscurrentState !== 'Actualite') {
            setIsActualite(false);
        }
        if (iscurrentState !== "Etudiant") {
            setIsEtudiant(false);
          }
          if (iscurrentState !== "Admin") {
            setIsAdmin(false);
          }
          if (iscurrentState !== "Enseignant") {
            setIsEnseignant(false);
          }
          if (iscurrentState !== "Personnel") {
            setIsPersonnel(false);
          }
          if (iscurrentState !== "Departement") {
            setIsDeaprtement(false);
          }
          if (iscurrentState !== "ParametreEtudiant") {
            setIsParametreEtudiant(false);
          }
          if (iscurrentState !== "ParametreEnseignant") {
            setIsParametreEnseignant(false);
          }
          if (iscurrentState !== "ParametrePersonnel") {
            setIsParametrePersonnel(false);
          }
    }, [
        iscurrentState,
        isEcommerce,
        isOrder,
        isInvoice,
        isParametre,
        isLocalization,
        isAuth,
        isMultiLevel,
        isAvisEtudiant,
        isAvisEnseignant,
        isAvisPersonnel,
        isEtudiant,
        isAdmin,
        isEnseignant,
        isPersonnel,
        isDeaprtement,
        isParametreEtudiant
    ]);
    let routes = userPermissions ? userPermissions.map(permission => permission.path) : [];

    const menuItems: any = [
        {
            label: "Menu",
            isHeader: true,
        },
        //dashboard
        {
            id: "dashboard",
            label: "Dashboard",
            icon: "bi bi-speedometer2",
            link: "/dashboard",
            badgeName : "Hot",
            badgeColor : "danger"
        },

  // gestion etudiant
  {
    id: "Gestion-des-Etudiants",
    label: "Gestion des Etudiants",
    link: "/#",
    icon: "bi bi-person-fill-gear",
    click: function (e: any) {
      e.preventDefault();
      setIsEtudiant(!isEtudiant);
      setIscurrentState("Etudiant");
      updateIconSidebar(e);
    },
    stateVariables: isEtudiant,
    subItems: [
      {
        id: "AjouterEtudiant",
        label: "Ajouter un Etudiant",
        link: "/gestion-etudiant/ajouter-etudiant",
        parentId: "Gestion-des-Etudiant",
        icon: "bi bi-person-fill-add",
      },
      {
        id: "GestionEtudiant",
        label: "Liste Des Etudiants",
        link: "/gestion-etudiant/liste-etudiants",
        parentId: "Gestion-des-Etudiants",
        icon: "bi bi-person-lines-fill",
      },
    ],
  },
  // gestion enseignant
  {
    id: "gestion-enseignant",
    label: "Gestion Enseignants",
    link: "/#",
    icon: "bi bi-person-fill-gear",
    click: function (e: any) {
      e.preventDefault();
      setIsEnseignant(!isEnseignant);
      setIscurrentState("Enseignant");
      updateIconSidebar(e);
    },
    stateVariables: isEnseignant,
    subItems: [
      {
        id: "AjouterEnseignant",
        label: "Ajouter un Enseignant",
        link: "/gestion-enseignant/ajouter-enseignant",
        parentId: "Gestion-enseignant",
        icon: "bi bi-person-fill-add",
      },
      {
        id: "GestionEnseignant",
        label: "Liste Des Enseignants",
        link: "/gestion-enseignant/liste-enseignants",
        parentId: "Gestion-enseignant",
        icon: "bi bi-person-lines-fill",
      },
    ],
  },
  //gestion personnel
  {
    id: "Gestion-Personnel",
    label: "Gestion Personnels",
    link: "/#",
    icon: "bi bi-person-fill-gear",
    click: function (e: any) {
      e.preventDefault();
      setIsPersonnel(!isPersonnel);
      setIscurrentState("Personnel");
      updateIconSidebar(e);
    },
    stateVariables: isPersonnel,
    subItems: [
      {
        id: "AjouterPersonnel",
        label: "Ajouter un Personnel",
        link: "/gestion-personnel/ajouter-personnel",
        parentId: "Gestion-Personnel",
        icon: "bi bi-person-fill-add",
      },
      {
        id: "GestionPersonnel",
        label: "Liste Des Personnels",
        link: "/gestion-personnel/liste-personnels",
        parentId: "Gestion-Personnel",
        icon: "bi bi-person-lines-fill",
      },
    ],
  },

     // avis etudiant
        {
            id: "Gestion-des-Avis",
            label: "Avis Etudiant",
            link: "/#",
            icon: "bi bi-megaphone",
            click: function (e: any) {
                e.preventDefault();
                setIsAvisEtudiant(!isAvisEtudiant);
                setIscurrentState('AvisEtudiant');
                updateIconSidebar(e);
            },
            stateVariables: isAvisEtudiant,
            subItems: [
                {
                    id: "AjouterAvisEtudiant",
                    label: "Ajouter un Avis",
                    link: "/avis-etudiant/ajouter-avis-etudiant",
                    parentId: "Gestion-des-Avis",
                    icon: "bi bi-file-earmark-plus"
                },
                {
                    id: "GestionAvisEtudiant",
                    label: "Liste des avis",
                    link: "/avis-etudiant/liste-avis-etudiant",
                    parentId: "Gestion-des-Avis",
                    icon: "bi bi-list-ul"
                },
            ],
           
        },
        // avis enseignant
        {
            id: "Avis-enseignant",
            label: "Avis Enseignant",
            link: "/#",
            icon: "bi bi-megaphone",
            click: function (e: any) {
                e.preventDefault();
                setIsAvisEnseignant(!isAvisEnseignant);
                setIscurrentState('AvisEnseignant');
                updateIconSidebar(e);
            },
            stateVariables: isAvisEnseignant,
            subItems: [
                {
                    id: "AjouterAvisEnseignant",
                    label: "Ajouter un Avis",
                    link: "/avis-enseignant/ajouter-avis-enseignant",
                    parentId: "Avis-enseignant",
                    icon: "bi bi-file-earmark-plus"
                },
                {
                    id: "GestionAvisEnseignant",
                    label: "Liste des avis",
                    link: "/avis-enseignant/liste-avis-enseignant",
                    parentId: "Avis-enseignant",
                    icon: "bi bi-list-ul"
                },
            ],
           
        },
        //avis personnel
        {
            id: "Avis-Personnel",
            label: "Avis Personnel",
            link: "/#",
            icon: "bi bi-megaphone",
            click: function (e: any) {
                e.preventDefault();
                setIsAvisPersonnel(!isAvisPersonnel);
                setIscurrentState('AvisPersonnel');
                updateIconSidebar(e);
            },
            stateVariables: isAvisPersonnel,
            subItems: [
                {
                    id: "AjouterAvisPersonnel",
                    label: "Ajouter un avis",
                    link: "/avis-personnel/ajouter-avis-personnel",
                    parentId: "Avis-Personnel",
                    icon: "bi bi-file-earmark-plus"
                },
                {
                    id: "GestionAvisPersonnel",
                    label: "Liste des avis",
                    link: "/avis-personnel/liste-avis-personnel",
                    parentId: "Avis-Personnel",
                    icon: "bi bi-list-ul"
                },
            ],
           
        },
        // actualite
        {
            id: "Actualite",
            label: "Actualités",
            link: "/#",
            icon: "bi bi-chat-quote",
            click: function (e: any) {
                e.preventDefault();
                setIsActualite(!isActualite);
                setIscurrentState('Actualite');
                updateIconSidebar(e);
            },
            stateVariables: isActualite,
            subItems: [
                {
                    id: "Ajouterctualite",
                    label: "Ajouter une actualité",
                    link: "/actualite/ajouter-actualite",
                    parentId: "Actualite",
                    icon: "bi bi-file-earmark-plus"
                },
                {
                    id: "listeActualite",
                    label: "Liste des actualités",
                    link: "/actualite/liste-actualite",
                    parentId: "Actualite",
                    icon: "bi bi-list-ul"
                },
            ],
           
        },
        // demande etudiant
        {
            id: "Demande-etudiant",
            label: "Demande Etudiant",
            link: "/demandes-etudiant/Liste-demandes-etudiant",
            icon: "bi bi-telephone-forward",
           
        },
        // demande enseignant
        {
            id: "Demande-enseignant",
            label: "Demande Enseignant",
            link: "/demandes-enseignant/liste-demande-enseignant",
            icon: "bi bi-telephone-forward",
           
        },
        // demande personnel
        {
            id: "Demande-personnel",
            label: "Demande Personnel",
            link: "/demandes-personnel/liste-demande-personnel",
            icon: "bi bi-telephone-forward",
           
        },
        // reclamation etudiant
        {
            id: "Reclamation-etudiant",
            label: "Réclamation Etudiant",
            link: "/reclamation-etudiant/liste-reclamation-etudiant",
            icon: "bi bi-envelope-exclamation",
           
        },
        // reclamation enseignant
        {
            id: "Reclamation-enseignant",
            label: "Réclamation Enseignant",
            link: "/reclamation-enseignant/liste-reclamation-enseignant",
            icon: "bi bi-envelope-exclamation",
           
        },
        // reclamation personnel
        {
            id: "Reclamation-personnel",
            label: "Réclamation Personnel",
            link: "/reclamation-personnel/liste-reclamation-personnel",
            icon: "bi bi-envelope-exclamation",
           
        },
        {
            id: "Avis-rattrapage",
            label: "Avis Rattrapage",
            link: "/AvisRattrapage",
            icon: "bi bi-book-half",
           
        },
       
        {
            id: "gestionPresence",
            label: "Gestion des Présences",
            icon: "bi bi-person-check",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsOrder(!isOrder);
                setIscurrentState('Orders');
                updateIconSidebar(e);
            },
            stateVariables: isOrder,
            subItems: [
                {
                    id: "Pointages-enseignants",
                    label: "Pointage Enseignant",
                    link: "/orders-list-view",
                    parentId: "gestionPresence",
                    icon: "bi bi-fingerprint"
                },
                {
                    id: "Absence-enseignant",
                    label: "Absence Enseignant",
                    link: "/orders-overview",
                    parentId: "gestionPresence",
                    icon: "bi bi-person-exclamation"
                },
            ],
        },
        {
          id: "parametreEtudiant",
          label: "Paramètres Comptes Etudiants",
          link: "/#",
          icon: "bi bi-sliders",
          click: function (e: any) {
              e.preventDefault();
              setIsParametreEtudiant(!isParametreEtudiant);
              setIscurrentState('ParametreEtudiant');
              updateIconSidebar(e);
          },
          stateVariables: isParametreEtudiant,
          subItems: [
              {
                  id: "EtatEtudiant",
                  label: "Etat",
                  link: "/parametre/etat-etudiants",
                  parentId: "parametreEtudiant",
                  icon: "bi bi-person-fill-exclamation"
              },
              {
                  id: "InscriptionEtudiant",
                  label: "Inscription",
                  link: "/parametre/inscription-etudiants",
                  parentId: "parametreEtudiant",
                  icon: "bi bi-person-plus-fill"
              },
          ],
         
      },
      {
        id: "parametreEnseignant",
        label: "Paramètres Comptes Enseignants",
        link: "/#",
        icon: "bi bi-sliders",
        click: function (e: any) {
            e.preventDefault();
            setIsParametreEnseignant(!isParametreEnseignant);
            setIscurrentState('ParametreEnseignant');
            updateIconSidebar(e);
        },
        stateVariables: isParametreEnseignant,
        subItems: [
            {
                id: "EtatEnseignat",
                label: "Etat",
                link: "/parametre/etat-enseignants",
                parentId: "parametreEnseignant",
                icon: "bi bi-person-fill-exclamation"
            },
            {
                  id: "GradeEnseignant",
                  label: "Grade",
                  link: "/parametre/grade-enseignants",
                  icon: "bi bi-award-fill",
                  parentId: "parametreEnseignant",
                },
                {
                  id: "posteEnseignant",
                  label: "Poste",
                  link: "/parametre/poste-enseignants",
                  icon: "bi bi-book",
                  parentId: "parametreEnseignant",
                },
                {
                  id: "specialiteEnseingnat",
                  label: "Spécialité",
                  link: "/parametre/specialite-enseignants",
                  icon: "bi bi-briefcase-fill",
                  parentId: "parametreEnseignant",
                },
        ],
       
    },
    {
      id: "parametrePersonnel",
      label: "Paramètres Comptes Personnels",
      link: "/#",
      icon: "bi bi-sliders",
      click: function (e: any) {
          e.preventDefault();
          setIsParametrePersonnel(!isParametrePersonnel);
          setIscurrentState('ParametrePersonnel');
          updateIconSidebar(e);
      },
      stateVariables: isParametrePersonnel,
      subItems: [
          {
              id: "EtatEtudiant",
              label: "Etat",
              link: "/parametre/etat-etudiants",
              parentId: "parametrePersonnel",
              icon: "bi bi-person-fill-exclamation"
          },
          {
              id: "gradePersonnel",
              label: "Grade",
              link: "/parametre/grade-personnels",
              icon: "bi bi-award-fill",
              parentId: "parametrePersonnel",
            },
            {
              id: "postePersonnel",
              label: "Poste",
              link: "/parametre/poste-personnels",
              icon: "bi bi-book",
              parentId: "parametrePersonnel",
            },
            {
              id: "categoriePersonnel",
              label: "Catégorie",
              link: "/parametre/categorie-personnels",
              icon: "bi bi-grid",
              parentId: "parametrePersonnel",
            },
      ],
     
  },
          {
            id: "departement",
            label: "Gestion Département",
            icon: "bi bi-house-gear-fill",
            link: "/#",
            click: function (e: any) {
              e.preventDefault();
              setIsDeaprtement(!isDeaprtement);
              setIscurrentState("Departement");
              updateIconSidebar(e);
            },
            stateVariables: isDeaprtement,
            subItems: [
              {
                id: "matieres",
                label: "Matières",
                icon: "bi bi-journals",
                link: "",
                isChildItem: true,
                click: function (e: any) {
                  e.preventDefault();
                  setIsLevel1(!isLevel1);
                },
                stateVariables: isLevel1,
                childItems: [
                  {
                    id: 1,
                    label: "Liste Des Matières",
                    link: "/gestion-matieres/liste-matieres",
                    icon: "bi bi-journal-text",
                  },
                ],
              },
              {
                id: "salles",
                label: "Gestions Des Salles",
                icon: "bi bi-door-closed-fill",
                link: "",
                isChildItem: true,
                click: function (e: any) {
                  e.preventDefault();
                  setIsLevel2(!isLevel2);
                },
                stateVariables: isLevel2,
                childItems: [
                  {
                    id: 1,
                    label: "Liste Des Salles",
                    link: "/gestion-salles/liste-salles",
                    icon: "bi bi-person-fill-exclamation",
                  },
                  // { id: 1, label: "Ajouter Une Salle", link: "/gestion-salles/Ajout-salle",  icon: "bi bi-person-plus-fill"},
                ],
              },
              {
                id: "classes",
                label: "Classes",
                icon: "bi bi-people-fill",
                link: "",
                isChildItem: true,
                click: function (e: any) {
                  e.preventDefault();
                  setIsLevel3(!isLevel3);
                },
                stateVariables: isLevel3,
                childItems: [
                  {
                    id: 1,
                    label: "Liste des classes",
                    link: "/gestion-classes/liste-classes",
                    icon: "bi bi-people-fill",
                  },
                  {
                    id: 1,
                    label: "Ajouter un niveau",
                    link: "/gestion-classes/Ajout-niveau",
                    icon: "bi bi-plus-lg",
                  },
                  {
                    id: 1,
                    label: "Ajouter une séction",
                    link: "/gestion-classes/Ajout-section",
                    icon: "bi bi-plus-lg",
                  },
                ],
              },
              {
                id: "departements",
                label: "Départements",
                icon: "bi bi-house-gear-fill",
                link: "",
                isChildItem: true,
                click: function (e: any) {
                  e.preventDefault();
                  setIsLevel4(!isLevel4);
                },
                stateVariables: isLevel4,
                childItems: [
                  {
                    id: 1,
                    label: "Liste Des Départements",
                    link: "/gestion-departements/liste-departements",
                    icon: "bi bi-diagram-3-fill",
                  },
                  // { id: 1, label: "Ajouter Un Département", link: "/gestion-departements/Ajout-departement",  icon: "bi bi-person-plus-fill"},
                ],
              },
              {
                id: "emplois",
                label: "Emplois de Temps Enseignants",
                icon: "bi bi-calendar-week-fill",
                link: "",
                isChildItem: true,
                click: function (e: any) {
                  e.preventDefault();
                  setIsLevel5(!isLevel5);
                },
                stateVariables: isLevel5,
                childItems: [
                  {
                    id: 1,
                    label: "Liste Des Emplois",
                    link: "/gestion-emplois/liste-emplois",
                    icon: "bi bi-list-task",
                  },
                  // { id: 1, label: "Ajouter Un Département", link: "/gestion-departements/Ajout-departement",  icon: "bi bi-person-plus-fill"},
                ],
              },
            ],
          },
          {
            id: "telechargement",
            label: "Espace téléchargement",
            icon: "bi bi-cloud-arrow-down-fill",
            link: "/espace-telechargement",
          },
          {
            id: "lien",
            label: "Liens Utils",
            icon: "bi bi-link-45deg",
            link: "/liens-utils",
          },
          // gestion des admins
          {
            id: "Gestion-des-admin",
            label: "Gestion des admins",
            link: "/#",
            icon: "bi bi-person-fill-gear",
            click: function (e: any) {
              e.preventDefault();
              setIsAdmin(!isAdmin);
              setIscurrentState("Admin");
              updateIconSidebar(e);
            },
            stateVariables: isAdmin,
            subItems: [
              {
                id: "AjouterAdmin",
                label: "Ajouter un Admin",
                link: "/admin/liste-admins",
                parentId: "Gestion-des-admin",
                icon: "bi bi-person-fill-add",
              },
              {
                id: "AjouterPermission",
                label: "Ajouter des permissions",
                link: "/permissions",
                parentId: "Gestion-des-admin",
                icon: "bi bi-person-lines-fill",
              },
            ],
          },
       

    ];
    const filteredMenuItems = filterMenuItems(menuItems, routes);
    return <React.Fragment>{filteredMenuItems}</React.Fragment>;
   
};
export default Navdata;