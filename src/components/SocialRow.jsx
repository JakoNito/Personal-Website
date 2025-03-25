function SocialRow() {
    return (
        <div className="flex justify-center gap-10 ">
            {/* Linkedin */}
            <a href='https://www.linkedin.com/in/jan-karlo-nito/' target="_blank" rel="noopener noreferrer">
                <img src='Linkedin.svg' className='pointer-events-none h-12 xs:sm:h-72 md:xl:h-10' alt='Linkedin'></img>
            </a>
            {/* GitHub */}
            <a href='https://github.com/JakoNito/' target="_blank" rel="noopener noreferrer">
                <img src='GitHub.svg' className='pointer-events-none h-12 xs:sm:h-72 md:xl:h-10' alt='GitHub'></img>
            </a>
            {/* Resume */}
            <a href='/#'>
                <h3 className="text-white font-medium text-[16px] mb-6 sm:text-[18px] md:text-[20px] lg:text-[30px]">Resume</h3>
            </a>
        </div>
    )
}

export default SocialRow;