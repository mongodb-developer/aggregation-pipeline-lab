// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// Change here to customise config

// Name of the Github Repo, it's also teh baseUrl
const workshopName = 'aggregation-pipeline-lab';
// Change this if hosting outside mongodb-developer
const organizationName = "mongodb-developer";

// Main page config
const title = "Simplify Data Processing";
const tagLine = "With the MongoDB Aggregation Framework";
const startButtonTitle = "Start Lab";
const favicon = "img/favicon.svg"

// Main Page Features
const featureList = [
  {
    title: 'Learn to write aggregation pipelines!',
    illustration: 'img/writing.png',
    description: `
        Writing Aggregation Pipelines!
    `,
  },
  {
    title: 'Compose pipeline stages',
    illustration: 'img/coding.png',
    description: `
        Unleash the power of the MongoDB Aggregation Pipeline!
    `,
  },
  {
    title: 'Get hands-on experience and sample code',
    illustration: 'img/highfive.png',
    description: `
        Learn by doing and build your Apps faster!
    `,
  },
];

// UTM stuff

const utmAdvocateName = `diego.freniche`;
const utmWorkshopName = 'docusaurus_workshop'

const utmParams = `utm_campaign=devrel&utm_source=workshop&utm_medium=cta&utm_content=${utmWorkshopName}&utm_term=${utmAdvocateName}`;

// Footer links (probably no need to change them)

const footerLinks = [
  {
    label: "Try MongoDB Atlas",
    href: `https://www.mongodb.com/try?${utmParams}`,
  },
  {
    label: "Forums",
    href: `https://www.mongodb.com/community/forums/${utmParams}`,
  },
  {
    label: "Developer Center",
    href: `https://www.mongodb.com/developer/${utmParams}`,
  },
  {
    label: "MongoDB University",
    href: `https://learn.mongodb.com/${utmParams}`,
  },
  {
    href: `https://github.com/${organizationName}/${workshopName}`,
    label: "This lab in GitHub",
  },
  {
    label: `© ${new Date().getFullYear()} MongoDB, Inc.`,
    href: "#",
  },
];

///////////////////////////////////////////////////////////////////////////////
// DON'T CHANGE ANYTHING BELOW UNLESS YOU KNOW WHAT YOU'RE DOING             //
///////////////////////////////////////////////////////////////////////////////

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `${title}`,
  tagline: `${tagLine}`,
  url: `https://${workshopName}.github.io`,
  baseUrl: `/${workshopName}/`,
  projectName: `${organizationName}.github.io`,
  organizationName: `${organizationName}`,
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: `${favicon}`,
  deploymentBranch: "gh-pages",
  staticDirectories: ["static"],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
  },
  customFields: {
    startButtonTitle: `${startButtonTitle}`,
    featureList: featureList,
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: `https://github.com/${organizationName}/${workshopName}/blob/main`,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-ZJ28V71VTQ",
          anonymizeIP: true,
        },
      }),
    ],
  ],
  plugins: [require.resolve("docusaurus-lunr-search")],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      // announcementBar: {
      //   id: "feedback_form",
      //   content:
      //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      //   backgroundColor: "#fafbfc",
      //   textColor: "#091E42",
      //   isCloseable: true,
      // },
      navbar: {
        title: `${title} ${tagLine}`,
        logo: {
          alt: "MongoDB Logo",
          src: "img/logo.svg",
          srcDark: "img/logo-dark.svg",
          className: "navbar-logo",
          width: "135px",
          height: "100%",
        },
        items: [
          {
            label: "🤖 AI Lab Assistant",
            href: "https://mdb.link/lab-assistant",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: footerLinks,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["powershell", "swift", "kotlin"],
      },
      mermaid: {
        theme: { light: "neutral", dark: "forest" },
      },
    }),
  future: {
    experimental_faster: true,
  },
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
};

module.exports = config;
