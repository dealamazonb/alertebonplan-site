import Image from "next/image";

const categories = [
  "Tous", "Jeux vidéo", "Informatique", "Smartphones", "TV & Audio",
  "Maison", "Cuisine", "Électroménager", "Bricolage", "Jouets", "Mode", "Beauté",
];

const deals = [
  {
    title: "Apple AirPods Pro 2 avec boîtier MagSafe",
    category: "TV & Audio",
    currentPrice: "169,99 €",
    originalPrice: "279,99 €",
    discount: "-39 %",
    image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SL1500_.jpg",
  },
  {
    title: "SSD NVMe 2 To haute performance",
    category: "Informatique",
    currentPrice: "94,99 €",
    originalPrice: "149,99 €",
    discount: "-36 %",
    image: "https://m.media-amazon.com/images/I/71p6SD4x+lL._AC_SL1500_.jpg",
  },
  {
    title: "Manette sans fil compatible PC et console",
    category: "Jeux vidéo",
    currentPrice: "39,99 €",
    originalPrice: "59,99 €",
    discount: "-33 %",
    image: "https://m.media-amazon.com/images/I/61O9tWR6WDS._AC_SL1500_.jpg",
  },
  {
    title: "Robot aspirateur connecté",
    category: "Maison",
    currentPrice: "229,99 €",
    originalPrice: "349,99 €",
    discount: "-34 %",
    image: "https://m.media-amazon.com/images/I/71yY0bE0x-L._AC_SL1500_.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="brand">
            <Image src="/logo-alertebonplan.png" alt="Logo AlerteBonPlan" width={84} height={84} priority />
            <div>
              <strong>AlerteBonPlan</strong>
              <span>Les meilleures promos Amazon, en temps réel</span>
            </div>
          </a>
          <nav className="header-actions">
            <a className="ghost-button" href="#categories">Catégories</a>
            <a className="telegram-button" href="#">Rejoindre Telegram</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Bons plans vérifiés</span>
            <h1>Les meilleurs prix,<span> détectés à l’instant.</span></h1>
            <p>
              Retrouvez les promotions Amazon publiées en temps réel,
              classées par catégorie et accessibles en un clic.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#deals">Voir les bons plans</a>
              <a className="secondary-button" href="#">Telegram</a>
            </div>
            <div className="stats">
              <div><strong>100 %</strong><span>automatisé</span></div>
              <div><strong>24/7</strong><span>surveillance</span></div>
              <div><strong>Amazon</strong><span>liens directs</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="logo-orbit" />
            <Image src="/logo-alertebonplan.png" alt="AlerteBonPlan" width={560} height={560} priority className="hero-logo" />
          </div>
        </div>
      </section>

      <section className="search-section">
        <div className="container">
          <div className="search-panel">
            <label htmlFor="search">Rechercher un bon plan</label>
            <div className="search-row">
              <input id="search" type="search" placeholder="Ex. AirPods, SSD, PS5, aspirateur…" />
              <button type="button">Rechercher</button>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="categories-section">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Navigation rapide</span><h2>Catégories</h2></div>
            <p>Filtre les offres selon ce que tu recherches.</p>
          </div>
          <div className="category-list">
            {categories.map((category, index) => (
              <button type="button" className={index === 0 ? "category active" : "category"} key={category}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="deals" className="deals-section">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Mis à jour automatiquement</span><h2>Derniers bons plans</h2></div>
            <a href="#" className="see-all">Voir toutes les offres →</a>
          </div>
          <div className="deals-grid">
            {deals.map((deal) => (
              <article className="deal-card" key={deal.title}>
                <div className="deal-image-wrap">
                  <span className="discount-badge">{deal.discount}</span>
                  <img src={deal.image} alt={deal.title} className="deal-image" />
                </div>
                <div className="deal-content">
                  <div className="deal-meta"><span>{deal.category}</span><span className="verified">Vérifié</span></div>
                  <h3>{deal.title}</h3>
                  <div className="price-row"><strong>{deal.currentPrice}</strong><span>{deal.originalPrice}</span></div>
                  <a className="amazon-button" href="#">Voir l’offre Amazon</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="telegram-cta">
        <div className="container telegram-card">
          <div>
            <span className="eyebrow">Ne rate aucune baisse de prix</span>
            <h2>Rejoins AlerteBonPlan sur Telegram</h2>
            <p>Reçois les meilleures promotions directement sur ton téléphone, dès leur détection.</p>
          </div>
          <a href="#" className="telegram-button large">Rejoindre le canal</a>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <div className="footer-brand">
            <Image src="/logo-alertebonplan.png" alt="" width={58} height={58} />
            <div><strong>AlerteBonPlan</strong><span>Promotions Amazon en temps réel</span></div>
          </div>
          <p>Certains liens peuvent être affiliés. Le prix reste identique pour l’acheteur.</p>
        </div>
      </footer>
    </main>
  );
}
