interface Project {
  title: string;
  link: string;
  description: string;
  image: string;
}

interface Technology {
  name: string;
  emoji: string;
}

interface NoumanData {
  projects: Project[];
  frontendTechnologies: Technology[];
  backendTechnologies: Technology[];
  databases: Technology[];
}

export const noumandata: NoumanData = {
  projects: [
    {
      title: "BeeNeural",
      link: "https://beeneural.com/",
      description:
        "This is my company's site where I develop and maintain innovative platforms. BeeNeural focuses on creating scalable solutions that merge cutting-edge AI technologies with user-centric design, setting new standards in the industry.",
      image: "/assets/portfolio/bee.png",
    },
    {
      title: "Web 3.0 Site",
      link: "https://ninfa.io/",
      description:
        "A venture into the realm of Web 3.0, demonstrating my engagement with cutting-edge technologies. Ninfa.io showcases my exploration into decentralized applications (dApps) and blockchain integration, pushing the boundaries of what's possible in today's digital landscape.",
      image: "/assets/portfolio/ninfa.png",
    },
    {
      title: "SaaS Project with AI Features",
      link: "https://www.lexi-mind.ai/",
      description:
        "A SaaS project enriched with AI capabilities, highlighting my proficiency in leveraging advanced technologies to deliver impactful solutions. Lexi-Mind.ai is dedicated to empowering businesses with AI-driven insights and automation tools.",
      image: "/assets/portfolio/leximind.png",
    },
  ],
  frontendTechnologies: [
    { name: "JavaScript (React, Next.js)", emoji: "🚀" },
    { name: "HTML & CSS", emoji: "🌐" },
    { name: "Gatsby", emoji: "⚛️" },
    { name: "Storybook", emoji: "📖" },
    { name: "Prismic", emoji: "📝" },
  ],
  backendTechnologies: [
    { name: "Node.js", emoji: "🚀" },
    { name: "Python", emoji: "🐍" },
    { name: "GraphQL", emoji: "📊" },
    { name: "Docker", emoji: "🐳" },
    { name: "AWS", emoji: "☁️" },
  ],
  databases: [
    { name: "SQL Databases", emoji: "🗄️" },
    { name: "NoSQL Databases", emoji: "🗃️" },
  ],
};

