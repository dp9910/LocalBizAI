
import Link from 'next/link';
// import Image from 'next/image'; // Removed Image import

const posts = [
  {
    slug: 'the-ai-implementation-crisis',
    title: 'The AI Implementation Crisis: Why Small Businesses Are Failing at AI Adoption',
    description: 'An in-depth analysis of why 97% of small businesses fail at AI implementation and how to avoid the common pitfalls that lead to costly failures.',
    featured: true,
  },
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
    <div className="bg-gradient-to-b from-green-50 via-white to-green-50 py-24 sm:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-4">
            Latest Insights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            From the 
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Blog</span>
          </h2>
          <p className="text-xl text-gray-600">
            Learn how to grow your business with our expert advice and real-world insights.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, index) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden block cursor-pointer ${
                post.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <article>
                <div className={`relative w-full ${post.featured ? 'h-64' : 'h-48'} bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center`}>
                  <div className="text-green-600 font-semibold text-lg">
                    {post.featured ? '📊 Featured Article' : '📝 Blog Post'}
                  </div>
                </div>
                <div className="p-8">
                  <div className="relative">
                    {post.featured && (
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
                        Featured
                      </div>
                    )}
                    <h3 className={`${post.featured ? 'text-2xl' : 'text-xl'} font-bold leading-tight text-gray-900 group-hover:text-green-600 transition-colors duration-300 mb-4`}>
                      {post.title}
                    </h3>
                    <p className={`${post.featured ? 'text-lg' : 'text-base'} leading-relaxed text-gray-600 mb-4`}>
                      {post.description}
                    </p>
                    <div className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors text-sm font-semibold">
                      Read more →
                    </div>
                  </div>
                </div>
                
                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-200 transition-all duration-300"></div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
