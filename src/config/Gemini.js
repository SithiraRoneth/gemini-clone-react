// const apiKey = "AIzaSyBPpMdlZTE2K3bSicpB9_kxOVYOs8_uxew";
//
// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
// } = require("@google/generative-ai");
//
// const apiKey = process.env.GEMINI_API_KEY;
// const genAI = new GoogleGenerativeAI("AIzaSyBPpMdlZTE2K3bSicpB9_kxOVYOs8_uxew");
//
// const model = genAI.getGenerativeModel({
//     model: "gemini-2.0-flash-exp",
// });
//
// const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 40,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
// };
//
// async function run() {
//     const chatSession = model.startChat({
//         generationConfig,
//         history: [
//         ],
//     });
//
//     const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//     console.log(result.response.text());
// }
//
// run();

// import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
// } from "@google/generative-ai"
//
// // Set your API key here
// const apiKey = "AIzaSyBPpMdlZTE2K3bSicpB9_kxOVYOs8_uxew";
//
// const genAI = new GoogleGenerativeAI(apiKey);
//
// const model = genAI.getGenerativeModel({
//     model: "gemini-2.0-flash-exp",
// });
//
// const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 40,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
// };
//
// async function run(prompt) {
//     const chatSession = model.startChat({
//         generationConfig,
//         history: [
//         ],
//     });
//
//     const result = await chatSession.sendMessage(prompt);
//     const response = result.response;
//     console.log(response.text());
//     return response.text()
// }
//
// export default run;

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from'@google/generative-ai';

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyBPpMdlZTE2K3bSicpB9_kxOVYOs8_uxew";

async function runChat(prompt){
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({model: MODEL_NAME});

    const generationConfig = {
        temperature: 0.9,
        topP: 1,
        topK: 1,
        maxOutputTokens: 2048,
    };

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ];

    const chat = model.startChat({
        generationConfig,
        safetySettings,
        history:[

        ],
    });

    const result = await chat.sendMessage(prompt);
    const response = result.response;
    console.log(response.text())
    return response.text();
}

export default runChat;