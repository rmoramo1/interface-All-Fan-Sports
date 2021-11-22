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
					<Route exact path="/" component={Home}/>
					<Route exact path="/home" component={Home}/>
					<Route exact path="/faqs" component={Faqs}/>
					<Route exact path="/glosary" component={Glosary}/>
					<Route exact path="/contact" component={Contact}/>
					<Route exact path="/admin" component={Admin}/>
					<Route exact path="/edtihGame/:theid" component={EdithGames}/>
				</Switch>
				<Footer/>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);
