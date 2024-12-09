// Featured projects data
const projects = [
    {
        title: "Deep-Drowsiness-Detection-using-YOLO",
        description: "Developed a real-time drowsiness detection system using YOLO, enhancing road safety through advanced computer vision techniques.",
        image: "https://via.placeholder.com/300x200.png?text=Drowsiness+Detection",
        link: "https://github.com/imanoop7/Deep-Drowsiness"
    },
    {
        title: "Fine-Tuning Llama-3 using Synthetic Data",
        description: "Implemented fine-tuning techniques on Llama-3 model using synthetic data, improving model performance for specific tasks.",
        image: "https://via.placeholder.com/300x200.png?text=Llama-3",
        link: "https://github.com/imanoop7/finetunnig-using-synthetic-data"
    },
    {
        title: "Self Corrective Coding Assistant",
        description: "Created an AI-powered coding assistant capable of self-correction, enhancing developer productivity and code quality.",
        image: "https://via.placeholder.com/300x200.png?text=Coding+Assistant",
        link: "https://github.com/imanoop7/self-corrective-codding-assistant"
    },
    {
        title: "CNN-from-Scratch",
        description: "A Convolutional Neural Network implemented from scratch using NumPy. This project includes a custom CNN architecture for recognizing handwritten digits from the MNIST dataset.",
        image: "https://via.placeholder.com/300x200.png?text=CNN",
        link: "https://github.com/imanoop7/CNN-from-Scratch"
    },
    {
        title: "UNet-from-Scratch-using-Python",
        description: "Implementation of the UNet architecture from scratch using Python and PyTorch, demonstrating deep learning concepts in image segmentation.",
        link: "https://github.com/imanoop7/UNet-from-Scratch-using-Python-and-Pytorch",
        image: "https://via.placeholder.com/300x200.png?text=UNET"
    }
];

// Professional experience data
const experience = [
    {
        company: "SAG Infotech Pvt. Ltd.",
        role: "Data Scientist & AI Engineer",
        duration: "March 2024 - Present",
        achievements: [
            "Develop and deploy end-to-end AI solutions across various domains, including designing and implementing deep learning models such as Transformers",
            "Working with cross-functional teams to ensure alignment on project goals and deliverables",
            "Developed and tested over 5 GenAI Proof of Concepts (POCs), covering various model types and frameworks.",
            "Containerized applications with Docker and deployed on Azure for scalable and efficient cloud operations."
        ]
    },
    {
        company: "Celebal Technologies",
        role: "Associate Data Scientist",
        duration: "April 2023 - Dec 2023",
        achievements: [
            "Developed end-to-end machine learning models, including data scraping, cleaning from scratch, for custom use cases",
            "Integrating the trained model with various APIs for testing, integration, and deployment purposes",
            "Streamlined hiring processes with AI-driven candidate selection, resume recommendation, and avatar-based interviews using Azure Logic Apps.",
            "Developed an email classification and automated response system leveraging GPT-4 and AzureOpenAI for personalized replies."
        ]
    }
];

// Medium articles data
const mediumArticles = [
    {
        title: "Natural Language Processing — All In One",
        description: "An Beginner Introduction, about Natural Language Processing with code",
        link: "https://medium.com/@shrawan662000/natural-language-processing-all-in-one-a0f29ea4ef15",
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*UOZCizELgJy-gHsw"
    },
    {
        title: "Flask API for Data Scientist",
        description: " It's comprehensive and provides a clear overview of creating a Flask API, including the usage of HTTP methods like GET and POST, and the nuances of running Flask applications in both development and production environments.",
        link: "https://medium.com/@shrawan662000/flask-api-for-data-scientist-fcbe26da641e",
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*9CtZ7DV7J2zxyqDti-0j7w.png"
    },
    {
        title: "Generative AI: Zero to Hero",
        description: "The article highlights how Generative AI, particularly through LangChain, is transforming industries by enabling the creation of advanced applications. LangChain’s modular components support a wide array of functionalities, ranging from document analysis to chatbot creation, ultimately improving business outcomes and user experiences.",
        link: "https://medium.com/@shrawan662000/generative-ai-zero-to-hero-eda44b17bf72",
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*0awb2JfyWSrlTBdTzIZmng.jpeg"
    }
]

// Function to create project cards
function createProjectCards() {
    const projectGrid = document.getElementById('project-grid');
    projectGrid.innerHTML = ''; // Clear existing content
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        card.addEventListener('click', () => {
            window.open(project.link, '_blank');
        });
        projectGrid.appendChild(card);
    });
}

