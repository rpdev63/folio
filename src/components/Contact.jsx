function Contact(){
  return (
    <div name='contact' className='w-full h-screen bg-[#f2f7f2]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <form method='POST' action="https://getform.io/f/1a2ca669-ad00-4877-b0c7-ddf542acfe2a" className='flex flex-col max-w-[600px] w-full'>
            <div className="pb-2">
                <p className='text-4xl font-bold inline border-b-4 border-[#39a9db]'>Contact</p>
                <p className='py-4'>Pour obtenir plus de renseignements, contactez moi via ce formulaire ou directement à mon adresse mail. </p>
            </div>
            
            <input className='bg-white  p-2' type="text" placeholder='Votre nom' name='name' />
            <input className='my-4 p-2 bg-white' type="email" placeholder='Votre email' name='email' />
            <textarea className='bg-white p-2' name="message" rows="10" placeholder='Votre message'></textarea>
            <div className="mt-5 flex justify-center">
            <button className=' w-min  border-2 border-[#C17767]  text-[#C17767] px-4 py-3  rounded-sm hover:bg-[#433a3f] hover:text-white duration-200 hover:border-[#433a3f] font-bold text-sm'>Envoyer </button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Contact