export const HakimPortfolioData = [
  {
    src: "/assets/team/portfolio/ANPR.png",
    title: "ANPR System",
    description: `
      Our ANPR system utilizes advanced imaging and AI technologies to accurately detect and recognize vehicle license plates. Designed for seamless integration, it helps monitor traffic flow, enhance security, and streamline parking management. Ideal for smart city applications, this system is a robust solution for effective vehicle oversight.
    `,
  },
  {
    src: "/assets/team/portfolio/chatbot development.png",
    title: "Customized Chatbot",
    description: `A customized chatbot designed to engage users based on provided images leverages advanced image recognition to interpret visual content. Upon receiving an image, it identifies key elements or scenes and generates relevant, context-aware responses, questions, or recommendations tailored to the user's interests. This functionality enhances user engagement by creating a dynamic, interactive experience, showcasing the chatbot's ability to understand and respond to visual information for applications in customer service, personalized marketing, and more.
    `,
  },
  {
    src: "/assets/team/portfolio/build Ai tools.png",
    title: "URL Detection Tool",
    description: `The project leverages YOLOv8 for object detection and EasyOCR for Optical Character Recognition (OCR) to extract valuable information from PDFs The script begins by loading a custom-trained YOLOv8 model and a text reader from EasyOCR. It enables users to input the URL of a PDF, specify a page range, and initiate the object detection and OCR process. The script visually displays the images containing the specified class (class 0) and subsequently extracts text and confidence levels through OCR. The recognized results are organized into a Pandas DataFrame and saved as an Excel file.
    `,
  },
];
export const ShoaibPortfolioData = [
  {
    src: "/assets/images/ags.png",
    title: "Autograding System",
    description: `
      The Subjective-Based Auto-Grading System is an AI-driven solution
      that automates grading for subjective exam papers. Using OCR
      technology, it converts handwritten or printed text from scanned
      papers into digital format. The text is then preprocessed and
      vectorized using methods like TF-IDF or BERT embeddings. By
      calculating cosine similarity between student responses and
      reference answers, the system assigns grades automatically.
      Educators can upload papers, view results, and adjust grades
      through an intuitive interface, enhancing efficiency and
      consistency in grading.
    `,
  },
  {
    src: "/assets/images/mtrc.png",
    title: "Medical Test Recommendation System",
    description: `
      In hospitals, waiting for appointments takes a long time, and
      doctors decide on tests after hearing about symptoms. My project
      helps by suggesting which medical tests someone might need, just
      based on their symptoms. This way, we can speed up the process and
      make it easier for people to get the right tests without
      waiting too long.
    `,
  },
];
export const GulshanPortfolioData = [
  {
    src: "/assets/images/od.png",
    title: "Object Detection",
    description: `
     Real-time data collected from the road to Gilgit is used for object detection, specifically identifying turns and damaged road sections. By leveraging YOLO models, this system achieves an accuracy of over 90%.
    `,
  },
  {
    src: "/assets/images/nlp.png",
    title: "Natural Language Processing",
    description: `
 This project focused on analyzing customer sentiments related to the restaurants using Natural Language Processing (NLP). The goal was to categorize and quantify sentiments as positive, negative, or neutral.  `,
  },
  {
    src: "/assets/images/dva.png",
    title: "Data Visualization & Analytics",
    description: `
 This interactive dashboard presents key statistics on Netflix. It allows users to select a specific feature, highlighting details about the chosen movie or TV show. The dashboard displays the total number of TV shows and movies, the most popular by country, and provides insights into release dates, genres, descriptions, and other relevant details. `,
  },
];
export const AmmarPortfolioData = [
  {
    src: "/assets/images/face_rec.png",
    title: "Face Recognition-Based Attendance System — Feb 2024",
    description: `
    Developed a robust Face Recognition-Based Attendance System utilizing Dlib’s face landmark detection
and cosine similarity for accurate identification. The core functionality involved detecting faces using
Dlib’s face detector, storing facial data in a database, and then matching incoming faces by calculating
the cosine similarity with the stored data. This approach ensured precise and efficient face recognition.
The system’s frontend was designed using KivyMD, providing an intuitive and user-friendly interface.
    `,
  },
  {
    src: "/assets/images/SAM.jpeg",
    title: "One-Shot Segmentation using SAM and OWL — Apr 2024",
    description: `
   Implemented a one-shot segmentation system by integrating SAM (Segment Anything Model) and OWL
(Object-Wise Learning). The process involved using OWL to detect objects based on specific prompts,
which then provided bounding boxes for the identified objects. SAM was subsequently utilized to seg-
ment only the objects that were prompted, ensuring precise and targeted segmentation. This project
demonstrated the effective combination of object detection and segmentation for specialized applications.
    `,
  },
  {
    src: "/assets/images/Try On.jpeg",
    title: "2D Virtual Try-On System (VTON) — Nov 2023",
    description: `
  Developed a 2D Virtual Try-On (VTON) system inspired by IDM VTON, enabling users to virtually try
on clothing items. The system supports both lower and upper body sections, providing a realistic and
interactive experience for users to visualize how different outfits would look on them.
    `,
  },
  {
    src: "/assets/images/Screenshot from 2024-08-20 16-29-21.png",
    title: "Hand-to-Object Distance Measurement System — Mar 2024",
    description: `
 Developed a system to measure the distance between a detected object and a hand using YOLO
for object detection and MediaPipe for hand landmark recognition. After calibrating the camera for
accurate measurements, I implemented a method to calculate the distance between the hand and the
object in real-time. This project combined advanced computer vision techniques to create a precise and
functional system for spatial awareness.
    `,
  },
];
