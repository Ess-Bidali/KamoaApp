import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GlobalColors} from '../../../styles';
import * as Progress from 'react-native-progress';

function AppProgressBar({
  title,
  progress,
}: {
  title: string;
  progress: number;
}): React.JSX.Element {
  return (
    <View style={styles.progressContainer}>
      {title && <Text style={styles.progressTitle}>{title}</Text>}

      <Progress.Bar
        progress={progress}
        width={140}
        height={12}
        color={GlobalColors.secondary}
        borderColor={GlobalColors.transparent}
        borderRadius={8}
        unfilledColor={GlobalColors.primary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  progressTitle: {
    color: GlobalColors.headerColor,
    fontWeight: '500',
    marginBottom: 5,
  },

  progressContainer: {
    alignItems: 'center',
  },
});

export default AppProgressBar;
