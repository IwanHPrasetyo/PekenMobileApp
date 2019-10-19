import React, {Component} from 'react';
import {
  Grid,
  Row,
  Col,
  H2,
  Text,
  Button,
  Icon,
  Card,
  CardItem,
  Body,
} from 'native-base';
import {StyleSheet, Image} from 'react-native';
class Product extends Component {
  render() {
    //console.log(this.props.name);
    return (
      <Row style={style.card}>
        <Col size={1} style={style.image}>
          <Image
            style={{
              width: 100,
              height: 100,
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20,
            }}
            source={{
              uri:
                'http://3.80.248.213:5000/public/images/' + this.props.picture,
            }}></Image>
        </Col>
        <Col size={2} style={{padding: 10}}>
          <Text style={{marginLeft: 20}}>{this.props.name}</Text>
          <Text style={{marginTop: 10, marginLeft: 20}}>
            € {this.props.price}
          </Text>
          <Card
            style={{
              width: 100,
              borderRadius: 50,
              elevation: 1,
              backgroundColor: 'red',
            }}>
            <CardItem>
              <Body>
                <Text>{this.props.category}</Text>
              </Body>
            </CardItem>
          </Card>
        </Col>
        <Col size={1} style={style.cardBuy}>
          <Button
            iconLeft
            style={style.buttonBuy}
            onPress={() => this.props.AddtoCart(e, this.props)}>
            <Icon name="cart" />
          </Button>
        </Col>
      </Row>
    );
  }
}

const style = StyleSheet.create({
  card: {
    height: 130,
    marginTop: 10,
    backgroundColor: '#ffffff',
    elevation: 1,
    borderRadius: 20,
  },
  image: {
    borderRadius: 0,
    margin: 10,
  },
  cardBuy: {
    borderRadius: 20,
    padding: 10,
  },
  buttonBuy: {
    padding: 25,
    marginTop: 30,
    borderRadius: 20,
    elevation: 4,
  },
});
export default Product;
