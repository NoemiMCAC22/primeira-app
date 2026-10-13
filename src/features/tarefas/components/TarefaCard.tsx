import { Tarefa } from '../types';
import { View, Text, TouchableOpacity } from 'react-native';
import AppButton from '../../../components/AppButton/appButton';


type TarefaCardProps = {
    tarefa: Tarefa;
    onToggle: (id: string) => void;   // concluir/desconcluir
    onDelete: (id: string) => void;   // eliminar
};

const TarefaCard = ({ tarefa, onToggle, onDelete }: TarefaCardProps) => {
    return (
        <View style={{ backgroundColor: '#fff', padding: 12, marginBottom: 8, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => onToggle(tarefa.id)}>
                <Text style={{ textDecorationLine: tarefa.concluida ? 'line-through' : 'none' }}>
                    {tarefa.titulo}
                </Text>
            </TouchableOpacity>
            <AppButton title="Eliminar" onPress={() => onDelete(tarefa.id)} color="#ff4d4d" />
        </View>
    );
};

export default TarefaCard;


