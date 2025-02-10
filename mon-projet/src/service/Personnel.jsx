import ApiClient  from "./ApiClient";
export  const Create= async(data)=>{
    try {
    const response=await ApiClient.post('/personnel', data)
        return response
    } catch (error) {
        console.log(error);
    }
}