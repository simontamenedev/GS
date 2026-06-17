import { languages } from "@/constants/languages";
import { cn } from "@/utils/utils";

function LanguageMenu({
  currentLocale,
  switchLanguage,
}: {
  currentLocale: string
  switchLanguage: (locale: string) => void
}) {
  return (
    <div>
      <h2 className='text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2'>
        Select Language
      </h2>
      <div className='flex flex-col gap-1'>
        {languages.map((lang) => (
          <button 
            key={lang.code} 
            onClick={() => switchLanguage(lang.code)}
            className={cn(
              "flex items-center gap-3 w-full p-2.5 rounded-xl transition-colors text-left font-medium",
              currentLocale === lang.code 
                ? "bg-blue-50 text-blue-600" 
                : "hover:bg-gray-50 text-gray-700"
            )}
          >
            <span className="shrink-0 scale-110"><lang.flag /></span>
            <span className="text-sm">{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
export default LanguageMenu;