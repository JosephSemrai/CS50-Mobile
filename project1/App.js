import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Timer, vibrate} from './utils'
import {Countdown} from './components'




export default class App extends React.Component {

  state = {
    timeRemaining: 1000,
  };

  componentDidMount() {
    console.log("component mounted");
    this.timer = new Timer(this.state.timeRemaining, this.updateRemainingTime, () => {console.log("the end function was called from the timer")})

  }

  // This is passed into the timer instance which is called every time we get a new time
  updateRemainingTime = remainingTime => {
    this.setState({timeRemaining: remainingTime});
  };



  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Countdown timeRemaining={this.state.timeRemaining} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  timerText: {
    fontSize: 27,
    fontWeight: 'bold',
  },
});
