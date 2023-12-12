import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) =>{
    const {userId, prompt, tag} = await req.json();

    try {
        await connectToDB(); //lamda function: It'll die when it does it's job
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })

        await newPrompt.save(); //To save it to the database

        return new Response(JSON.stringify(newPrompt),{
            status: 201
        })

    } catch (error) {
        return new Response("Failed to create a new prompt",{
            status: 500
        })
    }
}


// import Prompt from "@models/prompt";
// import { connectToDB } from "@utils/database";

// export const POST = async (request) => {
//     const { userId, prompt, tag } = await request.json();

//     try {
//         await connectToDB();
//         const newPrompt = new Prompt({ creator: userId, prompt, tag });

//         await newPrompt.save();
//         return new Response(JSON.stringify(newPrompt), { status: 201 })
//     } catch (error) {
//         return new Response("Failed to create a new prompt", { status: 500 });
//     }
// }