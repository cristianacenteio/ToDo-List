import React from 'react'

const page = () => {
    return (
        <body className='bg-gray-200 flex justify-center items-center min-h-screen'>
            <div className='bg-white p-8 rounded-lg shadow-md w-full max max-w-md'>
                <h2 className='font-bold text-xl mb-5 text-center'>REGISTAR NOVA CONTA</h2>
                <form action="#">
                    <div className='mb-4'>
                        <label className='block text-gray-800 py-2 ' htmlFor="Username">Utilizador:</label>
                        <input className='border w-full shadow-md rounded-md appearance-none py-2 px-3 ' type="Username" placeholder='Inserir um nome de utilizador' />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-800 py-2 ' htmlFor="Password">Palavra-passe:</label>
                        <input className='border w-full shadow-md rounded-md appearance-none py-2 px-3 ' type="Password" placeholder='Inserir uma palavra-passe' />
                    </div>

                    <div className=' flex items-center justify-center space-x-10'>
                        <button className='text-blue-500 text-center p-4 rounded-md py-2 px-3 mt-3 hover:text-blue-900'>
                            Já tenho conta
                        </button>
                        <button className='bg-blue-500 text-center p-4 rounded-md py-2 px-3 mt-3 text-white hover:bg-blue-900'>
                            Registe-se
                        </button>
                    </div>
                </form>
            </div>
        </body>
    )
}

export default page