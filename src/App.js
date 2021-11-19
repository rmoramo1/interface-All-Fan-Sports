import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

/* pages*/

import { Home } from "./pages/home";
import { Faqs } from "./pages/faqs";
import { Glosary } from "./pages/glosary";
import { Contact } from "./pages/contact";
import { Admin } from "./pages/admin";
import {EdithGames} from "./nfl/edtihGame";
/*components*/
import { Header } from "./components/header";
import { Footer } from "./components/footer";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header/>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/home">
						<Home />
					</Route>
					<Route exact path="/faqs">
						<Faqs />
					</Route>
					<Route exact path="/glosary">
						<Glosary />
					</Route>
					<Route exact path="/contact">
						<Contact />
					</Route>
					<Route exact path="/admin">
						<Admin />
					</Route>
					<Route exact path="/edtihGame/:theid">
						<EdithGames />
					</Route>
				</Switch>
				<Footer/>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);
