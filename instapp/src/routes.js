import { createAppContainer, createStackNavigator } from 'react-navigation';
import Feed from './pages/Feed';
import New from './pages/Feed';

export default createAppContainer(
    createStackNavigator({
        Feed,
        New
    })
);
