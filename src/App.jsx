import { BrowserRouter } from "react-router-dom";
import {
	About,
	Contact,
	Experience,
	Hero,
	Navbar,
	Projects,
	StarsCanvas,
	Links,
	Footer
} from "./components";

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<Navbar />
				<Hero />
				<Links />
				<About />
				<Experience />
				<Projects />
				<div className="relative z-0">
					<StarsCanvas />
					<Contact />
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
