import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Gastos_Prueba = [
    { id: '1', descripcion: 'Supermercado', monto: 25000 },
    { id: '2', descripcion: 'Combustible', monto: 18000 },
    { id: '3', descripcion: 'Internet', monto: 32000 },
];

export default function ExpensesScreen(){
    const navigation = useNavigation();

    const vistaGastos = ({item}) =>(
        <View style={styles.itemContainer}>
            <Text style={styles.descripcion}>{item.descripcion}</Text>
            <Text style={styles.monto}>${item.monto}</Text>
        </View>
    );
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Mis Gastos</Text>

            <FlatList
                data={Gastos_Prueba}
                keyExtractor={(item) => item.id}
                renderItem={vistaGastos}
                contentContainerStyle={styles.lista}
            />

            <View style={{ marginBottom: 15 }}>
                <Button 
                    title="+ Añadir Gasto" 
                    color="#2c3e50"
                    onPress={() => navigation.navigate('NuevoGasto')} 
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 20,
        backgroundColor: '#fffefe',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#2c3e50',
        textAlign: 'center',
    },
    lista: {
        paddingBottom: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f8f9fa',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#e9ecef',
    },
    descripcion: {
        fontSize: 16,
        color: '#000000',
        fontWeight: '500',
    },
    monto: {
        fontSize: 16,
        color: '#f81900',
        fontWeight: 'bold',
    },
});