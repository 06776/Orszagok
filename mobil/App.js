/*
* File: App.js
* Author: Hajdara Patrik
* Copyright: 2024, Hajdara Patrik
* Group: SZOFT II/2/N
* Date: 2024-03-13
* Github: https://github.com/06776/
* Licenc: GNU GPL
*/

import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";

export default function App() {
  let host = "http://localhost:8000/";
  let endpoint = "orszagok";
  let url = host + endpoint;

  const [orszagok, setOrszagok] = useState([]);
  const [showOrszagok, setShowOrszagok] = useState(false);

  function getOrszagok() {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setOrszagok(res);
        setShowOrszagok(true);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Országok adatai</Text>
      <Pressable onPress={getOrszagok} style={styles.button}>
        <Text style={styles.buttonText}>Adatok lekérése</Text>
      </Pressable>
      {showOrszagok && (
        <ScrollView style={styles.tableContainer}>
          {orszagok.map((orszag, index) => (
            <View key={index} style={styles.countryContainer}>
              <Text style={styles.countryName}>Ország neve: {orszag.nev}</Text>
              <View style={styles.dataRow}>
                <Text style={styles.label}>Terület:</Text>
                <Text style={styles.data}>{orszag.terulet} km²</Text>
              </View>
              <View style={styles.dataRow}>
                <Text style={styles.label}>Népesség:</Text>
                <Text style={styles.data}>{orszag.nepesseg} fő</Text>
              </View>
              <View style={styles.dataRow}>
                <Text style={styles.label}>Főváros:</Text>
                <Text style={styles.data}>{orszag.fovaros}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
      <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; 2024 | Hajdara Patrik</Text>
        <Text style={styles.footerText}>BZSH Külkereskedelmi Technikum</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  tableContainer: {
    backgroundColor: "lightgreen",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    maxHeight: 400,
    padding: 10,
  },
  countryContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  countryName: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
    fontSize: 16,
  },
  dataRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
    marginRight: 5,
    color: "#555",
  },
  data: {
    color: "#333",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "grey",
    paddingVertical: 10,
    alignItems: "center",
  },
  footerText: {
    color: "white",
  },
});
