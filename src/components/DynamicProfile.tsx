import "@fortawesome/fontawesome-free/css/all.min.css";

interface Repo {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  id: number;
  html_url: string;

}

interface User {
  avatar_url: string;
  name: string;
  login: string;
  followers: number;
  following: number;
  location: string;
  html_url: string;
}

interface DynamicProfileProps {
  user: User | null;
  repos: Repo[];
}

const DynamicProfile: React.FC<DynamicProfileProps> = ({ user, repos }) => {
  if (!user) return null; 

  return (
    <div className="w-full h-auto md:w-[890px] mt-8 p-2  rounded-bl-xl rounded-br-xl flex flex-col md:gap-10 gap-4">

      {/* user info */}
      <div className="githubContainer flex md:flex-row flex-col justify-center items-center md:gap-4 gap-2">
        <div className="flex flex-col items-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="md:w-[80px] md:h-[80px] w-[40px] h-[40px] rounded-full"
          />
          <p>{user.name || user.login}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-[10px] text-blue-300 hover:underline"
          >
            View Profile
          </a>
        </div>

        <div className="bg-[var(--color-bg)] rounded-lg flex md:py-2 md:px-4 p-2 gap-2 md:gap-3">
          <p>Followers</p> | <p>{user.followers}</p>
        </div>

        <div className="bg-[var(--color-bg)] rounded-lg flex md:py-2 md:px-4 p-2 gap-2 md:gap-3">
          <p>Following</p> | <p>{user.following}</p>
        </div>

        <div className="bg-[var(--color-bg)] rounded-lg flex md:py-2 md:px-4 p-2 gap-2 md:gap-3">
          <p>Location</p> | <p>{user.location || "N/A"}</p>
        </div>
      </div>

      {/* repositories */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 flex-wrap ">
        {repos.slice(0, 4).map((repo, index) => (

          <a key={repo.id}
            href={repo.html_url}
            target="_blank">
            <div
              key={index}
              className={`bg-[linear-gradient(to_right,var(--color-bg),var(--color-bg-light))] shadow-lg  rounded-xl py-2 px-3 md:w-[380px] w-[300px] flex flex-col gap-1`}
            >
              <p>{repo.name}</p>
              <p className="text-[10px]">{repo.description || "No description"}</p>
              <div className="flex gap-2 text-white text-[12px]">
                <p>
                  <i className="fa-solid fa-share"></i>
                  <span> {repo.forks_count}</span>
                </p>
                <p>
                  <i className="fa-solid fa-star"></i>
                  <span> {repo.stargazers_count}</span>
                </p>
                <p>
                  updated {new Date(repo.updated_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* View all repositories */}
      <div className="flex justify-center items-center text-center">
        <button className="bg-[var(--color-bg)] py-1 px-4 cursor-pointer rounded-lg transition-all duration-300 ease-in-out ">
          <a href={user.html_url}
            target="_blank"
            rel="noreferrer"> View all repositories
          </a>
        </button>
      </div>
    </div>
  );
};

export default DynamicProfile;
