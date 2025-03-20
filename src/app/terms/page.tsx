import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import Image from "next/image";

export const metadata = {
  title: 'Terms of Service',
  description: 'Guidelines and conditions for using our platform and services responsibly.',
}

export default async function Terms() {
  const filePath = path.join(process.cwd(), 'public', 'terms.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return (
    <main className={`min-h-screen bg-bc-2 text-black`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-8">

          {/* Left column - fixed on desktop */}
          <div className="hidden lg:block lg:w-1/3 pt-12">
            <div className="sticky top-56">
              <Image
                src="/svgs/logo-red.svg"
                alt="Company Logo"
                width={200}
                height={50}
              />
              <h1 className={`mt-6 text-4xl font-extrabold`}>{metadata.title}</h1>
              <p className={`mt-2 text-md leading-tight`}>{metadata.description}</p>
            </div>
          </div>

          {/* Right column - scrollable content */}
          <div className="lg:w-2/3 py-44">
            {/* Mobile/Tablet header */}
            <div className="lg:hidden mb-8 pl-6">
              <Image
                src="/svgs/logo-red.svg"
                alt="Company Logo"
                width={100}
                height={50}
              />
              <h1 className={`mt-6 text-4xl font-extrabold`}>{metadata.title}</h1>
              <p className={`mt-2 text-lg leading-tight`}>{metadata.description}</p>
            </div>

            {/* Content */}
            <div className="shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <ReactMarkdown
                  components={{
                    h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-8 mb-4 text-bc-1" {...props} />,
                    h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mt-6 mb-3 pl-5 text-bc-1" {...props} />,
                    p: ({ node, ...props }) => <p className="text-base mb-4 pl-10" {...props} />,
                    ul: ({ node, ...props }) => <ul className="list-disc mb-4 pl-20" {...props} />,
                    li: ({ node, ...props }) => <li className="mb-2" {...props} />,
                    a: ({ node, ...props }) => (
                      <a className={`hover:underline`} {...props} />
                    ),
                  }}
                >
                  {fileContent}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}