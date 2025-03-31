function Title() {
    return (
        <div className="h-screen flex items-center justify-center backdrop-brightness-75">
            <div className='flex flex-col items-center'>
                <h1 className='text-white font-black text-white 
                    text-[70px] sm:text-[80px] md:text-[90px] lg:text-[120px] lg:leading-[95px] text-center'
                >
                    Jan Karlo Nito
                </h1>

                <h2 className='text-white mx-20 font-medium 
                    text-[16px] 
                    sm:text-[18px] md:text-[20px] lg:text-[30px] lg:leading-[40px] lg:mt-12 text-center'
                >
                    Software developer based in Auckland, New Zealand
                </h2>
            </div>
        </div>
    )
}

export default Title;