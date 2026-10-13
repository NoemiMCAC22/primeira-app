import { Tarefa } from './types';
import { View, Text, TextInput, FlatList } from 'react-native';
import { useState } from 'react';
import AppButton from '../../components/AppButton/appButton';
import TarefaCard from './components/TarefaCard';


const data = [
    {
        id: '1',
        titulo: 'Regar as Plantas',
        concluida: false
    },

    {
        id: '2',
        titulo: 'Verificar o nível de água do reservatório',
        concluida: true
    },

    {
        id: '3',
        titulo: 'Limpar os filtros do sistema de rega',
        concluida: false
    }
] as Array<Tarefa>; // Tarefa[]

const TarefasScreen = () => {
    const [novaTarefa, setNovaTarefa] = useState("");
    const [tarefas, setTarefas] = useState(data as Tarefa[]);
    return (
        <View style={{ flex: 1, width: '100%' }}>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >

                <TextInput
                    value={novaTarefa}
                    onChangeText={setNovaTarefa} // (text) => setEmail(text)
                    placeholder="Insira nova tarefa"
                />

                <AppButton
                    title="Inserir"
                    onPress={() => {
                        const novaTarefaObj = {
                            id: String(tarefas.length + 1), //.toString()
                            titulo: novaTarefa,
                            concluida: false,
                        } as Tarefa;

                        if (novaTarefa.length > 0) {
                            setTarefas([...tarefas, novaTarefaObj]);
                        }
                        setNovaTarefa("");
                    }}
                />
            </View>
            <FlatList
                contentContainerStyle={{ padding: 16 }}
                data={tarefas}
                keyExtractor={(item) => item.id}
                renderItem={({ item: tarefa }) => {
                    return (
                        <TarefaCard
                            tarefa={tarefa}
                            onToggle={(id) => {
                                setTarefas(tarefas.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t)));
                            }}
                            onDelete={(id) => {
                                setTarefas(tarefas.filter((t) => t.id !== id));
                            }}
                        />
                    );
                }}
            />

        </View>
    );
}

export default TarefasScreen;