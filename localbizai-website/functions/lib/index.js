"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testGemini = exports.helloWorld = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const generative_ai_1 = require("@google/generative-ai");
admin.initializeApp();
// Hello World function for testing
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Methods', 'GET, POST');
    response.set('Access-Control-Allow-Headers', 'Content-Type');
    if (request.method === 'OPTIONS') {
        response.status(204).send('');
        return;
    }
    if (request.method !== 'POST') {
        response.status(405).json({ error: 'Method not allowed' });
        return;
    }
    functions.logger.info("Hello World function called!", { structuredData: true });
    response.json({
        message: "Hello from Firebase Functions! The pipeline is working correctly.",
        timestamp: new Date().toISOString(),
        success: true
    });
});
// Gemini AI function for testing AI integration
exports.testGemini = functions.https.onRequest(async (request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Methods', 'GET, POST');
    response.set('Access-Control-Allow-Headers', 'Content-Type');
    if (request.method === 'OPTIONS') {
        response.status(204).send('');
        return;
    }
    if (request.method !== 'POST') {
        response.status(405).json({ error: 'Method not allowed' });
        return;
    }
    try {
        const { prompt } = request.body;
        if (!prompt) {
            response.status(400).json({ error: 'Prompt is required' });
            return;
        }
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            functions.logger.error("Gemini API key not found in environment variables");
            response.status(500).json({
                error: 'Gemini API key not configured. Please set GEMINI_API_KEY in environment variables.'
            });
            return;
        }
        const genAI = new generative_ai_1.GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        functions.logger.info("Sending prompt to Gemini:", { prompt });
        const result = await model.generateContent(prompt);
        const response_text = result.response.text();
        functions.logger.info("Received response from Gemini");
        response.json({
            response: response_text,
            success: true,
            timestamp: new Date().toISOString()
        });
    }
    catch (error) {
        functions.logger.error("Error in testGemini function:", error);
        response.status(500).json({
            error: 'Failed to generate response from Gemini',
            details: error.message,
            success: false
        });
    }
});
//# sourceMappingURL=index.js.map