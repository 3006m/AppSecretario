import { useState } from "react";
import { ScrollView, View, TextInput, Button } from "react-native";
import BannerSecretario from "../components/BannerSecretario";
import CardTarefa from "../components/CardTarefa";
import CardTreino from "../components/CardTreino";

// 🧠 Treinos fixos
const treinos = {
  push: {
    nome: "Push Day",
    exercicios: [
      "Supino reto — 4x10 — 60kg",
      "Desenvolvimento militar — 3x12 — 40kg",
      "Tríceps corda — 3x15 — 25kg",
    ],
  },
  pull: {
    nome: "Pull Day",
    exercicios: [
      "Puxada frente — 4x10 — 50kg",
      "Remada curvada — 3x12 — 40kg",
      "Rosca direta — 3x15 — 20kg",
    ],
  },
  legs: {
    nome: "Leg Day",
    exercicios: [
      "Agachamento — 4x10 — 80kg",
      "Leg press — 3x12 — 120kg",
      "Panturrilha — 3x20 — 40kg",
    ],
  },
};

function getTreinoDoDia() {
  const dia = new Date().getDate();
  const ordem = ["push", "pull", "legs"];
  const tipo = ordem[dia % 3];
  return treinos[tipo];
}

export default function HojeScreen() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [horario, setHorario] = useState("");
  const [editandoIndex, setEditandoIndex] = useState(null);
  const [treinoConcluido, setTreinoConcluido] = useState(false);

  const treinoHoje = getTreinoDoDia();

  const adicionarOuEditarTarefa = () => {
    if (novaTarefa.trim() === "") return;

    if (editandoIndex !== null) {
      const atualizadas = [...tarefas];
      atualizadas[editandoIndex] = { titulo: novaTarefa, horario };
      setTarefas(atualizadas);
      setEditandoIndex(null);
    } else {
      setTarefas([...tarefas, { titulo: novaTarefa, horario }]);
    }

    setNovaTarefa("");
    setHorario("");
  };

  const editarTarefa = (index) => {
    setNovaTarefa(tarefas[index].titulo);
    setHorario(tarefas[index].horario);
    setEditandoIndex(index);
  };

  const concluirTarefa = (index) => {
    const atualizadas = tarefas.filter((_, i) => i !== index);
    setTarefas(atualizadas);
  };

  return (
    <ScrollView style={{ padding: 20, backgroundColor: "#121212" }}>
      <BannerSecretario />

      <TextInput
        placeholder="Nova tarefa"
        placeholderTextColor="#888"
        value={novaTarefa}
        onChangeText={setNovaTarefa}
        style={{
          backgroundColor: "#1e1e1e",
          color: "#fff",
          padding: 12,
          borderRadius: 8,
          marginBottom: 8,
        }}
      />
      <TextInput
        placeholder="Horário (ex: 14:00)"
        placeholderTextColor="#888"
        value={horario}
        onChangeText={setHorario}
        style={{
          backgroundColor: "#1e1e1e",
          color: "#fff",
          padding: 12,
          borderRadius: 8,
          marginBottom: 12,
        }}
      />
      <Button
        title={editandoIndex !== null ? "Salvar Edição" : "Adicionar Tarefa"}
        onPress={adicionarOuEditarTarefa}
        color="#00e8f0ff"
      />

      <View style={{ marginTop: 20 }}>
        {tarefas.map((tarefa, index) => (
          <CardTarefa
            key={index}
            titulo={tarefa.titulo}
            horario={tarefa.horario}
            onEditar={() => editarTarefa(index)}
            onConcluir={() => concluirTarefa(index)}
          />
        ))}
      </View>

      {/* 🏋️ Card de Treino do Dia */}
      <View style={{ marginTop: 30 }}>
        <CardTreino
          nome={treinoHoje.nome}
          exercicios={treinoHoje.exercicios}
          concluido={treinoConcluido}
          onConcluir={() => setTreinoConcluido(!treinoConcluido)}
        />
      </View>
    </ScrollView>
  );
}
