import React from 'react';
import {View, Text, Modal, Button, ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';
import ProductCard from '../Components/ProductCard';
import {useNavigation} from '@react-navigation/native';
// const navigation = useNavigation();

class Paypal extends React.Component {
  state = {
    paypalModalVisible: false,
  };

  _paypalToggleModal = () => {
    this.setState({paypalModalVisible: !this.state.isModalVisible});
  };
  handleResponse = data => {
    if (data.title === 'success') {
      this.setState({paypalModalVisible: !this.state.paypalModalVisible}, () =>
        alert('Status is success'),
      );
    } else if (data.title === 'cancel') {
      this.setState({paypalModalVisible: !this.state.paypalModalVisible}, () =>
        alert('Status is cancel'),
      );
    } else {
      return;
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Modal
          visible={this.state.paypalModalVisible}
          onRequestClose={this._paypalToggleModal}>
          <WebView
            style={{flex: 1, marginTop: 50}}
            startInLoadingState={true}
            source={{uri: 'http://localhost:3000/paypal'}}
            // injectedJavaScript={`document.f1.submit()`}
            scalesPageToFit
            onNavigationStateChange={data => {
              this.handleResponse(data);
            }}
          />
          <Button onPress={this._paypalToggleModal} title="Back" />
        </Modal>
        <Button title="Pay with paypal" onPress={this._paypalToggleModal} />
      </View>
    );
  }
}

export default Paypal;
