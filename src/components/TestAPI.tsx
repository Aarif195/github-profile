import  { useState, useEffect } from "react";

const TestAPI = () => {
  const [username, setUsername] = useState("torvalds"); 
  const [profile, setProfile] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);

  // const { name, login, html_url, avatar_url, followers, following, bio } = userData || {};



  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);

        if (userResponse.ok && reposResponse.ok) {
          const userData = await userResponse.json();
          const reposData = await reposResponse.json();

          setProfile(userData);
          setRepos(reposData);

          console.log("Profile:", userData);
          console.log("Repos:", reposData);
        } else {
          console.error("Error fetching data");
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [username]);


  
  return <div>Check console for API data
    Check console for API data
      <p>Followers: {profile?.followers}</p>
      <p>Public Repos: {profile?.public_repos}</p>
<p>Username: {username}</p>
<p>Total Repositories: {repos.length}</p>

  </div>;
};

export default TestAPI;
