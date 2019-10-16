import React, {Component} from 'react';
import {Card, CardItem, Body, Text, Grid, Row, Col} from 'native-base';
import {StyleSheet} from 'react-native';
class Product extends Component {
  render() {
    return (
      <Card style={style.card}>
        <CardItem>
          <Body>
            <Text>//Your text here</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const style = StyleSheet.create({
  card: {
    height: 100,
    elevation: 0,
  },
});
export default Product;
