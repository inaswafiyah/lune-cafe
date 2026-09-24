import Image from 'next/image'
import { ArrowUpRight, Camera, Clock3, Coffee, Leaf, MapPin, Phone, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ProductCard } from '@/components/ui/cards-1'
import { ShimmerButton } from '@/components/ui/shimmer-button'

const drinks = [
  { name: 'Cappuccino', note: 'A bright double shot finished with velvety milk foam.', price: '$5.25', category: 'Coffee', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=85' },
  { name: 'Caffè Latte', note: 'Silky espresso and steamed milk for an easy everyday ritual.', price: '$5.50', category: 'Coffee', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=85' },
  { name: 'Americano', note: 'Rich espresso lengthened with hot water and a clean finish.', price: '$4.25', category: 'Coffee', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85' },
  { name: 'Matcha Latte', note: 'Ceremonial matcha, oat milk, and a soft vanilla cloud.', price: '$5.75', category: 'Non-Coffee', image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=85' },
]

const reasons = [
  { icon: Coffee, number: '01', title: 'Small-batch coffee', text: 'We work with thoughtful roasters to bring out the character in every bean.' },
  { icon: Leaf, number: '02', title: 'Good, simple things', text: 'Seasonal ingredients, house-made touches, and nothing that does not belong.' },
  { icon: Sparkles, number: '03', title: 'Room to linger', text: 'A calm corner for first sips, deep work, and catching up with someone you love.' },
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-10">
          <a href="#home" className="font-serif text-2xl font-semibold tracking-tight">Luné Café</a>
          <nav className="order-3 flex w-full items-center justify-between gap-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:order-none sm:w-auto sm:gap-7 sm:text-xs" aria-label="Primary navigation">
            {['Home', 'Menu', 'About', 'Contact'].map((item) => <a key={item} className="transition-colors hover:text-accent" href={`#${item.toLowerCase()}`}>{item}</a>)}
          </nav>
          <Button asChild className="rounded-full bg-primary px-5 text-primary-foreground shadow-none hover:bg-primary/85"><a href="#menu">Order a cup <ArrowUpRight data-icon="inline-end" /></a></Button>
        </div>
      </header>

      <section id="home" className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-16 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-24">
        <div className="reveal">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-accent">Coffee, slowly made</p>
          <h1 className="max-w-xl font-serif text-5xl leading-[.96] tracking-[-0.05em] sm:text-7xl lg:text-8xl">A Little Coffee, <span className="text-accent">A Lot of Comfort</span></h1>
          <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground">A warm neighborhood café for unhurried mornings, good conversations, and the perfect cup made just for you.</p>
          <div className="mt-9 flex flex-wrap items-center gap-5"><ShimmerButton href="#menu" aria-label="View our menu"><span>View Our Menu</span><ArrowUpRight /></ShimmerButton><a href="#about" className="text-sm font-semibold underline decoration-accent/50 underline-offset-8 transition-colors hover:text-accent">Our story</a></div>
          <div className="mt-14 flex items-center gap-3 text-sm text-muted-foreground"><span className="size-2 rounded-full bg-accent" /> Open daily · 7am — 6pm</div>
        </div>
        <div className="reveal reveal-delay-1 relative min-h-[430px] overflow-hidden rounded-[2rem] bg-secondary sm:min-h-[590px]"><Image src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=90" alt="Fresh coffee being poured into a ceramic cup" fill priority className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" /><div className="absolute bottom-5 left-5 rounded-2xl bg-background/90 px-5 py-4 backdrop-blur-sm"><p className="font-serif text-lg">Made with care</p><p className="mt-1 text-xs text-muted-foreground">Since 2018 · Downtown</p></div></div>
      </section>

      <section id="menu" className="bg-secondary px-6 py-20 lg:px-10 lg:py-28"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">The good stuff</p><h2 className="font-serif text-4xl tracking-[-0.04em] sm:text-6xl">A little menu moment</h2></div><p className="max-w-xs text-sm leading-6 text-muted-foreground">Four favorites for the part of your day that deserves a pause.</p></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{drinks.map((drink, index) => <ProductCard key={drink.name} className={`reveal ${index % 3 === 1 ? 'reveal-delay-1' : ''}`} title={drink.name} category={drink.category} description={drink.note} price={drink.price} imageUrl={drink.image} href="#contact" />)}</div></div></section>

      <section id="about" className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10 lg:py-28"><div className="reveal relative min-h-[400px] overflow-hidden rounded-[2rem] bg-secondary sm:min-h-[540px]"><Image src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85" alt="Warm interior of Luné Café with tables and plants" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /><span className="absolute right-5 top-5 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Est. 2018</span></div><div className="reveal reveal-delay-1 lg:pl-10"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">A place to land</p><h2 className="max-w-lg font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">Coffee tastes better when you have nowhere else to be.</h2><p className="mt-6 max-w-lg leading-7 text-muted-foreground">Luné started with a simple idea: make a café that feels like a deep breath. We source with intention, serve with warmth, and leave plenty of room for the little rituals that make a day feel like yours.</p><Button asChild variant="outline" className="mt-8 rounded-full border-primary/20 bg-transparent px-6 hover:bg-secondary"><a href="#contact">Come say hello <ArrowUpRight data-icon="inline-end" /></a></Button></div></section>

      <section aria-labelledby="why-title" className="border-y border-border bg-background px-6 py-20 lg:px-10 lg:py-24"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">The Luné way</p><h2 id="why-title" className="font-serif text-4xl tracking-[-0.04em] sm:text-6xl">Why choose Luné Café?</h2></div><p className="max-w-xs text-sm leading-6 text-muted-foreground">Not just a coffee stop. A small, good part of your day.</p></div><div className="grid gap-5 md:grid-cols-3">{reasons.map(({ icon: Icon, number, title, text }) => <Card key={number} className="group reveal rounded-3xl border-border bg-secondary p-2 shadow-none transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-accent-foreground"><CardHeader><div className="mb-6 flex items-center justify-between"><Icon className="text-accent group-hover:text-accent-foreground" /><span className="font-serif text-3xl text-accent/60">{number}</span></div><CardTitle className="font-serif text-2xl font-medium">{title}</CardTitle><CardDescription className="leading-6 text-muted-foreground group-hover:text-accent-foreground/75">{text}</CardDescription></CardHeader></Card>)}</div></div></section>

      <section id="contact" className="bg-primary px-6 py-20 text-primary-foreground lg:px-10 lg:py-24"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-end"><div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">Drop by anytime</p><h2 className="max-w-md font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">Your new favorite corner of the neighborhood.</h2></div><div className="grid gap-8 border-t border-primary-foreground/20 pt-8 sm:grid-cols-3 sm:border-t-0 sm:pt-0"><div><Clock3 className="mb-4 text-accent" /><p className="text-sm font-semibold">Opening hours</p><p className="mt-2 text-sm leading-6 text-primary-foreground/60">Mon — Fri: 7am — 6pm<br />Sat — Sun: 8am — 5pm</p></div><div><MapPin className="mb-4 text-accent" /><p className="text-sm font-semibold">Find us</p><p className="mt-2 text-sm leading-6 text-primary-foreground/60">18 Willow Street<br />Portland, OR</p></div><div><Phone className="mb-4 text-accent" /><p className="text-sm font-semibold">Say hello</p><p className="mt-2 text-sm leading-6 text-primary-foreground/60">(503) 555-0188<br />hello@lunecafe.com</p></div></div></div><Button asChild className="mt-12 rounded-full bg-accent px-6 text-accent-foreground shadow-none hover:bg-accent/85"><a href="mailto:hello@lunecafe.com">Contact Us <ArrowUpRight data-icon="inline-end" /></a></Button></div></section>

      <footer className="bg-primary px-6 pb-8 text-primary-foreground lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-primary-foreground/20 pt-8 sm:flex-row sm:items-center sm:justify-between"><p className="font-serif text-xl">Luné Café</p><nav className="flex flex-wrap gap-5 text-sm text-primary-foreground/55" aria-label="Footer navigation">{['Home', 'Menu', 'About', 'Contact'].map((item) => <a key={item} className="transition-colors hover:text-primary-foreground" href={`#${item.toLowerCase()}`}>{item}</a>)}<a className="transition-colors hover:text-primary-foreground" href="#contact" aria-label="Luné Café on Instagram"><Camera /></a></nav><p className="text-xs text-primary-foreground/40">© 2026 Luné Café</p></div></footer>
    </main>
  )
}
