function Contact() {
    return (
        <div id='contact'>
            <div className="flex flex-col items-center text-center my-10 px-4">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                    Have Question In Mind?
                </p>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">
                    Let Us Help You
                </p>
            </div>

            <div className="flex flex-col items-center bg-white w-full sm:w-3/4 md:w-2/3 lg:w-2/5 mx-auto rounded-4xl p-5 my-20">
                <form className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-10 md:gap-20 w-full px-4">
                    <input
                        type="email"
                        placeholder="yourmail@gmail.com"
                        className="w-full sm:w-auto p-3 rounded-xl focus:outline-orange-500"
                    />
                    <button className='bg-orange-500 cursor-pointer text-white w-full sm:w-auto px-8 py-3 rounded-4xl'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
