const whatsappNumber = "SEU_NUMERO_AQUI"; // Substitua pelo número com DDI + DDD, somente números.
const whatsappBase = `https://wa.me/${whatsappNumber}`;

function WhatsAppLink({ message, children, className = "button button-primary" }: {
  message: string; children: React.ReactNode; className?: string;
}) {
  const href = `${whatsappBase}?text=${encodeURIComponent(message)}`;
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>;
}

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="FL.On - início">
          <span className="brand-mark">FL<span>.</span></span>
          <span className="brand-name">FL.ON</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#solucoes">Soluções</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#sobre">Sobre a FL.On</a>
        </nav>
        <WhatsAppLink message="Olá! Quero conversar sobre os serviços da FL.On." className="button button-small">
          Fale com a gente <Arrow />
        </WhatsAppLink>
      </header>

      <section className="hero section-shell" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> ESTRATÉGIA DIGITAL PARA NEGÓCIOS REAIS</div>
          <h1>Sua empresa merece ser <span>encontrada.</span> E escolhida.</h1>
          <p className="hero-lead">
            Ajudamos pequenos negócios e prestadores de serviços a fortalecer sua presença digital
            e transformar interesse em novas oportunidades.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#solucoes">Conheça nossas soluções <Arrow /></a>
            <WhatsAppLink message="Olá! Gostaria de entender qual solução da FL.On é ideal para o meu negócio." className="button button-ghost">
              Quero conversar
            </WhatsAppLink>
          </div>
          <div className="hero-note"><span className="note-line" /> Estratégia clara. Execução cuidadosa. Presença que trabalha pelo seu negócio.</div>
        </div>
        <div className="hero-art" aria-label="Ilustração abstrata de presença digital">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="dashboard-card">
            <div className="dashboard-top"><span className="mini-logo">FL.</span><span className="live-label"><i /> PRESENÇA ATIVA</span></div>
            <div className="dashboard-title">Seu negócio,<br /><strong>mais visível.</strong></div>
            <div className="search-bar"><span className="search-icon">⌕</span> serviços perto de mim <span className="search-tune">☷</span></div>
            <div className="result-row"><div className="result-avatar">A</div><div><b>Seu negócio</b><small>Perfil completo · Informações claras</small></div><span className="result-check">✓</span></div>
            <div className="result-row muted-row"><div className="result-avatar avatar-two">+</div><div><b>Mais oportunidades</b><small>Uma experiência pensada para clientes</small></div></div>
            <div className="dashboard-bottom"><span>ESTRATÉGIA DIGITAL</span><span>FL.ON / 01</span></div>
          </div>
          <div className="floating-chip chip-top"><span className="chip-icon">⌖</span><span><b>Presença local</b><small>Google & Maps</small></span></div>
          <div className="floating-chip chip-bottom"><span className="chip-icon chip-blue">↗</span><span><b>Mais contatos</b><small>Landing pages</small></span></div>
          <div className="art-caption">DIGITAL, COM DIREÇÃO.</div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="trust-inner">
          <span>PARA QUEM QUER CRESCER COM INTENÇÃO</span>
          <div><i /> Pequenos negócios</div><div><i /> Prestadores de serviços</div><div><i /> Profissionais e empresas locais</div>
        </div>
      </section>

      <section className="intro-section section-shell" id="sobre">
        <div className="section-kicker">01 / NOSSA VISÃO</div>
        <div className="intro-grid">
          <h2>Não basta estar na internet. É preciso <span>estar bem posicionado.</span></h2>
          <div className="intro-text">
            <p>Muitos negócios entregam um ótimo serviço, mas ainda têm dificuldade para serem encontrados ou explicar seu valor no digital.</p>
            <p>A FL.On organiza essa presença com soluções objetivas: ajudamos seu negócio a aparecer com mais clareza e apresentamos seus serviços de um jeito que convida o cliente a dar o próximo passo.</p>
          </div>
        </div>
      </section>

      <section className="solutions-section" id="solucoes">
        <div className="section-shell">
          <div className="section-heading">
            <div><div className="section-kicker">02 / NOSSAS SOLUÇÕES</div><h2>Do primeiro clique<br />ao próximo cliente.</h2></div>
            <p>Duas soluções, um objetivo: deixar mais fácil para as pessoas encontrarem seu negócio, entenderem o que você oferece e entrarem em contato.</p>
          </div>

          <article className="product-card product-local">
            <div className="product-visual local-visual">
              <div className="visual-label">SOLUÇÃO 01 <span>FL.ON</span></div>
              <div className="map-grid" />
              <div className="map-pin"><span>FL</span><i /></div>
              <div className="map-tooltip"><b>Seu negócio no mapa</b><small>Informações organizadas e acessíveis</small></div>
              <div className="visual-bottom-note">SEJA ENCONTRADO<br /><strong>NO MOMENTO CERTO.</strong></div>
            </div>
            <div className="product-content">
              <div className="product-number">01 — PRESENÇA LOCAL</div>
              <h3>Mais clareza e presença onde seus clientes procuram.</h3>
              <p className="product-description">Organizamos e otimizamos o Perfil da Empresa no Google para apresentar seu negócio de forma profissional nas pesquisas e no Google Maps.</p>
              <ul className="feature-list">
                <li><span>✓</span> Criação ou otimização do perfil</li>
                <li><span>✓</span> Categorias, descrição e informações comerciais</li>
                <li><span>✓</span> Cadastro de produtos e serviços</li>
                <li><span>✓</span> Organização de fotos e dados do negócio</li>
                <li><span>✓</span> Revisão e orientação para publicação</li>
              </ul>
              <div className="product-foot">
                <span className="product-tag">IDEAL PARA NEGÓCIOS LOCAIS</span>
                <WhatsAppLink message="Olá! Quero um orçamento para o serviço de Presença Local da FL.On." className="button button-dark">Solicitar orçamento <Arrow /></WhatsAppLink>
              </div>
            </div>
          </article>

          <article className="product-card product-landing">
            <div className="product-content">
              <div className="product-number">02 — LANDING PAGES</div>
              <h3>Uma página que apresenta seu valor e conduz à ação.</h3>
              <p className="product-description">Criamos páginas estratégicas, bonitas e adaptadas a todos os dispositivos para explicar seus serviços, gerar confiança e facilitar o contato com potenciais clientes.</p>
              <ul className="feature-list">
                <li><span>✓</span> Estrutura pensada para o seu público</li>
                <li><span>✓</span> Textos comerciais e chamadas para ação</li>
                <li><span>✓</span> Design personalizado e responsivo</li>
                <li><span>✓</span> Integração com WhatsApp e formulários simples</li>
                <li><span>✓</span> Publicação e testes antes da entrega</li>
              </ul>
              <div className="product-foot">
                <span className="product-tag">IDEAL PARA SERVIÇOS E PROFISSIONAIS</span>
                <WhatsAppLink message="Olá! Quero conversar sobre uma Landing Page para o meu negócio." className="button button-dark">Fazer um orçamento <Arrow /></WhatsAppLink>
              </div>
            </div>
            <div className="product-visual landing-visual">
              <div className="visual-label">SOLUÇÃO 02 <span>FL.ON</span></div>
              <div className="browser-window">
                <div className="browser-bar"><i /><i /><i /><span>seunegocio.com.br</span></div>
                <div className="browser-body">
                  <div className="browser-kicker">SEU SERVIÇO EM DESTAQUE</div>
                  <div className="browser-headline">Seu próximo<br /><em>grande passo.</em></div>
                  <div className="browser-lines"><i /><i /><i /></div>
                  <div className="browser-cta">FALE COM UM ESPECIALISTA <b>↗</b></div>
                  <div className="browser-decoration" />
                </div>
              </div>
              <div className="visual-bottom-note">UMA EXPERIÊNCIA<br /><strong>FEITA PARA CONVERTER.</strong></div>
            </div>
          </article>
        </div>
      </section>

      <section className="process-section section-shell" id="como-funciona">
        <div className="section-kicker">03 / COMO FUNCIONA</div>
        <div className="process-heading"><h2>Simples para você.<br /><span>Estratégico em cada etapa.</span></h2><p>Você entende o que será feito, acompanha o processo e sabe exatamente o que está recebendo.</p></div>
        <div className="process-grid">
          <div className="process-step"><span>01</span><h3>Conversa inicial</h3><p>Entendemos seu negócio, seus objetivos e o que precisa melhorar.</p></div>
          <div className="process-step"><span>02</span><h3>Planejamento</h3><p>Definimos a melhor solução e alinhamos escopo, prazo e investimento.</p></div>
          <div className="process-step"><span>03</span><h3>Desenvolvimento</h3><p>Executamos o projeto com atenção aos detalhes e à experiência do cliente.</p></div>
          <div className="process-step"><span>04</span><h3>Entrega</h3><p>Revisamos tudo com você e entregamos o projeto pronto para usar.</p></div>
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-glow" />
        <div className="section-shell closing-inner">
          <div className="section-kicker">04 / VAMOS COMEÇAR?</div>
          <h2>Seu negócio tem potencial.<br /><span>Vamos mostrar isso ao mundo.</span></h2>
          <p>Conte um pouco sobre sua empresa. Vamos entender o momento do seu negócio e indicar o caminho mais adequado.</p>
          <WhatsAppLink message="Olá! Conheci a FL.On pelo site e gostaria de conversar sobre uma solução para o meu negócio." className="button button-light">Converse com a FL.On <Arrow /></WhatsAppLink>
          <div className="closing-orbit orbit-a" /><div className="closing-orbit orbit-b" />
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="brand footer-brand" href="#inicio"><span className="brand-mark">FL<span>.</span></span><span className="brand-name">FL.ON</span></a>
          <p>Presença digital com estratégia,<br />clareza e propósito.</p>
          <div className="footer-links"><a href="#solucoes">Soluções</a><a href="#como-funciona">Como funciona</a><a href="#sobre">Sobre</a></div>
          <WhatsAppLink message="Olá! Quero falar com a FL.On." className="footer-contact">Fale com a gente <Arrow /></WhatsAppLink>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} FL.On. Todos os direitos reservados.</span><span>FEITO COM ESTRATÉGIA. <b>FL.ON</b></span></div>
      </footer>
    </main>
  );
}
