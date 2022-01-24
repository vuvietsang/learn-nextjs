import Header from "@/components/common/header";
import { AminLayout } from "@/components/layout";
import PropTypes from "prop-types";
import { NextPageWithLayout } from "../models";

const About: NextPageWithLayout = () => {
	return (
		<div>
			<h1>About page</h1>
			<Header />
		</div>
	);
};

About.Layout = AminLayout;
export default About;
