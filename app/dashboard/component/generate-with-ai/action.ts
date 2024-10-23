import { CohereClient } from 'cohere-ai';

// Initialize the Cohere SDK with your API key
const cohere = new CohereClient({
    token: process.env.NEXT_PUBLIC_COHEREAI_API_KEY,
  });

export const generateDescriptionWithCohere = async (projectName: string, techStack: string): Promise<string> => {
    const prompt = `Describe the project "${projectName}" built using technologies: ${techStack}`;

    try {
        const response = await cohere.generate({
            prompt: prompt,
        });

        const generatedText = response.generations[0].text || "No description generated.";

        return generatedText;
    } catch (error) {
        console.error("Error generating description with Cohere:", error);
        return "Error generating description.";
    }
};
