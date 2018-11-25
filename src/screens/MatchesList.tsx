import React, { Component } from 'react';
import { View, FlatList, Text, ListRenderItemInfo, Button } from 'react-native';

interface Match {
  id: string,
  title: string
};

const mockedMatches: Array<Match> = [
  {
    id: '0',
    title: 'A+B vs C+D'
  },
  {
    id: '1',
    title: 'B+D vs A+C',
  },
  {
    id: '2',
    title: 'D vs B',
  },
  {
    id: '3',
    title: 'C vs A+D',

  }
];

export class MatchesList extends Component {
  constructor(props: {}) {
    super(props);

    this.addNewMatch = this.addNewMatch.bind(this);
  }

  render() {
    return (
      <View>
        <View style={{ height: "50%" }}>
          <FlatList
            data={mockedMatches}
            renderItem={this.renderMatch}
          />
        </View>
        <Button
          onPress={this.addNewMatch}
          title="Add new match"
          accessibilityLabel="Add a new match"
        />
      </View>
    );
  }

  renderMatch({ item }: ListRenderItemInfo<Match>) {
    return <Text>{item.title}</Text>;
  }

  addNewMatch() {
    this.props.navigation.navigate('AddMatch');
  }
}
