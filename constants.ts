

import { Course, DailySchedule } from './types';

export const MOTIVATIONAL_QUOTES = [
  "Consistency compounds — attend today, lead tomorrow.",
  "Small daily steps produce giant term results.",
  "Your focus is the investment; attendance is the ROI.",
  "One class today is 1% closer to mastery.",
  "Show up, learn more, achieve faster."
];

export const TIPS = [
  "Tip: Mark 'Excused' only when you have documentation to preserve accuracy.",
  "Tip: Use 'Dive Deeper' for NotebookLM notes linked to each course.",
  "Tip: Add your Class Tests in the Assignments tab to stay ahead.",
  "Tip: Use the Exam Prep tab to test your knowledge before finals."
];

// Helper to generate generic MCQs
const generateGenericMCQs = (courseCode: string, startIndex: number): any[] => {
  const generic = [];
  for (let i = startIndex; i <= 10; i++) {
    generic.push({
      id: `mcq-${courseCode}-${i}`,
      question: `Concept Check ${i}: Review the key theories of ${courseCode}.`,
      options: ["True", "False", "Not Applicable", "Debatable"],
      correctIndex: 0
    });
  }
  return generic;
};

export const COURSES: Course[] = [
  {
    id: 'CAJ-401',
    code: 'CAJ-401',
    title: 'New Media Technologies',
    marks: 100,
    teachers: ['Ali Mohammad Zakaria Khan'],
    driveLink: 'https://drive.google.com/drive/folders/1kAm-yZ0fcz-jtA61-cGn8oatRhegNqjO?usp=drive_link',
    notebookLink: 'https://notebooklm.google.com/notebook/92f96602-e0c0-44bb-b15c-ccbf3ac32b11',
    description: "Explores cutting-edge technologies shaping the modern world, from AI models like DeepSeek to space exploration and the 4th Industrial Revolution.",
    objectives: "To understand the mechanics and implications of modern tech from AI to Space exploration and their impact on communication.",
    outcomes: [
      "Analyze the impact of the 4th Industrial Revolution.",
      "Understand the role of DeepSeek and Generative AI.",
      "Evaluate the geopolitical implications of Starlink and 5G.",
      "Discuss the ethics of modern warfare and surveillance."
    ],
    readings: [
      "Schwab, K. (2016). The Fourth Industrial Revolution.",
      "Selected readings on DeepSeek and Large Language Models.",
      "Articles on James Webb Space Telescope and modern astronomy."
    ],
    relatedLinks: [
      { title: "DeepSeek AI", url: "https://www.deepseek.com/" },
      { title: "James Webb Telescope", url: "https://webb.nasa.gov/" }
    ],
    topics: [
      { id: 't1', title: 'DeepSeek & Generative AI' },
      { id: 't2', title: 'James Webb Space Telescope' },
      { id: 't3', title: 'Modern Warfare Technologies' },
      { id: 't4', title: 'Crypto Currency & Blockchain' },
      { id: 't5', title: 'Artificial Intelligence (AI)' },
      { id: 't6', title: 'Internet Of Things (IoT)' },
      { id: 't7', title: '5G Technology' },
      { id: 't8', title: 'Starlink & Satellite Internet' },
      { id: 't9', title: '4th Industrial Revolution' },
      { id: 't10', title: 'Big Data Analytics' },
      { id: 't11', title: 'Robotics & Automation' },
      { id: 't12', title: 'Cloud Computing' },
      { id: 't13', title: 'AR / VR (Augmented & Virtual Reality)' }
    ],
    theoryQuestions: [
      { id: 'q1', question: 'Discuss the impact of the 4th Industrial Revolution on modern communication.' },
      { id: 'q2', question: 'Explain the significance of the James Webb Space Telescope in modern science.' },
      { id: 'q3', question: 'What is DeepSeek? How is it different from other AI models?' },
      { id: 'q4', question: 'Discuss the role of Starlink in global connectivity and geopolitics.' },
      { id: 'q5', question: 'What is Crypto Currency? Discuss its future in the global economy.' },
      { id: 'q6', question: 'Define New Media. Point out the major differences between New Media and traditional media.' },
      { id: 'q7', question: 'What changes are seen in the practice of journalism in Bangladesh as a result of New Media?' },
      { id: 'q8', question: 'Discuss the security and privacy threats of New Media and their solutions.' }
    ],
    mcqs: [
      { id: 'm1', question: 'Starlink is a project by which company?', options: ['SpaceX', 'Blue Origin', 'NASA', 'Amazon'], correctIndex: 0 },
      { id: 'm2', question: 'Which is a key component of the 4th Industrial Revolution?', options: ['Steam Power', 'Electricity', 'Cyber-physical Systems', 'Assembly Line'], correctIndex: 2 },
      { id: 'm3', question: 'DeepSeek is primarily known as:', options: ['A search engine', 'An AI model', 'A VR headset', 'A Crypto coin'], correctIndex: 1 },
      { id: 'm4', question: 'IoT refers to:', options: ['Internet of Technology', 'Internet of Things', 'Input of Text', 'Intranet of Tools'], correctIndex: 1 },
      { id: 'm5', question: 'James Webb Space Telescope primarily observes in:', options: ['X-Ray', 'Infrared', 'Ultraviolet', 'Radio waves'], correctIndex: 1 },
      ...generateGenericMCQs('CAJ-401', 6)
    ]
  },
  {
    id: 'CAJ-402',
    code: 'CAJ-402',
    title: 'Media, Society & Culture',
    marks: 100,
    teachers: ['Rajib Nandy', 'Hamida Sultana'],
    driveLink: 'https://drive.google.com/drive/folders/1AP6Nh98_2ySEpWK443gn8eGTjxnhZ902?usp=drive_link',
    notebookLink: 'https://notebooklm.google.com/notebook/1211de89-5d4e-4be7-82bc-c0ac1144b747',
    description: "Analyzes the interplay between media, society, and culture through Critical Theory, Marxism, and Postmodernism.",
    objectives: "To critically analyze media structures, cultural hegemony, and the socio-political role of mass media.",
    outcomes: [
      "Critique media using Frankfurt School and Marxist perspectives.",
      "Understand Cultural Hegemony and Imperialism.",
      "Analyze the shift from Modernity to Post-Modernity.",
      "Evaluate the 'Culture of Fear'."
    ],
    readings: [
      "Williams, R. - Culture and Society",
      "Gramsci, A. - Prison Notebooks",
      "Said, E. - Orientalism"
    ],
    topics: [
      { id: 't1', title: 'Raymond Williams: Culturalism' },
      { id: 't2', title: 'Political Economy of Mass Media' },
      { id: 't3', title: 'Imperialism (Michael Parenti)' },
      { id: 't4', title: 'Mass Society' },
      { id: 't5', title: 'Foucault: Power, Knowledge & Discourse' },
      { id: 't6', title: 'Edward Said: Orientalism' },
      { id: 't7', title: 'Marxism & The Communist Manifesto' },
      { id: 't8', title: 'Uses & Gratification Theory' },
      { id: 't9', title: 'Modernism vs Postmodernism' },
      { id: 't10', title: 'Popular Culture' },
      { id: 't11', title: 'McLuhan: Medium is the Message' },
      { id: 't12', title: 'Digital Age Propaganda Model' },
      { id: 't13', title: 'Frankfurt School' },
      { id: 't14', title: 'Gramsci: Hegemony & Intellectuals' },
      { id: 't15', title: 'Magic Bullet Theory' },
      { id: 't16', title: 'Culture of Fear' },
      { id: 't17', title: 'News Sources & Bangladesh Context' },
      { id: 't18', title: 'Information Society & Network Society' }
    ],
    theoryQuestions: [
      { id: 'q1', question: 'What kind of view does the Frankfurt School hold about mass culture? Discuss.' },
      { id: 'q2', question: 'How does the political economy of mass media control the media structure in a democratic society?' },
      { id: 'q3', question: 'Analyze the relationship and difference between: mass culture, mass society, and modern society.' },
      { id: 'q4', question: 'What is the Magic Bullet Theory? Discuss its relevance in Bangladesh.' },
      { id: 'q5', question: 'How do imperialism and media empire establish cultural hegemony? Explain.' },
      { id: 'q6', question: 'Difference between modernity and postmodernity? How is it reflected in media analysis?' },
      { id: 'q7', question: 'Explain Antonio Gramsci\'s Hegemony Theory and its relevance in Bangladesh.' },
      { id: 'q8', question: 'What are News Sources? Analyze influences on determining news sources in Bangladeshi media.' },
      { id: 'q9', question: 'What is meant by "Culture of Fear"? Analyze how mass media creates a culture of fear.' },
      { id: 'q10', question: 'Internet age, Information Society, and Network Society—analyze in the context of Bangladesh.' }
    ],
    mcqs: [
      { id: 'm1', question: 'Who is associated with the concept of "Cultural Hegemony"?', options: ['Antonio Gramsci', 'Karl Marx', 'Max Weber', 'Adorno'], correctIndex: 0 },
      { id: 'm2', question: 'Raymond Williams is a key figure in:', options: ['Cultural Studies', 'Psychology', 'Economics', 'Political Science'], correctIndex: 0 },
      { id: 'm3', question: 'The "Propaganda Model" is primarily associated with:', options: ['Herman & Chomsky', 'McLuhan', 'Foucault', 'Hall'], correctIndex: 0 },
      { id: 'm4', question: 'Michel Foucault is famous for linking Power with:', options: ['Money', 'Knowledge', 'Force', 'Media'], correctIndex: 1 },
      { id: 'm5', question: 'Which term refers to the global spread of Western media products?', options: ['Media Imperialism', 'Media Pluralism', 'Media Literacy', 'Media Ecology'], correctIndex: 0 },
      ...generateGenericMCQs('CAJ-402', 6)
    ]
  },
  {
    id: 'CAJ-403',
    code: 'CAJ-403',
    title: 'Development Communication',
    marks: 100,
    teachers: ['Saima Alam'],
    driveLink: 'https://drive.google.com/drive/folders/1QuFRlhSdEaRfRQfC_pQqt1V0_dCeUtX8?usp=drive_link',
    notebookLink: 'https://notebooklm.google.com/notebook/bed3f62b-c3c4-4433-8301-bdbfc22919ae',
    description: "Detailed study of development theories, models, and their application in national sectors like Industry, Health, and Economy.",
    objectives: "To understand the various theories of development and communication, and apply them to design effective communication strategies.",
    outcomes: [
      "Understand the evolution of development concepts.",
      "Design communication strategies using the ACADA model.",
      "Analyze the role of media in development.",
      "Critique modernization and dependency theories."
    ],
    readings: [
      "Servaes, J. - Communication for Development",
      "Rogers, E. - Diffusion of Innovations",
      "Rostow, W.W. - The Stages of Economic Growth"
    ],
    topics: [
      { id: 't1', title: 'Concept & Evolution of Development' },
      { id: 't2', title: 'Development Design' },
      { id: 't3', title: 'Development in Industry/Social/Pol/Eco Sectors' },
      { id: 't4', title: 'Communication Strategy' },
      { id: 't5', title: 'Raul Prebisch: Dependency Theory' },
      { id: 't6', title: 'Tools of Development Communication' },
      { id: 't7', title: 'Pre-conditions of Dev. Comm.' },
      { id: 't8', title: 'Development Initiative / Development Effort' },
      { id: 't9', title: 'ACADA Model' },
      { id: 't10', title: 'Rostow’s Economic Growth Theory' },
      { id: 't11', title: 'Maslow’s Hierarchy of Needs' },
      { id: 't12', title: 'Development Support Communication (DSC)' },
      { id: 't13', title: 'C4D (Communication for Development)' },
      { id: 't14', title: 'Health Belief Model' },
      { id: 't15', title: 'Participatory Communication Model' },
      { id: 't16', title: 'Social Learning Theory' },
      { id: 't17', title: 'Social Norms Model' },
      { id: 't18', title: 'Diffusion of Innovation' },
      { id: 't19', title: 'Modernization Theory' }
    ],
    theoryQuestions: [
      { id: 'q1', question: 'What is development? Discuss various perspectives (evolutionary, functionalist, positivist). Discuss characteristics of modern man.' },
      { id: 'q2', question: 'Explain the ACADA Model of communication planning.' },
      { id: 'q3', question: 'What is the Dependency Theory by Raul Prebisch?' },
      { id: 'q4', question: 'What are the prerequisites for development communication?' },
      { id: 'q5', question: 'Discuss the Health Belief Model in public health campaigns.' },
      { id: 'q6', question: 'Discuss Rostow’s theory of economic growth and identify the status of Bangladesh.' },
      { id: 'q7', question: 'What is modernization? Write on three major doctrines of modernization.' }
    ],
    mcqs: [
      { id: 'm1', question: 'ACADA stands for:', options: ['Assessment, Communication, Analysis, Design, Action', 'Action, Communication, Analysis, Design, Assessment', 'Assessment, Control, Action, Design, Analysis', 'None'], correctIndex: 0 },
      { id: 'm2', question: 'Who proposed the "Stages of Economic Growth"?', options: ['W.W. Rostow', 'Marx', 'Weber', 'Keynes'], correctIndex: 0 },
      { id: 'm3', question: 'C4D emphasizes:', options: ['Dialogue and Participation', 'Top-down instruction', 'Infrastructure building', 'Profit making'], correctIndex: 0 },
      { id: 'm4', question: 'Diffusion of Innovation explains:', options: ['How new ideas spread', 'How prices are set', 'How conflict starts', 'How languages evolve'], correctIndex: 0 },
      { id: 'm5', question: 'Dependency Theory critiques:', options: ['Modernization Theory', 'Marxism', 'Socialism', 'Feminism'], correctIndex: 0 },
      ...generateGenericMCQs('CAJ-403', 6)
    ]
  },
  {
    id: 'CAJ-404',
    code: 'CAJ-404',
    title: 'Global Media & Intl. Communication',
    marks: 100,
    teachers: ['Dr. Mohammad Sahid Ullah', 'Atiqur Rahman'],
    driveLink: 'https://drive.google.com/drive/folders/1sCY-u5VQWPqMtt-Lbx2PoD2bZ6oiy3LR?usp=drive_link',
    notebookLink: 'https://notebooklm.google.com/notebook/0b85aadd-42ed-45be-869c-daef78ad2028',
    description: "Studies the flow of global information, media imperialism, and the political economy of global media.",
    objectives: "To analyze the power dynamics in global information flow and understand the political economy of international media.",
    outcomes: [
      "Evaluate the MacBride Report and NWICO.",
      "Understand Media Imperialism and Globalization.",
      "Analyze the role of global news agencies (CNN, BBC, Al Jazeera).",
      "Discuss the political economy of global media."
    ],
    readings: [
      "MacBride Commission Report",
      "Thussu, D.K. - International Communication",
      "Herman & Chomsky - Manufacturing Consent"
    ],
    topics: [
      { id: 't1', title: 'International Flow of Information' },
      { id: 't2', title: 'MacBride Report (Make Bread Report)' },
      { id: 't3', title: 'Media Globalization & Cyber Politics' },
      { id: 't4', title: 'Global E-commerce & Knowledge' },
      { id: 't5', title: 'Media Imperialism' },
      { id: 't6', title: 'Global Journalism (Al Jazeera, BBC)' },
      { id: 't7', title: 'Media Framing & CNN Effects' },
      { id: 't8', title: 'Policy Making Effects' },
      { id: 't9', title: 'International Dimension of Media' },
      { id: 't10', title: 'Selective Theory' },
      { id: 't11', title: 'Capital Media & Management' },
      { id: 't12', title: 'Mapping Social Media Patterns' },
      { id: 't13', title: 'Advocacy Journalism' },
      { id: 't14', title: 'Panopticon & Foucault' },
      { id: 't15', title: 'Political Economics of Global Media' },
      { id: 't16', title: 'Historical Flow & Involvement' },
      { id: 't17', title: 'Profit Share & Global Media Labour' },
      { id: 't18', title: 'Comparative Pattern' },
      { id: 't19', title: 'Audience Commodity' },
      { id: 't20', title: '4 Theories of Press' },
      { id: 't21', title: 'Hybrid Media Content' },
      { id: 't22', title: 'Post Truth Era' },
      { id: 't23', title: '21st Century Media Order' },
      { id: 't24', title: 'Creative Economy' }
    ],
    theoryQuestions: [
      { id: 'q1', question: 'Discuss the MacBride Commission recommendations. Are they still relevant?' },
      { id: 'q2', question: 'Analyze the "CNN Effect" in international diplomacy.' },
      { id: 'q3', question: 'Explain the concept of "Panopticon" in digital surveillance.' },
      { id: 'q4', question: 'Discuss the Political Economy of Global Media. How does profit sharing work?' },
      { id: 'q5', question: 'What is the "Post-Truth Era"? How has it affected global journalism?' },
      { id: 'q6', question: 'Discuss Global Journalism trends with reference to Al Jazeera and BBC.' },
      { id: 'q7', question: 'Media Order of the 21st Century - valuation of laborers in news and entertainment.' },
      { id: 'q8', question: 'Mapping Social Media Functional Patterns in Global Context.' }
    ],
    mcqs: [
      { id: 'm1', question: 'The MacBride Report focused on:', options: ['NWICO', 'Global Warming', 'Nuclear Disarmament', 'Free Trade'], correctIndex: 0 },
      { id: 'm2', question: 'Who introduced the concept of the Panopticon?', options: ['Jeremy Bentham', 'Michel Foucault', 'Karl Marx', 'Max Weber'], correctIndex: 0 },
      { id: 'm3', question: 'Audience Commodity refers to:', options: ['Selling audiences to advertisers', 'Selling tickets', 'Selling merchandise', 'None'], correctIndex: 0 },
      { id: 'm4', question: '"Manufacturing Consent" is associated with:', options: ['Herman & Chomsky', 'Nye', 'McLuhan', 'Castells'], correctIndex: 0 },
      { id: 'm5', question: 'Al Jazeera is based in:', options: ['Qatar', 'UAE', 'Saudi Arabia', 'Egypt'], correctIndex: 0 },
      ...generateGenericMCQs('CAJ-404', 6)
    ]
  },
  {
    id: 'CAJ-405',
    code: 'CAJ-405',
    title: 'Media Economics & Management',
    marks: 50,
    teachers: ['Dr. Abdur Razzak'],
    driveLink: 'https://drive.google.com/drive/folders/1zknbJ9r_hRBk1hjHG5jBl9SX5ZsSQOS0?usp=drive_link',
    notebookLink: 'https://notebooklm.google.com/notebook/a74dbd61-5635-4f21-a913-e8afab832477',
    description: "Covers the economic principles and management strategies of media organizations.",
    objectives: "To understand the economic forces driving media industries and learn management principles.",
    outcomes: [
      "Understand media market structures (Monopoly, Oligopoly).",
      "Analyze consumer behavior in media.",
      "Apply management theories (Fayol, Maslow) to media.",
      "Understand media conglomeration."
    ],
    readings: [
      "Picard, R.G. - Media Economics",
      "Albarran, A.B. - Management of Electronic Media"
    ],
    topics: [
      { id: 't1', title: 'Media Economy: Key Concepts & Types' },
      { id: 't2', title: 'Demand & Supply, Price, Advertisers' },
      { id: 't3', title: 'Elasticity of Demand & Supply' },
      { id: 't4', title: 'Process of Media Economy' },
      { id: 't5', title: 'SCP Model (Structure, Conduct, Performance)' },
      { id: 't6', title: 'Media Convergence: Evolution & Impact' },
      { id: 't7', title: 'Consumer Behavior & Content Accessibility' },
      { id: 't8', title: 'Principles of Management' },
      { id: 't9', title: 'Media Management Functions' },
      { id: 't10', title: 'Market Management' },
      { id: 't11', title: 'Break Even Point' },
      { id: 't12', title: 'Administrative Theory' },
      { id: 't13', title: 'Human Relations Theory' },
      { id: 't14', title: 'System Theory & XY Theory' },
      { id: 't15', title: 'Fayol’s 14 Principles of Management' },
      { id: 't16', title: 'Media Conglomeration' },
      { id: 't17', title: 'Media Business vs Other Businesses' }
    ],
    theoryQuestions: [
      { id: 'q1', question: 'What are the traditional methods of media economics research according to Picard?' },
      { id: 'q2', question: 'How is price determined in the media economy? What factors must media industries consider?' },
      { id: 'q3', question: 'Describe the SCP (Structure-Conduct-Performance) Model by Joe and Bain.' },
      { id: 'q4', question: 'How has Media Convergence impacted traditional media compared to digital media?' },
      { id: 'q5', question: 'What is Media Conglomeration? Discuss its advantages and disadvantages.' },
      { id: 'q6', question: 'Why is Media Business different from other types of businesses from a Break-Even Point of view?' },
      { id: 'q7', question: 'Explain Fayol’s 14 Principles of Management.' }
    ],
    mcqs: [
      { id: 'm1', question: 'SCP stands for:', options: ['Structure, Conduct, Performance', 'Supply, Cost, Price', 'System, Control, Plan', 'Social, Cultural, Political'], correctIndex: 0 },
      { id: 'm2', question: 'Break Even Point is where:', options: ['Total Cost = Total Revenue', 'Profit is maximum', 'Loss is maximum', 'Cost is zero'], correctIndex: 0 },
      { id: 'm3', question: 'Theory X and Theory Y were proposed by:', options: ['Douglas McGregor', 'Fayol', 'Taylor', 'Maslow'], correctIndex: 0 },
      { id: 'm4', question: 'Media products often operate in a:', options: ['Dual Product Market', 'Monopoly', 'Perfect Competition', 'None'], correctIndex: 0 },
      { id: 'm5', question: 'Who proposed the 14 Principles of Management?', options: ['Henri Fayol', 'Fredrick Taylor', 'Max Weber', 'Elton Mayo'], correctIndex: 0 },
      ...generateGenericMCQs('CAJ-405', 6)
    ]
  },
  {
    id: 'CAJ-414',
    code: 'CAJ-414',
    title: 'Public Relations',
    marks: 50,
    teachers: ['Dr. Mohammad Shahidul Haque'],
    driveLink: 'https://drive.google.com/drive/folders/1SGcVRqfAeP1jBOW3IAScqgY6nBtv0Af6?usp=drive_link',
    notebookLink: 'https://notebooklm.google.com/notebook/2718973b-a8a7-4494-a7d0-2935f37e4aab',
    description: "Explores the ethics, strategies, and models of Public Relations in various sectors.",
    objectives: "To understand the principles of Public Relations and apply them in corporate and organizational settings.",
    outcomes: [
      "Understand the R-A-C-E formula in PR.",
      "Differentiate between PR, Advertising, and Journalism.",
      "Apply Crisis Communication strategies.",
      "Understand the ethics of PR."
    ],
    readings: [
      "Cutlip & Center - Effective Public Relations",
      "Grunig, J.E. - Excellence in Public Relations"
    ],
    topics: [
      { id: 't1', title: 'Ethics in PR & Responsible Advocacy' },
      { id: 't2', title: 'Islamic Ethics in PR' },
      { id: 't3', title: 'Leadership Communication' },
      { id: 't4', title: 'Brand Communication / Branding' },
      { id: 't5', title: 'Management Function of PR' },
      { id: 't6', title: 'Crisis Communication' },
      { id: 't7', title: 'Press Release' },
      { id: 't8', title: 'Four Models of Public Relations' },
      { id: 't9', title: 'Corporate Communication' },
      { id: 't10', title: 'Excellence Theory' },
      { id: 't11', title: 'PR Research' },
      { id: 't12', title: 'AI in PR' },
      { id: 't13', title: 'PR vs Advertising, Journalism, Marketing' },
      { id: 't14', title: 'R-A-C-E Formula' },
      { id: 't15', title: 'Duties & Qualities of a PR Officer' }
    ],
    theoryQuestions: [
      { id: 'q1', question: 'Discuss the Ethics in Public Relations and Responsible Advocacy Theory.' },
      { id: 'q2', question: 'Explain the Four Models of Public Relations.' },
      { id: 'q3', question: 'What is the R-A-C-E formula in PR? Explain each step.' },
      { id: 'q4', question: 'Differentiate between PR, Advertising, and Journalism.' },
      { id: 'q5', question: 'What is Crisis Communication? How should a PR officer handle a crisis?' },
      { id: 'q6', question: 'What is meant by brand communication? Why is it important?' },
      { id: 'q7', question: 'What do you understand by leadership communication?' },
      { id: 'q8', question: 'What are the present and future challenges for public relations?' }
    ],
    mcqs: [
      { id: 'm1', question: 'The R-A-C-E formula stands for:', options: ['Research, Action, Communication, Evaluation', 'Research, Analysis, Control, Evaluation', 'Report, Action, Contact, Effect', 'None'], correctIndex: 0 },
      { id: 'm2', question: 'Which is NOT one of the Four Models of PR?', options: ['Two-way Symmetric', 'Press Agentry', 'Public Information', 'Propaganda Model'], correctIndex: 3 },
      { id: 'm3', question: 'Excellence Theory in PR was developed by:', options: ['James Grunig', 'Edward Bernays', 'Ivy Lee', 'Cutlip'], correctIndex: 0 },
      { id: 'm4', question: 'A Press Release is primarily meant for:', options: ['Journalists/Media', 'General Public', 'Internal Employees', 'Shareholders'], correctIndex: 0 },
      { id: 'm5', question: 'PR is distinct from Advertising because PR is:', options: ['Earned Media', 'Paid Media', 'Controlled Media', 'Expensive'], correctIndex: 0 },
      ...generateGenericMCQs('CAJ-414', 6)
    ]
  },
  {
    id: 'CAJ-415',
    code: 'CAJ-415',
    title: 'Business Communication',
    marks: 50,
    teachers: ['Naznin Akter'],
    driveLink: 'https://drive.google.com/drive/folders/1mHoyu_eEz9xdXRj4oFEWaPHx8xoRLk2E?usp=drive_link',
    notebookLink: 'https://notebooklm.google.com/notebook/bd33b6e3-a074-4a82-98b4-add5d84a8f2f',
    description: "Fundamentals of effective communication in business environments.",
    objectives: "To develop skills in drafting business correspondence, reports, and internal communication.",
    outcomes: [
      "Master business writing skills.",
      "Understand organizational communication flows.",
      "Draft effective business reports and proposals."
    ],
    readings: [
      "Thill & Bovee - Excellence in Business Communication",
      "Lesikar - Business Communication"
    ],
    topics: [
      { id: 't1', title: 'Fundamentals of Business Communication' },
      { id: 't2', title: 'Verbal vs Non-verbal Communication' },
      { id: 't3', title: 'Business Writing Principles' },
      { id: 't4', title: 'Report Writing' },
      { id: 't5', title: 'Proposal Writing' },
      { id: 't6', title: 'Organizational Communication Flow' },
      { id: 't7', title: 'Resume and CV Writing' },
      { id: 't8', title: 'Interview Skills' },
      { id: 't9', title: 'Meeting Management' },
      { id: 't10', title: 'Email Etiquette' }
    ],
    theoryQuestions: [
      { id: 'q1', question: 'Discuss the importance of effective communication in business.' },
      { id: 'q2', question: 'Draft a sample business proposal for a new media campaign.' },
      { id: 'q3', question: 'What are the barriers to effective business communication? How can they be overcome?' }
    ],
    mcqs: generateGenericMCQs('CAJ-415', 1)
  },
  {
    id: 'CAJ-417',
    code: 'CAJ-417',
    title: 'Media, Peace & Conflict',
    marks: 50,
    teachers: ['Mohammad Delwar Hossain'],
    driveLink: 'https://drive.google.com/drive/folders/1fCf1DlQLSi1OaEQ-_d1k1_Wx5R-F6Kxa?usp=drive_link',
    notebookLink: 'https://notebooklm.google.com/notebook/555ecc04-2674-4a37-bed6-6df7fd62ef5a',
    description: "Insights into war journalism, peace journalism, and the media's role in conflicts like the July Movement and international wars.",
    objectives: "To understand the role of media in conflict escalation and resolution, and the concept of Peace Journalism.",
    outcomes: [
      "Differentiate between War Journalism and Peace Journalism.",
      "Analyze media's role in the July Movement.",
      "Understand propaganda models in war.",
      "Evaluate the concept of 'Embedded Journalism'."
    ],
    readings: [
      "Galtung, J. - Peace Journalism",
      "Lynch, J. & McGoldrick, A. - Peace Journalism",
      "Media and War (Book)"
    ],
    topics: [
      { id: 't1', title: 'Crisis Conflict & Compassion Fatigue' },
      { id: 't2', title: 'Total War, State Control, Limited War' },
      { id: 't3', title: 'Media Globalization' },
      { id: 't4', title: 'Parachute Journalism & Embedded Journalism' },
      { id: 't5', title: 'CNN Effect' },
      { id: 't6', title: 'UN Peacekeeping' },
      { id: 't7', title: 'Global Village & Global Policemen' },
      { id: 't8', title: 'Shifting Agenda Syndrome' },
      { id: 't9', title: 'Armed Conflict' },
      { id: 't10', title: 'War Journalism vs Peace Journalism' },
      { id: 't11', title: 'Mediatized Conflict' },
      { id: 't12', title: 'Difference between War and Battle' },
      { id: 't13', title: 'July Movement: Media\'s Role (For/Against)' },
      { id: 't14', title: 'Media Focus on Specific Issues' },
      { id: 't15', title: 'Objectivity in State Conflict' },
      { id: 't16', title: 'Propaganda Model in WWII' },
      { id: 't17', title: 'Russian Revolution' },
      { id: 't18', title: 'Book: MEDIA and WAR' }
    ],
    theoryQuestions: [
      { id: 'q1', question: 'Discuss the role of various media (For/Against) during the July Movement.' },
      { id: 'q2', question: 'What is Embedded Journalism? Discuss its implications.' },
      { id: 'q3', question: 'How can media maintain objectivity if the state is involved in a conflict?' },
      { id: 'q4', question: 'What role did the Propaganda Model play in the Second World War?' },
      { id: 'q5', question: 'Explain "Shifting Agenda Syndrome" and "Compassion Fatigue".' },
      { id: 'q6', question: 'Differentiate between Peace Journalism and War Journalism.' },
      { id: 'q7', question: 'Why does media focus on specific aspects of an issue? Analyze with examples.' },
      { id: 'q8', question: 'Discuss the Russian Revolution in the context of media.' },
      { id: 'q9', question: 'Media and War Book - Chapter 1 (Broad Question).' },
      { id: 'q10', question: 'Media and War Book - Chapter 2 (Short Question).' }
    ],
    mcqs: [
      { id: 'm1', question: 'Compassion Fatigue refers to:', options: ['Audience indifference due to overexposure', 'Journalist burnout', 'Government censorship', 'Lack of funds'], correctIndex: 0 },
      { id: 'm2', question: 'Embedded Journalism involves:', options: ['Journalists attached to military units', 'Journalists in prison', 'Journalists in parliament', 'Freelance journalists'], correctIndex: 0 },
      { id: 'm3', question: 'Who is known for Peace Journalism?', options: ['Johan Galtung', 'Chomsky', 'Lippmann', 'Said'], correctIndex: 0 },
      { id: 'm4', question: 'The "CNN Effect" suggests:', options: ['24-hour news influences policy', 'News is fake', 'TV is dying', 'Radio is superior'], correctIndex: 0 },
      { id: 'm5', question: 'Parachute Journalism means:', options: ['Dropping into a crisis zone without background knowledge', 'Reporting from a plane', 'Deep investigative reporting', 'Local reporting'], correctIndex: 0 },
      ...generateGenericMCQs('CAJ-417', 6)
    ]
  },
  {
    id: 'CAJ-406',
    code: 'CAJ-406',
    title: 'Depth Reporting',
    marks: 50,
    teachers: [],
    driveLink: '#',
    notebookLink: '#',
    description: "Advanced course on investigative and interpretative reporting techniques.",
    objectives: "To develop skills in deep investigation, data analysis, and interpretative storytelling.",
    topics: [
      { id: 't1', title: 'Descriptive vs Interpretative Journalism' },
      { id: 't2', title: 'Social Media as News Source' },
      { id: 't3', title: 'Citizen Journalism vs Civic Journalism' },
      { id: 't4', title: 'Investigation Research & Interview' },
      { id: 't5', title: 'Information Leaks' },
      { id: 't6', title: 'Interpretative Report Writing' },
      { id: 't7', title: 'In-depth Reporting Forms & Importance' },
      { id: 't8', title: 'Investigative Journalism vs Conventional Reporting' },
      { id: 't9', title: 'Election Reporting Stages' },
      { id: 't10', title: 'Budget Reporting' },
      { id: 't11', title: 'Writing Parliament Reports' }
    ],
    theoryQuestions: [
      { id: 'q1', question: 'Journalism has changed from being predominantly descriptive to increasingly interpretative—do you agree? Explain.' },
      { id: 'q2', question: 'Discuss the impact of social media as a source of news in the journalism of Bangladesh with examples.' },
      { id: 'q3', question: 'Citizen journalism should not be confused with civic journalism. Identify the confusion.' },
      { id: 'q4', question: 'In recent times, investigative journalism has become more reliant on information leaks rather than investigation. Give your opinion.' },
      { id: 'q5', question: 'What do you understand by in-depth reporting? What are the key forms?' },
      { id: 'q6', question: 'Write a minimum of 700-word interpretative report on: Political/Economic crisis, War, or Price Hike.' }
    ],
    mcqs: generateGenericMCQs('CAJ-406', 1)
  },
  {
    id: 'CAJ-408',
    code: 'CAJ-408',
    title: 'Multimedia Publishing',
    marks: 50,
    teachers: [],
    driveLink: '#',
    notebookLink: '#',
    description: "Focuses on digital storytelling, podcasting, mobile journalism, and multimedia content creation.",
    topics: [
      { id: 't1', title: 'Multimedia Journalism vs Traditional' },
      { id: 't2', title: 'Multimedia News Website Editor Role' },
      { id: 't3', title: 'Audio-visual Content Creation Tools' },
      { id: 't4', title: 'Podcast Creation' },
      { id: 't5', title: 'Video Editing' },
      { id: 't6', title: 'Clickbait Headlines' },
      { id: 't7', title: 'Multimedia Storytelling' },
      { id: 't8', title: 'Data Visualization' },
      { id: 't9', title: 'Mobile Journalism (MoJo)' },
      { id: 't10', title: 'Social Media Reels' },
      { id: 't11', title: 'Transmedia Storytelling' },
      { id: 't12', title: 'Storyboard Elements' }
    ],
    theoryQuestions: [
      { id: 'q1', question: 'How is multimedia reporting different from other reporting? Comparative discussion.' },
      { id: 'q2', question: 'Discuss the importance of storyboard and elements of storyboard in creating a multimedia story.' },
      { id: 'q3', question: 'Discuss the effects of multimedia elements on the storytelling process.' },
      { id: 'q4', question: 'Explain the concept of data visualization in multimedia journalism.' },
      { id: 'q5', question: 'Short Note: Mobile Journalism, Social Media Reels, Transmedia storytelling.' }
    ],
    mcqs: generateGenericMCQs('CAJ-408', 1)
  },
  {
    id: 'CAJ-409',
    code: 'CAJ-409',
    title: 'Editorial, Feature & Column Writing',
    marks: 50,
    teachers: [],
    driveLink: '#',
    notebookLink: '#',
    description: "Techniques for opinion writing, feature stories, and editorials.",
    topics: [
      { id: 't1', title: 'Human Appeal in Features' },
      { id: 't2', title: 'Data/Facts in Opinion Writing' },
      { id: 't3', title: 'Editorial Writing Techniques' },
      { id: 't4', title: 'Feature Writing' },
      { id: 't5', title: 'Column Writing' },
      { id: 't6', title: 'Idea-tree for Topics' },
      { id: 't7', title: 'Newspaper’s Own Voice' }
    ],
    theoryQuestions: [
      { id: 'q1', question: '"Human appeal is the lifeblood of a feature." Explain this statement.' },
      { id: 'q2', question: 'Discuss the importance of presenting appropriate facts and data to support an opinion in column writing.' },
      { id: 'q3', question: 'Satisfying the reader or listener is possible only by writing well. Write in detail how to write well.' },
      { id: 'q4', question: '"The editorial is newspaper\'s own voice" - explain this statement.' },
      { id: 'q5', question: 'Write a feature on: University hall-life or Female garments workers.' },
      { id: 'q6', question: 'Write an editorial on: Quality of higher education or Chattogram Zoo.' }
    ],
    mcqs: generateGenericMCQs('CAJ-409', 1)
  },
  {
    id: 'CAJ-419',
    code: 'CAJ-419',
    title: 'Comprehensive Course',
    marks: 50,
    teachers: [],
    driveLink: '#',
    notebookLink: '#',
    description: "Previous Year Compulsory Course Questions covering core journalism concepts.",
    topics: [
      { id: 't1', title: 'Journalism Concepts' },
      { id: 't2', title: 'Reporting Techniques' },
      { id: 't3', title: 'Multimedia Fundamentals' },
      { id: 't4', title: 'Communication Theories' },
      { id: 't5', title: 'Types of Communication' }
    ],
    theoryQuestions: [
      { id: 'q1', question: 'Define Journalism and its scope.' },
      { id: 'q2', question: 'What are the types of Communication?' },
      { id: 'q3', question: 'Explain the importance of Multimedia in modern reporting.' }
    ],
    mcqs: generateGenericMCQs('CAJ-419', 1)
  },
  {
    id: 'CAJ-499',
    code: 'CAJ-499',
    title: 'Communication Research Project',
    marks: 50,
    teachers: ['Dr. Mohammad Sahid Ullah', 'Dr. Abdur Razzak'],
    driveLink: 'https://drive.google.com/drive/folders/1HgS03Iu2_PlgKS2VqSInBCVDOLks0E1C?usp=drive_link',
    notebookLink: 'https://notebooklm.google.com/notebook/c147178f-be38-4a18-8f66-ca9ab42c3e70',
    description: "Rigorous study on a selected topic under supervision, culminating in a monograph.",
    topics: [
      { id: 't1', title: 'Selecting Research Topic' },
      { id: 't2', title: 'Literature Review' },
      { id: 't3', title: 'Research Questions & Hypothesis' },
      { id: 't4', title: 'Research Design (Quant/Qual)' },
      { id: 't5', title: 'Sampling Techniques' },
      { id: 't6', title: 'Data Collection & Questionnaire' },
      { id: 't7', title: 'Content Analysis' },
      { id: 't8', title: 'Focus Group Discussion' },
      { id: 't9', title: 'Data Analysis (SPSS)' },
      { id: 't10', title: 'Research Ethics & Citation (APA)' }
    ],
    theoryQuestions: [
      { id: 'q1', question: 'Write about the steps usually followed in the research process.' },
      { id: 'q2', question: 'What is a Literature Review? Why is it essential in research?' },
      { id: 'q3', question: 'Differentiate between Quantitative and Qualitative research methods.' }
    ],
    mcqs: generateGenericMCQs('CAJ-499', 1)
  }
];

