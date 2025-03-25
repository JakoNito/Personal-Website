import SocialRow from "./SocialRow";

function Profile() {
    return (
        <div className="h-screen flex justify-center">
            <div className="flex-col">
                <img src='profile.jpg' alt='Profile' className='rounded-full mt-20 mb-6 pointer-events-none h-64 xs:sm:h-72 md:xl:h-96'></img>
                <h3 className="text-white font-medium text-[16px] mb-6 sm:text-[18px] md:text-[20px] lg:text-[30px]">Software Engineer</h3>
                <SocialRow />
            </div>
        </div>
    )
}

export default Profile;