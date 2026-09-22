/** Resource configuration: the kit reads this; tests/config.test.js validates it. */
export const config = {
  title: 'Global Higher Education & Internationalization',
  tagline: 'A graduate-level guide to internationalization in higher education: Knight’s definition and rationales, the levers of comprehensive internationalization, student mobility and services, comparative systems and Bologna, rankings, transnational education, virtual exchange, partnerships, funding, decolonization and equity, with a strategy explorer, a rankings explorer, a TNE selector and a self-check.',
  repo: 'https://github.com/Freddricklogan/global-higher-education',
  theme: 'plum',
  pagesUrl: 'https://freddricklogan.github.io/global-higher-education/',
  quizTitle: 'Five questions on global higher education',
  quiz: [
    {
      id: 'knight',
      prompt: 'How does Jane Knight’s definition, as the resource presents it, characterise internationalization?',
      options: ['A study-abroad office with a recruitment budget', 'A process of integrating an international, intercultural or global dimension into teaching, research and service', 'The same thing as globalization', 'A ranking-driven competition for international students'],
      answer: 1,
      explanation: 'Knight frames internationalization as a process woven through the purpose, functions and delivery of post-secondary education — a means to institutional goals — and distinguishes it from globalization, the wider economic and cultural flows institutions respond to.'
    },
    {
      id: 'mobility',
      prompt: 'Which form of mobility does the resource say is now the largest share of United States outbound study?',
      options: ['Degree mobility abroad', 'Year-long exchange', 'Short-term faculty-led, summer and field programmes', 'Doctoral research stays'],
      answer: 2,
      explanation: 'Mobility is measured in two directions and two durations. Degree mobility enrols for a full credential; credit mobility counts toward the home degree; short-term faculty-led programmes now make up the largest share of U.S. outbound flows.'
    },
    {
      id: 'bologna',
      prompt: 'What did the Bologna Process build across more than forty countries?',
      options: ['A single European university', 'A three-cycle degree structure with ECTS credits, shared quality standards and the Diploma Supplement', 'A global ranking system', 'A common tuition fee'],
      answer: 1,
      explanation: 'Launched by the 1999 Bologna Declaration, the voluntary intergovernmental process created the European Higher Education Area: bachelor’s, master’s and doctoral cycles, the ECTS credit system, quality-assurance standards and the Diploma Supplement, so degrees are comparable and portable.'
    },
    {
      id: 'coil',
      prompt: 'What distinguishes COIL from an ordinary international video call, according to the resource?',
      options: ['It uses a proprietary platform', 'It is co-designed and co-taught by faculty at institutions in different countries, curriculum-embedded and sustained', 'It replaces study abroad entirely', 'It is restricted to graduate students'],
      answer: 1,
      explanation: 'Collaborative Online International Learning is co-taught, embedded in a for-credit course and built on sustained collaboration between students in different countries; the resource frames it as an equity strategy — global learning for those who cannot travel.'
    },
    {
      id: 'decolon',
      prompt: 'What does the decolonizing critique, after Altbach, say unexamined internationalization can reproduce?',
      options: ['Lower academic standards', 'Colonial patterns — flows of prestige, knowledge and money from a dominant centre to a dependent periphery', 'Excessive government regulation', 'A shortage of English-language programmes'],
      answer: 1,
      explanation: 'Rankings, citation systems and “world-class” models privilege the Global North and English; partnerships can be structured so one side sets terms and the other supplies data or students. Decolonizing means confronting those asymmetries directly and building reciprocal partnerships.'
    }
  ]
};
