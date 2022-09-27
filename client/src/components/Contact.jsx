const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen bg-[#0a192f]   flex justify-center intems-center p-4">
            <div>
                <div>
                    <form method="POST" action="https://getform.io/f/9d806701-86f6-479e-89be-3e612001fc9e" className="flex flex-col max-w-[600px] w-full">
                        <div className="pb-8">
                            <p className='text-4xl font-bold inline border-b-4  text-gray-300 border-[#fe0068]'>Hit Me Up</p>
                            <p className="text-gray-300 py-4 ">//Submit the form below or shoot me an email - eric@132design.com</p>
                        </div>
                        <input type="text" placeholder="Name" name="name" className="bg-[#ccd6f6] p-2"/>
                        <input type="email" placeholder="Email" name="email"  className="my-4 p-2 bg-[#ccd6f6]"/>
                        <textarea name="message" rows="10" placeholder="Message" className="bg-[#ccd6f6] p-2"></textarea>
                        <button className="text-white border-2 hover:bg-[#fe0068] hover:border-[#fe0068] px-4 py-3 my-8 mx-auto flex items-center">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact