import  { useState, useEffect, useRef } from "react";

import SearchInput from "./SearchInput";
import DefaultProfile from "./DefaultProfile";
import DynamicProfile from "./DynamicProfile";

const MainContent = () => {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState<any>(null);
    const [reposData, setReposData] = useState<any[]>([]);
    const [suggestion, setSuggestion] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Default GitHub profile (shown on page load)
    const [defaultProfile, setDefaultProfile] = useState<any>(null);

    useEffect(() => {
        // Fetch default GitHub profile on page load
        const fetchDefaultProfile = async () => {
            try {
                const res = await fetch("https://api.github.com/users/github"); 
                if (!res.ok) throw new Error("Failed to load default profile");
                const data = await res.json();
                setDefaultProfile(data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchDefaultProfile();
    }, []);

    // 🔍 Search GitHub user
    const handleSearch = async (name?: string) => {
        const userToSearch = name || username;
        if (!userToSearch.trim()) return;

        setLoading(true);
        setError("");
        setUserData(null);
        setReposData([]);

        try {
            // 🧠 Fetch profile
            const profileResponse = await fetch(`https://api.github.com/users/${userToSearch}`);
            if (!profileResponse.ok) throw new Error("User not found");
            const profile = await profileResponse.json();
            console.log(profile)


            // 📦 Fetch repos
            const reposResponse = await fetch(`https://api.github.com/users/${userToSearch}/repos`);
            const repos = await reposResponse.json();
            console.log(repos)



            if (!Array.isArray(repos)) throw new Error("Failed to load repositories");

            setUserData(profile);
            setReposData(repos);
            setSuggestion(null);
        } catch (err: any) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

   

    // ✏️ Debounced suggestion handler
    const debounceTimer = useRef<NodeJS.Timeout | null>(null);

    const handleSuggestion = (value: string) => {
        setUsername(value);

        // clear previous timer
        if (debounceTimer.current) clearTimeout(debounceTimer.current);

        // if input is empty, reset suggestion
        if (!value.trim()) return setSuggestion(null);

        // start new timer
        debounceTimer.current = setTimeout(async () => {
            try {
                const res = await fetch(`https://api.github.com/users/${value}`);
                if (res.ok) {
                    const data = await res.json();
                    setSuggestion(data);
                } else {
                    setSuggestion(null);
                }
            } catch {
                setSuggestion(null);
            }
        }, 500);
    };



    return (
        <div>
            <div className="border-6 border-purple-500 rounded-2xl w-full md:w-[900px] h-auto md:md-h-[650px] md:p-0 p-4 bg-[var(--color-bg-light)] shadow-lg">
                {/* 🔍 Search input */}
                <SearchInput
                    value={username}
                    onChange={handleSuggestion}
                    onSearch={() => handleSearch()}
                    suggestion={suggestion}
                    defaultSuggestion={defaultProfile} // show default dropdown on page load
                    onSelectSuggestion={(name) => handleSearch(name)}
                />

                {/* ⏳ Loading spinner */}
                {loading && (
                    <div className="flex flex-col items-center justify-center mt-10 space-y-3">
                        <div className="w-10 h-10 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
                        <p className="text-gray-300 text-sm">Fetching GitHub data...</p>
                    </div>
                )}

                {/* ⚠️ Error state */}
                {error && (
                    <p className="text-center mt-4 text-red-400 text-sm">{error}</p>
                )}

                {/* 🧱 Render content */}
                {!loading && !error && (
                    !userData ? <DefaultProfile /> : <DynamicProfile user={userData} repos={reposData} />
                )}
            </div>
        </div>
    );
};

export default MainContent;
