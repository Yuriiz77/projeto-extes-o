import {Button, SafeAreaView, Text, TextInput, View} from 'react-native';
import { styles } from './style';
import { useState } from 'react';

function App() {

const [cep, setCep] = useState("");
const [resultado, setResultado] = useState("");

async function ConsultarCep(){

  console.log(cep);

  const req= await fetch("https://viacep.com.br/ws/" + cep + "/json/");

  const retorno = await req.json();
  console.log(retorno);

  setResultado("Cidade: " + retorno.localidade); 
  }

    return <SafeAreaView style={styles.container}>
    <Text style={styles.titulo}>Consulta CEP</Text>

      <View style={styles.form}>
     <TextInput placeholder="Digite o cep..." 
                   style={styles.TextInput}
                   onChangeText={texto =>setCep(texto)} />
     <Button title="Consultar" onPress={ConsultarCep} />
    </View>

    <View style={styles.form}> 
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
    </SafeAreaView>
}

export default App;