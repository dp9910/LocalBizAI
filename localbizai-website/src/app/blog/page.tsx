
import Link from 'next/link';
// import Image from 'next/image'; // Removed Image import

const posts = [
  {
    slug: 'the-small-business-ai-implementation-guide',
    title: 'The Small Business AI Implementation Guide',
    description: 'A step-by-step guide to implementing AI in your small business.',
    // image: '/blog-placeholder-1.jpg',
  },
  {
    slug: 'how-to-avoid-the-485-ai-repair-bill',
    title: 'How to Avoid the $485 AI Repair Bill',
    description: 'Learn how to avoid costly mistakes when implementing AI.',
    // image: '/blog-placeholder-2.jpg',
  },
  {
    slug: 'ai-tool-selection-framework-for-non-tech-owners',
    title: 'AI Tool Selection Framework for Non-Tech Owners',
    description: 'A simple framework for choosing the right AI tools for your business.',
    // image: '/blog-placeholder-3.jpg',
  },
  {
    slug: 'solo-economy-why-independent-workers-need-integrated-ai',
    title: 'Solo Economy: Why Independent Workers Need Integrated AI',
    description: 'How integrated AI can help solo workers save time and money.',
    // image: '/blog-placeholder-4.jpg',
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
            <article key={post.slug} className="flex flex-col items-start justify-between rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 font-semibold">
                {/* Placeholder for image */}
                No Image
              </div>
              <div className="p-6">
                <div className="group relative">
                  <h3 className="mt-3 text-xl font-semibold leading-7 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-base leading-6 text-gray-600">{post.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
