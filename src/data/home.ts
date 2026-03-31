export type LinkItem = {
  label: string;
  href: string;
};

export type WorkItem = {
  title: string;
  meta: string;
  image: string;
  href?: string;
  descriptionHtml: string;
  threadHtml: string;
};

export type WorkGroup = {
  era: string;
  introHtml: string;
  items: WorkItem[];
};

export const siteDescription =
  'Hu Xiuhan is a founder, builder, and systems-minded product person working across stories, tools, creators, and worldbuilding.';

export const headerLinks: LinkItem[] = [
  { label: 'GitHub', href: 'https://github.com/huxiuhan' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/xiuhanhu' },
  { label: 'Email', href: 'mailto:huxiuhan@gmail.com' },
  { label: 'Twitter', href: 'https://x.com/0xstory_xhu' },
];

export const nowPointsHtml = [
  'Right now I am working on the <strong><span class="inline-accent">builder-first layer of world creation</span></strong>: tools and systems for people who keep returning to characters, worlds, lore, campaigns, and shared universes.',
  'Over time, I think this wants to become something closer to <strong><span class="inline-accent">GitHub meets Disneyland</span></strong> than a single tool. What keeps me interested is the longer arc: how creators sustain a project, keep context alive, and turn imagination into something social.',
  'In retrospect, this is less a pivot than a convergence. It brings together things I have been circling for years through research, creator products, data storytelling, and internet projects.',
];

export const throughlineHtml = [
  'I started building things on the internet early, mostly because I was curious and impatient. Many of the first projects were small, awkward, and useful in a very direct way.',
  'Since then I have moved through research, infrastructure, creator products, and enterprise systems: computer science at Columbia, machine intelligence at Peking University, creator and publishing products at Facebook, data visualization at Alibaba, and product/infrastructure work at Tezign.',
  'The thread was never really a title. It was a fascination with systems that help people express something larger than a single screen: stories, workflows, identities, communities, and the strange social life around tools.',
];

export const workGroups: WorkGroup[] = [
  {
    era: 'Now',
    introHtml:
      'Two layers of engineering: one inside the company, one public through <strong><span class="inline-accent">Imagineer</span></strong>.',
    items: [
      {
        title: 'Internal engineering',
        meta: 'Company layer',
        image: '/images/internal-engineering.svg',
        descriptionHtml:
          'Inside the company, I work on the engineering layer that turns product direction, narrative ideas, and team workflows into systems people can actually use.',
        threadHtml:
          'This is the quieter layer: infrastructure, workflow design, and the connective tissue that lets ideas become repeatable product reality.',
      },
      {
        title: 'Imagineer',
        meta: 'Public layer',
        image: '/images/imagineer.svg',
        descriptionHtml:
          'Publicly, I want <strong><span class="inline-accent">Imagineer</span></strong> to be the more visible layer: engineering as imagination, worldbuilding, interface, and a way of making technical work feel culturally alive.',
        threadHtml:
          'It is the outward-facing version of the same instinct: engineering not only as implementation, but as imagination with structure.',
      },
    ],
  },
  {
    era: 'Product & Platform',
    introHtml:
      'Years spent around <strong><span class="inline-accent">content technology</span></strong>: creator publishing, content systems, asset infrastructure, and data storytelling at scale.',
    items: [
      {
        title: 'Tezign Digital Asset Management',
        meta: 'Product infra and enterprise workflows',
        href: 'https://www.tezign.com/page/product-asset-management/',
        image: '/images/dam.png',
        descriptionHtml:
          'Worked on digital asset management and content operations infrastructure, plus product initiatives around marketing content management and analysis for global brands.',
        threadHtml:
          'It sharpened my interest in content technology as infrastructure: how creative assets are organized, governed, analyzed, and made reusable across teams.',
      },
      {
        title: 'Creator Studio and Watch',
        meta: 'Facebook / Meta',
        href: 'https://www.facebook.com/formedia/blog/launching-watch-ad-breaks-creator-studio-globally',
        image: '/images/cs.png',
        descriptionHtml:
          'Worked on creator-facing tools and publishing experiences at Facebook, especially around video publishing, Creator Studio, and the systems behind creator content workflows.',
        threadHtml:
          'This was content technology in a very direct form: publishing tools shape what creators can make, how they work, and how creator ecosystems grow.',
      },
      {
        title: 'Double 11 data storytelling',
        meta: 'Alibaba',
        href: 'https://www.zcool.com.cn/article/ZMTA2ODU0NA==.html',
        image: '/images/d11.jpg',
        descriptionHtml:
          'Worked on large-scale data visualization infrastructure for major public-facing storytelling moments, turning operational data into content experiences.',
        threadHtml:
          'It reinforced a belief I still carry: content technology is not only about storage or delivery, but about turning systems and data into narrative form.',
      },
    ],
  },
  {
    era: 'Research & Systems',
    introHtml:
      'Projects from the years when I was still close to labs, sensors, and the pleasure of making difficult systems behave.',
    items: [
      {
        title: 'Robotic ironing research',
        meta: 'ICRA 2016',
        href: 'http://www.cs.columbia.edu/~yli/ICRA2016/',
        image: '/images/ironing-small.png',
        descriptionHtml:
          'A robotics project using fused sensing methods to reason about cloth surfaces and support robotic ironing plans.',
        threadHtml:
          'I still like work that turns messy reality into something a system can reason about without flattening it too much.',
      },
      {
        title: 'Sensor Overlay for Google Maps',
        meta: 'JavaScript library',
        href: '/projects/sensor-map/',
        image: '/images/sensor-map.png',
        descriptionHtml:
          'Built a reusable interface for rendering and clustering real-time sensor information on maps without losing readability.',
        threadHtml:
          'An early sign that I enjoy interfaces for dense, living systems more than static pages.',
      },
      {
        title: 'Asthma inhaler assistive system',
        meta: 'Assistive computing',
        href: '/projects/asthma-inhaler-project/',
        image: '/images/asthma-small.png',
        descriptionHtml:
          'Built a system to guide inhaler usage and detect mistakes in task execution.',
        threadHtml:
          'It pushed me toward a question that still matters to me: when can software quietly help a person do a complicated thing better?',
      },
      {
        title: 'Unmanned vehicle work',
        meta: 'Autonomous systems',
        href: '/images/unmanned-vehicle.png',
        image: '/images/unmanned-vehicle-small.png',
        descriptionHtml:
          'Early work on control and route-planning ideas for unmanned vehicles.',
        threadHtml:
          'Even then, I was drawn to systems that need to perceive, decide, and adapt rather than merely display.',
      },
    ],
  },
  {
    era: 'Early Internet',
    introHtml:
      'Before titles, there was the internet, some code, and a habit of making things because they ought to exist.',
    items: [
      {
        title: 'Weiming World game server',
        meta: 'Node.js / campus backend',
        href: 'https://github.com/huxiuhan/wmserver',
        image: '/images/wmworld-small.png',
        descriptionHtml:
          'Built the backend for a campus game introducing new students to Peking University through a location-based experience.',
        threadHtml:
          'I was already interested in how digital systems create a sense of place and participation.',
      },
      {
        title: 'Net Treasure Box',
        meta: 'Portable web services',
        href: '/images/ntbox.png',
        image: '/images/ntbox-small.png',
        descriptionHtml:
          'A mini suite of utilities turning a Raspberry Pi into a portable campus web server with practical superpowers.',
        threadHtml:
          'I still love projects that feel improvised, local, and empowering in a very direct way.',
      },
      {
        title: 'PKU Student Activity Platform',
        meta: 'Campus social platform',
        href: 'https://github.com/pkuplatform/platform',
        image: '/images/pkuplatform-small.jpg',
        descriptionHtml:
          'Contributed heavily to an open student activity platform that explored a social layer around campus organizations.',
        threadHtml:
          'It taught me how quickly software can become social infrastructure if the timing is right.',
      },
      {
        title: 'Dormitory application website',
        meta: 'Small tool, real adoption',
        href: '/images/dormsite.png',
        image: '/images/dormsite-small.png',
        descriptionHtml:
          'Made a website to help students find roommates and submit applications, which later became an official school system.',
        threadHtml:
          'Sometimes the right small tool is the beginning of an institution.',
      },
      {
        title: 'ADELE',
        meta: 'Programming language experiment',
        href: 'https://github.com/ajchuang/Adele',
        image: '/images/adele.png',
        descriptionHtml:
          'A language experiment built for composing interactive ASCII art through reusable layers.',
        threadHtml:
          'I have always had affection for tools that are slightly impractical but expand how people think.',
      },
    ],
  },
];

export const nextSteps = [
  {
    title: 'Collaborate',
    description:
      'If you are working on creator tools, worldbuilding systems, narrative products, or communities with durable cultural energy, I would love to compare notes.',
    href: 'mailto:huxiuhan@gmail.com?subject=Let%27s%20collaborate',
    action: 'Start a conversation',
  },
  {
    title: 'Join',
    description:
      'If you like early-stage ambiguity, product taste, systems thinking, and making something real from almost nothing, say hello.',
    href: 'mailto:huxiuhan@gmail.com?subject=Interested%20in%20joining',
    action: 'Talk about joining',
  },
  {
    title: 'Say hi',
    description:
      'I am always happy to hear from people who care about the internet, tools, research, old blogs, creative software, or just making things with conviction.',
    href: 'mailto:huxiuhan@gmail.com?subject=Hello%20from%20your%20website',
    action: 'Send a note',
  },
];
