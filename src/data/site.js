// Content for the Khula Business Solutions site. Edit copy here, then run: node build.js
const SITE = {
  name: 'Khula Business Solutions',
  url: 'https://khulabusinesssolutions.co.za',
  phone: '+27 83 570 1564', tel: '+27835701564',
  email: 'thilo@khulabs.co.za',
  wa: 'https://wa.me/27835701564?text=Hi%20Khula%2C%20I%27d%20like%20to%20talk%20about%20a%20people%20performance%20challenge.',
  gtm: '',            // e.g. 'GTM-XXXXXXX', leave blank until the container exists
  ga4: '',            // e.g. 'G-XXXXXXXXXX' — only used if GTM is blank
  hours: 'Mon – Fri, 8am – 4pm'
};

const SERVICES = [
  {
    slug: 'pre-post-intervention-diagnostic', n: '01',
    title: 'Pre- & Post-Intervention Diagnostic',
    short: 'Benchmark before and after every intervention so impact is measured, not assumed.',
    mt: 'Pre & Post Training Diagnostic Assessments | Durban | Khula',
    md: 'Measure the real impact of training. Psychometric tools and qualitative insight benchmark your people before and after every intervention. Durban, South Africa.',
    h1: 'Pre- & Post-Intervention Diagnostics That Prove Impact',
    lead: 'Most organisations can tell you how many people attended training. Very few can tell you what changed. We benchmark before and after, so impact is measured, not assumed.',
    intro: [
      'Every Khula engagement starts with a structured diagnostic. Using psychometric tools and assessments alongside interviews and observation, we establish where your people, teams and leaders actually are today: the behaviours, mindsets and habits that sit beneath your performance numbers.',
      'After the intervention we measure again against the same benchmarks. The result is a clear before-and-after picture you can take to your executive, your board or your funders.'
    ],
    inc: ['Psychometric tools and assessments matched to your objectives', 'Qualitative insight through interviews, focus groups and observation', 'A clear baseline of behaviours, mindsets and capability gaps', 'Post-intervention re-assessment against the same benchmarks', 'A findings report with practical recommendations'],
    who: 'Leaders who need to justify L&D investment, HR and training managers who want evidence of behaviour change, and organisations preparing for a larger transformation programme.',
    faq: [['What is a pre- and post-intervention diagnostic?', 'It is a structured assessment carried out before a training or coaching programme to set a baseline, then repeated afterwards to show what has changed. It replaces guesswork with evidence.'], ['Which tools do you use?', 'We combine psychometric tools and assessments with qualitative methods, and select them around your business objectives rather than using one standard instrument for everyone.'], ['Can the diagnostic be done without a larger programme?', 'Yes. Many clients start with a diagnostic to understand where the real people-related bottlenecks are before deciding what to invest in.']],
    icon: '<path d="M4 20V10m6 10V4m6 16v-7m4 7H2"/><path d="M4 6l6-3 6 6 4-3"/>'
  },
  {
    slug: 'nlp-executive-coaching', n: '02',
    title: 'NLP-Based Executive, Business & Life Coaching',
    short: 'Targeted coaching for leadership, resilience and high performance, grounded in NLP.',
    mt: 'NLP Executive & Business Coaching Durban | Khula',
    md: 'NLP-certified executive, business and life coaching in Durban. Build leadership presence, resilience and high performance with Khula Business Solutions.',
    h1: 'NLP-Based Executive, Business & Life Coaching in Durban',
    lead: 'Targeted coaching for leaders who want to move from the performance they are delivering to the performance they are capable of.',
    intro: [
      'Neuro-Linguistic Programming gives us a sharper lens on how people think, communicate and quietly get in their own way. Our coaching is grounded in NLP and built around the individual, whether that is an executive carrying a transformation agenda or a professional navigating a career crossroads.',
      'Sessions are practical and outcome-driven. We work on the patterns behind decisions, relationships and results, and we anchor new behaviours so they hold under pressure.'
    ],
    inc: ['One-on-one executive and leadership coaching', 'Business and team-performance coaching', 'Life and career coaching for personal breakthroughs', 'Resilience, communication and influence skills', 'Goal setting with clear, measurable outcomes'],
    who: 'Executives, senior managers, emerging leaders, business owners and professionals who want a focused, confidential space to grow.',
    faq: [['What is NLP coaching?', 'NLP (Neuro-Linguistic Programming) studies how people think, communicate and behave. In coaching it is used to identify unhelpful patterns and replace them with more effective ones.'], ['Is the coaching confidential?', 'Yes. Individual coaching conversations are confidential. Where an organisation sponsors the coaching, we agree upfront what progress information will be shared.'], ['How many sessions will I need?', 'It depends on your goals. We agree a coaching plan after an initial conversation, and review progress against your outcomes as we go.']],
    icon: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/><path d="M17 3l1.5 1.5L21 2"/>'
  },
  {
    slug: 'tailored-training-solutions', n: '03',
    title: 'Tailored Training Solutions',
    short: 'Learning experiences designed and delivered around your strategy and goals.',
    mt: 'Tailored Corporate Training Durban | Custom Programmes | Khula',
    md: 'Custom-designed corporate training in Durban, built from scratch around your culture, challenges and goals. No recycled courseware. Khula Business Solutions.',
    h1: 'Tailored Corporate Training Built From Scratch',
    lead: 'No recycled courseware. No programme someone else already ran somewhere else. Every learning experience is designed around your business.',
    intro: [
      'Off-the-shelf training is cheap to buy and expensive to waste. We design, develop and deliver learning experiences aligned to your strategy, your culture and your desired outcomes, using interactive, game-based methodologies so learning sticks long after the session ends.',
      'Every activity is purpose-mapped to a behavioural outcome and debriefed using NLP-based techniques, so participants understand not just what to do differently but why they have not been doing it.'
    ],
    inc: ['Learning-needs analysis tied to your business strategy', 'Bespoke programme design and content development', 'Experiential, game-based and interactive facilitation', 'Leadership, teamwork, communication and culture programmes', 'Post-programme reinforcement and measurement'],
    who: 'Organisations in government, parastatals and corporate environments that need training to change how people work, not just tick a compliance box.',
    faq: [['Do you offer standard courses?', 'No. Every programme is designed from scratch around your culture, challenges and numbers. That is what separates us from generic training providers.'], ['Can you train large groups across several sites?', 'Yes. We have delivered across all operating divisions of large organisations, and design programmes that scale while staying relevant to each audience.'], ['How do you measure whether the training worked?', 'We pair training with pre- and post-intervention diagnostics so you can see the behavioural shift, not just attendance and feedback scores.']],
    icon: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/><path d="M22 9v6"/>'
  },
  {
    slug: 'mindset-behaviour-transformation', n: '04',
    title: 'Mindset & Behaviour Transformation',
    short: 'Shift mindset, behaviour, habits and culture to unlock sustainable performance.',
    mt: 'Mindset & Behaviour Change Programmes Durban | Khula',
    md: 'Behaviour change programmes that unlock sustainable performance. Shift mindset, habits and culture in your organisation. Khula Business Solutions, Durban.',
    h1: 'Mindset & Behaviour Transformation for Organisations',
    lead: 'Organisations think they have a performance problem when what they have is a behaviour problem. We close the gap at its source.',
    intro: [
      'Strategy, systems and targets all depend on the human operating system behind them. When people are misaligned on mindset, habits or ways of working, even the best-designed system underdelivers.',
      'Our mindset and behaviour work enables lasting shifts in how individuals, teams and leaders think and act, and embeds those shifts into culture so they outlast the programme.'
    ],
    inc: ['Behavioural alignment across leadership and teams', 'Mindset-shift workshops and facilitated dialogue', 'Habit and culture embedding tools', 'NLP-based debriefs that reveal how people get in their own way', 'Measured outcomes through pre- and post-diagnostics'],
    who: 'Leadership teams facing execution gaps, organisations in transition, and teams where talent is strong but results are not following.',
    faq: [['What is the difference between training and behaviour transformation?', 'Training transfers knowledge or skills. Behaviour transformation changes what people actually do day to day, which requires working on mindset, habits and culture as well as skills.'], ['How long does culture change take?', 'Meaningful shifts are visible in weeks, but embedding them is a longer journey. We design reinforcement into the programme so change is sustained.'], ['Who needs to be involved?', 'Change lands best when leaders are visibly part of it. We work with leadership first, then extend through teams.']],
    icon: '<path d="M12 3v4m0 10v4M3 12h4m10 0h4"/><circle cx="12" cy="12" r="4"/><path d="M5.6 5.6l2.8 2.8m7.2 7.2l2.8 2.8m0-12.8l-2.8 2.8m-7.2 7.2l-2.8 2.8"/>'
  },
  {
    slug: 'change-management', n: '05',
    title: 'Change Management',
    short: 'Structured support to help teams navigate transition and embed lasting change.',
    mt: 'Change Management Consulting Durban & South Africa | Khula',
    md: 'People-centred change management for South African organisations. Help your teams navigate transition and embed lasting change. Khula Business Solutions, Durban.',
    h1: 'People-Centred Change Management in South Africa',
    lead: 'Change fails when people are an afterthought. We put them at the centre, so transition lands and sticks.',
    intro: [
      'Restructures, new systems, mergers and new strategies all ask people to work differently. Technical readiness is rarely the issue. Resistance, uncertainty and habit are.',
      'We provide structured change support that prepares leaders, engages teams and embeds new ways of working, using our behaviour-first lens to anticipate where people will struggle and address it early.'
    ],
    inc: ['Change-readiness assessment', 'Leadership alignment and sponsorship coaching', 'Stakeholder engagement and communication planning', 'Team workshops that surface and resolve resistance', 'Adoption tracking and reinforcement'],
    who: 'Organisations rolling out new systems, restructuring, merging, or shifting strategy, and project teams who need people-side support.',
    faq: [['Why do change programmes fail?', 'Mostly because the people side is under-resourced. Systems get implemented but behaviours do not shift, so the expected benefits never arrive.'], ['Do you work alongside project managers?', 'Yes. Change management and project management complement each other, and we offer both so they stay aligned.'], ['When should change support start?', 'Early. Ideally before decisions are announced, so leaders and teams are prepared rather than reacting.']],
    icon: '<path d="M4 12a8 8 0 0 1 14-5.3L20 9"/><path d="M20 4v5h-5"/><path d="M20 12a8 8 0 0 1-14 5.3L4 15"/><path d="M4 20v-5h5"/>'
  },
  {
    slug: 'project-management', n: '06',
    title: 'Project Management',
    short: 'End-to-end planning, execution and oversight for impactful delivery.',
    mt: 'Project Management Services & Training Durban | Khula',
    md: 'End-to-end project management for impactful delivery. Planning, execution and oversight with a people-first approach. Khula Business Solutions, Durban.',
    h1: 'Project Management That Delivers on Time, With People On Board',
    lead: 'End-to-end planning, execution and oversight, with the people dimension managed as carefully as the plan.',
    intro: [
      'Projects rarely fail on the Gantt chart. They fail on alignment, communication and ownership. Our project management support covers the full cycle from scoping and planning through execution and close-out, with disciplined governance and a people-first approach.',
      'Clients have described our team as professional, ethical and strong on meeting deadlines. We bring the same standards to every engagement, whether we run the project or support your internal team.'
    ],
    inc: ['Scoping, planning and resource scheduling', 'Day-to-day project management and reporting', 'Stakeholder management and communication', 'Risk and issue management', 'Close-out and lessons-learned reviews'],
    who: 'Organisations that need extra delivery capacity, teams running people-heavy programmes, and public-sector projects with strict reporting requirements.',
    faq: [['Can you manage a project end to end?', 'Yes. We can plan, run and close projects, or support your internal project team where you need extra capacity.'], ['Do you work with government and public-sector clients?', 'Yes. We have worked with government departments, municipalities and parastatals and are used to their governance and reporting standards.'], ['Can you combine project management with change management?', 'Yes, and we recommend it for any project that depends on people changing how they work.']],
    icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v16M13 13h5M13 16h3"/>'
  },
  {
    slug: 'business-computer-skills-training', n: '07',
    title: 'Business & Computer Skills Training',
    short: 'Practical skills development to boost operational efficiency and digital fluency.',
    mt: 'Business & Computer Skills Training Durban | Khula',
    md: 'Practical business and computer skills training in Durban that boosts efficiency and digital fluency. Corporate and public-sector teams. Khula Business Solutions.',
    h1: 'Business & Computer Skills Training in Durban',
    lead: 'Practical skills development that lifts operational efficiency and digital fluency across your workforce.',
    intro: [
      'Our founder began her career in IT training, and that foundation still runs through our work. We deliver practical business and computer skills training that people can apply the next morning, not theory that fades by Friday.',
      'Programmes are pitched at your teams’ real working levels and tools, and use interactive methods so skills are practised, not just shown.'
    ],
    inc: ['Computer literacy and productivity software skills', 'Business writing, reporting and administration skills', 'Digital fluency for non-technical staff', 'Practical, hands-on workshop format', 'Skills assessment before and after'],
    who: 'Companies upskilling administrative and operational staff, public-sector departments, and organisations modernising how teams work.',
    faq: [['What level of training do you offer?', 'We pitch every programme at your team’s actual starting point, from foundational digital literacy to more advanced productivity skills.'], ['Can training happen at our premises?', 'Yes. We can deliver on-site at your premises, or at a venue arranged for the programme.'], ['Can you measure skills improvement?', 'Yes. We can assess skills before and after so the improvement is documented.']],
    icon: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/><path d="M8 9l2 2-2 2m4 0h3"/>'
  },
  {
    slug: 'train-the-trainer', n: '08',
    title: 'Train the Trainer',
    short: 'Equip internal trainers with the skills and confidence to sustain learning.',
    mt: 'Train the Trainer Programmes Durban | Facilitation Skills | Khula',
    md: 'Train the Trainer programmes that equip your internal facilitators to deliver and sustain learning long after we leave the room. Khula Business Solutions, Durban.',
    h1: 'Train the Trainer Programmes for Internal Facilitators',
    lead: 'Equip your internal trainers and facilitators with the skills and confidence to sustain learning long after we have left the room.',
    intro: [
      'Sustainable capability is built inside your organisation. Our Train the Trainer programmes develop your people to design, deliver and evaluate learning themselves, using the same experiential, game-based methods we use with our own clients.',
      'Participants practise facilitation in a safe environment, get structured feedback and leave with tools they can use immediately.'
    ],
    inc: ['Adult-learning principles and session design', 'Facilitation techniques, presence and group dynamics', 'Experiential and game-based learning methods', 'Practice sessions with structured feedback', 'Toolkits and ongoing support materials'],
    who: 'Internal trainers, HR and L&D teams, subject-matter experts who must train colleagues, and organisations reducing reliance on external providers.',
    faq: [['Who should attend a Train the Trainer programme?', 'Anyone who delivers or will deliver learning internally: trainers, line managers, subject-matter experts and HR practitioners.'], ['Will my trainers be able to use your methods afterwards?', 'Yes. The programme is hands-on, and participants leave with practical tools and methodologies they can apply straight away.'], ['Can the programme be tailored to our content?', 'Yes. Like all our work, it is built around your business and the content your trainers will deliver.']],
    icon: '<circle cx="9" cy="7" r="3.5"/><path d="M2 20c0-3.9 3.1-7 7-7s7 3.1 7 7"/><path d="M17 4l5 3-5 3z"/>'
  }
];

