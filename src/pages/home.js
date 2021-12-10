import React, { useEffect} from "react";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
/*componentes*/
/* img */


export const Home = () => {
	useEffect(() => {
		AOS.init({ duration: 1500 });
	}, []);
	return (
		<div className="container-fluid p-0 m-50">
			<div className="slider">
				este es el Slider del home
			</div>
		</div>
	);
};
