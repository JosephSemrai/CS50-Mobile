import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Timer, vibrate} from './utils'
import {Countdown} from './components'

const DEFAULT_WORK_TIME = 1500000; // 25 min
const DEFAULT_BREAK_TIME = 300000; // 5 min

export default class App extends React.Component {

  state = {
    timeRemaining: DEFAULT_WORK_TIME, // Sets the initial time that the timer will be set to, this will be updated later
    timerMode: "Work",
    timerStopped: true,
    toggleTimerButtonText: "Start Timer",
  };

  componentDidMount() {
    console.log("component mounted");
    this.timer = new Timer(this.state.timeRemaining, this.updateRemainingTime, this.timerEnded);
  }

  // This is passed into the timer instance which is called every time we get a new time
  updateRemainingTime = remainingTime => {
    this.setState({timeRemaining: remainingTime});
  };

  timerEnded = () => {
    vibrate();
    this.timer.stop();
    this.switchModes();
  };

  switchModes = () => {
    if (this.state.timerMode === "Work") {
      this.breakMode();
    }
    else
    {
      this.workMode();
    }
  };

  workMode = () => {
    this.setState({
      timeRemaining: DEFAULT_WORK_TIME,
      timerMode: "Work"
    }, () => {
      this.timer = new Timer(this.state.timeRemaining, this.updateRemainingTime, this.timerEnded);
      this.setState({toggleTimerButtonText: "Start Timer"});
    });
  };

  breakMode = () => {
    this.setState({
      timeRemaining: DEFAULT_BREAK_TIME,
      timerMode: "Break"
    }, () => {
      this.timer = new Timer(this.state.timeRemaining, this.updateRemainingTime, this.timerEnded);
      this.setState({toggleTimerButtonText: "Start Timer"});
    });

  };

  resetTimer = () => {
    console.log("reset timer")
    if (this.state.timerMode == "Work") {
      this.timer.stop();
      this.workMode();
    }
    else {
      this.timer.stop();
      this.breakMode();
    }
  };

  toggleTimer = () => {
    if (this.timer.isRunning) {
      this.timer.stop();
      this.setState({toggleTimerButtonText: "Start Timer"});
    } 
    else {
      this.timer.start();
      this.setState({toggleTimerButtonText: "Stop Timer"});
    }
  };




  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{this.state.timerMode}</Text>
        <Countdown timeRemaining={this.state.timeRemaining} />

        <Button 
          title={this.state.toggleTimerButtonText}
          onPress={() => this.toggleTimer()}
        />

        <Button 
          title="Reset Timer"
          onPress={() => this.resetTimer()}
        />
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

  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
