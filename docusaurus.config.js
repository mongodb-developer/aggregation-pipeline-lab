// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// Change here to customise config
// Name of the Github Repo, it's also teh baseUrl
// Change this if hosting outside mongodb-developer
// Main page config
// Main Page Features
// UTM stuff
// Footer links (probably no need to change them)
///////////////////////////////////////////////////////////////////////////////
// DON'T CHANGE ANYTHING BELOW UNLESS YOU KNOW WHAT YOU'RE DOING             //
///////////////////////////////////////////////////////////////////////////////
/** @type {import('@docusaurus/types').Config} */
/** @type {import('@docusaurus/preset-classic').Options} */
/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
// announcementBar: {
//   id: "feedback_form",
//   content:
//     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
//   backgroundColor: "#fafbfc",
//   textColor: "#091E42",
//   isCloseable: true,
// },
const workshopName = "aggregation-pipeline-lab";
const organizationName = "mongodb-developer";
const title = "Simplify Data Processing";
const tagLine = "With the MongoDB Aggregation Framework";
const startButtonTitle = "Start Lab";
const favicon = "img/favicon.svg";

const featureList = [{
    title: "Learn to write aggregation pipelines!",
    illustration: "img/writing.png",

    description: `
        Writing Aggregation Pipelines!
    `
}, {
    title: "Compose pipeline stages",
    illustration: "img/coding.png",

    description: `
        Unleash the power of the MongoDB Aggregation Pipeline!
    `
}, {
    title: "Get hands-on experience and sample code",
    illustration: "img/highfive.png",

    description: `
        Learn by doing and build your Apps faster!
    `
}];

const utmAdvocateName = `diego.freniche`;
const utmWorkshopName = "docusaurus_workshop";
const utmParams = `utm_campaign=devrel&utm_source=workshop&utm_medium=cta&utm_content=${utmWorkshopName}&utm_term=${utmAdvocateName}`;

const footerLinks = [{
    label: "Try MongoDB Atlas",
    href: `https://www.mongodb.com/try?${utmParams}`
}, {
    label: "Forums",
    href: `https://www.mongodb.com/community/forums/${utmParams}`
}, {
    label: "Developer Center",
    href: `https://www.mongodb.com/developer/${utmParams}`
}, {
    label: "MongoDB University",
    href: `https://learn.mongodb.com/${utmParams}`
}, {
    href: `https://github.com/${organizationName}/${workshopName}`,
    label: "This lab in GitHub"
}, {
    label: `© ${new Date().getFullYear()} MongoDB, Inc.`,
    href: "#"
}];

const {
    themes
} = require("prism-react-renderer");

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

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
        locales: ["en", "zh"]
    },

    customFields: {
        startButtonTitle: `${startButtonTitle}`,
        featureList: featureList
    },

    presets: [["classic", ({
        docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            editUrl: `https://github.com/${organizationName}/${workshopName}/blob/main`
        },

        theme: {
            customCss: require.resolve("./src/css/custom.css")
        },

        gtag: {
            trackingID: "G-ZJ28V71VTQ",
            anonymizeIP: true
        }
    })]],

    plugins: [require.resolve("docusaurus-lunr-search")],

    themeConfig: ({
        docs: {
            sidebar: {
                autoCollapseCategories: true,
                hideable: true
            }
        },

        navbar: {
            title: `${title} ${tagLine}`,

            logo: {
                alt: "MongoDB Logo",
                src: "img/logo.svg",
                srcDark: "img/logo-dark.svg",
                className: "navbar-logo",
                width: "135px",
                height: "100%"
            },

            items: [{
                label: "🤖 AI Lab Assistant",
                href: "https://mdb.link/lab-assistant",
                position: "right"
            }, {
                type: "localeDropdown",
                position: "right"
            }]
        },

        footer: {
            style: "dark",
            links: footerLinks
        },

        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages: ["powershell", "swift", "kotlin"]
        },

        mermaid: {
            theme: {
                light: "neutral",
                dark: "forest"
            }
        }
    }),

    future: {
        v4: {
            removeLegacyPostBuildHeadAttribute: true,
            useCssCascadeLayers: true
        },

        experimental_faster: {
            swcJsLoader: true,
            swcJsMinimizer: true,
            swcHtmlMinimizer: true,
            lightningCssMinimizer: true,
            rspackBundler: true,
            rspackPersistentCache: true,
            ssgWorkerThreads: true,
            mdxCrossCompilerCache: true
        },

        experimental_storage: {
            type: "localStorage",
            namespace: true
        }
    },

    markdown: {
        mermaid: true
    },

    themes: ["@docusaurus/theme-mermaid"]
};

module.exports = config;