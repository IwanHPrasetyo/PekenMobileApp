import React, {Component} from 'react';
import Product from '../Componens/Product';
import {
  Container,
  Header,
  Footer,
  FooterTab,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Item,
  Input,
  Col,
  Text,
  H3,
} from 'native-base';
import axios from 'axios';
import {Row, Grid} from 'react-native-easy-grid';
import {StyleSheet, Image, SafeAreaView, ScrollView} from 'react-native';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      page: 0,
      limit: 10,
    };
  }

  async componentDidMount() {
    this.getAll();
  }

  getAll = async () => {
    await axios
      .get('http://192.168.1.5:5000/products?limit=' + this.state.limit)
      .then(result => {
        this.setState({
          data: result.data.data,
          pages: result.data.page,
        });
        //console.log(this.state.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Container style={{backgroundColor: '#c7ecee'}}>
        <Header style={style.header}>
          <Left />
          <Body>
            <Item
              rounded
              style={{
                width: 200,
                height: 40,
                marginLeft: 180,
                marginTop: 10,
                backgroundColor: '#ffff',
              }}>
              <Input style={{marginLeft: 20}} placeholder="search" />
              <Icon active name="search" />
            </Item>
          </Body>
          <Right />
        </Header>
        <Grid>
          <Row style={style.cardHeader}></Row>
          <Row style={style.cardMenu}>
            <Row>
              <Col size={1}>
                <Row>
                  <Button iconRight light style={style.buttonBuy}>
                    <Col>
                      <Image
                        style={style.image}
                        source={require('../Images/bulbs.png')}
                      />
                      <Text style={{marginLeft: -25, marginTop: 10}}>
                        Bulbs
                      </Text>
                    </Col>
                  </Button>
                </Row>
                <Row>
                  <Button iconRight light style={style.buttonBuy}>
                    <Col>
                      <Image
                        style={style.image}
                        source={require('../Images/flower.png')}
                      />
                      <Text style={{marginLeft: -25, marginTop: 10}}>
                        Flower
                      </Text>
                    </Col>
                  </Button>
                </Row>
              </Col>
              <Col size={1}>
                <Row>
                  <Button iconRight light style={style.buttonBuy}>
                    <Col>
                      <Image
                        style={style.image}
                        source={require('../Images/fruit.png')}
                      />
                      <Text style={{marginLeft: -25, marginTop: 10}}>
                        Fruit
                      </Text>
                    </Col>
                  </Button>
                </Row>
                <Row>
                  <Button iconRight light style={style.buttonBuy}>
                    <Col>
                      <Image
                        style={style.image}
                        source={require('../Images/fungi.png')}
                      />
                      <Text style={{marginLeft: -25, marginTop: 10}}>
                        Fungi
                      </Text>
                    </Col>
                  </Button>
                </Row>
              </Col>
              <Col size={1}>
                <Row>
                  <Button iconRight light style={style.buttonBuy}>
                    <Col>
                      <Image
                        style={style.image}
                        source={require('../Images/leaves.png')}
                      />
                      <Text style={{marginLeft: -25, marginTop: 10}}>
                        Leaves
                      </Text>
                    </Col>
                  </Button>
                </Row>
                <Row>
                  <Button iconRight light style={style.buttonBuy}>
                    <Col>
                      <Image
                        style={style.image}
                        source={require('../Images/roots.png')}
                      />
                      <Text style={{marginLeft: -25, marginTop: 10}}>
                        Roots
                      </Text>
                    </Col>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Row>
          <Row>
            <Col style={{paddingLeft: 20, paddingRight: 20}}>
              <H3>Product</H3>
              <SafeAreaView>
                <ScrollView style={{}}>
                  {this.state.data.map(item => {
                    return (
                      <Product
                        id_product={item.id_product}
                        name={item.name}
                        price={item.price}
                        picture={item.picture}
                        handleAddToCart={this.handleAddToCart}
                      />
                    );
                  })}
                </ScrollView>
              </SafeAreaView>
            </Col>
          </Row>
        </Grid>

        <Footer>
          <FooterTab style={{backgroundColor: 'white', elevation: 40}}>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  header: {
    backgroundColor: '#22a6b3',
    paddingLeft: 0,
  },
  image: {
    marginLeft: -30,
  },
  cardHeader: {
    backgroundColor: '#22a6b3',
    height: 200,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  cardMenu: {
    backgroundColor: 'white',
    height: 250,
    margin: 20,
    marginTop: -190,
    borderRadius: 20,
    padding: 10,
  },
  buttonBuy: {
    padding: 25,
    elevation: 4,
    height: 114,
    width: 139,
    padding: 20,
    paddingLeft: 60,
    backgroundColor: 'white',
    elevation: 2,
  },
});

export default Home;
