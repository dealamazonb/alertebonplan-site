"use client";

import { useMemo, useState } from "react";

export type Deal = {
  id: number;
  title: string;
  current_price: string;
  original_price: string | null;
  discount: string | null;
  image_url: string | null;
  affiliate_url: string;
  category: string;
  price_source: string | null;
  verification_label: string | null;
  published_at: string;
};

const categories = [
  "Tous",
  "Jeux vidéo",
  "Informatique",
  "Smartphones",
  "TV & Audio",
  "Maison",
  "Cuisine",
  "Électroménager",
  "Bricolage",
  "Jouets",
  "Mode",
  "Beauté",
  "Autres",
];

type DealsExplorerProps = {
  deals: Deal[];
};

export default function DealsExplorer({ deals }: DealsExplorerProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredDeals = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return deals.filter((deal) => {
      const categoryMatches =
        activeCategory === "Tous" || deal.category === activeCategory;

      const queryMatches =
        !normalizedQuery ||
        deal.title.toLowerCase().includes(normalizedQuery) ||
        deal.category.toLowerCase().includes(normalizedQuery);

      return categoryMatches && queryMatches;
    });
  }, [activeCategory, deals, query]);

  return (
    <>
      <section className="search-section">
        <div className="container">
          <div className="search-panel">
            <label htmlFor="search">Rechercher un bon plan</label>
            <div className="search-row">
              <input
                id="search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Ex. AirPods, SSD, PS5, aspirateur…"
              />
              <button type="button" onClick={() => setQuery(query.trim())}>
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="categories-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Navigation rapide</span>
              <h2>Catégories</h2>
            </div>
            <p>Filtre les offres selon ce que tu recherches.</p>
          </div>

          <div className="category-list">
            {categories.map((category) => (
              <button
                type="button"
                className={
                  activeCategory === category
                    ? "category active"
                    : "category"
                }
                key={category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="deals" className="deals-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Mis à jour automatiquement</span>
              <h2>Derniers bons plans</h2>
            </div>
            <span className="see-all">
              {filteredDeals.length} offre
              {filteredDeals.length > 1 ? "s" : ""}
            </span>
          </div>

          {filteredDeals.length > 0 ? (
            <div className="deals-grid">
              {filteredDeals.map((deal) => {
                const verified = deal.price_source !== "fallback";

                return (
                  <article className="deal-card" key={deal.id}>
                    <div className="deal-image-wrap">
                      {deal.discount ? (
                        <span className="discount-badge">
                          {deal.discount}
                        </span>
                      ) : null}

                      {deal.image_url ? (
                        <img
                          src={deal.image_url}
                          alt={deal.title}
                          className="deal-image"
                          loading="lazy"
                        />
                      ) : (
                        <div className="deal-image-fallback">
                          Image indisponible
                        </div>
                      )}
                    </div>

                    <div className="deal-content">
                      <div className="deal-meta">
                        <span>{deal.category || "Autres"}</span>
                        <span className={verified ? "verified" : "fallback"}>
                          {verified ? "Vérifié" : "Prix détecté"}
                        </span>
                      </div>

                      <h3>{deal.title}</h3>

                      <div className="price-row">
                        <strong>{deal.current_price}</strong>
                        {deal.original_price ? (
                          <span>{deal.original_price}</span>
                        ) : null}
                      </div>

                      <a
                        className="amazon-button"
                        href={deal.affiliate_url}
                        target="_blank"
                        rel="nofollow sponsored noreferrer"
                      >
                        Voir l’offre Amazon
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="empty-state">
              <strong>Aucun bon plan trouvé</strong>
              <p>
                Modifie ta recherche ou sélectionne une autre catégorie.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
