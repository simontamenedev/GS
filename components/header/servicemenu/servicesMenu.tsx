import MegaMenuItem from "../menuitem/menuItem";

function ServicesMenu() {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-6'>Services</h2>
      <div className='grid md:grid-cols-3 gap-4'>
        <MegaMenuItem
          title='Web Development'
          description='Modern Next.js websites and applications'
          href='/services/web-development'
        />
        {/* ... keeping your other items */}
        <MegaMenuItem
          title='Mobile Development'
          description='Flutter and React Native apps'
          href='/services/mobile-development'
        />
        <MegaMenuItem
          title='UI/UX Design'
          description='Professional product design'
          href='/services/ui-ux'
        />
        <MegaMenuItem
          title='Cloud Solutions'
          description='AWS and Azure infrastructure'
          href='/services/cloud'
        />
        <MegaMenuItem
          title='DevOps'
          description='CI/CD and deployment automation'
          href='/services/devops'
        />
        <MegaMenuItem
          title='IT Consulting'
          description='Architecture and technology consulting'
          href='/services/consulting'
        />
      </div>
    </div>
  )
}
export default ServicesMenu;