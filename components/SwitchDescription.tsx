import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Switch} from 'react-native-switch';

const SwitchDescription = ({
  value,
  setValue,
  title,
  SubTitle,
}: {
  value: boolean;
  setValue: (value: boolean) => void;
  title: string;
  SubTitle: string;
}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 18,
          color: '#000',
          fontWeight: 'bold',
        }}>
        {title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <Text
          style={{
            fontSize: 14,
            color: '#000',
            width: '75%',
            lineHeight: 20,
          }}>
          {SubTitle}
        </Text>

        <View
          style={{
            elevation: 10,
            shadowColor: '#757575',
            borderRadius: 20,
            height: 33,
            width: 55,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Switch
            value={value}
            onValueChange={val => setValue(val)}
            disabled={false}
            circleSize={20}
            barHeight={23}
            circleBorderWidth={0}
            backgroundActive={'#FFF'}
            backgroundInactive={'#FFF'}
            circleActiveColor={'#FA4248'}
            circleInActiveColor={'#E8E8E8'}
            changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
            renderActiveText={false}
            renderInActiveText={false}
            switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
            switchRightPx={1.8} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
            switchWidthMultiplier={2.25} // multiplied by the circleSize prop to calculate total width of the Switch
            switchBorderRadius={20} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
          />
        </View>
      </View>
    </View>
  );
};

export default SwitchDescription;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '8%',
    backgroundColor: 'white',
    gap: 10,
  },
});
