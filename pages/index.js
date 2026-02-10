import Head from 'next/head'
import Hero from './sections/Hero'
import CompanyGrid from './sections/CompanyGrid'
import ComparisonTable from './sections/ComparisonTable'
import Guide from './sections/Guide'
import Reviews from './sections/Reviews'
import FAQ from './sections/FAQ'
import TrustSignals from './sections/TrustSignals'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Top 10 Best Plumbing Companies in California (2025) | Expert Rankings</title>
        <meta name="description" content="Expert-reviewed ranking of California's best plumbers. Compare licensed, insured professionals with 24/7 emergency service. Real customer reviews & ratings from Yelp, Google, and Angi." />
        <meta name="keywords" content="best plumbing companies California, top rated plumbers California 2025, emergency plumber California, residential plumbing services, commercial plumbing California" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen bg-gray-50">
        <Hero />
        <TrustSignals />
        <CompanyGrid />
        <ComparisonTable />
        <Guide />
        <Reviews />
        <FAQ />
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 California Plumbing Guide. Independent rankings based on verified customer reviews.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Disclaimer: We may receive compensation from some companies listed. Rankings are based on independent research.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
