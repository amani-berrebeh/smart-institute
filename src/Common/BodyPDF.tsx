import { Text, View, Image} from "@react-pdf/renderer";
import { Departement } from "features/departement/departement";
import { Etudiant } from "features/etudiant/etudiantSlice";
import { TemplateBody } from "features/templateBody/templateBodySlice";
import { VaribaleGlobale } from "features/variableGlobale/variableGlobaleSlice";
import { useEffect, useState } from "react";
import Html from 'react-pdf-html';

interface ChildProps {
  piece_demande: TemplateBody;
  studentId: Etudiant;
  allVariables: VaribaleGlobale;
  raison: string;
  formattedDate: string
  departement: Departement
}

const stylesheet = {
  strong: {
    fontSize: '20px',
  },
};

const BodyPDF: React.FC<ChildProps> = ({
  piece_demande,
  studentId,
  allVariables,
  raison,
  formattedDate,
  departement
}) => {
  let newBody = piece_demande?.body!;
  const [anneeScolaire, setAnneeScolaire] = useState<string>('');
  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // getMonth() is zero-based, so add 1
    const currentYear = currentDate.getFullYear();

    let anneeScolaire: string;
    if (currentMonth >= 9 && currentMonth <= 12) {
      anneeScolaire = `${currentYear}/${currentYear + 1}`;
    } else {
      anneeScolaire = `${currentYear - 1}/${currentYear}`;
    }

    setAnneeScolaire(anneeScolaire);
  }, []);
  if (newBody?.includes("[nom etudiant]")) {
    newBody = newBody?.replace(
      "[nom etudiant]",
      studentId.nom_fr + " " + studentId.prenom_fr
    );
    // STUDENT FR
  }
  if (newBody?.includes("Date de Naissance de l'Étudiant")) {
    newBody = newBody?.replace("Date de Naissance de l'Étudiant", studentId.date_naissance);
  }
  if (newBody?.includes("CIN d'Étudiant")) {
    newBody = newBody?.replace("CIN d'Étudiant", studentId.num_CIN);
  }
  if (newBody?.includes("Nom du Programme/Formation")) {
    newBody = newBody?.replace("Nom du Programme/Formation", studentId.filiere);
  }
  if (newBody?.includes("Nom du Département")) {
    newBody = newBody?.replace("Nom du Département", departement.name_fr);
  }
  if (newBody?.includes("Nom du Responsable")) {
    newBody = newBody?.replace("Nom du Responsable", allVariables.directeur_fr);
  }

  if (newBody?.includes("Nom de l'Étudiant")) {
    newBody = newBody?.replace("Nom de l'Étudiant", studentId.nom_fr + " " + studentId.prenom_fr);
  }
  
  // STUDENT AR 
  if (newBody?.includes("اسم الطالب")) {
    newBody = newBody?.replace(
      "اسم الطالب",
      studentId.prenom_ar + " " + studentId.nom_ar
    );
  }
  if (newBody?.includes("ب ت و ع")) {
    newBody = newBody?.replace("ب ت و ع", studentId.num_CIN);
  }
  if (newBody?.includes("تاريخ الميلاد")) {
    newBody = newBody?.replace("تاريخ الميلاد", studentId.date_naissance);
  }
  if (newBody?.includes("تاريخ الميلاد")) {
    newBody = newBody?.replace("تاريخ الميلاد", studentId.date_naissance);
  }
  if (newBody?.includes("اسم القسم")) {
    newBody = newBody?.replace("اسم القسم",departement.name_ar );
  }
// university ar
if (newBody?.includes("اسم الجامعة")) {
  newBody = newBody?.replace("اسم الجامعة", allVariables.universite_ar);
}
if (newBody?.includes("اسم الكلية")) {
  newBody = newBody?.replace("اسم الكلية", allVariables.etablissement_ar);
}
if (newBody?.includes("اسم المدير")) {
  newBody = newBody?.replace("اسم المدير", allVariables.directeur_ar);
}
if (newBody?.includes("المدينة")) {
  newBody = newBody?.replace("المدينة", allVariables.gouvernorat_ar);
}
if (newBody?.includes("السنة الدراسية")) {
  newBody = newBody?.replace("السنة الدراسية", anneeScolaire);
}
  // UNIVERSITY FR
  
  if (newBody?.includes("Nom du secrétaire général")) {
    newBody = newBody?.replace("Nom du secrétaire général", allVariables.secretaire_fr);
  } if (newBody?.includes("Nom de l'Université")) {
    newBody = newBody?.replace("Nom de l'Université", allVariables.universite_fr);
  }
  if (newBody?.includes("Année Universitaire")) {
    newBody = newBody?.replace("Année Universitaire", anneeScolaire);
  }
  if (newBody?.includes("Ville")) {
    newBody = newBody?.replace("Ville", allVariables.gouvernorat_fr);
  }
  if (newBody?.includes("Date")) {
    newBody = newBody?.replace("Date", formattedDate);
  }
  
  if (newBody?.includes("السبب")) {
    newBody = newBody?.replace("السبب", raison);
  }

  if (newBody?.includes("<strong>")) {
    newBody = newBody?.replace("<strong>", "<h5>");
  }
  if (newBody?.includes("</strong>")) {
    newBody = newBody?.replace("</strong>", "</h5>");
  }
  return (
    <View style={{ display: "flex", flexDirection: "row", marginBottom: "5" }}>
      
      <View style={{ flex: 1, alignItems: "center" }}>
        <Html stylesheet={stylesheet}>{newBody}</Html>
      </View>
    </View>
  );
};

export default BodyPDF;
