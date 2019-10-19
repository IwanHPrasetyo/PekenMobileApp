import React, {Component} from 'react';
import Product from '../Componens/Product';
import {
  Container,
  Content,
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
  H1,
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
      .get('http://3.80.248.213:5000/products?limit=' + this.state.limit)
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
      <Container style={{backgroundColor: '#dff9fb'}}>
        <Header style={style.header}>
          <Left />
          <Body>
            <Row size={1}>
              <Col size={3}>
                <H1 style={{marginLeft: -25, marginTop: 15, color: '#ffff'}}>
                  Peken App
                </H1>
              </Col>
              <Col size={1}>
                <Item
                  rounded
                  style={{
                    width: 200,
                    height: 40,
                    marginLeft: 30,
                    marginTop: 10,
                    backgroundColor: '#ffff',
                  }}>
                  <Input style={{marginLeft: 20}} />
                  <Icon active name="search" />
                </Item>
              </Col>
            </Row>
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
                <ScrollView>
                  {this.state.data.map(item => {
                    return (
                      <Product
                        id_product={item.id_product}
                        name={item.name}
                        price={item.price}
                        picture={item.picture}
                        category={item.category}
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
              <Icon
                name="nutrition"
                onPress={() => this.props.navigation.navigate('Masterproduct')}
              />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('History')}>
              <Icon name="bookmarks" />
            </Button>
            <Button
              active
              onPress={() => this.props.navigation.navigate('Home')}>
              <Icon active name="home" />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Ceckout')}>
              <Icon name="cart" />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Login')}>
              <Icon name="close" />
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
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  cardMenu: {
    backgroundColor: 'white',
    height: 250,
    margin: 20,
    marginTop: -190,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
