import React from 'react';
import { View, StyleSheet } from 'react-native';
import Medidas from '../medidas/Medidas';
import Cores from '../cores/Cores';


const ContatoCartao = (props) => {
  return (
      <View style = {{...estilo.contatocartao, ...props.estilo}}>
          {props.children}
      </View>
  );
};

const estilo = StyleSheet.create({
    contatocartao: {
        width: Medidas.width300,
        maxWidth: Medidas.maxWidth85,
        alignItems: 'center',
        shadowColor: Cores.preto,
        shadowOffset:{
            width: Medidas.width0,
            height: Medidas.height2
        },
        marginTop: Medidas.marginTop5,
        shadowRadius: Medidas.shadowRadius6,
        shadowOpacity: Medidas.shadowOpacity32,
        backgroundColor: Cores.branco,
        elevation: Medidas.elevation12
    }
})

export default ContatoCartao;