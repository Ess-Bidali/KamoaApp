import React from 'react';
import {Image, View} from 'react-native';
import PageWrapper from '../components/page-wrapper';
import {DetailInfo} from '../models/detail-info.interface';
import InfoItemsList from '../components/info-section/info-items-list';

function PrimerScreen(): React.JSX.Element {
  const title = 'Upload a 6 month M-Pesa Statement';

  const details: DetailInfo[] = [
    {
      title: 'Unlock the power of Kamoa with your M-Pesa',
      description:
        'Get access to the marketplace and help lenders see the real you by uploading a six month m-pesa statement',
    },
    {
      title: 'Get insights on your spending habits',
      description:
        'Kamoa helps you understand your spending  and track your finances every time you upload a statement',
    },
    {
      title: 'Secure a higher loan limit',
      description:
        'Users that share more information get access to higher loan limits with flexible payments and low interest rates',
    },
  ];

  return (
    <PageWrapper title={title}>
      <View>
        {/* Image */}
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />

        {/* Info Items List */}
        <InfoItemsList details={details} />

        {/* Progress Bar */}

        {/* Next Step Btn */}

        {/* Text Btn */}
      </View>
    </PageWrapper>
  );
}

export default PrimerScreen;