// Function to create experience section
function createExperienceSection() {
    const experienceSection = document.getElementById('experience');
    // Clear existing content to prevent duplication
    experienceSection.innerHTML = '<h2>Professional Experience</h2>';
    
    const experienceContainer = document.createElement('div');
    experienceContainer.className = 'experience-container';

    experience.forEach(job => {
        const jobDiv = document.createElement('div');
        jobDiv.className = 'job';
        jobDiv.innerHTML = `
            <h3>${job.company} - ${job.role}</h3>
            <p>${job.duration}</p>
            <ul>
                ${job.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
        `;
        experienceContainer.appendChild(jobDiv);
    });

    experienceSection.appendChild(experienceContainer);
}

// Function to create Medium article cards
function createMediumArticleCards() {
    const articleGrid = document.getElementById('article-grid');
    articleGrid.innerHTML = ''; // Clear existing content
    mediumArticles.forEach(article => {
        const card = document.createElement('div');
        card.className = 'article-card';
        card.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
        `;
        card.addEventListener('click', () => {
            window.open(article.link, '_blank');
        });
        articleGrid.appendChild(card);
    });
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    // Here you would typically send this data to a server
    console.log("Form submitted:", { name, email, message });
    alert("Thank you for your message! I'll get back to you soon.");
    form.reset();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    createProjectCards();
    createExperienceSection();
    createMediumArticleCards();
    document.getElementById('contact-form').addEventListener('submit', handleFormSubmission);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add this function at the end of the file
function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        document.getElementById("job-title").innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';
        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
        }, 100);
    } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
    }
}

// Start the typewriter effect
document.addEventListener('DOMContentLoaded', function() {
    typeWriter("Data Scientist | AI Engineer", 0, function() {
        // typeWriter function callback
    });
    createProjectCards();
    createExperienceSection();
    createMediumArticleCards();
    createLatestItems();
    createUpcomingItems();
});

// Add this to your existing DOMContentLoaded event listener
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll-to-top").style.display = "block";
    } else {
        document.getElementById("scroll-to-top").style.display = "none";
    }
}

document.getElementById("scroll-to-top").onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('cta-button')) {
        console.log('Button clicked:', e.target.href);
    }
});

const articles = [
    {
        title: "A Deep Dive into Retrieval-Augmented Generation (RAG) with HyDE: How to Enhance Your AI's Response Quality",
        description: "An in-depth exploration of Retrieval-Augmented Generation (RAG) using Hypothetical Document Embeddings (HyDE) to improve AI response quality.",
        link: "https://medium.com/@mauryaanoop3/a-deep-dive-into-retrieval-augmented-generation-rag-with-hyde-how-to-enhance-your-ais-response-4d7ac0b8c200",
        type: "Article"
    },
    {
        title: "Highlighting and Annotating PDFs on UI Using Streamlit for Retrieval-Augmented Generation (RAG)",
        description: "An article detailing how to build an AI-powered document assistant using Streamlit and RAG, focusing on PDF highlighting and annotation.",
        link: "https://medium.com/@mauryaanoop3/from-pdfs-to-answers-building-an-ai-powered-document-assistant-with-streamlit-and-rag-bb3cd9478937",
        type: "Article"
    },
    {
        title: "My Journey as a Beginner: Implementing Research Papers from Scratch",
        description: "An article detailing my experience and insights gained from implementing complex research papers as a beginner in implementing research papers from scratch.",
        link: "https://medium.com/@mauryaanoop3/my-journey-as-a-beginner-implementing-research-papers-from-scratch-15d88ba2a819",
        type: "Article"
    }
];

const latestItems = [
    {
        title: "Natural Language Processing — All In One",
        description: "An Beginner Introduction, about Natural Language Processing with code",
        link: "https://medium.com/@shrawan662000/natural-language-processing-all-in-one-a0f29ea4ef15",
        type: "Article"
    },
    {
        title: "Hands on LLMs",
        description: "We are exploring and implementing various techniques in Natural Language Processing (NLP) and Large Language Models (LLMs), including tokenization, embeddings, transformers, text classification, clustering, prompt engineering, advanced generation methods, multimodal models, text embeddings, and fine-tuning.",
        link: "https://github.com/Shrawan662000/Hands-on-LLMs",
        type: "Project"
    },
    {
        title: "Content Writer AI Agent",
        description: "We are exploring and implementing AI agents using CrewAI tools, where we defined the tasks and their corrosponding agents",
        link: "https://github.com/Shrawan662000/AI-Agents-Crew-AI-",
        type: "Project"
    }
];

function createLatestItems() {
    const container = document.getElementById('latest-content');
    container.innerHTML = ''; // Clear existing content
    latestItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'latest-item';
        itemDiv.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <a href="${item.link}" target="_blank" class="cta-button">${item.type === 'Project' ? 'View Project' : 'Read Article'}</a>
        `;
        container.appendChild(itemDiv);
    });
}

// Update the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    typeWriter("Data Scientist | AI Engineer", 0, function() {
        // typeWriter function callback
    });
    createProjectCards();
    createExperienceSection();
    createMediumArticleCards();
    createLatestItems();
});
