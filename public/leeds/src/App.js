import Header from './pages/home/Header';
import Footer from './pages/home/Footer';
import Home from './pages/home/Home';

import { NavLink, BrowserRouter, Route, Switch } from 'react-router-dom';

import { Alert, Button, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';


function NotImplemented (props) {
	const alertStyle = {
        marginTop: '2em',
        marginBottom: '27.6vh',
        textAlign: 'center'
	};

	return (
		<Container style={alertStyle}>
			<Alert variant="info">
				<Alert.Heading>Coming Soon</Alert.Heading>
				<p>
					This page is coming soon. Sorry for the incovinince :(
				</p>
				<hr />
				<div className="d-flex justify-content-end">
					<NavLink to='/'>
						<Button variant="outline-info">Go Home</Button>
					</NavLink>
				</div>
			</Alert>
		</Container>
	)
}


function Error404 () {
	const alertStyle = {
        marginTop: '2em',
        marginBottom: '27.6vh',
        textAlign: 'center'
	}
	
	return (
		<Container style={alertStyle}>
			<Alert variant="warning">
				<Alert.Heading>Error 404</Alert.Heading>
				<p>
				This page does not exist :(
				</p>
				<hr />
				<div className="d-flex justify-content-end">
					<NavLink to='/'>
						<Button variant="outline-warning">Go Home</Button>
					</NavLink>
				</div>
			</Alert>
		</Container>
	)
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
					<Route path="/" exact render={(props) => <Home {...props} links={appLinks} />} />
					<Route path="/hospitals/" exact component={NotImplemented} />
					<Route path="/alerts/" exact component={NotImplemented} />
					<Route path="/dashboard/" exact component={NotImplemented} />
					<Route path="/account/" exact component={NotImplemented} />
					<Route component={Error404} />
                </Switch>
				<Footer links={appLinks} linkStyle={aSt}/>
            </div>
        </BrowserRouter>
	)
}

export default App;
