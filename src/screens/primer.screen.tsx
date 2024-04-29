import React from 'react';
import {Text, View} from 'react-native';
import PageWrapper from '../components/page-wrapper';

function PrimerScreen(): React.JSX.Element {
  const title = 'Upload a 6 month M-Pesa Statement';

  return (
    <PageWrapper title={title}>
      <View>
        <Text>TEST</Text>
      </View>
    </PageWrapper>
  );
}

export default PrimerScreen;
