import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const CustomMarker = React.memo(() => (
  <View style={styles.outerMarker}>
    <View style={styles.markerStyle} />
  </View>
));
CustomMarker.displayName = 'CustomMarker';

interface CustomLabelProps {
  oneMarkerLeftPosition: number;
  twoMarkerLeftPosition: number;
  oneMarkerValue: number | string;
  twoMarkerValue: number | string;
}

const CustomLabel = React.memo(
  ({
    oneMarkerLeftPosition,
    twoMarkerLeftPosition,
    oneMarkerValue,
    twoMarkerValue,
  }: CustomLabelProps) => (
    <View style={styles.labelsContainer}>
      {[
        {left: oneMarkerLeftPosition, value: oneMarkerValue},
        {left: twoMarkerLeftPosition, value: twoMarkerValue},
      ].map((marker, index) => (
        <View key={index} style={styles.labelWrapper}>
          <View
            style={[
              styles.label,
              {left: marker.left - (index === 0 ? 35 : 105)},
            ]}>
            <Text style={styles.valueText}>${marker.value}</Text>
          </View>
          <View
            style={[
              styles.labelTriangle,
              {left: marker.left - (index === 0 ? 35 : 105)},
            ]}
          />
        </View>
      ))}
    </View>
  ),
);
CustomLabel.displayName = 'CustomLabel';

const PriceRange = ({
  values,
  setValues,
  max,
}: {
  values: number[];
  max: number;
  setValues: (values: number[]) => void;
}) => {
  const onValuesChange = (newValues: number[]) => setValues(newValues);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Price</Text>
      <View style={styles.wrapper}>
        <MultiSlider
          values={values}
          min={0}
          max={max}
          step={1}
          enableLabel={true}
          onValuesChange={onValuesChange}
          customMarker={CustomMarker}
          customLabel={({
            oneMarkerLeftPosition,
            twoMarkerLeftPosition,
            oneMarkerValue,
            twoMarkerValue,
          }) => (
            <CustomLabel
              oneMarkerLeftPosition={oneMarkerLeftPosition}
              twoMarkerLeftPosition={twoMarkerLeftPosition}
              oneMarkerValue={oneMarkerValue}
              twoMarkerValue={twoMarkerValue}
            />
          )}
          selectedStyle={styles.selectedSlider}
          unselectedStyle={styles.unselectedSlider}
          sliderLength={240}
        />
      </View>
    </View>
  );
};

PriceRange.displayName = 'PriceRange';

export default PriceRange;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
  },
  wrapper: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
  },
  outerMarker: {
    height: 18,
    width: 18,
    borderRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
  markerStyle: {
    height: 12,
    width: 12,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  labelsContainer: {
    flexDirection: 'row',
  },
  labelWrapper: {
    marginBottom: -10,
  },
  label: {
    backgroundColor: 'red',
    borderRadius: 20,
    width: 70,
    height: 30,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelTriangle: {
    backgroundColor: 'red',
    transform: [{rotate: '45deg'}],
    width: 10,
    height: 10,
    position: 'relative',
    top: -5,
    alignSelf: 'center',
  },
  valueText: {
    fontSize: 16,
    color: '#fff',
  },
  selectedSlider: {
    backgroundColor: 'red',
  },
  unselectedSlider: {
    backgroundColor: '#e0e0e0',
  },
});
