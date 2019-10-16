import React, {Component} from 'react';
import {StyleSheet, Image, ImageBackground} from 'react-native';
import {
  Container,
  Content,
  Text,
  Form,
  Item,
  Label,
  Input,
  Button,
  View,
  H1,
} from 'native-base';
class Login extends Component {
  render() {
    return (
      <Container>
        <ImageBackground
          style={{width: 500, height: 800}}
          source={require('../Images/backgorund.jpg')}>
          <Content style={style.styleCard}>
            <Form style={style.form}>
              <Image
                style={style.image}
                source={require('../Images/logo2.png')}
              />
              <Item floatingLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input />
              </Item>
              <View style={style.view}>
                <Button style={style.button}>
                  <Text>Login</Text>
                </Button>
                <Button bordered info style={style.buttonInfo}>
                  <Text>Register Here</Text>
                </Button>
              </View>
            </Form>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
  },
  form: {
    backgroundColor: 'white',
    borderRadius: 50,
    marginTop: 100,
    padding: 10,
  },

  view: {
    marginTop: 30,
  },
  image: {
    marginTop: 20,
    marginLeft: 80,
  },
  button: {
    backgroundColor: '#00cec9',
    marginBottom: 20,
    marginLeft: 70,
    width: 200,
    paddingLeft: 60,
    borderRadius: 20,
  },
  buttonInfo: {
    marginBottom: 20,
    marginLeft: 70,
    width: 200,
    paddingLeft: 30,
    borderRadius: 20,
  },
  styleCard: {
    padding: 20,
    elevation: 0,
    margin: 50,
  },
  styleContent: {
    backgroundColor: '#ffffff',
  },
});

export default Login;
