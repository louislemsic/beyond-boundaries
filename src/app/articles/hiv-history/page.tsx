import Image from "next/image"
import { notFound } from "next/navigation"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const article = {
    id: "hiv-history",
    title: "History of HIV/AIDS",
    author: "Hazel",
    date: "April 20, 2025",
    imageUrl: "/images/hiv-history.jpg",
    content: `
      It is believed that the first case in the Philippines happened in Manila 1984 because of people coming in the country that caused the spread of the virus. While in June 1981 in Los Angeles, five young homosexual men were diagnosed with Pneumocystis carinii pneumonia and other opportunistic infections that lead to AIDS (Acquired Immunodeficiency Syndrome). This eventually led to 100,000 cases of AIDS and more than 59,000 AIDS-related deaths reported to CDC (Centers for Disease Control and Prevention. In 1988, it was the 15th leading cause of death and, in 1987, it ranked seventh in terms of estimated years of potential life lost before age 65. The first reported AIDS cases to CDC were 50,000 from the years of 1981 to 1987 and the second report was 50,000 between December 1987 and July 1989.

      HIV still remains as one of the most significant health concerns all over the world, where there would be 32 cases reported per day (WHO, 2019). Despite the advancement of technology, there is still no cure for HIV, only treatments and ART. Furthermore, people are still not knowledgeable enough about what HIV really is and organizations that can help them with their situation as well as being able to provide a safer space for them.
      
      A research was conducted around University Belt, Manila and the majority of the respondents have answered that they are not knowledgeable about HIV, whereas most have responded that they have learned about HIV through social media. Additionally, the majority of the respondents gained information on existing HIV support activities in the Philippines from social media. However, through further findings, this still leaves room for lack of awareness, as people can easily scroll through posts, disregard information, and gravitate towards content that aligns more closely with their personal interests.
      
      There is still a presence of fear, intimidation, ignorance, misinformation and stigma with the association of HIV in the eyes of Gen-Z, as some of the answers of the respondents when asked: "How else can you contract HIV?" There were a variety of answers that were factually incorrect, such as "kissing". Although, the data also found that Gen-Z acquired their knowledge and understanding of HIV and HIV support initiatives mostly through social media, where almost half of the respondents observed HIV support promotion on social media to be encouraging, but even with this encouragement, social media still has space for misinformation or fake news like other media.
    `,
    source: "https://www.cdc.gov/mmwr/preview/mmwrhtml/june_5.htm"
  };

export default function ArticlePage({ params }: any) {
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
          {article.content.split('\n\n').map((paragraph, idx) => {
            // Check if paragraph contains bullet points
            if (paragraph.includes('- ')) {
              // Split by lines and process each line
              const lines = paragraph.split('\n');
              return (
                <div key={idx} className="mb-4">
                  {lines.map((line, lineIdx) => {
                    const trimmedLine = line.trim();
                    if (trimmedLine.startsWith('- ')) {
                      // It's a bullet point
                      const content = trimmedLine.substring(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                      return (
                        <div key={lineIdx} className="flex items-start mb-2">
                          <span className="text-red-600 mr-2 mt-1">•</span>
                          <span dangerouslySetInnerHTML={{ __html: content }} />
                        </div>
                      );
                    } else if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
                      // It's a bold header
                      const content = trimmedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                      return (
                        <h3 key={lineIdx} className="text-lg font-bold mb-3 mt-4" dangerouslySetInnerHTML={{ __html: content }} />
                      );
                    } else if (trimmedLine) {
                      // Regular paragraph
                      return (
                        <p key={lineIdx} className="mb-2" dangerouslySetInnerHTML={{ __html: trimmedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                      );
                    }
                    return null;
                  })}
                </div>
              );
            } else {
              // Regular paragraph without bullet points
              return (
                <p key={idx} className="mb-4" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              );
            }
          })}
          
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