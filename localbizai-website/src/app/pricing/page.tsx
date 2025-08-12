
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Ideal for solo entrepreneurs launching their AI journey.',
    features: [
      'Basic AI chat assistant',
      'Automated follow-ups',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    price: '$99',
    description: 'Designed for growing businesses ready to scale with AI.',
    features: [
      'Everything in Starter',
      'Financial forecasting',
      'Industry-specific tools',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: '$299',
    description: 'Tailored for established operations seeking comprehensive AI solutions.',
    features: [
      'Everything in Professional',
      'Custom AI training',
      'Compliance assistance',
      'Dedicated success manager',
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Flexible Pricing Plans for Every Business Size
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Start with a 1-week free trial of our Starter plan!
          </p>
        </div>
        <div className="isolate mx-auto mt-16 grid max_w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.name}
              className={`flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10 ${
                tierIdx === 1 ? 'lg:z-10 lg:scale-105' : ''
              }`}
            >
              <div>
                <h3 id={tier.name} className="text-base font-semibold leading-7 text-indigo-600">
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">{tier.price}</span>
                  <span className="text-base font-semibold leading-7 text-gray-600">/month</span>
                </div>
                <p className="mt-6 text-base leading-7 text-gray-600">{tier.description}</p>
                <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#"
                aria-describedby={tier.name}
                className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
