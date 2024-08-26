import React, { useState } from "react";
import { StyleSheet, View, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 50, // Add height to maintain aspect ratio
    objectFit: "contain", // Ensure the image is not distorted
  },
});


interface HeaderPDFProps {
  logoEtablissement: string;
  logoRepublique: string;
  logoUniversite: string;
}

const HeaderPDF: React.FC<HeaderPDFProps> = ({ logoEtablissement, logoRepublique, logoUniversite }) => {
  const [base64, setBase64]= useState<string>("")
  const [cleanBase64, setCleanBase64]= useState<string>("")
  function toDataURL(url: any, callback: any) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}

toDataURL('http://localhost:5000/variableGlobaleFiles/logoRepubliqueFiles/20240801091038554_a1t20vo_logoRepublique.png', function(dataUrl: any) {
 
  setCleanBase64(dataUrl.replace("data:text/html;base64,", ""))
  setBase64(`data:image/png;base64,${cleanBase64}`)
  console.log('RESULT:', base64)
})

  return (
    <View style={styles.headerContainer}>
      <View style={{ ...styles.logoContainer, alignItems: "flex-start" }}>
        <Image
          style={styles.logo}
          src={base64}
        />
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          style={styles.logo}
          src={`http://localhost:5000/files/variableGlobaleFiles/logoRepubliqueFiles/${logoRepublique}`}
        />
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <Image
          style={styles.logo}
          src={`http://localhost:5000/files/variableGlobaleFiles/logoUniversiteFiles/${logoUniversite}`}
        />
      </View>
    </View>
  );
};

export default HeaderPDF;
