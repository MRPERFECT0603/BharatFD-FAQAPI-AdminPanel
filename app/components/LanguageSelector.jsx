const LanguageSelector = ({ selectedLanguage, onSelectLanguage }) => {
    const languages = ["en", "hi", "ur", "bn"];
  
    return (
      <div className="flex justify-center space-x-3 bg-white p-3 rounded-lg shadow-md border border-gray-200 max-w-sm mx-auto">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => onSelectLanguage(lang)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-sm 
              ${
                selectedLanguage === lang
                  ? "bg-blue-600 text-white shadow-md scale-105"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
    );
  };
  
  export default LanguageSelector;