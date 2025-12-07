// translations.js - All language translations
const translations = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            experience: "Experience",
            education: "Education",
            certifications: "Certifications",
            contact: "Contact"
        },
        // Hero Section
        hero: {
            name: "Omar Laraje",
            title: "Business Intelligence & Data Science Engineering Student",
            description: "Business Intelligence & Data Science student turning complex data into clear decisions through Machine Learning, BI, and predictive analytics.",
            viewWork: "View My Work",
            getInTouch: "Get In Touch",
            downloadCV: "Download CV"
        },
        // About Section
        about: {
            title: "About Me",
            paragraph1: "I'm a 23-year-old Moroccan engineering student specializing in Business Intelligence and Data Science. Currently in my 3rd year of the Engineering cycle at ISMAGI in Rabat, I combine solid technical skills with business understanding to build reliable, data‑driven solutions.",
            paragraph2: "I enjoy designing intelligent systems that transform raw data into clear, actionable insights. From real-time monitoring dashboards and predictive maintenance models to NLP and computer vision projects, I focus on building solutions that are both technically robust and useful for decision-makers."
        },
        // Skills Section
        skills: {
            title: "Technical Skills",
            programming: "Programming & Development",
            dataScience: "Data Science & ML",
            biAnalytics: "BI & Analytics"
        },
        // Projects Section
        projects: {
            title: "Featured Projects",
            filterAll: "All",
            filterPython: "Python",
            filterPowerBI: "Power BI",
            filterML: "Machine Learning",
            filterWeb: "Web Development",
            filterETL: "ETL",
            seeMore: "See More",
            seeLess: "See Less",
            project1: {
                title: "ISMAGI Assistant (Streamlit App)",
                description: "AI-powered assistant built with Streamlit, based on a structured knowledge base and intent recognition. Helps ISMAGI students quickly access information about schedules, professors, programs, and school news through an intuitive conversational interface."
            },
            project2: {
                title: "Fake News Detection App",
                description: "End-to-end NLP application using Kaggle news datasets, TF-IDF text vectorization and Naive Bayes / Logistic Regression classifiers. Deployed as a Streamlit web app with a clean UI, structured around data/, models/, and utils/ modules for maintainable ML workflows."
            },
            project3: {
                title: "Real-Time Power Plant Monitoring",
                description: "Business Intelligence solution using SQL Server and Power BI to monitor a power plant database (CentraleMonitoring). Built a 5-page dashboard (overview, detailed KPIs, real-time view, comparisons, technical analysis) to support operational and strategic decisions."
            },
            project4: {
                title: "Predictive Maintenance Platform",
                description: "Machine Learning project combining SQL Server, Python and Streamlit to predict equipment failures and remaining useful life (RUL). Designed end-to-end pipeline from data preparation to model deployment, with interactive visualizations for maintenance teams."
            },
            project5: {
                title: "SmartPresence – Student Attendance with CNN",
                description: "Computer vision system using Convolutional Neural Networks (CNN) to automate student attendance tracking from images. Implemented image preprocessing, model training and evaluation to build a proof-of-concept for smart presence management."
            },
            project6: {
                title: "2D Endless Runner Game",
                description: "Arcade-style 2D endless runner game developed in Python with Pygame. Implemented collision detection, score tracking, increasing difficulty and polished visuals to learn game loops and event-driven programming."
            },
            project7: {
                title: "Big Data Engineering Labs",
                description: "Hands-on labs using Kafka, Hadoop and Spark to build distributed data processing pipelines. Implemented a wordcount pipeline and other streaming/batch processing workflows to understand Big Data and message-driven architectures.",
            },
            project8: {
                title: "Recruitment Platform (Team Project)",
                description: "Recruitment management website built in a team of four (Cybersecurity, AI, Development, BI). Features job posting, candidate management, and analytics on applications and hiring funnels, with a focus on security and scalable architecture."
            }
        },
        // Education Section
        education: {
            title: "Educational Journey",
            degree1: {
                year: "2025 (Current)",
                title: "Engineering Cycle – Business Intelligence & Data Science (3rd Year)",
                school: "ISMAGI, Rabat",
                description: "Engineering studies focused on Business Intelligence, Data Science, and Machine Learning, with projects in predictive analytics, BI dashboards, and data engineering."
            },
            degree2: {
                year: "2024",
                title: "Licence en Développement Web & Mobile",
                school: "ISMAGI",
                description: "Comprehensive training in modern web and mobile application development."
            },
            degree3: {
                year: "2023",
                title: "Diplôme Technicien Spécialisé - Développement Full-Stack",
                school: "ISTAG Bab Tizimi, Meknès",
                description: "Studied MySQL, JavaScript, Laravel, PHP, React and full-stack development practices."
            },
            degree4: {
                year: "2023",
                title: "BAC Physics-Chemistry",
                school: "Mention Assez Bien",
                description: "Scientific foundation with focus on analytical thinking and problem-solving."
            }
        },
        // Experience Section
        experience: {
            title: "Work Experience",
            job1: {
                period: "2024 - Present",
                title: "Data Science Intern",
                company: "MASEN",
                description: "Contributed to data analysis and business intelligence initiatives: building dashboards, exploring predictive models and supporting decision-making for energy monitoring systems."
            },
            job2: {
                period: "2025",
                title: "PFE Internship (Seeking)",
                company: "Data Science / BI / Data Engineering",
                description: "Actively looking for a PFE internship starting February–March 2025 in Data Science, Business Intelligence or Data Engineering to apply my skills on real-world industrial projects."
            }
        },
        // Certifications Section
        certifications: {
            title: "Certifications & Achievements",
            cert1: {
                title: "Power BI Beginner to Pro",
                issuer: "Pragmatic Works",
                period: "Oct 2025 - Dec 2035"
            },
            cert2: {
                title: "Generative AI Fundamentals",
                issuer: "Databricks",
                period: "Jul 2025 - Jul 2027"
            },
            cert3: {
                title: "Dataiku Core Designer",
                issuer: "Dataiku",
                period: "Jun 2025"
            }
        },
        // Contact Section
        contact: {
            title: "Let's Connect",
            formTitle: "Send me a message",
            infoTitle: "Get in touch",
            linkedin: "LinkedIn",
            github: "GitHub",
            location: "Location",
            currentRole: "Current Role",
            connectMe: "Connect with me",
            viewCode: "View my code",
            locationValue: "Rabat, Morocco",
            roleValue: "Business Intelligence & Data Science Engineering Student (3rd Year)",
            formName: "Name",
            formNamePlaceholder: "Your name",
            formEmail: "Email",
            formEmailPlaceholder: "your.email@example.com",
            formSubject: "Subject",
            formSubjectPlaceholder: "Subject",
            formMessage: "Message",
            formMessagePlaceholder: "Your message",
            formSubmit: "Send Message",
            formSuccess: "Thank you! Your message has been sent.",
            formError: "Error sending message. Please try again."
        },
        // Footer
        footer: {
            rights: "Built with passion for data and innovation.",
            subtitle: "Business Intelligence & Data Science Student | BI & ML Enthusiast"
        }
    },
    fr: {
        // Navigation
        nav: {
            home: "Accueil",
            about: "À propos",
            skills: "Compétences",
            projects: "Projets",
            experience: "Expérience",
            education: "Formation",
            certifications: "Certifications",
            contact: "Contact"
        },
        // Hero Section
        hero: {
            name: "Omar Laraje",
            title: "Étudiant en Ingénierie Business Intelligence & Data Science",
            description: "Étudiant en Business Intelligence & Data Science, je transforme les données complexes en décisions claires grâce au Machine Learning, à la BI et à l'analyse prédictive.",
            viewWork: "Voir mes projets",
            getInTouch: "Me contacter",
            downloadCV: "Télécharger CV"
        },
        // About Section
        about: {
            title: "À propos de moi",
            paragraph1: "Je suis un étudiant marocain de 23 ans spécialisé en Business Intelligence et Data Science. Actuellement en 3ème année du cycle d'ingénierie à l'ISMAGI à Rabat, je combine compétences techniques et compréhension métier pour concevoir des solutions fiables et orientées données.",
            paragraph2: "Je conçois des systèmes intelligents qui transforment les données brutes en informations claires et actionnables. Entre tableaux de bord temps réel, modèles de maintenance prédictive, projets NLP et vision par ordinateur, je cherche toujours à créer des solutions utiles pour la prise de décision."
        },
        // Skills Section
        skills: {
            title: "Arsenal Technique",
            programming: "Programmation & Développement",
            dataScience: "Data Science & ML",
            biAnalytics: "BI & Analytique"
        },
        // Projects Section
        projects: {
            title: "Projets en vedette",
            filterAll: "Tous",
            filterPython: "Python",
            filterPowerBI: "Power BI",
            filterML: "Machine Learning",
            filterWeb: "Développement Web",
            filterETL: "ETL",
            seeMore: "Voir plus",
            seeLess: "Voir moins",
            project1: {
                title: "Assistant ISMAGI (Application Streamlit)",
                description: "Assistant intelligent développé avec Streamlit, basé sur une base de connaissances structurée et la reconnaissance d'intentions. Permet aux étudiants de l'ISMAGI d'accéder rapidement aux informations sur les emplois du temps, professeurs, filières et actualités de l'école via une interface conversationnelle."
            },
            project2: {
                title: "Application de Détection de Fake News",
                description: "Application NLP de bout en bout utilisant des jeux de données Kaggle, vectorisation TF-IDF et classifieurs Naive Bayes / Régression Logistique. Déployée sous forme d'application Streamlit avec une interface claire, structurée autour des dossiers data/, models/ et utils/ pour un pipeline ML maintenable."
            },
            project3: {
                title: "Suivi Temps Réel d'une Centrale Électrique",
                description: "Solution de Business Intelligence basée sur SQL Server et Power BI pour le suivi d'une base de données de centrale (CentraleMonitoring). Développement d'un dashboard 5 pages (vue d'ensemble, indicateurs détaillés, temps réel, comparaisons, analyse technique) pour soutenir les décisions opérationnelles et stratégiques."
            },
            project4: {
                title: "Plateforme de Maintenance Prédictive",
                description: "Projet de Machine Learning combinant SQL Server, Python et Streamlit pour prédire les pannes et la durée de vie résiduelle (RUL) des équipements. Mise en place d'une chaîne complète de préparation de données, modélisation et visualisation pour aider les équipes de maintenance."
            },
            project5: {
                title: "SmartPresence – Gestion des Absences avec CNN",
                description: "Système de vision par ordinateur utilisant des réseaux de neurones convolutifs (CNN) pour automatiser le suivi de présence des étudiants à partir d'images. Implémentation du prétraitement, de l'entraînement et de l'évaluation pour une preuve de concept de présence intelligente."
            },
            project6: {
                title: "Jeu 2D Endless Runner",
                description: "Jeu d'arcade 2D de type endless runner développé en Python avec Pygame. Implémentation de la détection de collision, du système de score, de la montée en difficulté et d'un rendu soigné pour apprendre les boucles de jeu et la programmation événementielle."
            },
            project7: {
                title: "Labs d'Ingénierie Big Data",
                description: "Travaux pratiques avec Kafka, Hadoop et Spark pour construire des pipelines de traitement distribué. Implémentation d'un pipeline de wordcount et d'autres flux batch / streaming pour comprendre les architectures Big Data et orientées messages.",
            },
            project8: {
                title: "Plateforme de Recrutement (Projet en Équipe)",
                description: "Site web de gestion de recrutement développé en équipe de quatre (cybersécurité, IA, développement, BI). Fonctionnalités de publication d'offres, gestion de candidatures et analytics sur les processus de recrutement, avec une attention particulière à la sécurité et à la scalabilité."
            }
        },
        // Education Section
        education: {
            title: "Parcours Éducatif",
            degree1: {
                year: "2025 (Actuel)",
                title: "Cycle d'Ingénieur – Business Intelligence & Data Science (3ème Année)",
                school: "ISMAGI, Rabat",
                description: "Études d'ingénierie orientées Business Intelligence, Data Science et Machine Learning, avec des projets en analytics prédictif, tableaux de bord BI et ingénierie de données."
            },
            degree2: {
                year: "2024",
                title: "Licence en Développement Web & Mobile",
                school: "ISMAGI",
                description: "Formation complète en développement d'applications web et mobiles modernes."
            },
            degree3: {
                year: "2023",
                title: "Diplôme Technicien Spécialisé - Développement Full-Stack",
                school: "ISTAG Bab Tizimi, Meknès",
                description: "Étude de MySQL, JavaScript, Laravel, PHP, React et pratiques de développement full-stack."
            },
            degree4: {
                year: "2023",
                title: "BAC Physique-Chimie",
                school: "Mention Assez Bien",
                description: "Fondation scientifique avec focus sur la pensée analytique et la résolution de problèmes."
            }
        },
        // Experience Section
        experience: {
            title: "Expérience Professionnelle",
            job1: {
                period: "2024 - Présent",
                title: "Stagiaire Data Science",
                company: "MASEN",
                description: "Participation à des projets d'analyse de données et de business intelligence : création de tableaux de bord, exploration de modèles prédictifs et accompagnement de la prise de décision pour les systèmes de surveillance énergétique."
            },
            job2: {
                period: "2025",
                title: "Stage PFE (En Recherche)",
                company: "Data Science / BI / Data Engineering",
                description: "Actuellement à la recherche d'un stage PFE à partir de février–mars 2025 en Data Science, Business Intelligence ou Data Engineering afin d'appliquer mes compétences sur des cas réels en environnement industriel."
            }
        },
        // Certifications Section
        certifications: {
            title: "Certifications & Réalisations",
            cert1: {
                title: "Power BI Beginner to Pro",
                issuer: "Pragmatic Works",
                period: "Oct 2025 - Déc 2035"
            },
            cert2: {
                title: "Fondamentaux de l'IA Générative",
                issuer: "Databricks",
                period: "Juil 2025 - Juil 2027"
            },
            cert3: {
                title: "Dataiku Core Designer",
                issuer: "Dataiku",
                period: "Juin 2025"
            }
        },
        // Contact Section
        contact: {
            title: "Connectons-nous",
            formTitle: "Envoyez-moi un message",
            infoTitle: "Contactez-moi",
            linkedin: "LinkedIn",
            github: "GitHub",
            location: "Localisation",
            currentRole: "Statut Actuel",
            connectMe: "Me rejoindre",
            viewCode: "Voir mon code",
            locationValue: "Rabat, Maroc",
            roleValue: "Étudiant en Ingénierie Business Intelligence & Data Science (3ème Année)",
            formName: "Nom",
            formNamePlaceholder: "Votre nom",
            formEmail: "Email",
            formEmailPlaceholder: "votre.email@example.com",
            formSubject: "Sujet",
            formSubjectPlaceholder: "Sujet",
            formMessage: "Message",
            formMessagePlaceholder: "Votre message",
            formSubmit: "Envoyer le message",
            formSuccess: "Merci! Votre message a été envoyé.",
            formError: "Erreur lors de l'envoi du message. Veuillez réessayer."
        },
        // Footer
        footer: {
            rights: "Construit avec passion pour les données et l'innovation.",
            subtitle: "Étudiant en BI & Data Science | Passionné par la BI et le ML"
        }
    }
};