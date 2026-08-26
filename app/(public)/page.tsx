import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa6';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const carouselImages = [
  {
    id: 'comm_1',
    src: 'https://placehold.co/600x600/1a1a2e/e94560?text=Hi!+I%27m+Charan',
    alt: 'Placeholder slide introducing Charan and the Communities with Charan journey.',
  },
  {
    id: 'comm_2',
    src: 'https://placehold.co/600x600/16213e/0f3460?text=Building+Communities',
    alt: 'Placeholder slide about building and growing real communities.',
  },
  {
    id: 'comm_3',
    src: 'https://placehold.co/600x600/0f3460/533483?text=People+%26+Spaces',
    alt: 'Placeholder slide about exploring communities, people, and shared spaces.',
  },
  {
    id: 'comm_4',
    src: 'https://placehold.co/600x600/533483/e94560?text=Learning+Out+Loud',
    alt: 'Placeholder slide about documenting the community-building process publicly.',
  },
  {
    id: 'comm_5',
    src: 'https://placehold.co/600x600/1a1a2e/0f3460?text=Blog+%26+Projects',
    alt: 'Placeholder slide about writing blog posts and building community projects.',
  },
  {
    id: 'comm_6',
    src: 'https://placehold.co/600x600/16213e/e94560?text=Videos+Too',
    alt: 'Placeholder slide about creating videos alongside written notes.',
  },
  {
    id: 'comm_7',
    src: 'https://placehold.co/600x600/0f3460/533483?text=Follow+Along',
    alt: 'Placeholder slide inviting visitors to follow along on the communities journey.',
  },
];

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-4 md:gap-6">
        <Badge variant="outline" className="py-1 px-2 rounded-full border-yellow-500/20 bg-yellow-500/10">
          <div className="animate-pulse size-2 rounded-full bg-yellow-500 mr-1"></div>
          <span className="text-yellow-500">Building in public...</span>
        </Badge>
        <h2 className="text-4xl md:text-6xl font-bold">
          Exploring
          <br />
          Communities
        </h2>
        <p className="sr-only">
          Communities with Charan is a website for community notes, projects, videos, courses, guides, tutorials, and more. Created by
          Charan Manikanta Nalla, and powered by devsForFun studio.
        </p>
        <p className="text-lg md:text-2xl font-light text-muted-foreground">
          I&apos;m documenting my journey of building and growing communities — from first principles to real spaces. Expect notes, small projects,
          and videos made while learning out loud.
        </p>
        <p className="text-lg md:text-xl font-light italic text-muted-foreground">- Charan Manikanta Nalla</p>
        <div className="flex gap-2">
          <Button size="lg" variant="outline" asChild>
            <Link href="https://instagram.com/communities.charan.dev" target="_blank">
              <FaInstagram />
              <span className="sr-only">Instagram username:</span> communities.charan.dev
            </Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="/blog">
              Visit Blog <ArrowRight />
            </Link>
          </Button>
        </div>

        <p className="inline-flex text-muted-foreground font-light items-center gap-1">
          See what this is about <ArrowDown className="size-5" />
        </p>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-sm text-center text-muted-foreground font-medium uppercase tracking-wider">INTRO</h2>

        <Carousel
          opts={{
            align: 'start',
            loop: false,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4 py-4">
            {carouselImages.map((image) => (
              <CarouselItem
                key={image.id}
                className="pl-2 md:pl-4 basis-3/4 sm:basis-1/2 md:basis-2/5 lg:basis-1/3"
              >
                <div className="group bg-white dark:bg-zinc-100 p-2 pb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:rotate-1 border border-border/20">
                  <div className="relative aspect-square overflow-hidden bg-zinc-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-2 mt-4">
            <CarouselPrevious className="static translate-y-0 border-amber-500/20 hover:bg-amber-500/10 hover:border-amber-500/40" />
            <CarouselNext className="static translate-y-0 border-amber-500/20 hover:bg-amber-500/10 hover:border-amber-500/40" />
          </div>
        </Carousel>
      </section>
    </>
  );
}
