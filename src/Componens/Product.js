import React, {Component} from 'react';
import {Grid, Row, Col, H2, Text, Button, Icon} from 'native-base';
import {StyleSheet, Image} from 'react-native';
class Product extends Component {
  render() {
    //console.log(this.props.name);
    return (
      <Row style={style.card}>
        <Col size={1} style={style.image}>
          <Image
            style={{
              width: 80,
              height: 80,
              padding: 10,
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20,
            }}
            source={{
              uri:
                'http://192.168.1.5:5000/public/images/' + this.props.picture,
            }}></Image>
        </Col>
        <Col size={2} style={{padding: 10}}>
          <Text style={{marginLeft: 20}}>{this.props.name}</Text>
          <Text style={{marginTop: 10, marginLeft: 20}}>
            € {this.props.price}
          </Text>
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
    height: 80,
    marginTop: 10,
    backgroundColor: '#ffff',
    elevation: 0,
    borderRadius: 20,
  },
  image: {
    borderRadius: 0,
    paddingLeft: 5,
  },
  cardBuy: {
    borderRadius: 20,
    padding: 10,
  },
  buttonBuy: {
    padding: 25,
    marginTop: 10,
    borderRadius: 20,
    elevation: 4,
  },
});
export default Product;
