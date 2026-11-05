const whatsappNumber = 55021993534300; // Troque pelo número com DDI + DDD, somente números.
const whatsappBase = `https://wa.me/${whatsappNumber}`;

function WhatsAppLink({ message, children, className = "button button-primary" }: {
  message: string; children: React.ReactNode; className?: string;
}) {
  const href = `${whatsappBase}?text=${encodeURIComponent(message)}`;
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>;
}

function Arrow() { return <span aria-hidden="true" className="arrow">↗</span>; }
function Check() { return <span className="check" aria-hidden="true">✓</span>; }

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="FL.On — início"><img src="/flon-logo.png" alt="FL.On Soluções Digitais" /></a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#solucoes">Soluções</a><a href="#processo">Como funciona</a><a href="#sobre">Sobre</a>
        </nav>
        <WhatsAppLink message="Olá! Quero conversar sobre os serviços da FL.On." className="button button-small">Fale com a gente <Arrow /></WhatsAppLink>
      </header>

      <section className="hero section-shell" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><i /> SOLUÇÕES DIGITAIS PARA NEGÓCIOS REAIS</div>
          <h1>Sua empresa merece ser <span>encontrada.</span> E escolhida.</h1>
          <p className="hero-lead">Fortalecemos a presença digital do seu negócio e criamos páginas que apresentam seu valor e facilitam o contato com novos clientes.</p>
          <div className="hero-actions"><a className="button button-primary" href="#solucoes">Conheça nossas soluções <Arrow /></a><WhatsAppLink message="Olá! Gostaria de entender qual solução da FL.On é ideal para o meu negócio." className="button button-outline">Quero conversar</WhatsAppLink></div>
          <div className="hero-proof"><span><b>01</b> Presença Local</span><span><b>02</b> Landing Pages</span><span><b>FL.ON</b> Digital com direção</span></div>
        </div>
        <div className="hero-visual" aria-label="Representação visual de uma empresa em destaque nas buscas digitais">
          <div className="visual-grid" /><div className="glow glow-a" /><div className="glow glow-b" />
          <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" />
          <div className="map-node node-one" /><div className="map-node node-two" /><div className="map-node node-three" />
          <div className="phone-frame">
            <div className="phone-speaker" /><div className="phone-screen">
              <div className="google-word"><b>G</b><b>o</b><b>o</b><b>g</b><b>l</b><b>e</b></div>
              <div className="search-field"><span>⌕</span> sua empresa <i>⌕</i></div>
              <div className="store-photo"><span>SEU NEGÓCIO</span></div>
              <div className="store-name">Sua empresa <small>4,9 ★★★★★</small></div>
              <div className="store-category">Serviço local · Informações completas</div>
              <div className="store-actions"><span>⌖<small>Rotas</small></span><span>☎<small>Ligar</small></span><span>↗<small>Enviar</small></span></div>
              <div className="mini-map"><i /><i /><i /><b /></div>
            </div>
          </div>
          <div className="floating-card card-visibility"><span className="signal-icon">⌖</span><div><b>Presença local</b><small>Mais fácil de encontrar</small></div><i className="status-dot" /></div>
          <div className="floating-card card-page"><span className="page-icon">↗</span><div><b>Landing Page</b><small>Seu serviço em destaque</small></div></div>
          <div className="pin-3d"><span>FL</span></div>
          <div className="visual-caption">VISIBILIDADE COM ESTRATÉGIA <i /></div>
        </div>
      </section>

      <section className="audience-strip"><div className="section-shell audience-inner"><span>FEITO PARA QUEM QUER AVANÇAR</span><b>Pequenos negócios</b><b>Prestadores de serviços</b><b>Profissionais locais</b></div></section>

      <section className="about-section section-shell" id="sobre">
        <div className="section-index">01 <span>— NOSSA VISÃO</span></div>
        <div className="about-grid"><h2>Não basta estar na internet. É preciso <em>estar bem posicionado.</em></h2><div className="about-copy"><p>Muitos negócios entregam um ótimo serviço, mas ainda têm dificuldade para serem encontrados ou para mostrar por que devem ser escolhidos.</p><p>A FL.On transforma essa presença em algo mais claro, profissional e estratégico — com soluções objetivas, sem complicar o que precisa funcionar.</p></div></div>
      </section>

      <section className="solutions-section" id="solucoes"><div className="section-shell">
        <div className="section-heading"><div><div className="section-index">02 <span>— NOSSAS SOLUÇÕES</span></div><h2>Do primeiro clique<br /><em>ao próximo contato.</em></h2></div><p>Duas soluções para fortalecer sua presença digital, apresentar melhor o que você faz e facilitar o próximo passo do seu cliente.</p></div>
        <article className="service-card local-card">
          <div className="service-art local-art"><div className="art-topline"><span>FL.ON / SOLUÇÃO 01</span><span>GOOGLE · MAPS</span></div><div className="map-surface"><div className="road road-one" /><div className="road road-two" /><div className="road road-three" /><div className="map-marker"><span>FL</span></div><div className="map-label"><i /> Seu negócio no mapa</div></div><div className="art-footline">PRESENÇA LOCAL <b>01 / 02</b></div></div>
          <div className="service-content"><div className="service-label">01 — PRESENÇA LOCAL</div><h3>Seja encontrado quando o cliente procura pelo que você oferece.</h3><p>Criação ou otimização do Perfil da Empresa no Google para apresentar seu negócio com informações organizadas e profissionais na Pesquisa e no Maps.</p><ul><li><Check /> Criação ou otimização do perfil</li><li><Check /> Categorias, descrição e dados comerciais</li><li><Check /> Cadastro de produtos e serviços</li><li><Check /> Organização das fotos fornecidas</li><li><Check /> Revisão e orientação para publicação</li></ul><div className="price-row"><div><small>INVESTIMENTO DE LANÇAMENTO</small><strong>R$ 349</strong><small>Pagamento único</small></div><WhatsAppLink message="Olá! Quero contratar o serviço de Presença Local da FL.On por R$ 300." className="button button-primary">Fazer orçamento <Arrow /></WhatsAppLink></div><p className="service-note">Entrega estimada em até 7 dias úteis após o recebimento dos materiais. Inclui 30 dias de suporte para dúvidas e correções da configuração. Não inclui gestão mensal ou garantia de posição no Google.</p></div>
        </article>
        <article className="service-card landing-card">
          <div className="service-content"><div className="service-label">02 — LANDING PAGES</div><h3>Uma página profissional que apresenta seu valor e conduz à ação.</h3><p>Uma página estratégica, personalizada e responsiva para explicar seus serviços, gerar confiança e facilitar o contato com potenciais clientes.</p><ul><li><Check /> Estrutura pensada para o seu público</li><li><Check /> Textos comerciais e chamadas para ação</li><li><Check /> Design personalizado para celular e computador</li><li><Check /> Integração com WhatsApp e formulário simples, quando necessário</li><li><Check /> Publicação e testes antes da entrega</li></ul><div className="price-row"><div><small>INVESTIMENTO INICIAL</small><strong>R$ 749</strong><small>Por projeto</small></div><WhatsAppLink message="Olá! Quero um orçamento para uma Landing Page da FL.On a partir de R$ 700." className="button button-primary">Fazer orçamento <Arrow /></WhatsAppLink></div><p className="service-note">Prazo estimado de 7 a 10 dias úteis após o recebimento dos materiais. Inclui até 3 rodadas de ajustes e 30 dias de suporte. Domínio e hospedagem são contratados à parte.</p></div>
          <div className="service-art landing-art"><div className="art-topline"><span>FL.ON / SOLUÇÃO 02</span><span>WEB EXPERIENCE</span></div><div className="browser-mock"><div className="browser-top"><i /><i /><i /><span>seunegocio.com.br</span></div><div className="browser-content"><small>SUA MARCA EM DESTAQUE</small><b>Seu próximo<br /><em>grande passo.</em></b><div className="browser-lines"><i /><i /><i /></div><div className="browser-button">FALE COM A GENTE <span>↗</span></div></div></div><div className="art-footline">PÁGINAS QUE CONECTAM <b>02 / 02</b></div></div>
        </article>
      </div></section>

      <section className="process-section section-shell" id="processo"><div className="section-index">03 <span>— COMO FUNCIONA</span></div><div className="process-heading"><h2>Um processo simples.<br /><em>Uma entrega bem pensada.</em></h2><p>Você sabe o que será feito, o que precisamos de você e o que recebe ao final.</p></div><div className="process-grid"><div><b>01</b><h3>Conversa inicial</h3><p>Entendemos seu negócio e o que você precisa melhorar.</p></div><div><b>02</b><h3>Planejamento</h3><p>Organizamos as informações e definimos a melhor estrutura.</p></div><div><b>03</b><h3>Desenvolvimento</h3><p>Executamos a solução e apresentamos para sua aprovação.</p></div><div><b>04</b><h3>Entrega</h3><p>Revisamos, publicamos e orientamos os próximos passos.</p></div></div></section>

      <section className="closing-section"><div className="closing-glow" /><div className="closing-orbit" /><div className="section-shell closing-inner"><div className="section-index">FL.ON <span>— VAMOS COMEÇAR?</span></div><h2>Seu próximo cliente<br />pode estar a <em>um clique.</em></h2><p>Vamos entender o momento do seu negócio e encontrar a solução digital mais adequada para você.</p><WhatsAppLink message="Olá! Quero conversar com a FL.On sobre uma solução digital para meu negócio." className="button button-primary">Vamos conversar <Arrow /></WhatsAppLink></div></section>

      <footer className="site-footer"><div className="section-shell footer-main"><a className="footer-brand" href="#inicio"><img src="/flon-logo.png" alt="FL.On Soluções Digitais" /></a><p>Presença digital com estratégia,<br />clareza e direção.</p><div className="footer-links"><a href="#solucoes">Soluções</a><a href="#processo">Como funciona</a><a href="#sobre">Sobre</a></div><WhatsAppLink message="Olá! Quero falar com a FL.On." className="footer-contact">Fale com a FL.On <Arrow /></WhatsAppLink></div><div className="section-shell footer-bottom"><span>© {new Date().getFullYear()} FL.On Soluções Digitais. Todos os direitos reservados.</span><b>ESTRATÉGIA DIGITAL PARA NEGÓCIOS REAIS.</b></div></footer>
    </main>
  );
}
