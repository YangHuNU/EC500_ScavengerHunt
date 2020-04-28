// JavaScript source code
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import MapDetails from '../screens/mapdetails';

// leveraged from https://www.youtube.com/watch?v=cS4PgI3zBzY&feature=emb_rel_end 

const screens = {
    Home: {
        screen: Home
    },
    MapDetails: {
        screen: MapDetails
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);