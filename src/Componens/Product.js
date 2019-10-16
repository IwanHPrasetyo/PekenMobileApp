import React, {Component} from 'react';
import {Grid, Row, Col, H2, Text, Button, Icon} from 'native-base';
import {StyleSheet, Image} from 'react-native';
class Product extends Component {
  render() {
    return (
      <Row style={style.card}>
        <Col size={1} style={style.image}>
          <Image
            style={{
              width: 110,
              height: 100,
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20,
            }}
            source={require('../Images/backgorund.jpg')}></Image>
        </Col>
        <Col size={2} style={{padding: 10}}>
          <H2 style={{marginLeft: 20}}>Brocoli</H2>
          <Text style={{marginTop: 10, marginLeft: 20}}>€ 10</Text>
        </Col>
        <Col size={1} style={style.cardBuy}>
          <Button iconLeft style={style.buttonBuy}>
            <Icon name="cart" />
          </Button>
        </Col>
      </Row>
    );
  }
}

const style = StyleSheet.create({
  card: {
    height: 100,
    marginTop: 10,
    backgroundColor: '#ffff',
    elevation: 0,
    borderRadius: 20,
  },
  image: {
    backgroundColor: 'pink',
    borderRadius: 20,
  },
  cardBuy: {
    borderRadius: 20,
    padding: 10,
  },
  buttonBuy: {
    padding: 25,
    marginTop: 20,
    borderRadius: 20,
    elevation: 4,
  },
});
export default Product;
