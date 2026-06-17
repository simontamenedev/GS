import { useTranslations } from "next-intl"
import { cn } from "@/utils/utils"
import OurTrusted from "@/components/home/ourtrusted"
import ProjectSuccess from "@/components/home/projectSuccess"
import MissionVision from "@/components/home/missionVision"

const Page = () => {
  const t = useTranslations("HomePage")

  return (
    <main className='overflow-hidden'>
      {/* Hero Section with Background Video */}
      <section className='relative min-h-screen'>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className='absolute inset-0 w-full h-1/2 object-cover'
        >
          <source src='/mining.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className='relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8'>
          <div className='max-w-5xl mx-auto text-center'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight'>
              Long-Term
              <br />
              <span className='bg-gradient-to-r from-green-400 via-green-300 to-green-400 bg-clip-text text-transparent'>
                Corporate Ambition
              </span>
            </h1>

            <p className='text-xl sm:text-2xl md:text-3xl text-gray-200 mt-4 md:mt-6 font-light'>
              with Vetted Talent You Can Trust
            </p>

            <p className='text-base sm:text-lg md:text-xl text-gray-300 mt-6 md:mt-8 max-w-3xl mx-auto leading-relaxed'>
              Green Share Future is positioned to evolve into an integrated
              African green energy, smart infrastructure, electric mobility,
              mining, logistics, and digital transformation company supporting
              Ethiopia’s long-term sustainable development.
            </p>
            <MissionVision/>
          </div>
        </div>
      </section>
 
      {/* OurTrusted Component - Now visible below the hero */}
      <OurTrusted />
      <ProjectSuccess />
    </main>
  )
}

export default Page
