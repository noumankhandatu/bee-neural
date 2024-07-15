import Image from "next/image";

export const NLPcontent = [
  {
    title: "Sentiment Analysis",
    description:
      "Understand the emotions behind customer interactions with our sentiment analysis solutions. We help you monitor social media, customer reviews, and feedback to gauge public sentiment, enabling you to make informed decisions that enhance customer satisfaction and loyalty.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/assets/service-images/nlp/sentic.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover p-1"
          alt="linear board demo"
          priority
        />
      </div>
    ),
  },
  {
    title: "Chatbots and Virtual Assistants",
    description:
      "Elevate your customer service with our AI-driven chatbots and virtual assistants. These tools are capable of understanding and responding to human language, providing 24/7 support, handling inquiries, and assisting with user navigation, drastically reducing wait times and improving user experience.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/service-images/nlp/chatbot.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover p-1"
          alt="linear board demo"
          priority
        />
      </div>
    ),
  },
  {
    title: "Text Classification and Categorization",
    description:
      ": Streamline your document management processes with our text classification services. Whether it’s sorting emails, organizing documents, or categorizing content, our NLP technology can automate these tasks with high accuracy, saving time and resources.",
    content: (
      <Image
        src="/assets/service-images/nlp/textclasification.webp"
        width={300}
        height={300}
        className="h-full w-full object-cover p-1"
        alt="linear board demo"
        priority
      />
    ),
  },
  {
    title: "Language Translation Services",
    description:
      "Expand your global reach with our advanced language translation tools. Powered by AI, our translation services facilitate smooth communication across different languages, helping businesses grow internationally and maintain cultural relevance.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/assets/service-images/nlp/lagugae.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover p-1"
          alt="linear board demo"
          priority
        />
      </div>
    ),
  },
  {
    title: "Speech Recognition",
    description:
      "Transform voice into actionable data with our speech recognition technology. Ideal for virtual meetings, dictations, and voice-controlled applications, our solutions enable seamless interaction and accessibility for all users.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/assets/service-images/nlp/speechrecogination.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover p-1"
          alt="linear board demo"
          priority
        />
      </div>
    ),
  },
  {
    title: "Custom NLP Solutions",
    description:
      "Every business is unique, and so are your needs. At beeNeural, we specialize in developing custom NLP solutions tailored to the specific requirements of your business. Utilizing state-of-the-art large language models (LLMs), we fine-tune our systems on your unique datasets to provide highly personalized and efficient outcomes. Whether it’s extracting specific information from large datasets or integrating NLP capabilities into existing platforms, we have the expertise to deliver.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/assets/service-images/nlp/customnlp.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover p-1"
          alt="linear board demo"
          priority
        />
      </div>
    ),
  },
];
