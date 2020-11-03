import personIcon from './person.svg';
import gearIcon from './gear.svg';
import portfolioIcon from './portfolio.svg';
import studyIcon from './study.svg';
import pdfIcon from './pdf.svg';

const asset = [
	{
		title: 'About Me',
		desc: "I'm a 25 years old engineer from Munich I'd like to... ",
		color: '#a2de96',
		icon: personIcon,

		route: '/about',
	},
	{
		title: 'Projects',
		desc: 'Dev works ',
		color: '#FF8A80',
		icon: gearIcon,

		route: '/projects',
	},
	{
		title: 'Research',
		desc: 'Published papers, academic articles',
		color: '#fbd46d',
		icon: studyIcon,

		route: '/papers',
	},
	{
		title: 'Designs',
		desc: 'Graphics, UI/UX works ',
		color: '#64c4ed',
		icon: portfolioIcon,

		route: '/designs',
	},
	{
		title: 'Resume',
		color: '#e1ccec',
		desc: 'Download ➝ ',
		icon: pdfIcon,

		route: '/about',
	},
];
export default asset;
