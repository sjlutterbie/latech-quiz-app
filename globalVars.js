'use strict';

// QUIZ DATA

const quizDataGlobal = [
{
 companyName: 'Inspire',
 companyWebsite: 'http://helloinspire.com/',
 companyDescription: 'Inspire works to help homeowners and businesses adopt smart energy technologies and cut down on pollution they emit into the world.',
 companyLogo: 'inspire-logo.png',
 companyQuestion: 'Who focuses on pushing the adoption of smart energy technologies?'},
{
 companyName: 'GOAT',
 companyWebsite: 'http://www.goat.com/',
 companyDescription: 'GOAT has created a way to authenticate, facilitate and fix the trade of valuable sneakers.',
 companyLogo: 'goat-logo.png',
 companyQuestion: 'Who\'s redefining the valuable sneaker market?'},
{
 companyName: 'Brainjolt',
 companyWebsite: 'http://brainjoltmedia.com/',
 companyDescription: 'BrainJolt is responsible for creating and distributing branded content that reaches 300 million users per month, operates some of the most successful mobile sites in the world.',
 companyLogo: 'brainjolt-logo.png',
 companyQuestion: 'Who operates some of the most successful mobile sites in the world?'},
{
 companyName: 'Chef\'d',
 companyWebsite: 'http://www.chefd.com/',
 companyDescription: 'Chefd\'s mission is to enrich lives with culinary adventure through their hand-cultivated, meticulously curated delicious experiences',
 companyLogo: 'chefd-logo.png',
 companyQuestion: 'Whose mission is to enrich lives with culinary adventure?'},
{
 companyName: 'ChowNow',
 companyWebsite: 'http://www.chownow.com/',
 companyDescription: 'ChowNow has built a personalized ordering systems for more than 10,000 restaurants nationwide - making it easy for customers to order directly from their website, Facebook page, and branded iPhone.',
 companyLogo: 'chownow-logo.png',
 companyQuestion: 'Who has built a personalized restaurant-ordering system?'},
{
 companyName: 'ServiceTitan',
 companyWebsite: 'http://www.servicetitan.com/',
 companyDescription: 'ServiceTitan is a leading business management software platform, powering some of the world\'s best home service companies.',
 companyLogo: 'servicetitan-logo.png',
 companyQuestion: 'Who\'s platform powers some of the world\'s best home service companies?'},
{
 companyName: 'SnackNation',
 companyWebsite: 'http://www.snacknation.com',
 companyDescription: 'SnackNation is a venture-backed one-of-a-kind healthy snack membership service sold to offices (B2B) in every state across America.',
 companyLogo: 'snacknation-logo.png',
 companyQuestion: 'Who sells snack membership services to offices across America?'},
{
 companyName: 'System1',
 companyWebsite: 'http://system1.com/',
 companyDescription: 'System1 was founded with a simple mission—use technology to make advertising better for consumers and advertisers.',
 companyLogo: 'system1-logo.png',
 companyQuestion: 'Whose mission is to make advertising better for consumers and advertisers?'},
{
 companyName: 'TaskUs',
 companyWebsite: 'https://www.taskus.com/',
 companyDescription: 'TaskUs provides next generation customer experience that powers the world\'s most disruptive companies through the partnership of amazing people and innovative technology.',
 companyLogo: 'taskus-logo.jpg',
 companyQuestion: 'Who is providing a next generation customer experience platform?'},
{
 companyName: 'Fair',
 companyWebsite: 'http://www.fair.com/',
 companyDescription: 'Fair is an automotive FinTech company that\'s revolutionizing car buying by offering unprecedented freedom, flexibility and an end-to-end mobile experience. ',
 companyLogo: 'fair-logo.png',
 companyQuestion: 'Who is revolutionizing car buying?'},
{
 companyName: 'FloQast',
 companyWebsite: 'http://www.floqast.com/',
 companyDescription: 'FloQast builds cloud-based software that helps manage accounting departments by centralizing the workflow, assigning tasks, supporting documentation and automating tie-outs and reconciliations.',
 companyLogo: 'floqast-logo.png',
 companyQuestion: 'Whose cloud-based software helps manage accounting departments?'},
{
 companyName: 'Gem',
 companyWebsite: 'https://gem.co/',
 companyDescription: 'Gem\'s is a cryptocurrency and blockchain startup whose mission is to empower individuals to take full control of their wealth, to benefit from the value of their own data, and to experience the collective power of the decentralized movement spreading globally today.',
 companyLogo: 'gem-logo.png',
 companyQuestion: 'Who\'s using blockchain to empower individuals to take full control of their wealth?'},
{
 companyName: 'Divergent 3D',
 companyWebsite: 'http://www.divergent3d.com/',
 companyDescription: 'Divergent 3D aims to revolutionize the auto industry through 3D printing',
 companyLogo: 'divergent3d-logo.png',
 companyQuestion: 'Who aims to revolutionize the auto industry through 3D printing?'},
{
 companyName: 'WITHIN',
 companyWebsite: 'http://with.in/',
 companyDescription: 'WITHIN is the premier destination for innovative, entertaining, and informative story-based virtual and augmented reality. ',
 companyLogo: 'within-logo.png',
 companyQuestion: 'Who\'s the premier destination for story-based virtual and augmented reality?'},
{
 companyName: 'Virgin Hyperloop One',
 companyWebsite: 'http://hyperloop-one.com/',
 companyDescription: 'Virgin Hyperloop One is a new mode of transportation that eliminates barriers of distance and time. ',
 companyLogo: 'virginhyperloopone-logo.png',
 companyQuestion: 'Who\'s creating a new mode of transportation to eliminate barriers of distance and time?'},
{
 companyName: 'KEYPR',
 companyWebsite: 'https://www.keypr.com/',
 companyDescription: 'KEYPR® is a cloud-based guest experience and management platform for hotels, casinos and luxury residences.',
 companyLogo: 'keypr-logo.png',
 companyQuestion: 'Who\'s building a cloud-based guest experience platform?'},
{
companyName: 'Reformation',
 companyWebsite: 'https://www.thereformation.com/',
 companyDescription: 'Reformation designs and manufactures limited edition collections using sustainable methods and materials like eco fabrics, deadstock and repurposed vintage garments.',
 companyLogo: 'reformation-logo.jpg',
 companyQuestion: 'Who designs limited edition fashion using sustainable methods?'},
{
 companyName: 'Renew',
 companyWebsite: 'http://renew.com/',
 companyDescription: 'Renew creates innovative content & tools that simplify the complex decisions retirees face.',
 companyLogo: 'renew-logo.png',
 companyQuestion: 'Who\'s simplifying the complex decisions retirees face?'},
{
 companyName: 'Science 37',
 companyWebsite: 'http://science37.com/',
 companyDescription: 'Science 37 is a mobile technology and clinical trials organization based in LA and SF that focuses on the development of networked patient-centric models for clinical research to rapidly accelerate biomedical discovery',
 companyLogo: 'science-37-logo.png',
 companyQuestion: 'Who is using networked models for clinical research to rapidly accelerate biomedical discovery?'},
{
 companyName: 'Obsidian Security',
 companyWebsite: 'https://www.obsidiansecurity.com/',
 companyDescription: 'Obsidian Security is focused on using applied mathematics and machine learning to bring insights to organizations using modern hybrid architectures.',
 companyLogo: 'obsidian-logo.png',
 companyQuestion: 'Who is focused on using applied mathematics and machine learning to bring insights to organizations?'},
{
 companyName: 'Earny',
 companyWebsite: 'http://www.earny.com/',
 companyDescription: 'Earny is a personal assistant that automatically gets you money back on almost every purchase.',
 companyLogo: 'earny-logo.png',
 companyQuestion: 'Who gets you money back on almost every purchase?'},
{
 companyName: 'ATTN:',
 companyWebsite: 'http://www.attn.com/',
 companyDescription: 'ATTN: exists at the intersection of context and entertainment to inform and inspire a young audience around their most passionate points of interest. ',
 companyLogo: 'attn-logo.png',
 companyQuestion: 'Who inspires a young audience around their most passionate points of interest?'},
{
 companyName: 'AppOnboard',
 companyWebsite: 'http://www.apponboard.com/',
 companyDescription: 'AppOnboard is a next-gen platform that powers Full-Fidelity Demos, which allow users to instantly experience an app or game in the highest quality possible before downloading it.',
 companyLogo: 'apponboard-logo.png',
 companyQuestion: 'Who powers full-fidelity game demos?'},
{
 companyName: 'Clutter',
 companyWebsite: 'http://clutter.com/',
 companyDescription: 'Clutter\'s innovative supply chain offers consumers 10x more convenience, disrupting the $33B/year self-storage industry',
 companyLogo: 'clutter-logo.png',
 companyQuestion: 'Who is disrupting the self-storage industry?'},
{
 companyName: 'ConversionPoint Technologies',
 companyWebsite: 'http://www.conversionpoint.com/',
 companyDescription: 'ConversionPoint Technologies is a leading e-commerce infrastructure technology platform that powers high growth e-commerce sales.',
 companyLogo: 'conversionpoint-logo.png',
 companyQuestion: 'Who\'s platform is powering high-growth e-commerce sales?'},
{
 companyName: 'Boundless Mind',
 companyWebsite: 'http://www.boundless.ai/',
 companyDescription: 'Boundless Mind is a behavioral and persuasive technology company that uses the latest in Artificial Intelligence, Machine Learning, and Neuroscience to make apps and software more habit forming.',
 companyLogo: 'boundlessmind-logo.png',
 companyQuestion: 'Who\'s using AI and machine learning to make apps and software more habit forming?'},
{
 companyName: 'dosist',
 companyWebsite: 'http://dosist.com/',
 companyDescription: 'dosist is a health and wellness company dedicated to providing safe, targeted and effective cannabis-based solutions to millions of people.',
 companyLogo: 'dosist-logo.jpg',
 companyQuestion: 'Who is providing safe, targeted, and effective cannabis-based solutions?'},
{
 companyName: 'DroneBase',
 companyWebsite: 'http://dronebase.com/',
 companyDescription: 'DroneBase provides aerial imagery & data to enterprise customers at a fraction of the cost and time, pioneering innovative technology in the commercial drone space.',
 companyLogo: 'dronebase-logo.png',
 companyQuestion: 'Who provides aerial imagery & data to enterprise customers?'},
{
 companyName: 'Flo',
 companyWebsite: 'http://www.flotechnologies.com/',
 companyDescription: 'Flo offers a proprietary water control system for homes and buildings that virtually eliminates all flooding caused by leaks, avoids property damage, and empowers conservation.',
 companyLogo: 'flo-logo.jpg',
 companyQuestion: 'Who offers proprietary water control systems to homes and buildings?'},
{
 companyName: 'GameMine',
 companyWebsite: 'https://www.gamemine.com/',
 companyDescription: 'GameMine develops, licenses and acquires mobile games, then provides them to consumers in more than 135 countries through a subscription-based mobile game marketplace.',
 companyLogo: 'gamemine-logo.png',
 companyQuestion: 'Who has built a subscription-based game marketplace?'},
{
 companyName: 'Girlboss',
 companyWebsite: 'http://girlboss.com/',
 companyDescription: 'Girlboss was born from the book that inspired a generation of women to take action in their own lives.',
 companyLogo: 'girlboss-logo.jpeg',
 companyQuestion: 'Who is inspiring women to take action in their own lives?'},
{
 companyName: 'Hutch',
 companyWebsite: 'http://hutch.com/',
 companyDescription: 'Hutch gives you the opportunity to try something new without the heavy lifting, expensive designer budgets, and the hit and miss of furniture shopping',
 companyLogo: 'hutch-logo.jpg',
 companyQuestion: 'Who is simplifying the home decorating industry?'},
{
 companyName: 'Local Roots Farms',
 companyWebsite: 'http://www.localrootsfarms.com/',
 companyDescription: 'Local Roots Farms are boldly developing technologies to feed the planet healthy and delicious food in an environmentally responsible way.',
 companyLogo: 'localroots-logo.jpg',
 companyQuestion: 'Who\'s developing technology to feed the planet in an environmentally responsible way?'},
{
 companyName: 'Mobalytics',
 companyWebsite: 'http://www.mobalyticshq.com/',
 companyDescription: 'Mobalytics obsess about improvement and \"growth hacking\" users\' gameplay on competitive ladders',
 companyLogo: 'mobalytics-logo.png',
 companyQuestion: 'Who focuses on \"growth hacking\" users\' gameplay?'},
{
 companyName: '82 Labs',
 companyWebsite: 'https://www.morningrecoverydrink.com/',
 companyDescription: '82 Labs launched their first product, Morning Recovery, as a peach flavored beverage that helps you balance productivity and social life.',
 companyLogo: '82labs-logo.jpg',
 companyQuestion: 'Who launched a peach-flavored beverage that helps balance productivity and social life?'},
{
 companyName: 'Ozobot',
 companyWebsite: 'http://www.ozobot.com/',
 companyDescription: 'Ozobot focuses on introducing new ways to combine social interaction with digital apps',
 companyLogo: 'ozobot-logo.jpeg',
 companyQuestion: 'Who\'s introducing new ways to combine social interactions with digital apps?'},
{
 companyName: 'PeerStreet',
 companyWebsite: 'https://www.peerstreet.com/',
 companyDescription: 'PeerStreet provides investments in quality, short-term, real estate backed loans - allowing investors to diversify their capital in an asset class that has been traditionally difficult to access.',
 companyLogo: 'peerstreet-logo.png',
 companyQuestion: 'Who\'s allowing investors to diversify their capital in a traditionally difficult to access asset class?'},
{
 companyName: 'Neural Analytics',
 companyWebsite: 'http://neuralanalytics.com/',
 companyDescription: 'Neural Analytics is addressing the global traumatic brain injury epidemic through data science.',
 companyLogo: 'neuralanalytics-logo.png',
 companyQuestion: 'Who is addressing the global traumatic brain injury epidemic?'},
{
 companyName: 'ObEN',
 companyWebsite: 'http://oben.me/',
 companyDescription: 'ObEN is an artificial intelligence (AI) company that creates complete virtual identities for consumers and celebrities in the emerging digital world',
 companyLogo: 'oben-logo.png',
 companyQuestion: 'Who creates virtual identities for celebrities?'},
{
 companyName: 'Ordermark',
 companyWebsite: 'http://www.getordermark.com/',
 companyDescription: 'Ordermark\'s product consolidates online orders from different services and sends them to a single dashboard and printer.',
 companyLogo: 'ordermark-logo.png',
 companyQuestion: 'Who consolidates online orders to a single dashboard and printer?'},
{
 companyName: 'Pex',
 companyWebsite: 'http://www.pex.com/',
 companyDescription: 'Pex is like Google for music and videos. They created a platform where creators can search for their work, and be in control of their true reach.',
 companyLogo: 'pex-logo.png',
 companyQuestion: 'Who created a platform where creators can search for their work, and be in control of their true reach?'},
{
 companyName: 'Seriously',
 companyWebsite: 'http://www.seriously.com/',
 companyDescription: 'Seriously are building a global mobile entertainment company, with free to play games at the heart of their business.',
 companyLogo: 'seriously-logo.png',
 companyQuestion: 'Who is building a global entertainment company based on free games?'},
{
 companyName: 'The Boring Company',
 companyWebsite: 'https://boringcompany.com/',
 companyDescription: 'The Boring Company seeks to solve the problem of soul-destroying traffic with large networks of tunnels many levels that would fix congestion in any city, no matter how large it grew.',
 companyLogo: 'theboringcompany-logo.png',
 companyQuestion: 'Who seeks to solve the problem of soul-destroying traffic?'},
{
 companyName: 'Tuition.io',
 companyWebsite: 'http://www.tuition.io/',
 companyDescription: 'Tuition.io is the leading employee benefit platform empowering employers to retain talent who are saddled with stifling student debt by helping them pay it down.',
 companyLogo: 'tuitionio-logo.png',
 companyQuestion: 'Who is empowering employers to retain talent who are saddled with student debt? '},
{
 companyName: 'Upkeep Maintenance Management',
 companyWebsite: 'https://onupkeep.com/',
 companyDescription: 'UpKeep Maintenance Management Software is a task management tool startup for facility maintenance teams that makes their work more productive and change the way facility maintenance requests are made and received.',
 companyLogo: 'upkeep-logo.png',
 companyQuestion: 'Who built a task management tool for facility maintenance teams?'},
{
 companyName: 'Virtualitics',
 companyWebsite: 'http://virtualitics.com/',
 companyDescription: 'Virtualitics lets you visualize and understand your data as never before thanks to their innovative use of VR/AR, Machine Learning and Natural Language.',
 companyLogo: 'virtualitics-logo.png',
 companyQuestion: 'Who uses VR/AR to help you visualize and understand your data?'},
{
 companyName: 'Wag!',
 companyWebsite: 'http://www.wagwalking.com/',
 companyDescription: 'Wag! lets you browse your friendly neighborhood walkers who have a lot of experience caring for doggies. Each walker has created a short video to show off their personality!',
 companyLogo: 'wag-logo.png',
 companyQuestion: 'Who lets you browse your neighborhood dog walkers?'},
{
 companyName: 'Watch Gang',
 companyWebsite: 'https://www.watchgang.com/',
 companyDescription: 'Watch Gang is a subscription-based curation and content company for watch lovers.',
 companyLogo: 'watchgang-logo.jpg',
 companyQuestion: 'Who created a subscription-based curation and content company for watch lovers?'},
{
 companyName: 'WebJoint',
 companyWebsite: 'https://www.builtinla.com/company/webjoint',
 companyDescription: 'WebJoint is an all-in-one software that helps cannabis business owners manage their patients, finances, employees, inventory, and website.',
 companyLogo: 'webjoint-logo.png',
 companyQuestion: 'Who helps cannabis business owners manage their operations?'},
{
 companyName: 'Wondery',
 companyWebsite: 'http://wondery.com/',
 companyDescription: 'Wondery is brand-new media company specialized in mobile and on-demand audio storytelling, that will create and curate podcasts to connect wonderers and brands to a world of entertainment and a world of knowledge.',
 companyLogo: 'wondery-logo.png',
 companyQuestion: 'Who specializes in mobile and on-demand audio storytelling?'}
];

// QUESTION LIST (Order to be randomized)

let questionList = [];

// USER PROGRESS DATA

const userProgressGlobal = {
  questionNumber: 0,
  correctAnswers: 0
};
