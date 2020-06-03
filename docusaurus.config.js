module.exports = {
    title: "Tranzlate Documentation",
    tagline: "Localization made easier.",
    url: "https://tranzlate.github.io",
    baseUrl: "/documentation/",
    favicon: "img/favicon.ico",
    organizationName: "Tranzlate",
    projectName: "documentation",
    themeConfig: {
        disableDarkMode: true,
        navbar: {
            title: "Tranzlate Documentation",
            logo: {
                alt: "Tranzlate Logo",
                src: "img/logo.png"
            },
            links: [
                {
                    to: "docs/",
                    activeBasePath: "docs",
                    label: "Docs",
                    position: "left"
                },
                {
                    to: "docs/coming-soon",
                    label: "API",
                    position: "left"
                }
            ]
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "About",
                            to: "docs/"
                        },
                        {
                            label: "Integrations",
                            to: "docs/laravel"
                        }
                    ]
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "Twitter",
                            href: "https://twitter.com/Tranzlate_"
                        }
                    ]
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/Tranzlate/documentation"
                        }
                    ]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Tranzlate.`
        }
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    homePageId: "about",
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/Tranzlate/documentation/edit/master/"
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css")
                }
            }
        ]
    ]
};
