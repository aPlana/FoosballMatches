import { createStackNavigator } from 'react-navigation';
import { Home } from 'src/screens/Home';
import { MatchesList } from 'src/screens/MatchesList';
import { AddMatch } from 'src/screens/AddMatch';

export const MainNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
        },
        MatchesList: {
            screen: MatchesList,
        },
        AddMatch: {
            screen: AddMatch,
        },
    },
    {
        initialRouteName: 'Home',
    }
);
