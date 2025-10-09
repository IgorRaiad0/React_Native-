import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './ProfileCardStyle';


const ProfileCard = ({ name, description }) => {
  return (
    <View style={styles.cardContainer}>
      <View>
        
        <Text style={styles.nameText}>{name}</Text>
        
        <Text style={styles.roleText}>{description}</Text>
      </View>
    </View>
  );
};


export default ProfileCard;