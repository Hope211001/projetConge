import React, { useState } from 'react'
import { Create } from '../../service/Poste'


function Index() {
    const [poste, setPost] = useState({
        poste_name: ''
    })

    async function addPost(e) {
        try {
            e.preventDefault()
            await Create(poste)
        } catch (error) {
            console.log(error);
        }
    }
    function handleChange(e){
        setPost({poste_name: e.target.value})
    }
    return (
        <div class="h-screen flex items-center justify-center">
            <form class="w-full max-w-lg" onSubmit={addPost}>
                <h1 className='mb-5'>AJOUTER POSTE</h1>
                <div class="relative z-0 w-full mb-5 group">
                    <input onChange={handleChange} type="text" name="post_name" id="post_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="post_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>

    )
}

export default Index