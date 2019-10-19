import React, {Component} from 'react';
import axios from 'axios';
import {StyleSheet, Image, SafeAreaView, ScrollView} from 'react-native';
import {
  Container,
  Content,
  Row,
  Grid,
  Card,
  Col,
  CardItem,
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
  H1,
  Item,
  Input,
} from 'native-base';
import PureChart from 'react-native-pure-chart';
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
    this.orderchartBy();
  }
  getRevenue = async () => {
    await axios
      .get('http://3.80.248.213:5000/revenues')
      .then(result => {
        this.setState({
          revenue: result.data.data,
          table: result.data.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  getIncome = async () => {
    await axios
      .get('http://3.80.248.213:5000/revenues/income')
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
  };

  //Recent Order

  orderchartBy(event) {
    //let orderby = event.target.value;
    // this.setState({
    //   // tittle: orderby,
    // });

    axios
      .get('http://3.80.248.213:5000/revenues/by?orderby=year')
      .then(result => {
        this.setState({
          chart: result.data.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

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

    let incomes = [];
    let day = [];
    let year = [];
    let week = [];
    let label = [];

    // console.log(this.state.chart);
    this.state.chart.forEach(item => {
      incomes.push(item.income);
      // day.push(item.dayname);
      // month.push(item.monthname);
      // week.push(item.week);
      year.push(item.year);
    });

    // console.log(incomes);

    let sampleData = [
      {
        seriesName: 'series1',
        data: [
          {x: '2018-02-01', y: 30},
          {x: '2018-02-02', y: 200},
          {x: '2018-02-03', y: 170},
          {x: '2018-02-04', y: 250},
          {x: '2018-02-05', y: 10},
          {x: '2018-02-01', y: 30},
          {x: '2018-02-02', y: 200},
          {x: '2018-02-03', y: 170},
          {x: '2018-02-04', y: 250},
          {x: '2018-02-05', y: 10},
        ],
        color: '#130f40',
      },
      {
        seriesName: 'series2',
        data: [
          {x: '2018-02-01', y: 20},
          {x: '2018-02-02', y: 100},
          {x: '2018-02-03', y: 140},
          {x: '2018-02-04', y: 550},
          {x: '2018-02-05', y: 40},
          {x: '2018-02-01', y: 20},
          {x: '2018-02-02', y: 100},
          {x: '2018-02-03', y: 140},
          {x: '2018-02-04', y: 550},
          {x: '2018-02-05', y: 40},
        ],
        color: 'yellow',
      },
    ];
    console.log(incomes);

    return (
      <Container style={{backgroundColor: '#dff9fb'}}>
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
            <Row style={{marginTop: -60}}>
              <Col
                style={{
                  height: 320,
                  padding: 20,
                  marginTop: 20,
                  elevation: 2,
                }}>
                <PureChart
                  width={200}
                  height={180}
                  marginTop={10}
                  elevation={4}
                  backgroundColor="#ffff"
                  data={sampleData}
                  type="line"
                />
              </Col>
            </Row>
          </Grid>
          {/* <Row size={1}>
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
          </Row> */}
          <Col
            style={{
              padding: 20,
              height: 335,
              marginTop: -80,
            }}>
            <SafeAreaView>
              <ScrollView>
                {this.state.table.map(item => {
                  return (
                    <Card style={{elevation: 1}}>
                      <CardItem>
                        <Body>
                          {/* <Text>{item.invoices}</Text> */}
                          <Text>{item.user}</Text>
                          <Text>{item.date.substring(0, 10)}</Text>
                          <Text>{item.dataorder}</Text>
                          <Text>{item.amount}</Text>
                        </Body>
                      </CardItem>
                    </Card>
                  );
                })}
              </ScrollView>
            </SafeAreaView>
          </Col>
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
                active
                onPress={() => this.props.navigation.navigate('History')}>
                <Icon active name="bookmarks" />
              </Button>
              <Button onPress={() => this.props.navigation.navigate('Home')}>
                <Icon name="home" />
              </Button>
              <Button onPress={() => this.props.navigation.navigate('Ceckout')}>
                <Icon name="cart" />
              </Button>
              <Button onPress={() => this.props.navigation.navigate('Login')}>
                <Icon name="close" />
              </Button>
            </FooterTab>
          </Footer>
        </Content>
      </Container>
    );
  }
}
export default History;
