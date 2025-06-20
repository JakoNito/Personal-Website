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
            <a href='https://zjyukz7kqypqk3b0.public.blob.vercel-storage.com/Jan%20Karlo%20Nito%20Resume%20Public-PtRDBasLajenw2ZfR5z57P5Gg9YueI.pdf' target="_blank" rel="noopener noreferrer">
                <h3 className="text-white text-[16px] hover:underline mb-6 sm:text-[16px] md:text-[18px] lg:text-[20px]">Resume</h3>
            </a>
        </div>
    )
}

export default SocialRow;