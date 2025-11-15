function Contact() {
    return (
        <>
            <div className="flex flex-col items-center my-10">
                <p className="text-4xl font-bold">
                    Have Question In Mind?
                </p>
                <p className="text-4xl font-bold mt-2">
                    Let Us Help You
                </p>
            </div>
            <div className="flex flex-col items-center bg-white w-2/5 mx-auto rounded-4xl p-5 my-20">
                <form className="flex flex-row justify-center items-center gap-20">
                    <input type="email" placeholder="yourmail@gmail.com" className="p-3 rounded-xl focus:outline-orange-500" />
                    <button className='bg-orange-500 cursor-pointer text-white w-36 h-10 rounded-4xl'>
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default Contact