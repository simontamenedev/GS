import Link from "next/link"

function MegaMenuItem({
  title,
  description,
  href,
}: {
  title: string
  description: string
  href: string
}) {
  return (
    <Link
      href={href}
      className='block rounded-2xl border p-4 hover:bg-gray-50 hover:border-blue-200 hover:shadow-md transition-all'
    >
      <h3 className='font-semibold text-lg'>{title}</h3>
      <p className='text-sm text-gray-500 mt-1'>{description}</p>
    </Link>
  )
}

export default MegaMenuItem;