import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function PerfilScreen() {
  const { name, avatarUrl } = useLocalSearchParams();
  
  // Decode the parameters that were encoded in the navigation
  const decodedName = decodeURIComponent(name || '');
  const decodedAvatarUrl = decodeURIComponent(avatarUrl || '');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mini Perfil</Text>
      
      {decodedAvatarUrl ? (
        <Image 
          source={{ uri: decodedAvatarUrl }} 
          style={styles.avatar} 
        />
      ) : (
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.placeholderText}>Sem imagem</Text>
        </View>
      )}
      
      <Text style={styles.name}>{decodedName || 'Nome não informado'}</Text>
      <Text style={styles.subtitle}>Este é o seu perfil</Text>
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
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  avatarPlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ddd',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    color: '#999',
    fontSize: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});