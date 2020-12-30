import diblocert from './diblocert.png';
import maslogo from './maslogo.jpg';
// import faisal from './faisal.jpeg';

import metroappsauce from './mas.png';
import mas1 from './mas1.png';
import mas2 from './mas2.png';

import diblocertLogo from './diblo_logo.png';
import dbc1 from './dbc1.png';
import dbc2 from './dbc2.png';

import pryntableLogo from './pryntable_logo.png';
import ptbl1 from './ptbl1.png';
import ptbl2 from './ptbl2.png';

import bridgeit from './bridgeit.png';
import bridgeitlogo from './bridgeitlogo.png';

import game1 from './game1.png';
import game2 from './game2.png';

import rss1 from './rss1.png';
import rss2 from './rss2.png';
import rss3 from './rss3.png';

import deepl from './deepl.png';
import deepl1 from './deepl1.jpg';
import deepl2 from './deepl2.jpg';

import ts1 from './ts1.jpg';

const asset = [
	{
		title: 'DiBloCert 2',
		subtitle:
			'DiBloCert 2.0 is a Blockchain Based Web App to Manage and Verify Student credentials',
		description:
			'DiBloCert 2.0 is a Blockchain based web app to manage and verify',
		color: '#c9b6e4',
		icon: diblocertLogo,
		thumbnail: diblocert,
		images: [dbc1, dbc2],
		link: 'http://diblocert20.herokuapp.com',
	},
	{
		title: 'Pryntable',
		subtitle: 'A Customer-to-customer 3D Printing Platform',
		description: 'A Customer-to-customer 3D Printing Platform',
		color: '#a2de96',
		icon: pryntableLogo,
		thumbnail: ptbl1,
		images: [ptbl1, ptbl2],
		link: '',
	},
	{
		title: 'Depth Translator',
		subtitle: 'A Browser extension for DeepL',
		description: 'Depth Translator is an assistant extension for DeepL',
		color: '#9E9E9E',
		icon: deepl,
		thumbnail: deepl1,
		images: [deepl1, deepl2],
		link:
			'https://chrome.google.com/webstore/detail/depth-translator-for-deep/ngbebejjbijmijmhbbpkllcnjpgkjikl?',
	},
	{
		title: 'This Site',
		subtitle: 'A React Based Responsive personal website',
		description: 'Need I say more? Browse away!',
		color: '#7986cb',
		// icon: faisal,
		thumbnail: ts1,
		images: [ts1],
		link: 'https://github.com/FaisalBinAhmed/personal-site',
	},
	{
		title: 'MetroAppSauce',
		subtitle: 'An App Review Website for Modern Windows Store Applications',
		description:
			'An App Review Website for Modern Windows Store Applications',
		color: '#20EBC2',
		icon: maslogo,
		thumbnail: metroappsauce,
		images: [mas1, mas2],
		link: '',
	},
	{
		title: 'Rooftop Adventure',
		subtitle: 'An OpenGL based arcade game for Windows',
		description: 'An OpenGL based arcade game for Windows',
		color: '#FFECB3',
		// icon: bridgeitlogo,
		thumbnail: game2,
		images: [game1, game2],
		link: 'https://github.com/FaisalBinAhmed/Rooftop-Adventure',
	},
	{
		title: 'Newsification',
		subtitle: 'An RSS news feed',
		description:
			'An online platform where people can subscribe to many RSS news feeds and read latest news.',
		color: '#4E94CF',
		// icon: bridgeitlogo,
		thumbnail: rss2,
		images: [rss1, rss2, rss3],
		link: 'https://github.com/FaisalBinAhmed/RSSCurator',
	},
	{
		title: 'BridgeIT',
		subtitle:
			'An online platform where IT students helps senior with Technology',
		description:
			'An online platform where IT students helps senior with Technology',
		color: '#4E94CF',
		icon: bridgeitlogo,
		thumbnail: bridgeit,
		images: [bridgeit],
		link: 'https://github.com/CLHB8/BridgeIT_FrontEnd',
	},
];

export default asset;
