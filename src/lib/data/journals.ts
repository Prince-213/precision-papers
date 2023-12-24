import maze from '$lib/assets/images/pexels-google-deepmind-17483848.jpg';
	import abstract from '$lib/assets/images/pexels-google-deepmind-17483848.jpg';
	import code from '$lib/assets/images/pexels-kevin-ku-577585.jpg';
	import think from '$lib/assets/images/pexels-pavel-danilyuk-8438918.jpg';
	import spark from '$lib/assets/images/pexels-pixabay-414860.jpg';
	import pie from '$lib/assets/images/pexels-lukas-590041.jpg';
	import review from '$lib/assets/images/pexels-lukas-669621.jpg';
	import office from '$lib/assets/images/pexels-marc-mueller-380769.jpg';
import { json } from '@sveltejs/kit';

type journals = {
    id: number,
    title: string,
    poster: string,
    intro: string,
    description: string[]
}[]



export const journals: journals = [
    {
        id: 1,
        title: 'International Journal Of Real-Time Applications And Computing Systems (IJORTACS)',
        poster: maze,
        intro: 'The International Journal of Real-Time Applications and Computing Systems (IJORTACS) is a renowned scholarly publication that focuses on the advancements and innovations in real-time applications and computing systems. With a global readership and contributions from leading researchers and practitioners in the field, IJORTACS serves as a platform for disseminating cutting-edge research, exploring emerging trends, and exchanging knowledge related to real-time computing. The journal covers a wide range of topics, including real-time systems, embedded systems, cyber-physical systems, Internet of Things (IoT), real-time data analytics, and related areas. Through its rigorous peer-review process, IJORTACS ensures the publication of high-quality articles that contribute to the development and understanding of real-time applications and computing systems, making it a valuable resource for researchers, engineers, and professionals in the field.',
        description: [
            'The journal covers a wide range of topics, including real-time systems, embedded systems, cyber-physical systems, Internet of Things (IoT), real-time data analytics, and related areas. By featuring articles that delve into these areas, IJORTACS facilitates a comprehensive understanding of the challenges and opportunities associated with real-time applications and computing systems.',
            'Through its rigorous peer-review process, IJORTACS ensures the publication of high-quality articles that contribute to the development and understanding of real-time applications and computing systems, making it a valuable resource for researchers, engineers, and professionals in the field.',
            'IJORTACS provides a platform for researchers to showcase their original contributions, methodologies, experimental findings, and practical applications. By presenting novel insights and innovative solutions, the journal encourages the exploration of new approaches and techniques in the realm of real-time computing.',
            'With its commitment to excellence, IJORTACS plays a pivotal role in fostering advancements in real-time applications and computing systems. It serves as a go-to resource for researchers and practitioners seeking to stay updated on the latest research, industry trends, and technological breakthroughs in this rapidly evolving field.',
            'The journal comprehensive coverage, rigorous peer-review process, and commitment to disseminating high-quality research make it an invaluable publication for academics, professionals, and students interested in real-time applications and computing systems.'
        ]

    },
    {
        id: 2,
        title: 'International Journal Of Cutting Edge Engineering Research (IJOCEER)',
        poster: abstract,
        intro: 'The International Journal of Cutting Edge Engineering Research (IJOCEER) is a prestigious academic journal dedicated to showcasing cutting-edge research and developments in various engineering disciplines. IJOCEER provides a platform for researchers, engineers, and scientists to disseminate their original contributions, theoretical advancements, and practical applications across a wide spectrum of engineering fields. The journal covers diverse areas such as mechanical engineering, civil engineering, electrical engineering, computer science, and more. Through a rigorous peer-review process, IJOCEER ensures the publication of high-quality research papers that offer novel insights, innovative solutions, and technological advancements. By fostering collaboration and knowledge exchange, IJOCEER plays a vital role in promoting advancements in engineering research and contributing to the scientific community. It serves as an invaluable resource for scholars, professionals, and students seeking the latest advancements and breakthroughs in cutting-edge engineering research.',
        description: [
            'IJOCEER covers diverse areas such as mechanical engineering, civil engineering, electrical engineering, computer science, and more. The journal serves as a hub for researchers, academicians, and professionals to share their latest findings, innovative solutions, and technological advancements. Through a rigorous peer-review process, IJOCEER ensures the publication of high-quality research papers that offer novel insights, experimental results, and theoretical frameworks.',
            'By fostering collaboration and knowledge exchange, IJOCEER plays a vital role in promoting advancements in engineering research and contributing to the scientific community. It serves as an invaluable resource for scholars, professionals, and students seeking the latest advancements and breakthroughs in cutting-edge engineering research.',
            'The journal encourages interdisciplinary approaches and invites contributions that explore the intersection of different engineering disciplines. By embracing a wide range of topics and methodologies, IJOCEER enables researchers to push the boundaries of traditional engineering practices and explore emerging trends in the field.',
            'Through its comprehensive coverage and commitment to excellence, IJOCEER aims to inspire new perspectives, foster innovation, and shape the future of engineering. Researchers, practitioners, and students can rely on IJOCEER as a trusted source of knowledge and a platform for showcasing their groundbreaking work in the field of engineering.',
            
        ]

    },
    {
        id: 3,
        title: 'International Journal Of Explorative Computing Systems (IJECOS)',
        poster: code,
        intro: 'The International Journal of Explorative Computing Systems (IJECOS) is a groundbreaking scholarly publication dedicated to exploring and advancing the field of computing systems through innovative research and novel approaches. With its emphasis on exploration, IJECOS provides a platform for researchers, academicians, and professionals to contribute their original work in areas such as artificial intelligence, machine learning, data mining, computer vision, natural language processing, and other related domains. The journal encourages the discovery of new methodologies, techniques, and algorithms that push the boundaries of computing systems and foster advancements in various industries. Through rigorous peer-review processes, IJECOS ensures the publication of high-quality articles that offer unique perspectives, experimental findings, and theoretical insights, making it an essential resource for researchers and practitioners looking to stay at the forefront of explorative computing systems research.',
        description: [
            'IJECOS encourages the discovery of new methodologies, techniques, and algorithms that push the boundaries of computing systems and foster advancements in various industries. The journal focuses on the development and application of cutting-edge technologies and computational models that have the potential to revolutionize the way we interact with computers and the digital world.',
            'The published articles in IJECOS present unique perspectives, experimental findings, and theoretical insights, offering a comprehensive view of the latest trends and advancements in explorative computing systems. Researchers and practitioners will find valuable information on emerging techniques, innovative solutions, and practical applications that can drive transformative changes in fields like artificial intelligence, data science, and computer engineering.',
            'Through rigorous peer-review processes, IJECOS ensures the publication of high-quality articles that undergo thorough evaluation by experts in the field. This commitment to excellence ensures that readers can rely on the journal as a trusted source of up-to-date research and a catalyst for further exploration in computing systems.',
            'Researchers and practitioners who seek to stay at the forefront of explorative computing systems research will find IJECOS to be an essential resource. The journal not only offers insights into the latest advancements but also fosters interdisciplinary collaborations, promoting the exchange of knowledge and ideas among researchers and professionals from diverse backgrounds.',
            'By providing a platform for the dissemination of cutting-edge research, IJECOS plays a pivotal role in driving innovation and shaping the future of computing systems. It serves as an invaluable resource for researchers, academicians, and professionals looking to expand their understanding of explorative computing systems and contribute to the development of groundbreaking technologies that have the potential to transform industries and enhance human experiences.'
            
        ]

    },
    {
        id: 4,
        title: 'International Journal Of Next Generation Engineering Solutions (IJONGES)',
        poster: think,
        intro: 'The International Journal of Next Generation Engineering Solutions (IJONGES) is a prominent scholarly publication dedicated to showcasing innovative research and solutions in the field of engineering. IJONGES serves as a platform for researchers, engineers, and practitioners to share their advancements, methodologies, and practical applications across various engineering disciplines. The journal covers a wide range of topics including mechanical engineering, civil engineering, electrical engineering, computer science, and more. Through a rigorous peer-review process, IJONGES ensures the publication of high-quality research papers that present novel insights, technological breakthroughs, and cutting-edge solutions. By promoting interdisciplinary collaboration and knowledge exchange, IJONGES plays a crucial role in fostering the development of next-generation engineering solutions. It serves as a valuable resource for researchers, professionals, and students seeking to explore emerging trends and contribute to the advancements in engineering practices and technologies.',
        description: [
            'IJONGES is committed to publishing high-quality research papers that present novel insights, technological breakthroughs, and cutting-edge solutions. The journal invites original contributions that address the current challenges and emerging trends in engineering. By fostering interdisciplinary collaboration and knowledge exchange, IJONGES plays a crucial role in promoting the development of next-generation engineering solutions.',
            'The journal employs a rigorous peer-review process to ensure the publication of high-quality articles. Each submission undergoes a thorough evaluation by experts in the respective fields, ensuring that only the most valuable and impactful research is accepted for publication. This rigorous review process helps maintain the journal reputation as a trusted resource for researchers, professionals, and students seeking to explore emerging trends and contribute to the advancements in engineering practices and technologies.',
            'IJONGES also encourages the dissemination of practical applications and case studies that demonstrate the real-world implementation of innovative engineering solutions. By featuring these practical examples, the journal bridges the gap between academic research and industry practices, making it a valuable resource for practitioners seeking to apply the latest advancements in their respective fields.',
            'Researchers, professionals, and students in the field of engineering rely on IJONGES as an invaluable resource for staying updated with the latest research findings, technological advancements, and breakthroughs. The journal comprehensive coverage, rigorous peer-review process, and commitment to excellence make it an essential publication for anyone involved in engineering research, development, and innovation.',
            
            
        ]

    },
    {
        id: 5,
        title: 'International Journal Of Advances In Artificial Intelligent Trends (IJAIT)',
        poster: spark,
        intro: 'The International Journal of Advances in Artificial Intelligent Trends (IJAIT) is a leading scholarly publication dedicated to advancing the field of artificial intelligence (AI) by exploring and disseminating the latest trends, advancements, and research findings. IJAIT serves as a platform for researchers, academicians, and industry professionals to contribute their original work in various areas of AI, including machine learning, deep learning, natural language processing, computer vision, robotics, and more. Through a rigorous peer-review process, IJAIT ensures the publication of high-quality articles that present novel algorithms, methodologies, and theoretical frameworks, as well as practical applications of AI in diverse domains. The journal plays a pivotal role in facilitating the exchange of knowledge, fostering interdisciplinary collaborations, and promoting the development of intelligent systems that can revolutionize industries and enhance human lives. IJAIT serves as an invaluable resource for researchers, practitioners, and enthusiasts seeking to stay abreast of the latest advancements and trends in the field of artificial intelligence.',
        description: [
            'IJAIT strives to push the boundaries of AI research by publishing high-quality articles that present novel algorithms, methodologies, and theoretical frameworks, as well as practical applications of AI in diverse domains. The journal emphasizes the importance of rigorous peer-review processes to ensure the publication of cutting-edge research that offers unique insights and contributes to the development of the field.',
            'By fostering interdisciplinary collaboration and knowledge exchange, IJAIT plays a pivotal role in facilitating the advancement of intelligent systems that can revolutionize industries and enhance human lives. It serves as a valuable resource for researchers, practitioners, and enthusiasts seeking to stay abreast of the latest advancements and trends in the field of artificial intelligence.',
            'With its global readership and contributions from leading researchers and practitioners, IJAIT is at the forefront of AI research and provides a platform for sharing groundbreaking research, innovative solutions, and emerging trends. The journal encourages the exploration of AI potential to drive technological advancements and shape the future of various industries.',
            'Researchers, academicians, and industry professionals rely on IJAIT as an invaluable resource for staying updated on the latest breakthroughs, methodologies, and applications in artificial intelligence. Whether it is exploring new AI algorithms, understanding the impact of AI on society, or discovering practical implementations of AI in real-world scenarios, IJAIT serves as a comprehensive reference for those passionate about advancing the frontiers of artificial intelligence.',
            
            
        ]
    },
    {
        id: 6,
        title:
            'International Journal Of Advanced Industrial Communications and Cyber Security Systems (IJAICCSS)',
        poster: pie,
        intro: 'The International Journal of Advanced Industrial Communications and Cyber Security Systems (IJAICCSS) is a prestigious scholarly publication that focuses on the advancements and challenges in industrial communications and cyber security systems. The journal provides a platform for researchers, engineers, and professionals to contribute their original work in areas such as industrial networking, wireless communications, Internet of Things (IoT), cyber-physical systems, and secure communication protocols. With a rigorous peer-review process, IJAICCSS ensures the publication of high-quality articles that present innovative solutions, theoretical advancements, and practical applications in the field. The journal aims to address the growing importance of secure and reliable communications in industrial environments, as well as the critical need for cyber security measures to protect critical infrastructure and data. By disseminating cutting-edge research and facilitating knowledge exchange, IJAICCSS contributes to the development and understanding of advanced industrial communications and cyber security systems, making it a valuable resource for researchers, industry practitioners, and policy-makers in the field.',
        description: [
            'With the rapid proliferation of interconnected devices and the increasing reliance on digital systems in industrial environments, the need for secure and reliable communications has become paramount. IJAICCSS aims to address this critical need by publishing high-quality articles that present innovative solutions, theoretical advancements, and practical applications in the field of industrial communications and cyber security.',
            'The journal covers a broad spectrum of topics related to industrial communications, including but not limited to wireless sensor networks, industrial automation, intelligent control systems, cloud computing, edge computing, and communication protocols for industrial environments. It also explores the challenges and advancements in cyber security for industrial systems, including threat detection, intrusion prevention, data privacy, and secure communication protocols.',
            'Through its rigorous peer-review process, IJAICCSS ensures the publication of cutting-edge research that not only addresses the current challenges but also paves the way for future advancements in industrial communications and cyber security. The journal serves as a valuable resource for researchers, industry practitioners, and policy-makers who are interested in staying updated with the latest developments, best practices, and emerging trends in the field.',
            'By disseminating state-of-the-art research and facilitating knowledge exchange, IJAICCSS contributes to the development and understanding of advanced industrial communications and cyber security systems. It plays a pivotal role in fostering interdisciplinary collaboration, promoting industry-academia partnerships, and driving innovations that can enhance the security, reliability, and efficiency of industrial systems.',
            'Researchers, professionals, and policy-makers can rely on IJAICCSS as an invaluable resource to explore emerging technologies, learn from practical case studies, and stay at the forefront of advancements in industrial communications and cyber security. The journal comprehensive coverage, rigorous review process, and commitment to excellence make it a trusted publication in the field.'
        ]

    },
    {
        id: 7,
        title: 'International Journal Of Transformative Engineering Technology (IJOTET)',
        poster: review,
        intro: 'The International Journal of Transformative Engineering Technology (IJOTET) is a pioneering scholarly publication dedicated to showcasing transformative research and technological advancements in the field of engineering. IJOTET serves as a platform for researchers, scientists, engineers, and technologists to contribute their original work across diverse engineering disciplines. The journal covers a wide range of topics, including but not limited to mechanical engineering, electrical engineering, civil engineering, computer science, and emerging interdisciplinary areas. By emphasizing transformative engineering, IJOTET encourages the exploration of innovative methodologies, cutting-edge technologies, and disruptive approaches that have the potential to revolutionize industries and shape the future of engineering. Through a rigorous peer-review process, IJOTET ensures the publication of high-quality articles that present novel insights, experimental findings, theoretical frameworks, and practical applications. By disseminating transformative research, IJOTET plays a pivotal role in driving innovation, fostering collaboration, and advancing the boundaries of engineering technology. It serves as an invaluable resource for researchers, practitioners, and professionals seeking to stay at the forefront of transformative engineering advancements.',
        description: [
            'IJOTET covers a wide range of topics, including but not limited to mechanical engineering, electrical engineering, civil engineering, computer science, and emerging interdisciplinary areas. By encouraging the exploration of innovative methodologies, cutting-edge technologies, and disruptive approaches, the journal aims to revolutionize industries and shape the future of engineering.',
            'Through a rigorous peer-review process, IJOTET ensures the publication of high-quality articles that present novel insights, experimental findings, theoretical frameworks, and practical applications. The journal articles go beyond traditional engineering research and focus on transformative engineering, seeking to push the boundaries of what is possible in the field.',
            'IJOTET plays a pivotal role in driving innovation and fostering collaboration by disseminating transformative research. By showcasing groundbreaking advancements and highlighting the potential for disruptive technologies, the journal inspires researchers, practitioners, and professionals to stay at the forefront of transformative engineering advancements.',
            'Researchers and professionals who engage with IJOTET gain access to a wealth of knowledge and cutting-edge research that can be applied to real-world challenges. The journal serves as an invaluable resource for those seeking to harness the power of transformative engineering technology and make a significant impact in their respective fields.',
            'By facilitating the exchange of ideas, encouraging interdisciplinary collaborations, and advancing the boundaries of engineering technology, IJOTET contributes to the advancement of society and plays a vital role in shaping the future of engineering.'
        ]
    },
    {
        id: 8,
        title: 'International Journal Of Trending Biomedical Science (IJTBS)',
        poster: office,
        intro: 'The International Journal of Trending Biomedical Science (IJTBS) is a prestigious academic publication that focuses on disseminating the latest advancements and trends in the field of biomedical science. As a leading peer-reviewed journal, IJTBS serves as a platform for researchers, scientists, and scholars from around the world to share their cutting-edge research findings, innovative methodologies, and significant contributions to the biomedical sciences. IJTBS covers a wide range of topics within the biomedical science domain, including but not limited to molecular biology, genetics, pharmacology, bioinformatics, immunology, and medical technology. Through its rigorous peer-review process, the journal ensures the high quality and reliability of published research, contributing to the advancement of knowledge and the improvement of global healthcare practices. With its commitment to promoting scientific excellence, IJTBS plays a crucial role in fostering collaboration among experts and facilitating the exchange of ideas, ultimately driving progress and enhancing our understanding of human health and disease. Researchers, academicians, and medical professionals find IJTBS to be a valuable resource in staying at the forefront of the ever-evolving field of biomedical science.',
        description: [
            'The International Journal of Trending Biomedical Science (IJTBS) is an esteemed and influential academic journal that serves as a crucial platform for researchers and scholars to share their groundbreaking findings in the field of biomedical science. With a global reach and a dedication to advancing scientific knowledge, IJTBS publishes high-quality research articles, reviews, and case studies, covering diverse areas within biomedical science. The journal multidisciplinary nature encompasses various subfields, such as molecular biology, genetics, pharmacology, bioinformatics, immunology, neuroscience, and medical technology.',
            'IJTBS follows a rigorous peer-review process, ensuring that all submitted manuscripts undergo thorough evaluation by experts in the respective fields. This meticulous review process guarantees the reliability and validity of the published research, maintaining the journal reputation as a credible and reputable source of information. As a result, researchers and readers alike can trust the findings and conclusions presented in IJTBS.',
            'By promoting scientific excellence and facilitating knowledge exchange, IJTBS plays a pivotal role in advancing biomedical research and healthcare practices worldwide. Its comprehensive coverage of trending topics and emerging discoveries enables professionals in the field to stay up-to-date with the latest developments. Moreover, the journal international focus fosters collaboration and networking among researchers from different countries and backgrounds, encouraging a global approach to solving critical health challenges.',
            'RIJTBS not only serves as a repository of cutting-edge research but also inspires future investigations and encourages new perspectives in biomedical science. As a sought-after publication, it contributes significantly to the scientific community collective understanding of human health, disease mechanisms, and potential treatments. Scientists, academicians, and medical practitioners rely on IJTBS as an essential resource for expanding their knowledge and contributing to the advancement of biomedical science, ultimately benefiting society as a whole.',
            
        ]
    }
];