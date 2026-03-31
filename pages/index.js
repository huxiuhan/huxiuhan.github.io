import Head from 'next/head';
import React from 'react';

const headerLinks = [
  { label: 'GitHub', href: 'https://github.com/huxiuhan' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/xiuhanhu' },
  { label: 'Email', href: 'mailto:huxiuhan@gmail.com' },
  { label: 'Twitter', href: 'https://x.com/0xstory_xhu' },
];

const nowPoints = [
  <>
    I am building toward <strong><span className="inline-accent">builder-first world creation</span></strong>.{' '}
    Tools and systems for people who keep returning to characters, worlds, lore, campaigns, and shared universes.
  </>,
  <>
    What keeps me interested is not one-off generation.{' '}
    It is the longer arc: how creators sustain a project, keep context alive, and turn imagination into something social.
  </>,
  <>
    In retrospect, this is less a pivot than a convergence.{' '}
    It brings together things I have been circling for years through research, creator products, data storytelling, and internet projects.
  </>,
];

const throughline = [
  <>
    I started building things on the internet early, mostly because I was curious and impatient. Many of the first projects were small, awkward, and useful in a very direct way.
  </>,
  <>
    Since then I have moved through research, infrastructure, creator products, and enterprise systems:{' '}
    computer science at Columbia, machine intelligence at Peking University, creator and publishing products at Facebook, data visualization at Alibaba, and product/infrastructure work at Tezign.
  </>,
  <>
    The thread was never really a title.{' '}
    It was a fascination with systems that help people express something larger than a single screen: stories, workflows, identities, communities, and the strange social life around tools.
  </>,
];

const workGroups = [
  {
    era: 'Now',
    intro: <>Two layers of engineering: one inside the company, one public through <strong><span className="inline-accent">Imagineer</span></strong>.</>,
    items: [
      {
        title: 'Internal engineering',
        meta: 'Company layer',
        image: '/images/internal-engineering.svg',
        description:
          'Inside the company, I work on the engineering layer that turns product direction, narrative ideas, and team workflows into systems people can actually use.',
        thread:
          'This is the quieter layer: infrastructure, workflow design, and the connective tissue that lets ideas become repeatable product reality.',
      },
      {
        title: 'Imagineer',
        meta: 'Public layer',
        image: '/images/imagineer.svg',
        description: <>
          Publicly, I want <strong><span className="inline-accent">Imagineer</span></strong> to be the more visible layer:{' '}
          engineering as imagination, worldbuilding, interface, and a way of making technical work feel culturally alive.
        </>,
        thread:
          'It is the outward-facing version of the same instinct: engineering not only as implementation, but as imagination with structure.',
      },
    ],
  },
  {
    era: 'Product & Platform',
    intro: <>Years spent around <strong><span className="inline-accent">content technology</span></strong>: creator publishing, content systems, asset infrastructure, and data storytelling at scale.</>,
    items: [
      {
        title: 'Tezign Digital Asset Management',
        meta: 'Product infra and enterprise workflows',
        href: 'https://www.tezign.com/page/product-asset-management/',
        image: '/images/dam.png',
        description:
          'Worked on digital asset management and content operations infrastructure, plus product initiatives around marketing content management and analysis for global brands.',
        thread:
          'It sharpened my interest in content technology as infrastructure: how creative assets are organized, governed, analyzed, and made reusable across teams.',
      },
      {
        title: 'Creator Studio and Watch',
        meta: 'Facebook / Meta',
        href: 'https://www.facebook.com/formedia/blog/launching-watch-ad-breaks-creator-studio-globally',
        image: '/images/cs.png',
        description:
          'Worked on creator-facing tools and publishing experiences at Facebook, especially around video publishing, Creator Studio, and the systems behind creator content workflows.',
        thread:
          'This was content technology in a very direct form: publishing tools shape what creators can make, how they work, and how creator ecosystems grow.',
      },
      {
        title: 'Double 11 data storytelling',
        meta: 'Alibaba',
        href: 'https://www.zcool.com.cn/article/ZMTA2ODU0NA==.html',
        image: '/images/d11.jpg',
        description:
          'Worked on large-scale data visualization infrastructure for major public-facing storytelling moments, turning operational data into content experiences.',
        thread:
          'It reinforced a belief I still carry: content technology is not only about storage or delivery, but about turning systems and data into narrative form.',
      },
    ],
  },
  {
    era: 'Research & Systems',
    intro: 'Projects from the years when I was still close to labs, sensors, and the pleasure of making difficult systems behave.',
    items: [
      {
        title: 'Robotic ironing research',
        meta: 'ICRA 2016',
        href: 'http://www.cs.columbia.edu/~yli/ICRA2016/',
        image: '/images/ironing-small.png',
        description:
          'A robotics project using fused sensing methods to reason about cloth surfaces and support robotic ironing plans.',
        thread:
          'I still like work that turns messy reality into something a system can reason about without flattening it too much.',
      },
      {
        title: 'Sensor Overlay for Google Maps',
        meta: 'JavaScript library',
        href: '/projects/sensor-map/',
        image: '/images/sensor-map.png',
        description:
          'Built a reusable interface for rendering and clustering real-time sensor information on maps without losing readability.',
        thread:
          'An early sign that I enjoy interfaces for dense, living systems more than static pages.',
      },
      {
        title: 'Asthma inhaler assistive system',
        meta: 'Assistive computing',
        href: '/projects/asthma-inhaler-project/',
        image: '/images/asthma-small.png',
        description:
          'Built a system to guide inhaler usage and detect mistakes in task execution.',
        thread:
          'It pushed me toward a question that still matters to me: when can software quietly help a person do a complicated thing better?',
      },
      {
        title: 'Unmanned vehicle work',
        meta: 'Autonomous systems',
        href: '/images/unmanned-vehicle.png',
        image: '/images/unmanned-vehicle-small.png',
        description:
          'Early work on control and route-planning ideas for unmanned vehicles.',
        thread:
          'Even then, I was drawn to systems that need to perceive, decide, and adapt rather than merely display.',
      },
    ],
  },
  {
    era: 'Early Internet',
    intro: 'Before titles, there was the internet, some code, and a habit of making things because they ought to exist.',
    items: [
      {
        title: 'Weiming World game server',
        meta: 'Node.js / campus backend',
        href: 'https://github.com/huxiuhan/wmserver',
        image: '/images/wmworld-small.png',
        description:
          'Built the backend for a campus game introducing new students to Peking University through a location-based experience.',
        thread:
          'I was already interested in how digital systems create a sense of place and participation.',
      },
      {
        title: 'Net Treasure Box',
        meta: 'Portable web services',
        href: '/images/ntbox.png',
        image: '/images/ntbox-small.png',
        description:
          'A mini suite of utilities turning a Raspberry Pi into a portable campus web server with practical superpowers.',
        thread:
          'I still love projects that feel improvised, local, and empowering in a very direct way.',
      },
      {
        title: 'PKU Student Activity Platform',
        meta: 'Campus social platform',
        href: 'https://github.com/pkuplatform/platform',
        image: '/images/pkuplatform-small.jpg',
        description:
          'Contributed heavily to an open student activity platform that explored a social layer around campus organizations.',
        thread:
          'It taught me how quickly software can become social infrastructure if the timing is right.',
      },
      {
        title: 'Dormitory application website',
        meta: 'Small tool, real adoption',
        href: '/images/dormsite.png',
        image: '/images/dormsite-small.png',
        description:
          'Made a website to help students find roommates and submit applications, which later became an official school system.',
        thread:
          'Sometimes the right small tool is the beginning of an institution.',
      },
      {
        title: 'ADELE',
        meta: 'Programming language experiment',
        href: 'https://github.com/ajchuang/Adele',
        image: '/images/adele.png',
        description:
          'A language experiment built for composing interactive ASCII art through reusable layers.',
        thread:
          'I have always had affection for tools that are slightly impractical but expand how people think.',
      },
    ],
  },
];

const nextSteps = [
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

function MaybeLinkedTitle({ href, title }) {
  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
      >
        {title}
      </a>
    );
  }

  return <span>{title}</span>;
}

