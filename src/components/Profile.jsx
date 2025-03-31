import SocialRow from "./SocialRow";

function Profile() {
    return (
        <div className="h-[1200px] flex justify-center backdrop-brightness-75">
            <div className="flex-col text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[30px]">
                <div className="flex justify-center mt-20">
                    <img src='profile.jpg' alt='Profile' className='rounded-full pointer-events-none h-48 xs:sm:h-64 md:xl:h-72'></img>
                </div>
                <h3 className="font-medium mt-4">Software Engineer</h3>
                <SocialRow />
                {/* Personal Statement */}
                <div className="mx-[25%] text-[15px] sm:text-[16px] md:text-[17px] lg:text-lg text-left text-white">
                    <p>
                        I am a driven and committed final year student at the Auckland University of Technology studying Computer Science
                        and I am in the final year of my Computer Science degree, majoring in Software Development. I thrive in a team environment
                        and demonstrate effective collaboration through both my projects and work experience. I am detail oriented and I am passionate about seeing projects
                        through while using my skills to make a meaningful impact. Outside of my career and academic life, I enjoy going to the gym,
                        playing the guitar, snowboarding and playing basketball.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profile;