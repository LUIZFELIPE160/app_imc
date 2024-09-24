import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import ResultImc from './ResultImc/index';
import styles from './style';

export default function Form() {
  const [height, setHeight] = React.useState(null)
  const [weight, setWeight] = React.useState(null)
  const [messageImc, setMessageImc] = useState('preencha o peso e a altura')
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState('calcular')

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }
  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc('seu imc é igual: ');
      setTextButton('calcular novamente');
      return;
    }
    setImc(null);
    setTextButton('calcular');
    setMessageImc('preencha o peso e a altura');
  }
  
  return (
    <View  style={styles.formContext}>
      <View  style={styles.form}>
        <Text style={styles.formLabel}> altura </Text>
        <TextInput style={styles.imput}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
        />
        <Text style={styles.formLabel} >Peso</Text>
        <TextInput style={styles.imput}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex. 80.00"
          keyboardType="numeric"
        />
        <TouchableOpacity
        style = {styles.buttonCalculator}
        onPress ={()=>{validationImc()
        }}>
        <Text style= {styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
       
      </View>

      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
