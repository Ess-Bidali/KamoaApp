import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {GlobalColors, GlobalFontSizes} from '../../../styles';
import DocumentPicker from 'react-native-document-picker';
import UploadButton from '../buttons/upload-button';

function StatementUploadForm(): React.JSX.Element {
  const [code, setCode] = useState('');

  const uploadFileOnPressHandler = async () => {
    try {
      const pickedFile = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf],
      });
      console.log('pickedFile', pickedFile);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(err);
      } else {
        console.log(err);
        throw err;
      }
    }
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.uploadInput}>
        <View>
          {/* Image */}
          <View style={styles.vectorImgContainer}>
            <Image
              style={styles.vectorImg}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
          </View>
          <Text style={styles.uploadInputText}>Upload M-pesa Statement</Text>
          <Text style={styles.uploadInputDesc}>
            Select the M-pesa statement from your phone
          </Text>

          {/* Upload Button */}
          <View style={styles.uploadBtnContainer}>
            <UploadButton
              title={'Select'}
              onPress={async () => {
                uploadFileOnPressHandler();
              }}
            />
          </View>
        </View>
      </View>

      <View style={styles.codeSegment}>
        <Text style={styles.codeInputLabel}>Enter the code you received</Text>

        <TextInput
          style={styles.codeInput}
          keyboardType="numeric"
          placeholder="243456"
          placeholderTextColor={GlobalColors.borderColor}
          value={code}
          onChangeText={setCode}
        />

        <View style={styles.codeInputBorder} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    display: 'flex',
    gap: 20,
  },

  uploadInput: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: GlobalColors.borderColor,
    backgroundColor: GlobalColors.greyBg,
    padding: 20,
  },

  uploadInputText: {
    textAlign: 'center',
    color: GlobalColors.headerColor,
    fontWeight: '500',
    fontSize: GlobalFontSizes.subheading,
  },

  uploadInputDesc: {
    textAlign: 'center',
    color: GlobalColors.grey,
  },

  vectorImgContainer: {
    alignItems: 'center',
  },

  vectorImg: {
    height: 30,
    width: 30,
    marginBottom: 10,
  },

  uploadBtnContainer: {
    alignItems: 'center',
    marginTop: 10,
  },

  codeSegment: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },

  codeInputLabel: {
    fontWeight: '500',
    color: GlobalColors.headerColor,
  },

  codeInput: {
    marginTop: -15,
    fontSize: GlobalFontSizes.mediumLarge,
  },

  codeInputBorder: {
    marginTop: -15,
    borderBottomWidth: 1,
    borderBottomColor: GlobalColors.inputBorder,
  },
});

export default StatementUploadForm;
