import { Separator } from '@/components/ui/separator';
import { ExternalLinkIcon } from 'lucide-react';

interface Resource {
  sectionTitle: string;
  sectionContent: {
    title: string;
    listType: 'ol' | 'ul';
    listItems: {
      title: string;
      href: string;
    }[];
  }[];
}

const resources: Resource[] = [
  {
    sectionTitle: 'Community Foundations',
    sectionContent: [
      {
        title: 'Getting Started',
        listType: 'ol',
        listItems: [
          {
            title: 'The Art of Community (Jono Bacon) — free book',
            href: 'https://www.jonobacon.org/books/the-art-of-community/',
          },
          {
            title: 'Building Community by Richard Millington',
            href: 'https://www.feverbee.com/building-community/',
          },
          {
            title: 'Get Together — How to Build a Community (GitBook, free)',
            href: 'https://www.gettogether.community/',
          },
        ],
      },
      {
        title: 'Strategy & Psychology',
        listType: 'ol',
        listItems: [
          {
            title: 'FeverBee Community Management Resources',
            href: 'https://www.feverbee.com/resources/',
          },
          {
            title: 'CMX — The SPACES Model for community value',
            href: 'https://cmx.io/the-spaces-model/',
          },
          {
            title: 'Understanding the Community Lifecycle',
            href: 'https://blog.feverbee.com/2011/10/the-community-lifecycle.html',
          },
        ],
      },
    ],
  },
  {
    sectionTitle: 'Tools & Platforms',
    sectionContent: [
      {
        title: 'Community Platforms',
        listType: 'ul',
        listItems: [
          {
            title: 'Discord — chat-first communities',
            href: 'https://discord.com/',
          },
          {
            title: 'Circle — community platform for creators',
            href: 'https://circle.so/',
          },
          {
            title: 'Discourse — modern forum software',
            href: 'https://www.discourse.org/',
          },
        ],
      },
      {
        title: 'Events & Meetups',
        listType: 'ul',
        listItems: [
          {
            title: 'Luma — host events and gatherings',
            href: 'https://lu.ma/',
          },
          {
            title: 'Meetup — find and build local communities',
            href: 'https://www.meetup.com/',
          },
        ],
      },
      {
        title: 'Communities about Community',
        listType: 'ul',
        listItems: [
          {
            title: 'CMX Hub Community',
            href: 'https://cmx.io/',
          },
          {
            title: 'FeverBee Community Management Forum',
            href: 'https://www.feverbee.com/',
          },
        ],
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <div className="font-light text-muted-foreground text-lg">
        <h2 className="text-4xl font-bold text-primary">Resources</h2>
        <p>Here are some useful resources I&apos;ve found while building communities.</p>
        <p>I&apos;ll keep updating these as I discover more.</p>
      </div>

      {resources.map((resource: Resource, index: number) => (
        <section key={index} className="font-light space-y-4 text-lg">
          <h3 className="text-2xl font-bold">{resource.sectionTitle}</h3>

          <Separator className="-mt-2" />

          {resource.sectionContent.map((sectionContent, index) => (
            <section key={index} className="font-light space-y-2">
              <h4 className="text-xl font-bold">{sectionContent.title}</h4>

              {sectionContent.listType === 'ol' ? (
                <ol className="list-decimal list-outside pl-6 space-y-2 my-1">
                  {sectionContent.listItems.map((listItem, index) => (
                    <li key={index}>
                      <a
                        href={listItem.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-500 underline-offset-5"
                      >
                        {listItem.title}{' '}
                        <sup>
                          <ExternalLinkIcon className="size-3 inline" />
                        </sup>
                      </a>
                    </li>
                  ))}
                </ol>
              ) : (
                <ul className="list-disc list-outside pl-6 space-y-2 my-1">
                  {sectionContent.listItems.map((listItem, index) => (
                    <li key={index}>
                      <a
                        href={listItem.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-500 underline-offset-5"
                      >
                        {listItem.title}{' '}
                        <sup>
                          <ExternalLinkIcon className="size-3 inline" />
                        </sup>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </section>
      ))}
    </>
  );
}
