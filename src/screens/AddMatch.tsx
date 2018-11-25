import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

enum PlayerPosition {
  Attacker1 = 'Attacker1',
  Defender1 = 'Defender1',
  Defender2 = 'Defender2',
  Attacker2 = 'Attacker2'
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

    this.moveToNextPosition = this.moveToNextPosition.bind(this);
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Team 1</Text>
        <View>
          {this.renderPosition(PlayerPosition.Attacker1)}
          {this.renderPosition(PlayerPosition.Defender1)}
        </View>
        <Text style={styles.title}>Team 2</Text>
        <View>
          {this.renderPosition(PlayerPosition.Defender2)}
          {this.renderPosition(PlayerPosition.Attacker2)}
        </View>
      <Button onPress={this.moveToNextPosition} title="Next" accessibilityLabel="Specify next player"/>
      </View>
    );
  }

  private moveToNextPosition() {
    let nextPlayer: PlayerPosition;

    switch (this.state.selectedPosition) {
      case PlayerPosition.Attacker1:
        nextPlayer = PlayerPosition.Defender1;
        break;
      case PlayerPosition.Defender1:
        nextPlayer = PlayerPosition.Defender2;
        break;
      default:
        nextPlayer = PlayerPosition.Attacker2;
        break;
    }
    this.setState(() => ({
      selectedPosition: nextPlayer
    }));
  }

  renderPosition(position: PlayerPosition) {
    const stylesToUse = position === this.state.selectedPosition ? styles.activePosition : {};

    return <Text style={stylesToUse}>{position.valueOf()}</Text>
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
