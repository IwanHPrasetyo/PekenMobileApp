import React, {Component} from 'react';
import axios from 'axios';
import {StyleSheet, Image, SafeAreaView, ScrollView} from 'react-native';
import {
  Container,
  Content,
  Row,
  Grid,
  Col,
  List,
  ListItem,
  FooterTab,
  Text,
  H2,
  Footer,
  Body,
  Icon,
  Button,
  Header,
  Left,
  Title,
  Right,
} from 'native-base';

class History extends Component {
  constructor() {
    super();
    this.state = {
      revenue: [],
      chart: [],
      table: [],
      daylast: 0,
      daynow: 0,
      weeklast: 0,
      weeknow: 0,
      yearlast: 0,
      yearnow: 0,
      total_income: [],
      orderby: 'day',
      tittle: 'dayname',
      total_year: [],
      total_week: [],
    };
  }
  async componentDidMount() {
    this.getRevenue();
    this.getIncome();
  }
  getRevenue = async () => {
    await axios
      .get('http://192.168.1.5:5000/revenues')
      .then(result => {
        this.setState({
          revenue: result.data.data,
          table: result.data.data,
        });
      })
      // console.log(this.state.table)
      .catch(err => {
        console.log(err);
      });
  };
  getIncome = async () => {
    await axios
      .get('http://192.168.1.5:5000/revenues/income')
      .then(result => {
        this.setState({
          total_income: result.data.data[0],
          daylast: result.data.data[0].daylast,
          daynow: result.data.data[0].daynow,
          weeklast: result.data.data[0].lastweek,
          weeknow: result.data.data[0].weeknow,
          yearlast: result.data.data[0].yearlast,
          yearnow: result.data.data[0].yearnow,
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(this.state.total_income);
  };

  render() {
    let growday =
      (
        ((this.state.daynow - this.state.daylast) / this.state.daylast) *
        100
      ).toFixed(0) + '%';

    let groworder =
      (
        ((this.state.weeknow - this.state.weeklast) / this.state.weeklast) *
        100
      ).toFixed(0) + '%';

    let growyear =
      (
        ((this.state.yearnow - this.state.yearlast) / this.state.yearlast) *
        100
      ).toFixed(0) + '%';

    return (
      <Container style={{backgroundColor: '#c7ecee'}}>
        <Content>
          <Header style={{backgroundColor: '#22a6b3'}}>
            <Left />
            <Body>
              <Title style={{marginLeft: 120}}>History</Title>
            </Body>
            <Right />
          </Header>
          <Grid>
            <Row style={{marginLeft: 10, marginRight: 10}}>
              <Col
                style={{
                  height: 180,
                  padding: 5,
                  paddingTop: 30,
                  paddingBottom: 30,
                }}>
                <Col
                  style={{
                    backgroundColor: '#0abde3',
                    borderRadius: 20,
                    padding: 20,
                    elevation: 1,
                  }}>
                  <Text style={{marginLeft: 10, color: 'white'}}>
                    Day Income
                  </Text>
                  <H2 style={{marginLeft: 20, marginTop: 10, color: 'white'}}>
                    € {this.state.total_income.daynow}
                  </H2>
                  <Text style={{marginLeft: 30, marginTop: 10, color: 'white'}}>
                    {growday}
                  </Text>
                </Col>
              </Col>
              <Col
                style={{
                  height: 180,
                  padding: 5,
                  paddingTop: 30,
                  paddingBottom: 30,
                }}>
                <Col
                  style={{
                    backgroundColor: '#feca57',
                    borderRadius: 20,
                    padding: 20,
                    elevation: 1,
                  }}>
                  <Text style={{marginLeft: 30, color: 'white'}}>Order</Text>
                  <H2 style={{marginLeft: 40, marginTop: 10, color: 'white'}}>
                    {this.state.total_income.weeknow}
                  </H2>
                  <Text style={{marginLeft: 40, marginTop: 10, color: 'white'}}>
                    {groworder}
                  </Text>
                </Col>
              </Col>
              <Col
                style={{
                  height: 180,
                  padding: 5,
                  paddingTop: 30,
                  paddingBottom: 30,
                }}>
                <Col
                  style={{
                    backgroundColor: '#ff6b6b',
                    borderRadius: 20,
                    padding: 20,
                    elevation: 1,
                  }}>
                  <Text style={{marginLeft: 5, color: 'white'}}>
                    Year Income
                  </Text>
                  <H2 style={{marginLeft: 20, marginTop: 10, color: 'white'}}>
                    € {this.state.total_income.yearnow}
                  </H2>
                  <Text style={{marginLeft: 30, marginTop: 10, color: 'white'}}>
                    {growyear}
                  </Text>
                </Col>
              </Col>
            </Row>
            <Row style={{marginTop: -40}}>
              <Col
                style={{
                  height: 300,
                  padding: 20,
                  paddingTop: 30,
                  paddingBottom: 30,
                }}>
                <Col
                  style={{
                    backgroundColor: '#48dbfb',
                    borderRadius: 20,
                  }}>
                  {/* <PureChart
                    width={200}
                    height={150}
                    marginTop={10}
                    backgroundColor="#ffff"
                    data={sampleData}
                    type="line"
                  /> */}
                </Col>
              </Col>
            </Row>
          </Grid>
          <List
            style={{
              backgroundColor: '#ffff',
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 20,
              borderRadius: 0,
              height: 255,
            }}>
            <SafeAreaView>
              <ScrollView>
                {this.state.table.map(item => {
                  return (
                    <ListItem thumbnail>
                      <Body>
                        <Text>{item.invoices}</Text>
                        <Text note numberOfLines={1}>
                          {item.user}
                        </Text>
                        <Text note numberOfLines={1}>
                          {item.date}
                        </Text>
                        <Text note numberOfLines={1}>
                          {item.dataorder}
                        </Text>
                        <Text note numberOfLines={1}>
                          {item.amount}
                        </Text>
                      </Body>
                    </ListItem>
                  );
                })}
              </ScrollView>
            </SafeAreaView>
          </List>
          <Footer>
            <FooterTab style={{backgroundColor: 'white', elevation: 40}}>
              <Button>
                <Icon name="apps" />
              </Button>
              <Button>
                <Icon name="camera" />
              </Button>
              <Button>
                <Icon name="navigate" />
              </Button>
              <Button>
                <Icon name="person" />
              </Button>
            </FooterTab>
          </Footer>
        </Content>
      </Container>
    );
  }
}
export default History;
