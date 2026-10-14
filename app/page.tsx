const projects = [
    {
        number: '01',
        name: 'Shortly',
        category: 'URL SHORTENER',
        description: 'Links curtos, redirecionamentos rápidos e uma arquitetura que explora diferentes escolhas de escala e custo.',
        stack: ['Next.js', 'TypeScript', 'Cloudflare Workers', 'D1'],
        demo: 'https://url-shortener-nine-wine.vercel.app/',
        source: 'https://github.com/viniciustt2/url-shortener',
        status: 'NO AR',
    },
];

export default function Home() {
    return (
        <main>
            <header className="site-header wrap">
                <a className="wordmark" href="#top" aria-label="Vinícius, início"><span className="mark">V.</span><span>VINÍCIUS<br /><small>PORTFÓLIO</small></span></a>
                <nav aria-label="Navegação principal">
                    <a href="#projetos">Projetos <span>01</span></a>
                    <a href="#sobre">Sobre</a>
                    <a className="nav-contact" href="https://github.com/viniciustt2" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
                </nav>
            </header>

            <section className="hero wrap" id="top">
                <div className="hero-copy">
                    <p className="eyebrow"><span className="pulse" /> PORTFÓLIO PESSOAL <span className="eyebrow-year">2026</span></p>
                    <h1>Projetos bem<br />pensados. <span>Problemas<br className="desktop-break" /> reais.</span></h1>
                    <p className="intro">Eu sou Vinícius. Este espaço reúne os projetos que estou construindo e as decisões técnicas por trás deles.</p>
                    <div className="hero-actions">
                        <a className="button button-dark" href="#projetos">Explorar projetos <span aria-hidden="true">↓</span></a>
                        <a className="text-link" href="https://github.com/viniciustt2" target="_blank" rel="noreferrer">Meu GitHub <span aria-hidden="true">↗</span></a>
                    </div>
                </div>
                <aside className="hero-card" aria-label="Projeto em destaque">
                    <div className="card-topline"><span>EM DESTAQUE</span><span>01 / 01</span></div>
                    <div className="orb-wrap"><div className="orb"><span>SH</span></div><i className="orbit orbit-one" /><i className="orbit orbit-two" /><span className="orbit-dot" /></div>
                    <div className="hero-card-bottom"><span>PROJETO ATUAL</span><strong>Shortly <span aria-hidden="true">↗</span></strong><span>URL SHORTENER · 2026</span></div>
                </aside>
                <div className="hero-index"><span>01</span><span>—</span><span>PORTFÓLIO</span></div>
            </section>

            <section className="projects-section" id="projetos">
                <div className="wrap">
                    <div className="section-heading">
                        <div><p className="eyebrow">TRABALHOS SELECIONADOS</p><h2>Projetos<span className="period">.</span></h2></div>
                        <p>Uma coleção em construção.<br />Cada projeto, um novo aprendizado.</p>
                    </div>
                    <div className="project-list">
                        {projects.map((project) => (
                            <article className="project-card" key={project.name}>
                                <div className="project-number">{project.number}</div>
                                <div className="project-main">
                                    <div className="project-meta"><span>{project.category}</span><span className="status"><i /> {project.status}</span></div>
                                    <h3>{project.name}<span className="period">.</span></h3>
                                    <p>{project.description}</p>
                                    <ul className="tags" aria-label="Tecnologias">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                                </div>
                                <div className="project-links">
                                    <a href={project.demo} target="_blank" rel="noreferrer">Ver demo <span aria-hidden="true">↗</span></a>
                                    <a href={project.source} target="_blank" rel="noreferrer">Código <span aria-hidden="true">↗</span></a>
                                </div>
                            </article>
                        ))}
                    </div>
                    <p className="more-projects"><span>+</span> Mais projetos serão adicionados conforme forem ficando prontos.</p>
                </div>
            </section>

            <section className="about-section wrap" id="sobre">
                <div className="about-label"><p className="eyebrow">UM POUCO SOBRE</p><span className="about-symbol">V<span>.</span></span></div>
                <div className="about-copy"><h2>Construindo, aprendendo<br />e compartilhando.</h2><p>Este portfólio é meu ponto de encontro na web: um lugar para apresentar projetos, mostrar como foram feitos e registrar o que aprendo ao longo do caminho.</p><a className="text-link" href="https://github.com/viniciustt2" target="_blank" rel="noreferrer">Acompanhe no GitHub <span aria-hidden="true">↗</span></a></div>
            </section>

            <footer className="site-footer wrap"><a className="wordmark" href="#top"><span className="mark">V.</span><span>VINÍCIUS<br /><small>PORTFÓLIO</small></span></a><span>FEITO COM CURIOSIDADE · 2026</span><a href="https://github.com/viniciustt2" target="_blank" rel="noreferrer">GITHUB ↗</a></footer>
        </main>
    );
}