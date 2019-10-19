import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Left,
  Body,
  Text,
  Footer,
  FooterTab,
  Button,
  Icon,
  Title,
} from 'native-base';
import {StyleSheet, Image, SafeAreaView, ScrollView} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
class Masterproduct extends Component {
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
      <Container>
        <Content>
          <Header style={{backgroundColor: '#22a6b3'}}>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate('Home')}>
                <Icon style={{color: '#ffff'}} name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title style={{color: '#ffff'}}>Add Data</Title>
            </Body>
          </Header>
          <Grid>
            <Row>
              <Col style={{backgroundColor: '#ffff', padding: 20, height: 600}}>
                <SafeAreaView>
                  <ScrollView>
                    {this.state.data.map(item => {
                      return (
                        <Row
                          style={{
                            height: 100,
                            backgroundColor: '#ffff',
                            borderRadius: 20,
                            elevation: 2,
                            marginBottom: 10,
                          }}>
                          <Col size={2}>
                            <Image
                              style={{
                                width: 100,
                                height: 100,
                                marginLeft: 10,
                                borderTopRightRadius: 20,
                                borderBottomLeftRadius: 20,
                              }}
                              source={{
                                uri:
                                  'http://192.168.1.7:5000/public/images/img-1570233233557-7.png',
                              }}></Image>
                          </Col>
                          <Col size={2} style={{margin: 20}}>
                            <Text>Brocoly</Text>
                            <Text>Rp.2000</Text>
                            <Text>3</Text>
                          </Col>
                          <Col size={2} style={{margin: 20, marginTop: 30}}>
                            <Row size={1}>
                              <Col size={1}>
                                <Button info style={{width: 40, height: 30}}>
                                  <Text>-</Text>
                                </Button>
                              </Col>
                              <Col size={1}>
                                <Text style={{marginLeft: 15, marginTop: 3}}>
                                  2
                                </Text>
                              </Col>
                              <Col size={1}>
                                <Button info style={{width: 40, height: 30}}>
                                  <Text>+</Text>
                                </Button>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      );
                    })}
                  </ScrollView>
                </SafeAreaView>
              </Col>
            </Row>
            <Row>
              <Col
                style={{
                  backgroundColor: '#ffff',
                  padding: 0,
                  height: 117,
                  padding: 10,
                }}>
                <Button style={{marginBottom: 10, borderRadius: 20}} block info>
                  <Text>Add Data</Text>
                </Button>
                <Button block danger style={{borderRadius: 20}}>
                  <Text>Cancel</Text>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col style={{backgroundColor: '#ffff', padding: 0, height: 55}}>
                <Footer>
                  <FooterTab style={{backgroundColor: 'white', elevation: 40}}>
                    <Button>
                      <Icon
                        name="nutrition"
                        onPress={() =>
                          this.props.navigation.navigate('Masterproduct')
                        }
                      />
                    </Button>
                    <Button
                      onPress={() => this.props.navigation.navigate('History')}>
                      <Icon name="bookmarks" />
                    </Button>
                    <Button
                      active
                      onPress={() => this.props.navigation.navigate('Home')}>
                      <Icon active name="home" />
                    </Button>
                    <Button
                      onPress={() => this.props.navigation.navigate('Ceckout')}>
                      <Icon name="cart" />
                    </Button>
                    <Button
                      onPress={() => this.props.navigation.navigate('Login')}>
                      <Icon name="close" />
                    </Button>
                  </FooterTab>
                </Footer>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}
export default Masterproduct;
