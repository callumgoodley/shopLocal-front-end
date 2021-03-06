import React from 'react';
import {
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';
import firebase from 'firebase';
import {config, firebaseRef} from '../Components/firebaseConfig';
import {connect} from 'react-redux';
import {login} from '../actions/users';
import {loadBusinesses} from '../actions/businesses';
import {getUser, postUser} from '../API';

class LoginPage extends React.Component {
  state = {
    isAuthenticated: false,
    typedEmail: '',
    typedPassword: '',
  };
  unsubscriber = null;

  onLogin = () => {
    const {typedEmail, typedPassword} = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(typedEmail, typedPassword)
      .then(loggedInUser => {
        console.log('loggedInUSER >>>', loggedInUser);
        return getUser(loggedInUser.user.uid);
      })
      .then(userData => {
        console.log('USER DATA >> ', userData);
        this.props.add(userData);
      })
      .then(() => {
        this.props.navigation.navigate('Home');
      })
      .catch(err => {
        console.log('theres been an error' + err);
      });
  };
  fbAuth = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      result => {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(
            accessTokenData => {
              const credential = firebase.auth.FacebookAuthProvider.credential(
                accessTokenData.accessToken,
              );
              firebase
                .auth()
                .signInWithCredential(credential)
                .then(
                  loggedInUser => {
                    console.log(
                      'userData >>>',
                      loggedInUser.additionalUserInfo.profile.first_name,
                    );
                    getUser(loggedInUser.user.uid).then(userData =>
                      userData
                        ? this.props.add(userData)
                        : postUser(
                            loggedInUser.user.uid,
                            loggedInUser.user.email,
                            loggedInUser.additionalUserInfo.profile.first_name,
                            loggedInUser.additionalUserInfo.profile.last_name,
                          ),
                    );

                    this.props.navigation.navigate('Home');
                    console.log('Log in success: ', loggedInUser.user.email);
                  },
                  error => {
                    console.log(error);
                  },
                );
            },
            error => {
              console.log(error);
            },
          );
        }
      },
      function(error) {
        console.log('An error occurred');
      },
    );
  };
  render() {
    return (
      <View style={styles.login}>
        <Image
          style={{
            width: 130,
            height: 130,
          }}
          source={require('../images/shopLocal-white-01.png')}
        />

        <Text style={styles.header}>shopLocal</Text>
        <TextInput
          style={styles.textinput}
          placeholder="email address"
          placeholderTextColor="#149c0c"
          onChangeText={text => {
            this.setState({typedEmail: text});
          }}
        />
        <TextInput
          style={styles.textinput}
          placeholder="password"
          placeholderTextColor="#149c0c"
          secureTextEntry={true}
          onChangeText={text => {
            this.setState({typedPassword: text});
          }}
        />
        <TouchableOpacity style={styles.button} onPress={this.onLogin}>
          <Text style={styles.whiteText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.fbAuth} style={styles.fbButton}>
          <Text style={styles.whiteText}>Facebook Login.</Text>
        </TouchableOpacity>
        <Text style={styles.signUpinfo}>
          Don't have an account? Log in with Facebook or sign up manually below.
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Signup')}>
          <Text style={styles.signUp}>Sign up now!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    padding: 40,
    ...StyleSheet.absoluteFillObject,
  },
  header: {
    alignSelf: 'stretch',
    fontSize: 35,
    textAlign: 'center',
    color: '#149c0c',
    paddingBottom: 10,
    marginBottom: 30,
  },
  signUp: {
    alignSelf: 'stretch',
    fontSize: 20,
    color: '#149c0c',
    marginTop: 30,
  },
  textinput: {
    alignSelf: 'stretch',
    textAlign: 'left',
    height: 40,
    marginBottom: 15,
    color: '#149c0c',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#149c0c',
  },
  signUpinfo: {
    marginTop: 10,
  },
  fbButton: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#226ef2',
  },
  whiteText: {
    color: '#fff',
  },
});

const mapStateToProps = state => {
  return {
    user: state.userReducer.loggedInUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: user => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
