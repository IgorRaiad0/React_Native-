import { StyleSheet } from 'react-native';



export default StyleSheet.create({
  cardContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginVertical: 10,
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  roleText: {
    fontSize: 16,
    color: 'gray',
  },
});