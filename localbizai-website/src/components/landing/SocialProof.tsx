
export function SocialProof() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Built for Main Street, Not Silicon Valley
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"></th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">LocalBizAI</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Generic AI Tools</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Enterprise AI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-4 px-6 whitespace-nowrap font-medium text-gray-900">Setup time</td>
                <td className="py-4 px-6 whitespace-nowrap text-gray-600">5 minutes vs hours vs months</td>
                <td className="py-4 px-6 whitespace-nowrap text-gray-600">Hours learning each tool</td>
                <td className="py-4 px-6 whitespace-nowrap text-gray-600">Months of implementation</td>
              </tr>
              <tr>
                <td className="py-4 px-6 whitespace-nowrap font-medium text-gray-900">Target</td>
                <td className="py-4 px-6 whitespace-nowrap text-gray-600">Business owners vs tech-savvy vs enterprise</td>
                <td className="py-4 px-6 whitespace-nowrap text-gray-600">Tech-savvy individuals</td>
                <td className="py-4 px-6 whitespace-nowrap text-gray-600">Large companies with IT teams</td>
              </tr>
              <tr>
                <td className="py-4 px-6 whitespace-nowrap font-medium text-gray-900">Cost</td>
                <td className="py-4 px-6 whitespace-nowrap text-gray-600">$29-299 vs $120-600/month vs $500-5000+</td>
                <td className="py-4 px-6 whitespace-nowrap text-gray-600">$15-50 per app (need 8-12 apps)</td>
                <td className="py-4 px-6 whitespace-nowrap text-gray-600">$500-5000+</td>
              </tr>
              <tr>
                <td className="py-4 px-6 whitespace-nowrap font-medium text-gray-900">Support</td>
                <td className="py-4 px-6 whitespace-nowrap text-gray-600">Human experts vs documentation vs account managers</td>
                <td className="py-4 px-6 whitespace-nowrap text-gray-600">Documentation and forums</td>
                <td className="py-4 px-6 whitespace-nowrap text-gray-600">Dedicated account managers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
