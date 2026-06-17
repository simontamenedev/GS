import MegaMenuItem from "../menuitem/menuItem";

function ResourcesMenu() {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-6'>Resources</h2>
      <div className='grid md:grid-cols-2 gap-4'>
        <MegaMenuItem
          title='Our Story'
          description='Learn more about our company'
          href='/our-story'
        />
        {/* ... keeping your other items */}
        <MegaMenuItem
          title='Blog'
          description='Articles and technical insights'
          href='/blog'
        />
        <MegaMenuItem
          title='Case Studies'
          description='Explore our client success stories'
          href='/case-studies'
        />
        <MegaMenuItem
          title='Documentation'
          description='Product documentation and guides'
          href='/documentation'
        />
        <MegaMenuItem
          title='FAQ'
          description='Frequently asked questions'
          href='/faq'
        />
        <MegaMenuItem
          title='Contact'
          description='Get in touch with our team'
          href='/contact'
        />
      </div>
    </div>
  )
}
export default ResourcesMenu;