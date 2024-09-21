import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import ResultImc from './ResultImc/index';

export default function Form() {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
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
    <View>
      <View>
        <Text> altura </Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
        />
        <Text>peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex. 80"
          keyboardType="numeric"
        />
        <Button onPress={() => validationImc()} title={textButton} />
      </View>

      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
