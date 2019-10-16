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
  Title,
  Col,
  Text,
} from 'native-base';
import {Row, Grid} from 'react-native-easy-grid';
import {StyleSheet, Image} from 'react-native';
class Home extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#c7ecee'}}>
        <Header style={style.header}>
          <Left />
          <Body>
            <Title>Peken App</Title>
          </Body>
          <Right />
        </Header>
        <Grid>
          <Row style={style.cardHeader}></Row>
          <Row style={style.cardMenu}>
            <Row>
              <Col size={1}>
                <Row>
                  <Button
                    iconRight
                    light
                    style={{width: 140, height: 115, backgroundColor: '#ffff'}}>
                    <Icon name="arrow-forward" />
                  </Button>
                </Row>
                <Row>
                  <Button
                    iconRight
                    light
                    style={{width: 140, height: 115, backgroundColor: '#ffff'}}>
                    <Icon name="arrow-forward" />
                  </Button>
                </Row>
              </Col>
              <Col size={1}>
                <Row>
                  <Button
                    iconRight
                    light
                    style={{width: 140, height: 115, backgroundColor: '#ffff'}}>
                    <Icon name="arrow-forward" />
                  </Button>
                </Row>
                <Row>
                  <Button
                    light
                    style={{width: 140, height: 115, backgroundColor: '#ffff'}}>
                    <Icon name="arrow-forward" />
                  </Button>
                </Row>
              </Col>
              <Col size={1}>
                <Row>
                  <Button
                    light
                    style={{width: 140, height: 115, backgroundColor: '#ffff'}}>
                    <Icon name="arrow-forward" />
                  </Button>
                </Row>
                <Row>
                  <Button
                    light
                    style={{width: 140, height: 115, backgroundColor: '#ffff'}}>
                    <Icon name="arrow-forward" />
                  </Button>
                </Row>
              </Col>
            </Row>
          </Row>
          <Row>
            <Col style={{paddingLeft: 40, paddingRight: 40}}>
              <Product />
              <Product />
              <Product />
              <Product />
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
    paddingLeft: 130,
  },
  cardHeader: {
    backgroundColor: '#22a6b3',
    height: 150,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  cardMenu: {
    backgroundColor: 'white',
    height: 250,
    margin: 20,
    marginTop: -120,
    borderRadius: 10,
    padding: 10,
  },
});

export default Home;
