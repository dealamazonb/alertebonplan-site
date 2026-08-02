import Image from "next/image";
import DealsExplorer, { type Deal } from "./DealsExplorer";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const TELEGRAM_URL = "#";

async function getDeals(): Promise<Deal[]> {
  const { data, error } = await supabase
    .from("deals")
    .select(
      "id,title,current_price,original_price,discount,image_url,affiliate_url,category,price_source,verification_label,published_at"
    )
    .eq("is_active", true)
    .order("published_at", { ascending: false })
    .limit(100);

  if (error) {
    console.error("Erreur Supabase :", error.message);
    return [];
  }

  return (data ?? []) as Deal[];
}

export default async function Home() {
  const deals = await getDeals();

  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="brand">
            <Image
              src="/logo-alertebonplan.png"
              alt="Logo AlerteBonPlan"
              width={84}
              height={84}
              priority
            />
            <div>
              <strong>AlerteBonPlan</strong>
              <span>Les meilleures promos Amazon, en temps réel</span>
            </div>
          </a>

          <nav className="header-actions">
            <a className="ghost-button" href="#categories">
              Catégories
            </a>
            <a
              className="telegram-button"
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              Rejoindre Telegram
            </a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Bons plans vérifiés</span>
            <h1>
              Les meilleurs prix,
              <span> détectés à l’instant.</span>
            </h1>
            <p>
              Retrouvez les promotions Amazon publiées en temps réel,
              classées par catégorie et accessibles en un clic.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#deals">
                Voir les bons plans
              </a>
              <a
                className="secondary-button"
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
              >
                Telegram
              </a>
            </div>

            <div className="stats">
              <div>
                <strong>{deals.length}</strong>
                <span>offres actives</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>surveillance</span>
              </div>
              <div>
                <strong>Amazon</strong>
                <span>liens directs</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="logo-orbit" />
            <Image
              src="/logo-alertebonplan.png"
              alt="AlerteBonPlan"
              width={560}
              height={560}
              priority
              className="hero-logo"
            />
          </div>
        </div>
      </section>

      <DealsExplorer deals={deals} />

      <section className="telegram-cta">
        <div className="container telegram-card">
          <div>
            <span className="eyebrow">
              Ne rate aucune baisse de prix
            </span>
            <h2>Rejoins AlerteBonPlan sur Telegram</h2>
            <p>
              Reçois les meilleures promotions directement sur ton
              téléphone, dès leur détection.
            </p>
          </div>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="telegram-button large"
          >
            Rejoindre le canal
          </a>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <div className="footer-brand">
            <Image
              src="/logo-alertebonplan.png"
              alt=""
              width={58}
              height={58}
            />
            <div>
              <strong>AlerteBonPlan</strong>
              <span>Promotions Amazon en temps réel</span>
            </div>
          </div>

          <p>
            Certains liens peuvent être affiliés. Le prix reste
            identique pour l’acheteur.
          </p>
        </div>
      </footer>
    </main>
  );
}

