function SocialRow() {
    return (
        <div className="flex justify-center gap-6 mt-4">
            {/* Linkedin */}
            <a href='https://www.linkedin.com/in/jan-karlo-nito/' target="_blank" rel="noopener noreferrer">
                <img src='Linkedin.svg' className='pointer-events-none h-7' alt='Linkedin'></img>
            </a>
            {/* GitHub */}
            <a href='https://github.com/JakoNito/' target="_blank" rel="noopener noreferrer">
                <img src='GitHub.svg' className='pointer-events-none h-7' alt='GitHub'></img>
            </a>
            {/* Resume */}
            <a href='/#'>
                <h3 className="text-white text-[16px] mb-6 sm:text-[16px] md:text-[18px] lg:text-[20px]">Resume</h3>
            </a>
        </div>
    )
}

export default SocialRow;