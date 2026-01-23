import {StreamChat} from 'stream-chat';
import {ENV} from './env.js';

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if(!apiKey || !apiSecret) {
    console.error("Stream API key and secret must be set in environment variables.");
    process.exit(1);   
}
export const streamClient = new StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData)=>{
    try{
        await streamClient.upsertUser(userData);
        console.log("Stream user upserted sucessfully", userData)
    }
    catch(error)    {
        console.error("Error upserting Stream user:", error);
    }
}

export const deleteStreamUser = async (userId)=>{
    try{
        await streamClient.deleteUser(userId);
        console.log("Stream user deleted sucessfully", userId)

    }
    catch(error)    {
        console.error("Error deleting Stream user:", error);
    }
}
