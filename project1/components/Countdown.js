import React from 'react'
import {StyleSheet, Text} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
    countText: {
        fontSize: 34
    },
});

const Countdown = props => {
    const rawSeconds = Math.round(props.timeRemaining / 1000);
    const displayMins = Math.floor(rawSeconds/60);
    const calcSeconds = rawSeconds % 60;
    const displaySeconds = calcSeconds < 10 ? '0' + calcSeconds : calcSeconds;

    return <Text style={styles.countText}>{displayMins}:{displaySeconds}</Text>
};


export default Countdown;