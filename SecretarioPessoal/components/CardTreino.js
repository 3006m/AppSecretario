import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CardTreino({ nome, exercicios, concluido, onConcluir }) {
  return (
    <View style={[styles.card, concluido && styles.cardConcluido]}>
      <Text style={styles.titulo}>🏋️ {nome}</Text>
      {exercicios.map((ex, idx) => (
        <Text key={idx} style={styles.item}>
          • {ex}
        </Text>
      ))}

      <TouchableOpacity
        style={[styles.botao, concluido && styles.botaoConcluido]}
        onPress={onConcluir}
      >
        <Text style={styles.textoBotao}>
          {concluido ? "✅ Concluído" : "Concluir treino"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e1e1e",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  titulo: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  item: {
    color: "#00e8f0ff",
    fontSize: 14,
    marginBottom: 4,
  },

  botao: {
    backgroundColor: "#00e8f0ff",
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  textoBotao: {
    color: "#121212",
    fontWeight: "bold",
  },
});
