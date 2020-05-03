import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Keyboard } from 'react-native';
import ContatoInput from './componentes/ContatoInput';
import ContatoItem from './componentes/ContatoItem';
import Medidas from './medidas/Medidas';
import ContatoCartao from './componentes/ContatoCartao';
import Cores from './cores/Cores';

export default function App() {
  const [contatos, setContatos] = useState ([]);
  const [id, setId] = useState (10);

  const removerContato = (idASerRemovida) => {
    setContatos (contatos => {
      return contatos.filter ((contato) => {
        return contato.id !== idASerRemovida
      })
    });
  };

  const adicionarContato = (nome, telefone) => {
    Keyboard.dismiss();
    setContatos(contatos => {
      //console.log(contatos); para checar os ID's pelo terminal
      setId(id + 2);
      return [...contatos, {
        id: id.toString(),
        nome: nome,
        telefone: telefone
      }];
    });
  }

  return (
    <View style = {styles.container}>
      <View>
        <ContatoInput
          onAdicionarContato = {adicionarContato}
        />
        </View>
        <FlatList
          data = {contatos}
          renderItem = {
            contato => (
              // Mostra o ID (10) + nome + tel
              <ContatoCartao estilo = {styles.ContatoItem}>
                <ContatoItem
                  id = {contato.item.id}
                  nome = {contato.item.nome}
                  telefone = {contato.item.telefone}
                  onDelete = {removerContato}
                />
              </ContatoCartao>
            )
          }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Medidas.marginTop10,
    padding: Medidas.padding20,
    flex: Medidas.flex1,
    backgroundColor: Cores.branco,
    alignItems: 'center',
    justifyContent: 'center',
 },
})