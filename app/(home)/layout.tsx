import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import { cn } from "@/utils/utils"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn('flex flex-col  overflow-hidden')}>
      <Header />
      {children}
    
      <Footer />
    </div>
  )
}

export default layout
