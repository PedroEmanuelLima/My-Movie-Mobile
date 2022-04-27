import React from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";

export const ModalMovie = ({ title, overview, vote_average, modalVisible, setModalVisible }) => {

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{title}</Text>
            <Text style={styles.modalDescriptiont}>
                Description: {overview != null ? overview : "UNDEFINED"}
            </Text>
            <Text style={styles.modalAvaliacao}>Avaliação:
                {vote_average}
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  
  buttonClose: {
    backgroundColor: "#FF5733",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalTitle: {
    color: '#FF5733',
    fontSize: 30,
    marginTop: 5,
    marginBottom: 50,
  },
  modalDescriptiont: {
    fontSize: 20,
    marginBottom: 20,
  },
  modalAvaliacao:{
    fontSize: 16,
    marginBottom: 10,
  }
});