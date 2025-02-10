import ApiClient from "./ApiClient";

export const Create= async(data)=>{
    await ApiClient.post('/poste', data).then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })
}

export const All= async()=>{
    await ApiClient.get('/postes').then(res=>{
        console.log(res);
        
        return res
    }).catch(err=>{
        console.log(err);
    })
}

 
// const Create2= async()=>{
//     try {
//     const response=await ApiClient.post('/poste')
//         return response
//     } catch (error) {
//         console.log(error);
//     }
// }