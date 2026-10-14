const projects = [
    {
        number: '01',
        name: 'Shortly',
        category: 'URL SHORTENER',
        description: 'A link shortening service with fast redirects and an architecture that explores trade-offs in scale, reliability, and cost.',
        stack: ['Next.js', 'TypeScript', 'Cloudflare Workers', 'D1'],
        demo: 'https://url-shortener-nine-wine.vercel.app/',
        source: 'https://github.com/viniciustt2/url-shortener',
        status: 'LIVE',
    },
];

export default function Home() {
    return (
        <main>
            <header className="site-header wrap">
                <a className="wordmark" href="#top" aria-label="Vinícius, home"><span className="mark">V.</span><span>VINÍCIUS<br /><small>PORTFOLIO</small></span></a>
                <nav aria-label="Main navigation">
                    <a href="#projects">Projects <span>01</span></a>
                    <a href="#about">About</a>
                    <a className="nav-contact" href="https://github.com/viniciustt2" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
                </nav>
            </header>

            <section className="hero wrap" id="top">
                <div className="hero-copy">
                    <p className="eyebrow"><span className="pulse" /> PERSONAL PORTFOLIO <span className="eyebrow-year">2026</span></p>
                    <h1>Thoughtful<br />projects.<br /><span>Real-world<br />problems.</span></h1>
                    <p className="intro">I’m Vinícius. This is where I share the projects I’m building and the technical decisions behind them.</p>
                    <div className="hero-actions">
                        <a className="button button-dark" href="#projects">Explore projects <span aria-hidden="true">↓</span></a>
                        <a className="text-link" href="https://github.com/viniciustt2" target="_blank" rel="noreferrer">My GitHub <span aria-hidden="true">↗</span></a>
                    </div>
                </div>
                <aside className="hero-card" aria-label="Featured project">
                    <div className="card-topline"><span>FEATURED</span><span>01 / 01</span></div>
                    <div className="orb-wrap"><div className="orb"><span>SH</span></div><i className="orbit orbit-one" /><i className="orbit orbit-two" /><span className="orbit-dot" /></div>
                    <div className="hero-card-bottom"><span>CURRENT PROJECT</span><strong>Shortly <span aria-hidden="true">↗</span></strong><span>URL SHORTENER · 2026</span></div>
                </aside>
                <div className="hero-index"><span>01</span><span>—</span><span>PORTFOLIO</span></div>
            </section>

            <section className="projects-section" id="projects">
                <div className="wrap">
                    <div className="section-heading">
                        <div><p className="eyebrow">SELECTED WORK</p><h2>Projects<span className="period">.</span></h2></div>
                        <p>A growing collection.<br />Each project, a new lesson.</p>
                    </div>
                    <div className="project-list">
                        {projects.map((project) => (
                            <article className="project-card" key={project.name}>
                                <div className="project-number">{project.number}</div>
                                <div className="project-main">
                                    <div className="project-meta"><span>{project.category}</span><span className="status"><i /> {project.status}</span></div>
                                    <h3>{project.name}<span className="period">.</span></h3>
                                    <p>{project.description}</p>
                                    <ul className="tags" aria-label="Technologies">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                                </div>
                                <div className="project-links">
                                    <a href={project.demo} target="_blank" rel="noreferrer">Live demo <span aria-hidden="true">↗</span></a>
                                    <a href={project.source} target="_blank" rel="noreferrer">Source code <span aria-hidden="true">↗</span></a>
                                </div>
                            </article>
                        ))}
                    </div>
                    <p className="more-projects"><span>+</span> More projects will be added as they are ready.</p>
                </div>
            </section>

            <section className="about-section wrap" id="about">
                <div className="about-label"><p className="eyebrow">A LITTLE ABOUT</p><span className="about-symbol">V<span>.</span></span></div>
                <div className="about-copy"><h2>Building, learning<br />and sharing.</h2><p>This portfolio is my home on the web: a place to present projects, share how they were built, and keep track of what I learn along the way.</p><a className="text-link" href="https://github.com/viniciustt2" target="_blank" rel="noreferrer">Follow along on GitHub <span aria-hidden="true">↗</span></a></div>
            </section>

            <footer className="site-footer wrap"><a className="wordmark" href="#top"><span className="mark">V.</span><span>VINÍCIUS<br /><small>PORTFOLIO</small></span></a><span>MADE WITH CURIOSITY · 2026</span><a href="https://github.com/viniciustt2" target="_blank" rel="noreferrer">GITHUB ↗</a></footer>
        </main>
    );
}