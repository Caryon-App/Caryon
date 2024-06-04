import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import InputWithIcon from "../general/InputWithIcon";
import RoundedButton from "../general/RoundedButton";

const PasswordRecoveryForm = () => {
  const [email, setEmail] = useState("");

  const handleSendRecoveryEmail = () => {
    // Implement logic to send a recovery email to the provided address
    Alert.alert(
      "Recuperar contraseña",
      `Se ha enviado un correo electrónico de recuperación a ${email}`
    );
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <InputWithIcon
            iconName="envelope"
            iconSize={20}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <RoundedButton
          title="Enviar mensaje"
          onPress={handleSendRecoveryEmail}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  buttonContainer: {
    marginHorizontal: 25,
  },
});

export default PasswordRecoveryForm;
