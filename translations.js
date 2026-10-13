// translations.js - All language translations
const translations = {
    en: {
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
        hero: {
            name: "Omar Laraje",
            title: "Business Intelligence & Data Science Engineer",
            description: "BI & Data Science Engineering graduate turning complex data into clear decisions through Machine Learning, analytics, and reliable data solutions.",
            viewWork: "View My Work",
            getInTouch: "Get In Touch",
            downloadCV: "Download CV"
        },
        about: {
            title: "About Me",
            paragraph1: "I'm a Moroccan Business Intelligence and Data Science Engineering graduate. I combine technical expertise with business understanding to deliver impactful, data-driven solutions.",
            paragraph2: "I enjoy designing intelligent systems that transform raw data into clear, actionable insights. From real-time monitoring dashboards and predictive maintenance models to NLP and computer vision projects, I focus on building solutions that are technically robust and useful for decision-makers."
        },
        skills: {
            title: "Technical Skills",
            programming: "Programming & Development",
            dataScience: "Data Science & ML",
            biAnalytics: "BI & Analytics"
        },
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
                title: "Purchasing Analytics - AdventureWorks",
                description: "Business Intelligence project using the AdventureWorks database for purchasing analysis. Implemented SSIS for ETL, SSAS for OLAP modeling, and Power BI dashboards to track expenses, analyze suppliers, and optimize purchasing."
            },
            project2: {
                title: "Banking Data Analysis - End-to-End BI",
                description: "Business Intelligence project using SQL Server, SSIS, SSAS, and Power BI to analyze banking activity. Includes an ETL pipeline, OLAP cube, and five-page dashboard covering transactions, customers, and branch performance."
            },
            project3: {
                title: "TalentMatch Platform",
                description: "Collaborative recruitment platform developed by a team across BI, AI, development, and cybersecurity. Provides job posting, candidate management, application tracking, and recruitment analytics."
            },
            project4: {
                title: "ISMAGI Assistant",
                description: "Conversational Streamlit application for ISMAGI students, based on a local knowledge base and intent recognition. Provides access to information about professors, schedules, news, and academic programs."
            },
            project5: {
                title: "DataBridge ETL",
                description: "Data processing and integration project using Talend. Extracts data from multiple sources, cleans and transforms it, and loads it into a SQL database through an end-to-end ETL pipeline."
            },
            project6: {
                title: "SmartPresence AI",
                description: "Computer vision system for school attendance using CNN, deep learning, Python, and OpenCV to detect student presence and automate attendance tracking."
            },
            project7: {
                title: "CRM - Commercial Management",
                description: "Custom CRM for Sicilia Cuisine, built with Laravel and MySQL to centralize customer management, quotations, and commercial tracking."
            },
            project8: {
                title: "Dolibarr Smart AI Chat",
                description: "AI-powered conversational assistant integrated with Dolibarr ERP. Built with Streamlit and Hugging Face LLMs, it lets users query ERP data in natural language through a modular and extensible architecture."
            },
            projectEdu: {
                title: "Education Absenteeism Analytics - Decision Support BI",
                description: "Business Intelligence project analyzing student absenteeism through global and management views. The Power BI solution tracks rates by gender, region, school, and time, using ETL, standardized indicators, KPIs, maps, trends, and detailed tables to support educational decisions.",
                details: "Structured educational data is integrated through an ETL pipeline, modeled for analysis, and presented in interactive dashboards for school administrators and education authorities."
            }
        },
        education: {
            title: "Educational Journey",
            degree1: {
                year: "2025 - Present",
                title: "Engineering Cycle - Business Intelligence & Data Science",
                school: "ISMAGI, Rabat",
                description: "Engineering studies focused on Business Intelligence, Data Science, Machine Learning, predictive analytics, BI dashboards, and data engineering."
            },
            degree2: {
                year: "2024",
                title: "Bachelor's Degree in Web & Mobile Development",
                school: "ISMAGI",
                description: "Comprehensive training in modern web and mobile application development."
            },
            degree3: {
                year: "2023",
                title: "Specialized Technician Diploma - Full-Stack Development",
                school: "ISTAG Bab Tizimi, Meknes",
                description: "Studied MySQL, JavaScript, Laravel, PHP, React, and full-stack development practices."
            },
            degree4: {
                year: "2023",
                title: "Baccalaureate in Physics-Chemistry",
                school: "Mention Assez Bien",
                description: "Scientific foundation with focus on analytical thinking and problem-solving."
            }
        },
        experience: {
            title: "Work Experience",
            job1: {
                period: "2024 - Present",
                title: "Data Science Intern",
                company: "MASEN",
                description: "Contributed to data analysis and business intelligence initiatives: building dashboards, exploring predictive models, and supporting decision-making for energy monitoring systems."
            },
            job2: {
                period: "2025",
                title: "PFE Internship",
                company: "Data Science / BI / Data Engineering",
                description: "Focused on applying data science, business intelligence, and data engineering skills to real-world industrial projects."
            }
        },
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
            roleValue: "BI & Data Science Engineering Graduate",
            formName: "Name",
            formNamePlaceholder: "Your name",
            formEmail: "Email",
            formEmailPlaceholder: "your.email@example.com",
            formSubject: "Subject",
            formSubjectPlaceholder: "Subject",
            formMessage: "Message",
            formMessagePlaceholder: "Your message",
            formSubmit: "Send Message",
            formSending: "Sending message...",
            formSuccess: "Thank you! Your message has been sent.",
            formError: "Error sending message. Please try again.",
            formValidationError: "Please complete all fields with valid information."
        },
        chatbot: {
            title: "Ask Omar AI",
            placeholder: "Ask about Omar's projects, skills, or experience...",
            send: "Send",
            endChat: "End chat",
            endNotice: "This conversation will be sent to the owner.",
            sending: "Sending conversation...",
            sentSuccess: "Conversation sent to the owner.",
            sendError: "Failed to send conversation. Please try again.",
            sendMissingUrl: "Sending endpoint is not configured.",
            noConversation: "No conversation to send yet.",
            welcome: "Hi! I'm Omar's portfolio assistant. Ask me anything about his profile, projects, or skills.",
            loading: "Thinking...",
            errorNoApiUrl: "Missing chatbot API URL configuration.",
            errorBackendConfig: "The chatbot backend is not configured yet.",
            errorRateLimit: "Too many messages. Please wait a moment and try again.",
            errorBadResponse: "Invalid chatbot response format.",
            errorGeneric: "Chatbot is unavailable right now. Please try again in a moment."
        },
        footer: {
            rights: "Built with passion for data and innovation.",
            subtitle: "BI & Data Science Engineer | Data & ML Enthusiast"
        }
    },
    fr: {
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
        hero: {
            name: "Omar Laraje",
            title: "Ingénieur en Business Intelligence & Data Science",
            description: "Ingénieur diplômé en BI & Data Science, je transforme les données complexes en décisions claires grâce au Machine Learning, à l'analytique et à des solutions data fiables.",
            viewWork: "Voir mes projets",
            getInTouch: "Me contacter",
            downloadCV: "Télécharger CV"
        },
        about: {
            title: "À propos de moi",
            paragraph1: "Je suis un ingénieur marocain diplômé en Business Intelligence et Data Science. Je combine expertise technique et compréhension métier pour concevoir des solutions fiables et orientées données.",
            paragraph2: "Je conçois des systèmes intelligents qui transforment les données brutes en informations claires et actionnables. Entre tableaux de bord temps réel, modèles de maintenance prédictive, projets NLP et vision par ordinateur, je cherche à créer des solutions utiles pour la prise de décision."
        },
        skills: {
            title: "Compétences techniques",
            programming: "Programmation & Développement",
            dataScience: "Data Science & ML",
            biAnalytics: "BI & Analytique"
        },
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
                title: "Analyse des Achats - AdventureWorks",
                description: "Projet de Business Intelligence basé sur AdventureWorks pour analyser les achats. Mise en place de SSIS pour l'ETL, SSAS pour la modélisation OLAP et Power BI pour suivre les dépenses, les fournisseurs et la performance des achats."
            },
            project2: {
                title: "Analyse Bancaire - BI de Bout en Bout",
                description: "Projet BI utilisant SQL Server, SSIS, SSAS et Power BI pour analyser l'activité bancaire. Il comprend un pipeline ETL, un cube OLAP et un tableau de bord de cinq pages sur les transactions, les clients et les agences."
            },
            project3: {
                title: "Plateforme TalentMatch",
                description: "Plateforme collaborative de recrutement développée par une équipe BI, IA, développement et cybersécurité. Elle propose la publication d'offres, la gestion des candidats, le suivi des candidatures et l'analytique du recrutement."
            },
            project4: {
                title: "Assistant ISMAGI",
                description: "Application conversationnelle Streamlit pour les étudiants de l'ISMAGI, basée sur une base de connaissances locale et la reconnaissance d'intentions. Elle facilite l'accès aux informations sur les professeurs, les emplois du temps, les actualités et les filières."
            },
            project5: {
                title: "DataBridge ETL",
                description: "Projet d'intégration et de traitement des données avec Talend. Extraction depuis plusieurs sources, nettoyage, transformation et chargement dans une base SQL via un pipeline ETL complet."
            },
            project6: {
                title: "SmartPresence AI",
                description: "Système de vision par ordinateur pour la présence scolaire utilisant CNN, deep learning, Python et OpenCV afin de détecter les étudiants et d'automatiser le suivi des absences."
            },
            project7: {
                title: "CRM - Gestion Commerciale",
                description: "CRM personnalisé pour Sicilia Cuisine, développé avec Laravel et MySQL afin de centraliser la gestion des clients, des devis et du suivi commercial."
            },
            project8: {
                title: "Dolibarr Smart AI Chat",
                description: "Assistant conversationnel basé sur l'IA et intégré à Dolibarr ERP. Développé avec Streamlit et des LLM Hugging Face, il permet d'interroger les données ERP en langage naturel grâce à une architecture modulaire et extensible."
            },
            projectEdu: {
                title: "Analyse de l'Absentéisme Scolaire - BI d'Aide à la Décision",
                description: "Projet BI consacré à l'analyse de l'absentéisme des étudiants avec des vues globale et de gestion. La solution Power BI suit les taux par genre, région, établissement et période grâce à l'ETL, des indicateurs standardisés, des KPI, des cartes, des tendances et des tableaux détaillés pour soutenir les décisions éducatives.",
                details: "Les données éducatives sont intégrées via un pipeline ETL, modélisées pour l'analyse et présentées dans des tableaux de bord interactifs destinés aux responsables scolaires et aux autorités éducatives."
            }
        },
        education: {
            title: "Parcours éducatif",
            degree1: {
                year: "2025 - Présent",
                title: "Cycle d'Ingénieur - Business Intelligence & Data Science",
                school: "ISMAGI, Rabat",
                description: "Études d'ingénierie orientées Business Intelligence, Data Science, Machine Learning, analytics prédictif, tableaux de bord BI et ingénierie de données."
            },
            degree2: {
                year: "2024",
                title: "Licence en Développement Web & Mobile",
                school: "ISMAGI",
                description: "Formation complète en développement d'applications web et mobiles modernes."
            },
            degree3: {
                year: "2023",
                title: "Diplôme de Technicien Spécialisé - Développement Full-Stack",
                school: "ISTAG Bab Tizimi, Meknès",
                description: "Étude de MySQL, JavaScript, Laravel, PHP, React et des pratiques de développement full-stack."
            },
            degree4: {
                year: "2023",
                title: "Baccalauréat Physique-Chimie",
                school: "Mention Assez Bien",
                description: "Base scientifique axée sur la pensée analytique et la résolution de problèmes."
            }
        },
        experience: {
            title: "Expérience professionnelle",
            job1: {
                period: "2024 - Présent",
                title: "Stagiaire Data Science",
                company: "MASEN",
                description: "Participation à des projets d'analyse de données et de Business Intelligence: création de tableaux de bord, exploration de modèles prédictifs et accompagnement de la prise de décision pour les systèmes de surveillance énergétique."
            },
            job2: {
                period: "2025",
                title: "Stage PFE",
                company: "Data Science / BI / Data Engineering",
                description: "Objectif: appliquer des compétences en Data Science, Business Intelligence et Data Engineering sur des projets industriels réels."
            }
        },
        certifications: {
            title: "Certifications & réalisations",
            cert1: {
                title: "Power BI Beginner to Pro",
                issuer: "Pragmatic Works",
                period: "Oct 2025 - Déc 2035"
            },
            cert2: {
                title: "Fondamentaux de l'IA générative",
                issuer: "Databricks",
                period: "Juil 2025 - Juil 2027"
            },
            cert3: {
                title: "Dataiku Core Designer",
                issuer: "Dataiku",
                period: "Juin 2025"
            }
        },
        contact: {
            title: "Connectons-nous",
            formTitle: "Envoyez-moi un message",
            infoTitle: "Contactez-moi",
            linkedin: "LinkedIn",
            github: "GitHub",
            location: "Localisation",
            currentRole: "Statut actuel",
            connectMe: "Me rejoindre",
            viewCode: "Voir mon code",
            locationValue: "Rabat, Maroc",
            roleValue: "Ingénieur diplômé en BI & Data Science",
            formName: "Nom",
            formNamePlaceholder: "Votre nom",
            formEmail: "Email",
            formEmailPlaceholder: "votre.email@example.com",
            formSubject: "Sujet",
            formSubjectPlaceholder: "Sujet",
            formMessage: "Message",
            formMessagePlaceholder: "Votre message",
            formSubmit: "Envoyer le message",
            formSending: "Envoi du message...",
            formSuccess: "Merci ! Votre message a été envoyé.",
            formError: "Erreur lors de l'envoi du message. Veuillez réessayer.",
            formValidationError: "Veuillez compléter tous les champs avec des informations valides."
        },
        chatbot: {
            title: "Assistant IA d'Omar",
            placeholder: "Posez une question sur les projets, compétences ou expériences d'Omar...",
            send: "Envoyer",
            endChat: "Terminer le chat",
            endNotice: "Cette conversation sera envoyée au propriétaire.",
            sending: "Envoi de la conversation...",
            sentSuccess: "Conversation envoyée au propriétaire.",
            sendError: "Échec de l'envoi de la conversation. Veuillez réessayer.",
            sendMissingUrl: "Le point d'envoi n'est pas configuré.",
            noConversation: "Aucune conversation à envoyer pour le moment.",
            welcome: "Bonjour ! Je suis l'assistant du portfolio d'Omar. Posez-moi vos questions sur son profil, ses projets ou ses compétences.",
            loading: "Je réfléchis...",
            errorNoApiUrl: "Configuration de l'URL API du chatbot manquante.",
            errorBackendConfig: "Le backend du chatbot n'est pas encore configuré.",
            errorRateLimit: "Trop de messages. Veuillez patienter un moment puis réessayer.",
            errorBadResponse: "Format de réponse du chatbot invalide.",
            errorGeneric: "Le chatbot est indisponible pour le moment. Veuillez réessayer dans un instant."
        },
        footer: {
            rights: "Construit avec passion pour les données et l'innovation.",
            subtitle: "Ingénieur BI & Data Science | Passionné par la Data et le ML"
        }
    }
};
