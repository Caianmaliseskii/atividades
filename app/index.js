import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  const handleNavigateToPerfil = () => {
    router.push(`/perfil?name=${encodeURIComponent(name)}&avatarUrl=${encodeURIComponent(avatarUrl)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mini Perfil - Home</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="URL do avatar"
        value={avatarUrl}
        onChangeText={setAvatarUrl}
        keyboardType="url"
      />
      
      <Button 
        title="Ir para Perfil" 
        onPress={handleNavigateToPerfil} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
});