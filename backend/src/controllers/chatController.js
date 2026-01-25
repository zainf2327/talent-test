import { chatClient } from "../lib/stream.js";
export async function getStreamToken(req, res) {
    try {
        // using clerkId as the user ID for Stream
        const token = chatClient.createToken(req.user.clerkId);
        return res.status(200).json({ 
            token,
            userId: req.user.clerkId,
            userName: req.user.name,
            userImage: req.user.imageUrl

         });
    } catch (error) {
        console.error("Error generating Stream token:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
