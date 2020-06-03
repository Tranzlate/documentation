import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
    {
        title: <>Easy to Use</>,
        description: (
            <>
                Tranzlate was created to be a simpler and easier way to manage
                localization.
            </>
        )
    },
    {
        title: <>Focus on What Matters</>,
        description: (
            <>
                Focus on building a great app and let Tranzlate focus on syncing
                and keeping your translations accurate.
            </>
        )
    },
    {
        title: <>Integrations</>,
        description: (
            <>
                Use a built integration for your project or build your own with
                the accessible API.
            </>
        )
    }
];

function Feature({ title, description }) {
    return (
        <div className={classnames("col col--4", styles.feature)}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title={`Tranzlate`}
            description="Documentation about Tranzlate application."
        >
            <header
                className={classnames("hero hero--primary", styles.heroBanner)}
            >
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={classnames(
                                "button button--outline button--secondary button--lg",
                                styles.getStarted
                            )}
                            to={useBaseUrl("docs/")}
                        >
                            View documentation
                        </Link>
                    </div>
                </div>
            </header>

            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Home;
