import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import Assets from '../../constants/images';

import {Item} from '../../constants/types';

const ItemView = React.memo(
  ({
    item,
    index,
    handleHeartClick,
    clickedItems,
  }: {
    item: Item;
    index: number;
    handleHeartClick: (index: number) => void;
    clickedItems: {
      [key: number]: boolean;
    };
  }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{uri: item.image_url}} style={styles.image} />
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemCategory}>{item.category}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
        <Image style={styles.basket} source={Assets.basket} />
        <TouchableOpacity
          style={styles.heartWrapper}
          onPress={() => handleHeartClick(index)}>
          <Image
            style={styles.heart}
            source={clickedItems[index] ? Assets.heart : Assets.heartUnfilled}
          />
        </TouchableOpacity>
      </View>
    );
  },
);

ItemView.displayName = 'ItemView';

const Items = ({
  selected,
  menuItems,
  data,
}: {
  selected: number;
  menuItems: {name: string; id: number}[];
  data: Item[];
}) => {
  const [loading, setLoading] = useState(false);
  const [clickedItems, setClickedItems] = useState<{
    [key: number]: boolean;
  }>({});
  const filteredData = useMemo(() => {
    if (selected === 0) {
      return data;
    }
    return data.filter(item => item.category === menuItems[selected].name);
  }, [selected, menuItems]);

  const handleHeartClick = useCallback((index: number) => {
    setClickedItems(prev => {
      return {
        ...prev,
        [index]: !prev[index],
      };
    });
  }, []);
  const handleEndReached = () => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };
  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator size="large" color="#FA4248" />;
  };
  const renderItem = useCallback(
    ({item, index}: {item: Item; index: number}) => (
      <ItemView
        item={item}
        index={index}
        handleHeartClick={handleHeartClick}
        clickedItems={clickedItems}
      />
    ),
    [clickedItems],
  );

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        bounces={false}
        columnWrapperStyle={styles.column}
        data={filteredData}
        windowSize={10}
        renderItem={renderItem}
        maxToRenderPerBatch={6}
        initialNumToRender={6}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
        keyExtractor={(item, index) => item + index.toString()}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  column: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    columnGap: 10,
    width: '100%',
    height: 230,
    marginBottom: 20,
  },
  itemContainer: {
    width: '47%',
    rowGap: 2,
    height: '100%',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'medium',
    color: '#111',
  },
  itemCategory: {
    fontSize: 12,
    color: '#929292',
  },
  itemPrice: {
    fontSize: 18,
    color: '#FA4248',
  },
  image: {
    height: '70%',
    width: '100%',
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: '#CECECE',
    borderRadius: 10,
  },
  basket: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    position: 'relative',
    top: -50,
    tintColor: '#FA4248',
    alignSelf: 'flex-end',
  },
  heartWrapper: {
    position: 'relative',
    top: -50,
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: 30,
    alignSelf: 'flex-end',
    height: 30,
  },
  heart: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
});
