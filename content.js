// ============================================================
//  PRAGATHAM WEBSITE CONTENT
//  Edit anything here and it will update on the website.
//  No other files need to be touched.
// ============================================================

export const CONTENT = {

  // --- NAVIGATION ---
  nav: {
    links: [
      { label: "About",     href: "#about"     },
      { label: "Mission",   href: "#mission"   },
      { label: "Resources", href: "#resources" },
      { label: "Book",      href: "#book"      },
      { label: "Contact",   href: "#contact"   },
    ],
    ctaLabel: "Get Involved",
    ctaHref:  "#contact",
  },

  // --- HERO SECTION ---
  hero: {
    tagline:   "Every Voice Deserves to Be Heard",
    subtitle:  "Pragatham is a nonprofit dedicated to speech accessibility. We provide resources, community, and tools for people who stutter and their families.",
    cta1Label: "Explore Resources",
    cta1Href:  "#resources",
    cta2Label: "Our Story",
    cta2Href:  "#about",
    // Stats shown under the hero
    stats: [
      { value: "70M+",     label: "People affected globally"     },
      { value: "67%",     label: "Stutters who experience depression and suicidal ideation"     },
      { value: "1%",       label: "Who receive adequate support" },
    ],
  },

  // --- ABOUT SECTION ---
  about: {
    heading: "About Pragatham",
    // "Pragatham" means progress in Sanskrit — feel free to explain this
    meaningLabel: '"Pragatham" stems from the Sanskrit prefix "Praga" representing progress ans the suffix "Tham" meaning rhythm and structure.',
    paragraphs: [
      "Pragatham was founded by Saket Gurrapu, a high school student who overcame severe stuttering through years of perseverance and a self-developed methodology known as the Song Technique. Now, Saket has recieved state, national, and international recognition in public speaking, has taught over 100 students speech and debate, and holds various speaking-oriented leadership positions expanding his passion of communication and expression.",
      "After publishing his experience in Silence to Song, Saket recognized a gap: millions of people who stutter lack access to structured resources, community, or guidance. Ultimately, Pragatham exists to close that gap.",
      "We believe speech accessibility is a civil right — not a luxury, and Pragatham's undying responsibility is to ensure that right is unalienable among society. Our work spans digital tools, curated resources, and advocacy to ensure every person finds their voice.",
    ],
    founderName:  "Saket Gurrapu",
    founderTitle: "Founder, Pragatham",
  },

  // --- MISSION SECTION ---
  mission: {
    heading: "Our Mission",
    statement: "To make speech accessibility resources available to every person who stutters — regardless of geography, income, or background.",
    pillars: [
      {
        icon:  "🎯",
        title: "Accessible Resources",
        desc:  "Curating the best tools, therapists, and research in one place — free for everyone.",
      },
      {
        icon:  "🤝",
        title: "Community",
        desc:  "Connecting people who stutter with peers, mentors, and advocates who understand the journey.",
      },
      {
        icon:  "📣",
        title: "Advocacy",
        desc:  "Raising awareness in schools, workplaces, and policy spaces to reduce stigma and increase support.",
      },
    ],
  },

  // --- RESOURCES SECTION ---
  resources: {
    heading: "Resources",
    subtitle: "Carefully selected resources for people who stutter, their families, and educators.",
    // ADD or REMOVE resources freely — just copy/paste a block
    items: [
      {
        category: "Organizations",
        links: [
          { name: "National Stuttering Association",  url: "https://www.westutter.org",           desc: "Support groups, events, and advocacy for adults and children." },
          { name: "Stuttering Foundation",            url: "https://www.stutteringhelp.org",      desc: "Free resources, videos, and therapist directories." },
          { name: "American Institute for Stuttering",url: "https://stutteringtreatment.org",     desc: "Evidence-based stuttering therapy programs." },
        ],
      },
      {
        category: "For Students & Families",
        links: [
          { name: "Friends: The National Association", url: "https://www.friendswhostutter.org",  desc: "Youth-focused community and summer camps." },
          { name: "Stuttering Help (Kids)",            url: "https://www.stutteringhelp.org/children", desc: "Age-appropriate guides for children and parents." },
        ],
      },
      {
        category: "Tools & Apps",
        links: [
          { name: "SpeechEasy",   url: "https://www.speecheasy.com",    desc: "Altered auditory feedback device to reduce stuttering." },
          { name: "DAF Assistant",url: "https://apps.apple.com/us/app/daf-assistant/id1134579978", desc: "Delayed auditory feedback app for iOS." },
        ],
      },
      {
        category: "Research & Reading",
        links: [
          { name: "Journal of Fluency Disorders", url: "https://www.journals.elsevier.com/journal-of-fluency-disorders", desc: "Peer-reviewed research on stuttering science." },
          { name: "StutterTalk Podcast",          url: "https://stuttertalk.com",                 desc: "Interviews with researchers, clinicians, and people who stutter." },
        ],
      },
    ],
  },

  // --- BOOK SECTION ---
  book: {
    heading: "Silence to Song",
    subtitle: "A deep, intimate memoir paired with a structured methodology by Pragatham's founder",
    description: "In Silence to Song, Saket Gurrapu chronicles his journey from severe stuttering to competitive public speaking — and introduces the Song Technique, a practical methodology for reclaiming your voice. Part memoir, part guide, the book is written for anyone who has ever felt silenced, and anyone who has ever felt that their dreams are unachievable. This memoir begins with something that should have been impossible: unbroken, beautiful fluency. From there, Silence to Song traces backward into childhood classrooms, dinner tables, playgrounds, and school days, revealing the invisible weight of living in a world that equates voice with worth. It is not a story of instant triumph or easy fixes. It is a careful excavation of shame, avoidance, resilience, and the quiet endurance required to keep going when victory feels impossible.",
    // Link to buy/read the book — update when available
    buyLabel: "Get the Book",
    buyHref:  "https://www.amazon.com/Silence-Song-Memoir-Voice-Fight/dp/B0GD7ZFXRW", // <-- UPDATE THIS with the real link
    learnLabel: "Learn the Song Technique",
    learnHref: "#contact",
    pullQuote: "The moment I stopped fighting my stutter and started singing through it — everything changed.",
  },

  // --- CONTACT / GET INVOLVED SECTION ---
  contact: {
    heading: "Get Involved",
    subtitle: "Whether you stutter, love someone who does, or simply want to support our mission, there is always a place for you here.",
    options: [
      {
        icon:  "✉️",
        title: "Reach Out",
        desc:  "Questions, partnerships, speaking requests, personal help — we read everything.",
        actionLabel: "Email Us",
        actionHref:  "mailto:pragatham.org@gmail.com", // <-- UPDATE email
      },
      {
        icon:  "🤲",
        title: "Volunteer",
        desc:  "Help us build resources, run social media, or support events.",
        actionLabel: "Apply to Volunteer",
        actionHref:  "mailto:pragatham.org@gmail.com?subject=Volunteer%20Interest",
      },
      {
        icon:  "💛",
        title: "Donate",
        desc:  "Every dollar goes directly toward expanding free resources and awareness.",
        actionLabel: "Support Pragatham",
        actionHref:  "#", // <-- UPDATE with donation link (PayPal, Stripe, etc.)
      },
    ],
    socialLinks: [
      // Uncomment and fill in when accounts exist:
      // { platform: "Instagram", url: "https://instagram.com/pragatham" },
      // { platform: "LinkedIn",  url: "https://linkedin.com/company/pragatham" },
    ],
  },

  // --- FOOTER ---
  footer: {
    tagline: "Pragatham — Every Voice Deserves to Be Heard.",
    legalNote: "Pragatham is a registered nonprofit. All resources are free.",
    year: 2025,
  },
};
