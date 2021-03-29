import Header from './pages/home/Header';
import Footer from './pages/home/Footer';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';

function Home () {
	return (
		<div>This is the home page!</div>
	);
};


function App() {
	const aSt = {
        color: '#ffffff'
    };

    const appLinks = [
		{
			name: 'Hospitals',
			link: '/hospitals/',
		},
		{
			name: 'Alerts',
			link: '/alerts/',
		},
		{
			name: 'Dashboard',
			link: '/dashboard/',
		},
		{
			name: 'Account',
			link: '/account/',
		}
	]

	return (
		<BrowserRouter>
            <div>
                <Header links={appLinks} linkStyle={aSt}/>
                <Switch>
					<Route path="/" exact component={Home} />
                </Switch>
				<Footer links={appLinks} linkStyle={aSt}/>
            </div>
        </BrowserRouter>
	)
}

export default App;
