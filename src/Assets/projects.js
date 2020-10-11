import diblocert from './diblocert.png';
import maslogo from './maslogo.jpg';

import metroappsauce from './metroappsauce.jpg';
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
		title: 'This Site',
		subtitle:
			'DiBloCert 2.0 is a Blockchain based web app to manage and verify',
		description:
			'DiBloCert 2.0 is a Blockchain based web app to manage and verify',
		color: '#fff',
		icon: pryntableLogo,
		thumbnail: diblocert,
		images: [],
		link: '',
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
		icon: bridgeitlogo,
		thumbnail: bridgeit,
		images: [],
		link: '',
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
		link: '',
	},
];

export default asset;