export default function Home() {
  return (
    <div className="site-shell">
      <Head>
        <title>Hu Xiuhan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Hu Xiuhan is a founder, builder, and systems-minded product person working across stories, tools, creators, and worldbuilding."
        />
      </Head>

      <header className="site-header">
        <div className="wrapper">
          <h1 className="hero-mark" id="hero-1">
            <a href="/">
              <span className="hb">[</span>
              <span className="sheng">H</span>
              <span className="yun">u</span>&nbsp;
              <span className="sheng">X</span>
              <span className="yun">iu</span>
              <span className="sheng">h</span>
              <span className="yun">an</span>
              <span className="hb">]</span>
            </a>
          </h1>

          <p className="hero-tagline">
            Story, systems, tools, worlds.
          </p>

          <ul className="nav">
            {headerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main>
        <section className="section intro-section">
          <div className="wrapper section-grid">
            <div className="section-heading">
              <p className="section-label">Now</p>
              <h2>Now</h2>
            </div>
            <div className="section-body prose">
              {nowPoints.map((point, index) => (
                <p key={`now-${index}`}>{point}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrapper section-grid">
            <div className="section-heading">
              <p className="section-label">About</p>
              <h2>About</h2>
            </div>
            <div className="section-body prose">
              {throughline.map((paragraph, index) => (
                <p key={`throughline-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="section selected-work" id="selected-work">
          <div className="wrapper">
            <div className="selected-work-heading">
              <p className="section-label">Work</p>
              <h2>Selected work</h2>
            </div>

            <div className="work-groups">
              {workGroups.map((group) => (
                <section key={group.era} className="work-group">
                  <div className="work-group-head">
                    <p className="work-era">{group.era}</p>
                    <p className="work-intro">{group.intro}</p>
                  </div>
                  <div className="work-list">
                    {group.items.map((item) => (
                      <article key={item.title} className="work-card">
                        <div className="work-poster">
                          <a
                            href={item.href || item.image}
                            target={item.href && item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href && item.href.startsWith('http') ? 'noreferrer' : undefined}
                          >
                            <img src={item.image} alt={item.title} />
                          </a>
                        </div>
                        <div className="work-copy">
                          <p className="work-meta">{item.meta}</p>
                          <h3 className="work-title">
                            <MaybeLinkedTitle href={item.href} title={item.title} />
                          </h3>
                          <p className="work-description">{item.description}</p>
                          <p className="work-thread">{item.thread}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="section next-step" id="next-step">
          <div className="wrapper">
            <div className="selected-work-heading">
              <p className="section-label">Contact</p>
              <h2>Say hello</h2>
            </div>

            <div className="cta-grid">
              {nextSteps.map((item) => (
                <a key={item.title} className="cta-card" href={item.href}>
                  <p className="cta-title">{item.title}</p>
                  <p className="cta-description">{item.description}</p>
                  <span className="cta-action">{item.action}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrapper footer-inner">
          <p>Hu Xiuhan, still building on the internet.</p>
          <p>© 2026</p>
        </div>
      </footer>
    </div>
  );
}
