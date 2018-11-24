/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { MainNavigator } from 'src/navigators/MainNavigator';

const MainContainer = createAppContainer(MainNavigator);

type Props = {};
export class App extends Component<Props> {
    render() {
        return <MainContainer />;
    }
}
