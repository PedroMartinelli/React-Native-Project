import { VStack } from 'native-base';

import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export function Register() {
  return (
    <VStack flex={1} p={6} bg='gray.600' >
      <Header title='Nova solicitação'/>

      <Input
        placeholder='Número do patrimônio'
      />

      <Input 
        placeholder='Descrição do problema'
        mt={5}
        flex={1}
        multiline
        textAlignVertical='top'
      />
      <Button
        mt={5}
        title='Cadastrar'
      />
    </VStack>
  );
}