const TESTIMONIALS = [
  ['The team demonstrated excellent efficiency and were phenomenal in meeting deadlines.', 'Nelisa Mshengu', 'Ethekwini Municipality'],
  ['A remarkably innovative team who exceeded expectations.', 'Clinton Johns', 'RCL Foods'],
  ['Extraordinary performance, with real involvement from the directors.', 'C.T. Nkabinde, PhD', 'KZN Department of Education'],
  ['The programme was run professionally and ethically, with performance well above average.', 'Thulani Sibeko', 'Department of Environmental Affairs']
];

const CLIENTS = ['Transnet', 'Unilever', 'RCL Foods', 'Prasa', 'Ezemvelo KZN Wildlife', 'Smith’s Manufacturing', 'Department of Education', 'Meropa Communications', 'Ethekwini Municipality', 'Department of Environmental Affairs'];

const HOME_FAQ = [
  ['What does Khula Business Solutions do?', 'Khula Business Solutions is a Durban-based people-transformation consultancy. We solve business performance problems through learning, using tailored training, NLP-based coaching, change management, project management and behaviour transformation.'],
  ['Where are you based and who do you serve?', 'We are based in Durban, KwaZulu-Natal, and work with government departments, parastatals and corporate clients across South Africa.'],
  ['How is Khula different from other training providers?', 'Every programme is built from scratch around your culture, challenges and numbers. There is no recycled courseware. We also measure impact with pre- and post-intervention diagnostics, so results are evidenced.'],
  ['Is Khula Business Solutions female-owned?', 'Yes. Khula is 100% female-owned and managed, led by founder Thilo Nagiah with nearly three decades of people-transformation experience.'],
  ['How do I get a quote?', 'Call +27 83 570 1564, email thilo@khulabs.co.za or send the enquiry form. We will arrange a conversation to understand your challenge before proposing a solution.']
];

export { SITE, SERVICES, TESTIMONIALS, CLIENTS, HOME_FAQ };
