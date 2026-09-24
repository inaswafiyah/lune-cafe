import Image from 'next/image'
import { ArrowUpRight, Camera, Clock3, MapPin, Menu as MenuIcon, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const drinks = [
  {
    name: 'Velvet Latte',
    description: 'Silky espresso, steamed milk, and a little everyday luxury.',
    price: '$5.50',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Luné Cold Brew',
    description: 'Slow-steeped for a smooth, chocolatey finish over ice.',
    price: '$4.75',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Honey Cappuccino',
    description: 'A bright double shot finished with local honey foam.',
    price: '$5.25',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Matcha Cloud',
    description: 'Ceremonial matcha, oat milk, and a soft vanilla cloud.',
    price: '$5.75',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Cinnamon Mocha',
    description: 'Rich cocoa, espresso, and cinnamon warmth in every sip.',
    price: '$5.95',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Citrus Tonic',
    description: 'Espresso, sparkling tonic, and a fresh twist of orange.',
    price: '$4.95',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8f5ed] text-[#3d2b20]">
      <header className="border-b border-[#3d2b20]/10 bg-[#f8f5ed]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#home" className="font-serif text-2xl font-semibold tracking-tight text-[#3d2b20]">Luné Café</a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#3d2b20]/70 md:flex" aria-label="Primary navigation">
            <a className="transition-colors hover:text-[#71816b]" href="#home">Home</a>
            <a className="transition-colors hover:text-[#71816b]" href="#menu">Menu</a>
            <a className="transition-colors hover:text-[#71816b]" href="#about">About</a>
            <a className="transition-colors hover:text-[#71816b]" href="#contact">Contact</a>
          </nav>
          <Button asChild className="hidden whitespace-nowrap rounded-full bg-[#3d2b20] px-5 text-sm text-[#f8f5ed] shadow-none hover:bg-[#5a4030] md:inline-flex">
            <a href="#menu">Order a cup <ArrowUpRight data-icon="inline-end" /></a>
          </Button>
          <button className="rounded-full p-2 text-[#3d2b20] md:hidden" aria-label="Open navigation menu"><MenuIcon /></button>
        </div>
      </header>

      <section id="home" className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-24">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#71816b]">Coffee, slowly made</p>
          <h1 className="max-w-xl font-serif text-5xl leading-[1.02] tracking-[-0.04em] text-[#3d2b20] sm:text-6xl lg:text-8xl">A Little Coffee, <span className="text-[#71816b]">A Lot of Comfort</span></h1>
          <p className="mt-7 max-w-md text-base leading-7 text-[#3d2b20]/65">A warm neighborhood café for unhurried mornings, good conversations, and the perfect cup made just for you.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button asChild className="whitespace-nowrap rounded-full bg-[#71816b] px-6 text-[#f8f5ed] shadow-none hover:bg-[#5d6d58]"><a href="#menu">View Our Menu <ArrowUpRight data-icon="inline-end" /></a></Button>
            <a href="#about" className="text-sm font-semibold text-[#3d2b20] underline decoration-[#71816b]/50 underline-offset-8 transition-colors hover:text-[#71816b]">Our story</a>
          </div>
          <div className="mt-14 flex items-center gap-3 text-sm text-[#3d2b20]/55"><span className="size-2 rounded-full bg-[#71816b]" /> Open daily · 7am — 6pm</div>
        </div>
        <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] bg-[#d9d2c3] sm:min-h-[600px]">
          <Image src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=90" alt="Fresh coffee being poured into a ceramic cup" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          <div className="absolute bottom-5 left-5 rounded-2xl bg-[#f8f5ed]/90 px-5 py-4 backdrop-blur-sm"><p className="font-serif text-lg">Made with care</p><p className="mt-1 text-xs text-[#3d2b20]/60">Since 2018 · Downtown</p></div>
        </div>
      </section>

      <section id="menu" className="bg-[#eee9de] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#71816b]">The good stuff</p><h2 className="font-serif text-4xl tracking-[-0.03em] sm:text-5xl">Made for your moment</h2></div><p className="max-w-xs text-sm leading-6 text-[#3d2b20]/60">Thoughtful drinks, seasonal ingredients, and familiar favorites with a Luné twist.</p></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {drinks.map((drink) => <Card key={drink.name} className="group overflow-hidden rounded-3xl border-[#3d2b20]/10 bg-[#f8f5ed] py-0 shadow-none transition-transform duration-300 hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden"><Image src={drink.image} alt={drink.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" /></div>
              <CardHeader className="gap-2 px-6 pt-6"><div className="flex items-start justify-between gap-4"><CardTitle className="font-serif text-2xl font-medium">{drink.name}</CardTitle><span className="text-sm font-semibold text-[#71816b]">{drink.price}</span></div><CardDescription className="text-sm leading-6 text-[#3d2b20]/60">{drink.description}</CardDescription></CardHeader>
              <CardContent className="px-6 pb-6"><CardFooter className="border-t border-[#3d2b20]/10 px-0 pt-4"><span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d2b20]/45">Luné favorite</span></CardFooter></CardContent>
            </Card>)}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-28">
        <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] bg-[#d9d2c3]"><Image src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85" alt="Warm interior of Luné Café with tables and plants" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></div>
        <div className="lg:pl-10"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#71816b]">A place to land</p><h2 className="max-w-lg font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">Coffee tastes better when you have nowhere else to be.</h2><p className="mt-6 max-w-lg leading-7 text-[#3d2b20]/65">Luné started with a simple idea: make a café that feels like a deep breath. We source with intention, serve with warmth, and leave plenty of room for the little rituals that make a day feel like yours.</p><Button asChild variant="outline" className="mt-8 whitespace-nowrap rounded-full border-[#3d2b20]/20 bg-transparent px-6 text-[#3d2b20] hover:bg-[#eee9de]"><a href="#contact">Come say hello <ArrowUpRight data-icon="inline-end" /></a></Button></div>
      </section>

      <section id="contact" className="bg-[#3d2b20] px-6 py-20 text-[#f8f5ed] lg:px-10 lg:py-24"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-end"><div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#b8c5ae]">Drop by anytime</p><h2 className="max-w-md font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">Your new favorite corner of the neighborhood.</h2></div><div className="grid gap-8 border-t border-[#f8f5ed]/20 pt-8 sm:grid-cols-3 sm:border-t-0 sm:pt-0"><div><Clock3 className="mb-4 text-[#b8c5ae]" /><p className="text-sm font-semibold">Opening hours</p><p className="mt-2 text-sm leading-6 text-[#f8f5ed]/60">Mon — Fri: 7am — 6pm<br />Sat — Sun: 8am — 5pm</p></div><div><MapPin className="mb-4 text-[#b8c5ae]" /><p className="text-sm font-semibold">Find us</p><p className="mt-2 text-sm leading-6 text-[#f8f5ed]/60">18 Willow Street<br />Portland, OR</p></div><div><Phone className="mb-4 text-[#b8c5ae]" /><p className="text-sm font-semibold">Say hello</p><p className="mt-2 text-sm leading-6 text-[#f8f5ed]/60">(503) 555-0188<br />hello@lunecafe.com</p></div></div></div><Button asChild className="mt-12 whitespace-nowrap rounded-full bg-[#b8c5ae] px-6 text-[#3d2b20] shadow-none hover:bg-[#d2dccb]"><a href="mailto:hello@lunecafe.com">Contact Us <ArrowUpRight data-icon="inline-end" /></a></Button></div></section>

      <footer className="bg-[#3d2b20] px-6 pb-8 text-[#f8f5ed] lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-[#f8f5ed]/20 pt-8 sm:flex-row sm:items-center sm:justify-between"><p className="font-serif text-xl">Luné Café</p><nav className="flex flex-wrap gap-5 text-sm text-[#f8f5ed]/55" aria-label="Footer navigation"><a className="transition-colors hover:text-[#f8f5ed]" href="#home">Home</a><a className="transition-colors hover:text-[#f8f5ed]" href="#menu">Menu</a><a className="transition-colors hover:text-[#f8f5ed]" href="#about">About</a><a className="transition-colors hover:text-[#f8f5ed]" href="#contact">Contact</a><a className="transition-colors hover:text-[#f8f5ed]" href="#contact" aria-label="Luné Café on Instagram"><Camera /></a></nav><p className="text-xs text-[#f8f5ed]/40">© 2025 Luné Café</p></div></footer>
    </main>
  )
}
