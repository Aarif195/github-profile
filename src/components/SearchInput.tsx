import React from "react";
import search from "../assets/icon-search.svg";



interface SearchInputProps {
  value: string;
  onChange: (val: string) => void;
  onSearch: () => void;
  suggestion: any;
  defaultSuggestion?: any;
  onSelectSuggestion: (login: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onSearch,
  suggestion,
  defaultSuggestion,
  onSelectSuggestion,
}) => {

  const showSuggestion = suggestion || (!value && defaultSuggestion);

  console.log("Suggestion data:", showSuggestion);


  return (
    <>
      <div className="  flex justify-center mt-6    bg-cover"   
>
        <div className="flex bg-[var(--color-bg-light)] md:w-[300px] w-[300px] gap-2 py-2 px-4 border-[3px] border-[var(--color-blue)] rounded-2xl"  >
          <img src={search} alt="search"  />
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSearch()}
            placeholder="Search GitHub..."
            className="focus:outline-none bg-transparent"
          />
          {/* <button onClick={onSearch} className="ml-2">
            Search
          </button> */}
        </div>
      </div>

      {/* suggestion / dropdown (clickable) */}
      {showSuggestion && (
        <div className="flex justify-center mt-2">
          <div
            onClick={() => onSelectSuggestion(showSuggestion.login)}
            className="flex items-center bg-[var(--color-bg)] md:w-[300px] w-[300px] gap-3 py-5 px-4 rounded-2xl cursor-pointer"
          >
            <img
              src={showSuggestion.avatar_url}
              alt=""
              className="w-[25px] h-[25px]"
            />
            <div>
              <p>
                {showSuggestion.name || showSuggestion.login}{" "}
                <span className="block text-[10px]">{showSuggestion.bio}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchInput;
