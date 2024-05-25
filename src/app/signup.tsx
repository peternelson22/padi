import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { defaultStyles } from '../constants/Styles';
import { useState } from 'react';
import Colors from '../constants/Colors';
import { Link } from 'expo-router';
const Page = () => {
  const [countryCode, setCountryCode] = useState('+234');
  const [phoneNumber, setPhoneNumber] = useState('');

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;

  const onSignUp = () => {};
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior='padding'
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Let's get started</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter your phone number. We will send you a confirmation code!
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { width: 100 }]}
            placeholder='Country code'
            keyboardType='numeric'
            placeholderTextColor={Colors.gray}
            value={countryCode}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder='Mobile number'
            placeholderTextColor={Colors.gray}
            keyboardType='numeric'
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          ></TextInput>
        </View>
        <Link href={'/login'} replace asChild>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 18, fontWeight: '500' }}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity>
              <Text style={defaultStyles.textLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </Link>
        <View style={{ flex: 1 }} />

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            phoneNumber !== '' ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={onSignUp}
        >
          <Text style={defaultStyles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Page;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});
