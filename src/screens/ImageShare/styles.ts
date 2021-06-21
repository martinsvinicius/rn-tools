import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 305,
    height: 159,
  },

  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },

  instructions: {
    color: '#888',
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 15,
  },

  button: {
    backgroundColor: '#8257e6',
    marginTop: 20,
    padding: 15,
    borderRadius: 5,
  },

  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
});
