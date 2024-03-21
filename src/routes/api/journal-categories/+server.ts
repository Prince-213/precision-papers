import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const categories = [
		{
			id: 3,
			created_at: '2023-12-27T07:00:08.278706+00:00',
			category: 'power_system_engineering',
			title: 'International Journal of PowerGrid Dynamics Systems Engineering ',
			poster:
				'https://xedepqtbxdmvqbsbsrrd.supabase.co/storage/v1/object/public/journals/categories/power_grid.jpg?t=2023-12-27T06%3A54%3A00.165Z',
			intro:
				'Navigate the intricacies of power grid dynamics and systems engineering with our international journal.',
			description:
				'The International Journal of PowerGrid Dynamics Systems Engineering provides a comprehensive platform for researchers and engineers to delve into the complex world of power grid dynamics and systems engineering. This journal covers a broad spectrum of topics, including power system modeling, control strategies, grid stability, and emerging technologies in power engineering. Through rigorous research articles and practical insights, the journal aims to advance the understanding of power grid dynamics and contribute to the development of resilient and efficient power systems. Join us in exploring the latest advancements and challenges in the field of power grid dynamics systems engineering.',
			short: 'pdse'
		},
		{
			id: 4,
			created_at: '2023-12-27T07:03:35.999162+00:00',
			category: 'power_system_engineering',
			title: 'International Journal of Recycled Energy Systems and Management ',
			poster:
				'https://xedepqtbxdmvqbsbsrrd.supabase.co/storage/v1/object/public/journals/categories/recycled_energy.jpg',
			intro:
				'Embark on a journey towards sustainable energy solutions with our international journal.',
			description:
				'The International Journal of Recycled Energy Systems and Management is dedicated to fostering research and innovation in the field of recycled energy systems. This journal explores sustainable solutions for energy generation, storage, and management through the recycling and repurposing of resources. Researchers and practitioners can expect a diverse range of articles covering topics such as energy recovery from waste, circular economy principles, and sustainable energy management practices. Through insightful analyses and case studies, the journal aims to contribute to the global effort in creating a more sustainable and environmentally friendly energy landscape. Join us in the pursuit of recycled energy systems and sustainable energy management.',
			short: 'resm'
		},
		{
			id: 5,
			created_at: '2023-12-27T07:06:12.231005+00:00',
			category: 'power_system_engineering',
			title: 'International Journal of Power-Tech Advances and Innovations',
			poster:
				'https://xedepqtbxdmvqbsbsrrd.supabase.co/storage/v1/object/public/journals/categories/power_system.jpg',
			intro:
				'Stay ahead of the curve with the latest advances and innovations in power technology.',
			description:
				'The International Journal of Power-Tech Advances and Innovations is a leading platform for researchers, engineers, and professionals to explore the cutting-edge advancements in power technology. This journal covers a wide range of topics, including smart grids, renewable energy integration, power electronics, and emerging technologies in the power sector. Through in-depth research articles and innovative solutions, the journal aims to keep readers informed about the latest developments that shape the future of power technology. Join us in the journey towards a more efficient, sustainable, and technologically advanced power landscape.',
			short: 'ptai'
		},
		{
			id: 1,
			created_at: '2023-12-26T16:33:41.434085+00:00',
			category: 'deep_learning',
			title: 'International Journal of Engineering Design and Cognitive Computing Systems ',
			poster:
				'https://xedepqtbxdmvqbsbsrrd.supabase.co/storage/v1/object/public/journals/categories/cognitive_system.jpg?t=2023-12-27T06%3A43%3A16.966Z',
			intro:
				'Explore the intersection of engineering design and cognitive computing with our international journal.',
			description:
				'The International Journal of Engineering Design and Cognitive Computing Systems serves as a comprehensive platform for researchers, engineers, and professionals to delve into the evolving landscape of engineering design and cognitive computing. This journal embraces a multidisciplinary approach, fostering collaboration between the realms of engineering design and cognitive computing systems, aiming to bridge the gap between theoretical research and practical applications. Researchers and practitioners can expect a rich array of articles covering innovative design methodologies, cognitive computing techniques, and their integration to enhance engineering processes and systems. Through in-depth analyses and cutting-edge research, this journal contributes to the advancement of cognitive design methodologies and their application in real-world engineering scenarios. Join us on a journey to explore the forefront of engineering design and cognitive computing systems.\n',
			short: 'ccs'
		},
		{
			id: 6,
			created_at: '2023-12-27T07:08:02.247704+00:00',
			category: 'control_system',
			title: 'International Journal of Precision Control Systems ',
			poster:
				'https://xedepqtbxdmvqbsbsrrd.supabase.co/storage/v1/object/public/journals/categories/control_system.jpg',
			intro: 'Delve into the world of precision control systems with our international journal.',
			description:
				'The International Journal of Precision Control Systems provides a dedicated space for researchers and practitioners to explore the intricacies of precision control in various engineering applications. This journal covers a broad spectrum of topics, including control theory, modeling, simulation, and applications in precision engineering systems. Through rigorous research articles and practical insights, the journal aims to advance the understanding of precision control and its impact on diverse industries. Join us in the exploration of the latest advancements and challenges in the field of precision control systems.',
			short: 'pcs'
		},
		{
			id: 7,
			created_at: '2023-12-27T07:10:02.62709+00:00',
			category: 'communication',
			title: 'International Journal of Space communication Spectrum ',
			poster:
				'https://xedepqtbxdmvqbsbsrrd.supabase.co/storage/v1/object/public/journals/categories/nasa-yZygONrUBe8-unsplash.jpg',
			intro: 'Connect with the cosmos through the lens of space communication spectrum.',
			description:
				'The International Journal of Space Communication Spectrum invites researchers and professionals to explore the fascinating world of space communication. This journal covers a wide range of topics, including satellite communication, deep space communication, spectrum management, and emerging technologies in space communication systems. Through in-depth research articles and insightful analyses, the journal aims to contribute to the advancement of space communication technologies and their applications. Join us in the exploration of the vast and dynamic space communication spectrum.',
			short: 'scs'
		},
		{
			id: 8,
			created_at: '2023-12-27T07:11:54.416383+00:00',
			category: 'communication',
			title: 'International Journal of Wireless Technologies Review ',
			poster:
				'https://xedepqtbxdmvqbsbsrrd.supabase.co/storage/v1/object/public/journals/categories/mika-baumeister-1Rvpq7rkyvo-unsplash.jpg',
			intro:
				'Stay connected with the latest advancements in wireless technologies through our international journal.',
			description:
				'The International Journal of Wireless Technologies Review is a leading platform for researchers, engineers, and professionals to explore the ever-evolving landscape of wireless technologies. This journal covers a wide spectrum of topics, including 5G, IoT, wireless communication protocols, and emerging wireless technologies. Through in-depth research articles and practical insights, the journal aims to keep readers informed about the latest developments that shape the future of wireless communication. Join us in the journey towards a more connected and technologically advanced wireless world.',
			short: 'wtr'
		},
		{
			id: 9,
			created_at: '2023-12-27T07:13:29.700275+00:00',
			category: 'communication',
			title: 'International Journal of Future Communication Trends ',
			poster:
				'https://xedepqtbxdmvqbsbsrrd.supabase.co/storage/v1/object/public/journals/categories/future_com.jpg',
			intro: 'Anticipate and shape the future of communication with our international journal.',
			description:
				'The International Journal of Future Communication Trends is a forward-looking platform for researchers and professionals to explore emerging trends in communication technologies. This journal covers a broad range of topics, including futuristic communication technologies, AI-driven communication, and the societal impact of technological advancements. Through insightful analyses and forward-thinking research articles, the journal aims to contribute to the anticipation and shaping of the future communication landscape. Join us in the exploration of innovative communication trends that will redefine how we connect and interact in the coming',
			short: 'fct'
		},
		{
			id: 10,
			created_at: '2023-12-27T07:18:19.564313+00:00',
			category: 'communication',
			title: 'International Journal of Cyber Resilience Review',
			poster:
				'https://xedepqtbxdmvqbsbsrrd.supabase.co/storage/v1/object/public/journals/categories/montylov-_Q96YBb998E-unsplash.jpg',
			intro:
				'Navigate the evolving landscape of cybersecurity resilience with our international journal.',
			description:
				'The International Journal of Cyber Resilience Review provides a comprehensive platform for researchers, practitioners, and cybersecurity enthusiasts to explore the challenges and advancements in cyber resilience. This journal covers a wide range of topics, including threat intelligence, incident response, resilience frameworks, and emerging technologies in cybersecurity. Through in-depth research articles and practical insights, the journal aims to contribute to the understanding and enhancement of cyber resilience strategies. Join us in the exploration of the dynamic field of cyber resilience and its critical role in safeguarding digital environments.',
			short: 'crw'
		},
		{
			id: 11,
			created_at: '2023-12-27T07:20:25.887363+00:00',
			category: 'bio_tech',
			title: 'International Journal of Computer Science and Biometric Innovations Review',
			poster:
				'https://xedepqtbxdmvqbsbsrrd.supabase.co/storage/v1/object/public/journals/categories/evgeniy-alyoshin-rnXKsoo-j00-unsplash.jpg',
			intro:
				'Dive into the intersection of computer science and biometric innovations with our international journal.',
			description:
				'The International Journal of Computer Science and Biometric Innovations Review serves as a dedicated space for researchers and professionals to explore the evolving landscape of computer science and biometric innovations. This journal covers a broad spectrum of topics, including biometric authentication, pattern recognition, computer vision, and emerging technologies in biometrics. Through rigorous research articles and practical insights, the journal aims to advance the understanding of the integration of computer science and biometric innovations in various applications. Join us in the exploration of the latest advancements and challenges in this interdisciplinary field.',
			short: 'bir'
		},
		{
			id: 12,
			created_at: '2023-12-27T07:22:29.207517+00:00',
			category: 'bio_tech',
			title: 'International Journal of Computer Science and Smart Biometric Trends',
			poster:
				'https://xedepqtbxdmvqbsbsrrd.supabase.co/storage/v1/object/public/journals/categories/jonas-leupe-0IVop5v4MMU-unsplash.jpg',
			intro:
				'Explore the synergy between computer science and smart biometric trends with our international journal.',
			description:
				'The International Journal of Computer Science and Smart Biometric Trends provides a dedicated space for researchers and practitioners to explore the intersection of computer science and smart biometric technologies. This journal covers a wide range of topics, including intelligent biometric systems, machine learning for biometrics, smart authentication methods, and emerging trends in the field. Through in-depth research articles and practical insights, the journal aims to advance the understanding of smart biometric trends and their applications in various domains. Join us in the exploration of the latest advancements and challenges in this rapidly evolving field.',
			short: 'sbt'
		},
		{
			id: 13,
			created_at: '2023-12-27T07:24:10.364995+00:00',
			category: 'bio_tech',
			title: 'International Journal of Biomedical and Computer Engineering Trends',
			poster:
				'https://xedepqtbxdmvqbsbsrrd.supabase.co/storage/v1/object/public/journals/categories/thisisengineering-raeng-Apzwv9shf5s-unsplash.jpg',
			intro:
				'Bridge the gap between biomedical sciences and computer engineering with our international journal.',
			description:
				'The International Journal of Biomedical and Computer Engineering Trends serves as a comprehensive platform for researchers, engineers, and professionals to explore the intersection of biomedical sciences and computer engineering. This journal covers a broad spectrum of topics, including medical imaging, health informatics, bioinformatics, and emerging technologies in biomedical and computer engineering. Through in-depth research articles and practical insights, the journal aims to advance the understanding of the integration of biomedical and computer engineering solutions in healthcare and life sciences. Join us in the exploration of the latest advancements and challenges in this interdisciplinary field.',
			short: 'cet'
		},
		{
			id: 14,
			created_at: '2023-12-27T07:25:52.3287+00:00',
			category: 'database_management_system',
			title: 'Advance Journal of Database Management Trends',
			poster:
				'https://xedepqtbxdmvqbsbsrrd.supabase.co/storage/v1/object/public/journals/categories/uriel-sc-11KDtiUWRq4-unsplash.jpg',
			intro: 'Stay at the forefront of database management trends with our advance journal.',
			description:
				'The Advance Journal of Database Management Trends is a leading platform for researchers, database administrators, and industry professionals to explore the latest trends and advancements in database management. This journal covers a wide range of topics, including database design, query optimization, big data management, and emerging technologies in database systems. Through in-depth research articles and practical insights, the journal aims to keep readers informed about the evolving landscape of database management and its impact on various industries. Join us in the journey towards a more efficient, secure, and scalable database management future.',
			short: 'dmt'
		},
		{
			id: 15,
			created_at: '2023-12-27T07:28:27.565536+00:00',
			category: 'information_security',
			title: 'Advance Journal of Secure Information Systems Review',
			poster:
				'https://xedepqtbxdmvqbsbsrrd.supabase.co/storage/v1/object/public/journals/categories/rc-xyz-nft-gallery--o90yRQoXAM-unsplash.jpg',
			intro: 'Explore the world of secure information systems with our advance journal review.',
			description:
				'The Advance Journal of Secure Information Systems Review provides a dedicated space for researchers, cybersecurity professionals, and policymakers to explore the challenges and advancements in secure information systems. This journal covers a broad spectrum of topics, including network security, encryption, access control, and emerging technologies in the field of information security. Through in-depth research articles and practical insights, the journal aims to contribute to the understanding and enhancement of secure information systems. Join us in the exploration of the dynamic and critical field of secure information systems.',
			short: 'sisr'
		},
		{
			id: 2,
			created_at: '2023-12-27T06:49:22.113661+00:00',
			category: 'deep_learning',
			title: 'International Journal of Advanced Deep Learning Perspectives ',
			poster:
				'https://xedepqtbxdmvqbsbsrrd.supabase.co/storage/v1/object/public/journals/categories/deep_learning.jpg?t=2023-12-27T06%3A47%3A25.208Z',
			intro: 'Dive into advanced perspectives in deep learning with our international journal.',
			description:
				'The International Journal of Advanced Deep Learning Perspectives provides a dedicated space for scholars and practitioners to explore the frontiers of deep learning. Delving beyond the basics, this journal seeks to unravel the complexities of deep learning algorithms, architectures, and applications. From cutting-edge research to insightful perspectives, the journal covers a wide spectrum of topics, including advanced neural networks, novel learning paradigms, and emerging applications. Researchers and enthusiasts in the field can expect to encounter thought-provoking articles that push the boundaries of deep learning and offer fresh insights into its applications across various domains. Join us in the exploration of advanced perspectives in the dynamic realm of deep learning.',
			short: 'dlp'
		}
	];

	return json(categories);
};