export const SCHEDULE: DailySchedule[] = [
  {
    day: 'Sunday',
    sessions: [
      { timeStart: '10:40', timeEnd: '11:25', courseId: 'CAJ-415' },
      { timeStart: '11:30', timeEnd: '12:15', courseId: 'CAJ-401' },
      { timeStart: '12:20', timeEnd: '13:05', courseId: 'CAJ-404' },
      { timeStart: '13:10', timeEnd: '13:55', courseId: 'CAJ-402' },
    ]
  },
  {
    day: 'Monday',
    sessions: [
      { timeStart: '09:50', timeEnd: '10:35', courseId: 'CAJ-404' },
      { timeStart: '10:40', timeEnd: '11:25', courseId: 'CAJ-402' },
      { timeStart: '11:30', timeEnd: '12:15', courseId: 'CAJ-414' },
      { timeStart: '13:10', timeEnd: '13:55', courseId: 'CAJ-499' },
      { timeStart: '14:30', timeEnd: '15:15', courseId: 'CAJ-405' },
    ]
  },
  {
    day: 'Tuesday',
    sessions: [
      { timeStart: '09:00', timeEnd: '09:45', courseId: 'CAJ-401' },
      { timeStart: '09:50', timeEnd: '10:35', courseId: 'CAJ-402' },
      { timeStart: '10:40', timeEnd: '11:25', courseId: 'CAJ-402' },
      { timeStart: '11:30', timeEnd: '12:15', courseId: 'CAJ-414' },
      { timeStart: '12:20', timeEnd: '13:05', courseId: 'CAJ-417' },
      { timeStart: '13:10', timeEnd: '13:55', courseId: 'CAJ-417' },
      { timeStart: '14:30', timeEnd: '15:15', courseId: 'CAJ-405' },
      { timeStart: '15:20', timeEnd: '16:05', courseId: 'CAJ-499' },
    ]
  },
  {
    day: 'Wednesday',
    sessions: [
      { timeStart: '09:50', timeEnd: '10:35', courseId: 'CAJ-404' },
      { timeStart: '10:40', timeEnd: '11:25', courseId: 'CAJ-404' },
      { timeStart: '11:30', timeEnd: '12:15', courseId: 'CAJ-415' },
      { timeStart: '12:20', timeEnd: '13:05', courseId: 'CAJ-403' },
      { timeStart: '13:10', timeEnd: '13:55', courseId: 'CAJ-403' },
    ]
  },
  {
    day: 'Thursday',
    sessions: [
      { timeStart: '11:30', timeEnd: '12:15', courseId: 'CAJ-401' },
      { timeStart: '12:20', timeEnd: '13:05', courseId: 'CAJ-403' },
      { timeStart: '13:10', timeEnd: '13:55', courseId: 'CAJ-403' },
    ]
  },
  { day: 'Friday', sessions: [] },
  { day: 'Saturday', sessions: [] },
];

export const COURSE_KNOWLEDGE_BASE = `
CONTEXT: You are an AI assistant for AcademiaAssist, an app for 4th Year Communication & Journalism students at University of Chittagong.
The user has access to these specific courses with full details on syllabus, readings, and outcomes.
`;