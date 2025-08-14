import { View, Text, StyleSheet } from "react-native";

export default function BannerSecretario() {
  return (
    <View style={styles.banner}>
      <Text style={styles.texto}>👋 Olá, Usuário!</Text>
      <Text style={styles.subtexto}>Aqui você pode gerenciar o seu dia. Vamos nessa?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#00e8f0ff",
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#121212",
  },
  subtexto: {
    fontSize: 16,
    color: "#121212",
    marginTop: 4,
  },
});
