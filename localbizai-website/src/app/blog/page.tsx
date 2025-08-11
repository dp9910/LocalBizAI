
import Link from 'next/link';

const posts = [
  {
    slug: 'the-small-business-ai-implementation-guide',
    title: 'The Small Business AI Implementation Guide',
    description: 'A step-by-step guide to implementing AI in your small business.',
  },
  {
    slug: 'how-to-avoid-the-485-ai-repair-bill',
    title: 'How to Avoid the $485 AI Repair Bill',
    description: 'Learn how to avoid costly mistakes when implementing AI.',
  },
  {
    slug: 'ai-tool-selection-framework-for-non-tech-owners',
    title: 'AI Tool Selection Framework for Non-Tech Owners',
    description: 'A simple framework for choosing the right AI tools for your business.',
  },
  {
    slug: 'solo-economy-why-independent-workers-need-integrated-ai',
    title: 'Solo Economy: Why Independent Workers Need Integrated AI',
    description: 'How integrated AI can help solo workers save time and money.',
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
