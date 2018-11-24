import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

enum PlayerPosition {
  Attacker1 = 0,
  Defender1 = 1,
  Defender2 = 2,
  Attacker2 = 3
}

interface State {
  selectedPosition: PlayerPosition
}

export class AddMatch extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      selectedPosition: PlayerPosition.Attacker1
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Team 1</Text>
        <View>
          {this.renderPosition('Attacker')}
          {this.renderPosition('Defender')}
        </View>
        <Text style={styles.title}>Team 2</Text>
        <View>
          {this.renderPosition('Defender')}
          {this.renderPosition('Attacker')}
        </View>
      </View>
    );
  }

  renderPosition(position: string) {
    return <Text style={styles.activePosition}>{position}</Text>
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20
  },
  activePosition: {
    borderWidth: 1,
    borderColor: "#f00"
  }
});
