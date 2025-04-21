import Image from "next/image"
import { notFound } from "next/navigation"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Define article data (in a real app, this would likely come from a database or API)
const articles = [
  {
    id: "what-is-hiv",
    title: "What is HIV?",
    author: "Hazel",
    date: "April 15, 2025",
    imageUrl: "/images/what-is-hiv.jpg",
    content: `
      **Human Immunodeficiency Virus,** widely recognized as **HIV** attacks and weakens the immune system that is known to be transmitted through unprotected sexual contact, sharing contaminated needles or syringes. HIV can also spread by bodily fluids such as blood, sperm, vaginal secretions, and breast milk, and from an HIV-positive mother to her child during pregnancy, childbirth.

      Despite further advancements, there is still no cure that is 100% for HIV; it can only be treated with competent and certain medical care, particularly medicines and therapies such as Antiretroviral Therapy (ART). These operations help control and maintain good health, preventing the virus from getting worse. Encourage people that they can still live a normal life by pushing them to do what they want, exercise, talk to people, and live positively.
      
      Once a person has contracted the virus and doesn't take medical care seriously, they are most likely the ones that may develop another virus known as **Acquired Immunodeficiency Syndrome**, or **AIDS** which is a severe case of HIV. This is why the World Health Organization encourages people to have themselves tested especially those who are at risk of acquiring HIV or AIDS to be able to seek effective prevention and avoid making it worse.
    `,
    source: "https://www.hiv.gov/hiv-basics/overview/about-hiv-and-aids/what-are-hiv-and-aids"
  },
  {
    id: "hiv-data",
    title: "Latest Data about HIV",
    author: "Hazel",
    date: "April 18, 2025",
    imageUrl: "/api/placeholder/1200/400",
    content: `Content for Latest Data about HIV article will go here.`
  }
]

const article = {
    id: "what-is-hiv",
    title: "What is HIV?",
    author: "Hazel",
    date: "April 15, 2025",
    imageUrl: "/images/what-is-hiv.jpg",
    content: `
      **Human Immunodeficiency Virus,** widely recognized as **HIV** attacks and weakens the immune system that is known to be transmitted through unprotected sexual contact, sharing contaminated needles or syringes. HIV can also spread by bodily fluids such as blood, sperm, vaginal secretions, and breast milk, and from an HIV-positive mother to her child during pregnancy, childbirth.

      Despite further advancements, there is still no cure that is 100% for HIV; it can only be treated with competent and certain medical care, particularly medicines and therapies such as Antiretroviral Therapy (ART). These operations help control and maintain good health, preventing the virus from getting worse. Encourage people that they can still live a normal life by pushing them to do what they want, exercise, talk to people, and live positively.
      
      Once a person has contracted the virus and doesn't take medical care seriously, they are most likely the ones that may develop another virus known as **Acquired Immunodeficiency Syndrome**, or **AIDS** which is a severe case of HIV. This is why the World Health Organization encourages people to have themselves tested especially those who are at risk of acquiring HIV or AIDS to be able to seek effective prevention and avoid making it worse.
    `,
    source: "https://www.hiv.gov/hiv-basics/overview/about-hiv-and-aids/what-are-hiv-and-aids"
  };

export default function ArticlePage({ params }: any) {
//   // Find the article by ID
//   const articleId = parseInt(params.id, 10)
//   const article = articles.find(a => a.id === articleId)

//   // If article doesn't exist, return 404
//   if (!article) {
//     notFound()
//   }

  return (
    <main className="min-h-screen">
      <div className="bg-bc-1">
        <NavBar />
      </div>
      
      
      {/* Banner Image */}
      <div className="relative w-full h-64 md:h-80">
        <Image 
          src={`${basePath}${article.imageUrl}`}
          alt={article.title} 
          fill 
          className="object-cover"
          priority
        />
      </div>
      
      {/* Article Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl -mb-28">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>
        
        <div className="flex items-center text-gray-600 mb-8">
          <span className="mr-4">By {article.author}</span>
          <span>{article.date}</span>
        </div>
        
        <div className="prose prose-lg max-w-none">
          {article.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="mb-4" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          ))}
          
          {article.source && (
            <div className="mt-12 pt-6 border-t border-gray-300">
              <p className="text-gray-600">
                <strong>Retrieved from:</strong>{" "}
                <a href={article.source} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  {article.source}
                </a>
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}