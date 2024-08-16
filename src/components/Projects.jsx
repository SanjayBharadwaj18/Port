import React from 'react';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                <div className="project-item">
                    <h3>Project Kavach</h3>
                    <p>development of a website
                        for a client who has enlisted our services for their company. Utilizing React for the frontend and Node.js for the
                        backend, alongside other essential tools tailored to the project’s needs, we’re progressing steadily. This ongoing
                        project is anticipated to reach completion by the end of August.development of a website
                        for a client who has enlisted our services for their company. Utilizing React for the frontend and Node.js for the
                        backend, alongside other essential tools tailored to the project’s needs, we’re progressing steadily. This ongoing
                        project is anticipated to reach completion by the end of August.</p>
                    <a href="https://github.com/SanjayBharadwaj18/KVF.git" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
                <div className="project-item">
                    <h3>ID card Scanner</h3>
                    <p>This project involves capturing images from an external camera source and subsequently utilizing
                        EASY OCR and Pytesseract for text extraction. The extracted text is then processed in the backend to manage the
                        data effectively.
                    </p>
                    <a href="https://github.com/SanjayBharadwaj18/IDcard.git" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
                <div className="project-item">
                    <h3>Income classification</h3>
                    <p>The Income Classification AI/ML project aims to predict whether an individual's income exceeds a specific threshold using features like age, education, and occupation. It demonstrates skills in data preprocessing, model selection, and classification techniques.
                    </p>
                    <a href="https://github.com/SanjayBharadwaj18/Incomeclassification.git" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
