import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CardTarefa({ titulo, horario, onEditar, onConcluir }) {
  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.titulo}>📌 {titulo}</Text>
        <Text style={styles.horario}>⏰ {horario}</Text>
      </View>
      <View style={styles.botoes}>
        <TouchableOpacity onPress={onEditar} style={styles.botao}>
          <Text style={styles.botaoTexto}>✏️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onConcluir} style={styles.botao}>
          <Text style={styles.botaoTexto}>✅</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e1e1e",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  titulo: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  horario: {
    color: "#00e8f0ff",
    fontSize: 14,
    marginTop: 4,
  },
  botoes: {
    flexDirection: "row",
    marginLeft: 12,
  },
  botao: {
    marginLeft: 8,
  },
  botaoTexto: {
    fontSize: 18,
    color: "#ffffff",
  },
});
