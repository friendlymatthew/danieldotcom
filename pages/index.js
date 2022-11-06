import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Landing from "./components/Landing";

const leadership = [
	{
		name: "Code_Wes",
		role: "Co-Founder, President, Finance Manager",
		desc: "Code_Wes is a student-managed coding club at Wesleyan that has grown from 7 to 200+ members since inception in 2020",
		cont: [
			"Managining financials dealings of the student-directed coding club including budgets, all purchases, event funding, and hosting speakers",
			"Hosting events, with the career center, that promote career planning, community building, and industry networking",
			"Built and continuously overseeing internal communication platform to project leaders to distribute tasks and club resources to team members",
		],
	},
	{
		name: "Wesleyan Club Hockey",
		role: "Co-Captain",
		desc: "",
		cont: [
			"Scheduling practices and game coordinated with the university's athletic, financial, and facility departments",
			"Secured club budget and purchasing equipment for new members",
		],
	},
	{
		name: "Wesleyan Racing Team",
		role: "Co-Captain",
		desc: "",
		cont: [],
	},
	{
		name: "SKIBs",
		role: "Leader",
		desc: "Wesleyan-based Scottish, Klezmer, Irish, and Bluegrass strings and winds band.",
		cont: [],
	},
];

import MyHeader from "./components/MyHeader";
import NavButton from "./components/NavButton";
import Projects from "./components/Projects";
import WorkExp from "./components/WorkExp";

export default function Home() {
	return (
		<div className="bg-[#0d1117]">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="sticky z-50 top-0">
				<MyHeader></MyHeader>
			</div>

			<main className="justify-center flex">
				<div className="w-8/12">
					<div className="grid grid-cols-6 md:grid-cols-8">
						<div className="col-span-5 md:col-span-7 grid grid-cols-1 gap-20">
							<Landing />
							<div id="experience" className="py-20">
								<WorkExp />
							</div>
							<div id="projects" className="py-20">
								<Projects />
							</div>
						</div>
						<div className=""></div>
					</div>
				</div>
			</main>

			<footer></footer>
		</div>
	);
}
