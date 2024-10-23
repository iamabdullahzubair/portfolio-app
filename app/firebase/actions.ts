import { db, storage } from '@/app/firebase/firebase'; // Adjust the path as needed
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Type for project data
type dataType = {
    projectName: string;
    projectShortDesc : string
    description: string;
    projectUrl: string;
    githubUrl: string;
    projectImageUrl: string;
};

export type projectDetailsType = {
    id: string;
    projectName: string;
    projectShortDesc : string
    description: string;
    projectUrl: string;
    githubUrl: string;
    projectImageUrl: string;
};

// Function to upload an image to Firebase Storage
export const uploadImage = async (file: File): Promise<string> => {
    try {
        // Create a reference to the file to be uploaded
        const storageRef = ref(storage, `images/${file.name}`);

        // Upload the file
        await uploadBytes(storageRef, file);

        // Get the download URL of the uploaded file
        const downloadURL = await getDownloadURL(storageRef);
        console.log("File available at", downloadURL);
        return downloadURL; // Return the download URL
    } catch (error) {
        console.error("Error uploading file:", error);
        throw new Error("Failed to upload image");
    }
};

// Function to add a project to Firestore
export const addProject = async (data: dataType) => {
    try {
        // Send the data to Firestore
        await addDoc(collection(db, "projects"), data);
        console.log("Project added successfully:", data);
    } catch (error) {
        console.error("Error adding project:", error);
        throw new Error("Failed to add project. Please try again.");
    }
};

// Function to get all projects from Firestore
export const getProjects = async (): Promise<projectDetailsType[]> => {
    try {
        const querySnapshot = await getDocs(collection(db, "projects")); // Get all documents in "projects" collection
        const projects: projectDetailsType[] = [];
        
        querySnapshot.forEach((doc) => {
            const data = doc.data() as Omit<projectDetailsType, 'id'>; // Explicit type assertion for Firestore data
            projects.push({ id: doc.id, ...data }); // Push project data into array, including the document ID
        });

        return projects;
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    }
};

// Function to get a specific project by ID
export const getProject = async (id: string): Promise<projectDetailsType | null> => {
    try {
        const projectRef = doc(db, "projects", id); // Reference to the specific document
        const projectSnap = await getDoc(projectRef); // Get the document

        if (projectSnap.exists()) {
            const data = projectSnap.data() as Omit<projectDetailsType, 'id'>; // Explicit type assertion for Firestore data
            return { id: projectSnap.id, ...data }; // Return project data including ID
        } else {
            console.log("No such document!");
            return null;
        }
    } catch (error) {
        console.error("Error fetching project:", error);
        throw error;
    }
};
