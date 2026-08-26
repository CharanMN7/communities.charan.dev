import { loadBlogPosts } from '@inkform/framework/content';
import { BlogMagazineLayout } from '@/components/blog/blog-magazine-layout';
import { siteWideBreakoutClass, siteWideInnerClass } from '@/lib/site-layout';

export const metadata = {
  title: 'Blog | Communities with Charan',
  description: 'Community notes from the ground up. By a builder.',
};

export default function BlogIndexPage() {
  const posts = loadBlogPosts();

  return (
    <div className={siteWideBreakoutClass}>
      <div className={siteWideInnerClass}>
        <div className="space-y-8">
          <div className="font-light text-muted-foreground text-lg">
            <h2 className="text-4xl font-bold text-primary">Blog</h2>
            <p>Community notes from the ground up. By a builder.</p>
          </div>

          <BlogMagazineLayout posts={posts} />
        </div>
      </div>
    </div>
  );
}
