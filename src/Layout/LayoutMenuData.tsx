import React, { useEffect, useState } from "react";

const Navdata = () => {
    //state data
    const [isEcommerce, setIsEcommerce] = useState(false);
    const [isOrder, setIsOrder] = useState(false);
    const [isAvisEtudiant, setIsAvisEtudiant] = useState(false);
    const [isAvisEnseignant, setIsAvisEnseignant] = useState(false);
    const [isAvisPersonnel, setIsAvisPersonnel] = useState(false);
    const [isActualite, setIsActualite] = useState(false);
    const [isSellers, setIsSellers] = useState(false);
    const [isInvoice, setIsInvoice] = useState(false);
    const [isParametre, setIsParametre] = useState(false);
    const [isLocalization, setIsLocalization] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [isMultiLevel, setIsMultiLevel] = useState(false);

    // Multi Level
    const [isLevel1, setIsLevel1] = useState(false);
    const [isLevel2, setIsLevel2] = useState(false);

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
        isAvisPersonnel
    ]);

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
                    link: "/AjouterAvisEtudiant",
                    parentId: "Gestion-des-Avis",
                    icon: "bi bi-file-earmark-plus"
                },
                {
                    id: "GestionAvisEtudiant",
                    label: "Liste des avis",
                    link: "/ListeAvisEtudiant",
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
                    link: "/AjouterAvisEnseignant",
                    parentId: "Avis-enseignant",
                    icon: "bi bi-file-earmark-plus"
                },
                {
                    id: "GestionAvisEnseignant",
                    label: "Liste des avis",
                    link: "/ListeAvisEnseignant",
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
                    link: "/AjouterAvisPersonnel",
                    parentId: "Avis-Personnel",
                    icon: "bi bi-file-earmark-plus"
                },
                {
                    id: "GestionAvisPersonnel",
                    label: "Liste des avis",
                    link: "/ListeAvisPersonnel",
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
                setIscurrentState('ctualite');
                updateIconSidebar(e);
            },
            stateVariables: isActualite,
            subItems: [
                {
                    id: "Ajouterctualite",
                    label: "Ajouter une actualité",
                    link: "/AjouterActualite",
                    parentId: "Actualite",
                    icon: "bi bi-file-earmark-plus"
                },
                {
                    id: "listeActualite",
                    label: "Liste des actualités",
                    link: "/ListeActualite",
                    parentId: "Actualite",
                    icon: "bi bi-list-ul"
                },
            ],
           
        },
        // demande etudiant
        {
            id: "Demande-etudiant",
            label: "Demande Etudiant",
            link: "/ListeDemandeEtudiant",
            icon: "bi bi-telephone-forward",
           
        },
        {
            id: "Demande-enseignant",
            label: "Demande Enseignant",
            link: "/ListeDemandeEnseignant",
            icon: "bi bi-telephone-forward",
           
        },
        {
            id: "Demande-personnel",
            label: "Demande Personnel",
            link: "/ListeDemandePersonnel",
            icon: "bi bi-telephone-forward",
           
        },

        {
            id: "Gestion-des-avis-Enseignants",
            label: "Gestion des Enseignants",
            link: "/GestionEnseignant",
            icon: "bi bi-person-gear",
           
        },
       
        
        {
            id: "Réclamation-enseignants",
            label: "Réclamation Enseignants",
            link: "/ReclamationEnseignant",
            icon: "bi bi-pencil-square",
           
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
            id: "parametre",
            label: "Paramètres",
            icon: "bi bi-sliders",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsParametre(!isParametre);
                setIscurrentState('Parametre');
                updateIconSidebar(e);
            },
            stateVariables: isParametre,
            subItems: [
                {
                    id: "specialite-enseignants",
                    label: "Spécialité Enseignant",
                    link: "/orders-list-view",
                    parentId: "parametre",
                    icon: "bi bi-award"
                },
                {
                    id: "Poste-enseignants",
                    label: "Poste Enseignant",
                    link: "/orders-overview",
                    parentId: "parametre",
                    icon: "bi bi-file-person"
                },
                {
                    id: "Grade-enseignants",
                    label: "Grade Enseignant",
                    link: "/orders-overview",
                    parentId: "parametre",
                    icon: "bi bi-stack"
                },
                {
                    id: "Etat-enseignants",
                    label: "Etat Enseignant",
                    link: "/orders-overview",
                    parentId: "parametre",
                    icon: "bi bi-bag-check-fill"
                },
            ],
        },
        // {
        //     id: "calendar",
        //     label: "Calendar",
        //     icon: "bi bi-calendar-week",
        //     link: "/calendar",
        // },
        // {
        //     id: "seller",
        //     label: "Sellers",
        //     icon: "bi bi-binoculars",
        //     link: "/#",
        //     click: function (e: any) {
        //         e.preventDefault();
        //         setIsSellers(!isSellers);
        //         setIscurrentState('Sellers');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isSellers,
        //     subItems: [
        //         {
        //             id: "listview",
        //             label: "List View",
        //             link: "/sellers-list-view",
        //             parentId: "seller",
        //         },
        //         {
        //             id: "gridview",
        //             label: "Grid View",
        //             link: "/seller-grid-view",
        //             parentId: "seller",
        //         },
        //         {
        //             id: "overview",
        //             label: "Overview",
        //             link: "/seller-overview",
        //             parentId: "seller",
        //         },
        //     ],
        // },
        // {
        //     id: "invoice",
        //     label: "Invoice",
        //     icon: "bi bi-archive",
        //     link: "/#",
        //     click: function (e: any) {
        //         e.preventDefault();
        //         setIsInvoice(!isInvoice);
        //         setIscurrentState('Invoice');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isInvoice,
        //     subItems: [
        //         {
        //             id: "listview",
        //             label: "List View",
        //             link: "/invoices-list",
        //             parentId: "invoice",
        //         },
        //         {
        //             id: "overview",
        //             label: "Overview",
        //             link: "/invoices-details",
        //             parentId: "invoice",
        //         },
        //         {
        //             id: "createinvoice",
        //             label: "Create Invoice",
        //             link: "/invoices-create",
        //             parentId: "invoice",
        //         },
        //     ],
        // },
        // {
        //     id: "userslist",
        //     label: "Users List",
        //     icon: "bi bi-person-bounding-box",
        //     link: "/users-list",
        // },
        // {
        //     id: "shipping",
        //     label: "Shipping",
        //     icon: "bi bi-truck",
        //     link: "/#",
        //     click: function (e: any) {
        //         e.preventDefault();
        //         setIsShipping(!isShipping);
        //         setIscurrentState('Shipping');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isShipping,
        //     subItems: [
        //         {
        //             id: "shippinglist",
        //             label: "Shipping List",
        //             link: "/shipping-list",
        //             parentId: "shipping",
        //         },
        //         {
        //             id: "shipments",
        //             label: "Shipments",
        //             link: "/shipments",
        //             parentId: "shipping",
        //         },
        //     ],
        // },
        // {
        //     id: "coupons",
        //     label: "Coupons",
        //     icon: "bi bi-tag",
        //     link: "/coupons",
        // },
        // {
        //     id: "reviews-ratings",
        //     label: "Reviews & Ratings",
        //     icon: "bi bi-star",
        //     link: "/reviews-ratings",
        // },
        // {
        //     id: "brands",
        //     label: "Brands",
        //     icon: "bi bi-shop",
        //     link: "/brands",
        // },
        // {
        //     id: "statistics",
        //     label: "Statistics",
        //     icon: "bi bi-pie-chart",
        //     link: "/statistics",
        // },
        // {
        //     id: "localization",
        //     label: "Localization",
        //     icon: "bi bi-coin",
        //     link: "/#",
        //     click: function (e: any) {
        //         e.preventDefault();
        //         setIsLocalization(!isLocalization);
        //         setIscurrentState('Localization');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isLocalization,
        //     subItems: [
        //         {
        //             id: "transactions",
        //             label: "Transactions",
        //             link: "/transactions",
        //             parentId: "localization",
        //         },
        //         {
        //             id: "currency-rates",
        //             label: "Currency Rates",
        //             link: "/currency-rates",
        //             parentId: "localization",
        //         },
        //     ],
        // },
        // {
        //     id: "accounts",
        //     label: "Accounts",
        //     icon: "bi bi-person-circle",
        //     link: "/#",
        //     click: function (e: any) {
        //         e.preventDefault();
        //         setIsAuth(!isAuth);
        //         setIscurrentState('Auth');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isAuth,
        //     subItems: [
        //         {
        //             id: "myAccount",
        //             label: "My Accounts",
        //             link: "/account",
        //             parentId: "account",
        //         },
        //         {
        //             id: "settings",
        //             label: "Settings",
        //             link: "/settings",
        //             parentId: "account",
        //         },
        //         {
        //             id: "signup",
        //             label: "Sign Up",
        //             link: "/auth-signup-basic",
        //             parentId: "account",
        //         },
        //         {
        //             id: "signin",
        //             label: "Sign In",
        //             link: "/auth-signin-basic",
        //             parentId: "account",
        //         },
        //         {
        //             id: "password-reset",
        //             label: "Password Reset",
        //             link: "/auth-pass-reset-basic",
        //             parentId: "account",
        //         },
        //         {
        //             id: "password-create",
        //             label: "Password Create",
        //             link: "/auth-pass-change-basic",
        //             parentId: "account",
        //         },
        //         {
        //             id: "success-message",
        //             label: "Success Message",
        //             link: "/auth-success-msg-basic",
        //             parentId: "account",
        //         },
        //         {
        //             id: "two-step-verify",
        //             label: "Two Step Verify",
        //             link: "/auth-twostep-basic",
        //             parentId: "account",
        //         },
        //         {
        //             id: "logout",
        //             label: "Logout",
        //             link: "/auth-logout-basic",
        //             parentId: "account",
        //         },
        //         {
        //             id: "auth-404",
        //             label: "Error 404",
        //             link: "/auth-404",
        //             parentId: "account",
        //         },
        //         {
        //             id: "auth-500",
        //             label: "Error 500",
        //             link: "/auth-500",
        //             parentId: "account",
        //         },
        //         {
        //             id: "coming-soon",
        //             label: "Coming Soon",
        //             link: "/coming-soon",
        //             parentId: "account",
        //         },
        //     ],
        // },
        // {
        //     id: "components",
        //     label: "Components",
        //     icon: "bi bi-layers",
        //     link: "//themes.themesbrand.com/toner/react/components/index",
        //     isBadgeColorCustom : true,
        //     badgeName : "v1.0",
        //     badgeColor : "secondary"

        // },
        // {
        //     id: "multilevel",
        //     label: "Multi Level",
        //     icon: "bi bi-share",
        //     link: "/#",
        //     click: function (e: any) {
        //         e.preventDefault();
        //         setIsMultiLevel(!isMultiLevel);
        //         setIscurrentState('MuliLevel');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isMultiLevel,
        //     subItems: [
        //         { id: "level1.1", label: "Level 1.1", link: "/#", parentId: "multilevel" },
        //         {
        //             id: "level1.2",
        //             label: "Level 1.2",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e: any) {
        //                 e.preventDefault();
        //                 setIsLevel1(!isLevel1);
        //             },
        //             stateVariables: isLevel1,
        //             childItems: [
        //                 { id: 1, label: "Level 2.1", link: "/#" },
        //                 {
        //                     id: "level2.2",
        //                     label: "Level 2.2",
        //                     link: "/#",
        //                     isChildItem: true,
        //                     click: function (e: any) {
        //                         e.preventDefault();
        //                         setIsLevel2(!isLevel2);
        //                     },
        //                     stateVariables: isLevel2,
        //                     childItems: [
        //                         { id: 1, label: "Level 3.1", link: "/#" },
        //                         { id: 2, label: "Level 3.2", link: "/#" },
        //                     ]
        //                 },
        //             ]
        //         },
        //     ],
        // },

    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;