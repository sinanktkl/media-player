import { commonAPI } from "./commonAPI"
import { server_url } from "./server_url"




//addVIDEO API
export const addVideoAPI =async(video)=>{
    return await commonAPI("POST",`${server_url}/allVideos`,video)
}
 
//getVideoAPI

export const getAllVideoAPI=async()=>{
    return await commonAPI("GET",`${server_url}/allVideos`,"")
}

//getAvideo
export const getAVideoAPI=async(id)=>{
    return await commonAPI("GET",`${server_url}/allVideos/${id}`,"")
}
//Deletevideo
export const deleteVideoAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/allVideos/${id}`,{})
}
//addHistoryAPI
export const addHistoryAPI=async(video)=>{
    return await commonAPI("POST",`${server_url}/history`,video)
}
//getHistory
export const getHistoryAPI=async()=>{
    return await commonAPI("GET",`${server_url}/history`,"")
}
//DeleteHistory
export const deleteHistoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/history/${id}`,{})
}
//addCategoryyAPI
export const addCategoryAPI=async(category)=>{
    return await commonAPI("POST",`${server_url}/category`,category)
}
//getcategory
export const getCategoryAPI=async()=>{
    return await commonAPI("GET",`${server_url}/category`,"")
}
//DeleteCategory
export const deleteCategoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/category/${id}`,{})
}

//updateCAtegoryAPI
export const updateCategoryAPI=async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${server_url}/category/${id}`,categoryDetails)
}
