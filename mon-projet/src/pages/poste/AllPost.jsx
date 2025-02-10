import React, { useEffect, useState } from 'react'
import { All } from '../../service/Poste'


function AllPost() {
    const [poste,setPoste]=useState(null)
    useEffect(() => {
        const fechPost = async () => {
            try {
                const res=await All();
                setPoste(res.data)

            } catch (error) {

            }
        }

        fechPost()
    })
    return (
        <div>
            <p>chjdhvjvhfgf</p>
        </div>
    )
}

export default AllPost