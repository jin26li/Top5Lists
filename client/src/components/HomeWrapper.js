import { useContext } from 'react'
import HomeScreen from './HomeScreen'
import AuthContext from '../auth'
import WelcomeScreen from './WelcomeScreen';
import Navigate from './Navigate';

export default function HomeWrapper() {
    const { auth } = useContext(AuthContext);

    if (auth.loggedIn || auth.guest)
        return (
            <div>
                <Navigate />
                <HomeScreen />
            </div>
        )
    else
        return <WelcomeScreen />
}