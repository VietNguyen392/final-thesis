import {postAPI,getAPI}from '../../../utils/api';
const userAction={
    createUser:async (inputData)=>{
         const response=await postAPI('create-user',inputData)
        return response.data
    }
}
export default userAction