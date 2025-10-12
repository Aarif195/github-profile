import git from "../assets/gitt.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const DefaultProfile = () => {
    return (
        <div className=" w-full h-auto md:w-[890px] md:min-h-[452px] mt-8 p-2 bg rounded-bl-xl rounded-br-xl flex flex-col md:gap-10 gap-4">

            {/* github info */}
            <div className="githubContainer flex md:flex-row flex-col justify-center items-center md:gap-4 gap-2">

                <div className="flex flex-col items-center justify-center">
                    <img src={git} alt="GitHub" className="md:w-[80px] md:h-[80px] w-[30px] h-[30px]" />
                    <p>Github</p>
                    <p className="text-[10px]">How people build software</p>
                </div>

                <div className="bg-[var(--color-bg)] rounded-lg flex md:py-2 md:px-4 p-2 gap-2 md:gap-3">
                    <p>Followers</p> | <p>45552</p>
                </div>

                <div className="bg-[var(--color-bg)] rounded-lg flex md:py-2 md:px-4 p-2 gap-2 md:gap-3">
                    <p>Following</p> | <p>0</p>
                </div>

                <div className="bg-[var(--color-bg)] rounded-lg flex md:py-2 md:px-4 p-2 gap-2 md:gap-3">
                    <p>Location</p> | <p>San Francisco, CA</p>
                </div>
            </div>

            {/* repositories preview */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 flex-wrap">


                <div className="bg-[linear-gradient(to_right,var(--color-bg),var(--color-bg-light))] shadow-lg rounded-xl py-2 px-3 md:w-[380px] w-[300px] flex flex-col gap-1">
                    <p>Github</p>
                    <p className="text-[10px]">Community health files for the @Github organization</p>
                    <div className="flex gap-1 text-white">
                        <p><i className="fa-solid fa-share"></i><span> 2,345</span></p>
                        <p><i className="fa-solid fa-star"></i><span>703</span></p>
                        <p>updated 4 days ago</p>
                    </div>
                </div>

                <div className="bg-[linear-gradient(to_right,var(--color-bg),var(--color-bg-light))] shadow-lg rounded-xl py-2 px-3 md:w-[380px] w-[300px] flex flex-col gap-1">
                    <p>Accessibility-alt-text</p>
                    <p className="text-[10px]">An action that reminds users to add text</p>
                    <div className="flex gap-1 text-white">
                        <p><i className="fa-solid fa-share"></i><span> 2,345</span></p>
                        <p><i className="fa-solid fa-star"></i><span>703</span></p>
                        <p>updated 4 days ago</p>
                    </div>
                </div>

                <div className="bg-[linear-gradient(to_right,var(--color-bg),var(--color-bg-light))] shadow-lg rounded-xl py-2 px-3 md:w-[380px] w-[300px] flex flex-col gap-1">
                    <p>Accessibilityjs</p>
                    <p className="text-[10px]">Client accessibility error sooner</p>
                    <div className="flex gap-1 text-white">
                        <p><i className="fa-solid fa-share"></i><span> 2,345</span></p>
                        <p><i className="fa-solid fa-star"></i><span>703</span></p>
                        <p>updated 4 days ago</p>
                    </div>
                </div>

                <div className="bg-[linear-gradient(to_right,var(--color-bg),var(--color-bg-light))] shadow-lg rounded-xl py-2 px-3 md:w-[380px] w-[300px] flex flex-col gap-1">
                    <p>action-cheat-sheet</p>
                    <p className="text-[10px]">Community health files for the @Github organization</p>
                    <div className="flex gap-1 text-white">
                        <p><i className="fa-solid fa-share"></i><span> 2,345</span></p>
                        <p><i className="fa-solid fa-star"></i><span>703</span></p>
                        <p>updated 4 days ago</p>
                    </div>
                </div>



            </div>


            {/* View all repositories */}
            <div className="flex justify-center items-center text-center ">
                <button className="bg-[var(--color-bg)] py-1 px-4 cursor-pointer rounded-lg  hover:scale-110 ">
                    View all repositories
                </button>
            </div>

        </div>
    );
};

// const Repositories = () => {
//     return (


//         <div className="bg-[linear-gradient(to_right,var(--color-bg),var(--color-bg-light))] shadow-lg rounded-xl py-2 px-3 md:w-[380px] w-[300px] flex flex-col gap-1">
//             <p>Github</p>
//             <p className="text-[10px]">Community health files for the @Github organization</p>
//             <div className="flex gap-1 text-white">
//                 <p><i className="fa-solid fa-share"></i><span> 2,345</span></p>
//                 <p><i className="fa-solid fa-star"></i><span>703</span></p>
//                 <p>updated 4 days ago</p>
//             </div>
//         </div>
//     )
// }

export default DefaultProfile;
