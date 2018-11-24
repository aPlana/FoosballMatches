import { createStackNavigator } from 'react-navigation';
import { Home } from 'src/screens/Home';
import { MatchesList } from 'src/screens/MatchesList';

export const MainNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
        },
        MatchesList: {
            screen: MatchesList,
        },
    },
    {
        initialRouteName: 'Home',
    }
);
