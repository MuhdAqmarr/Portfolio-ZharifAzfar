// Resume Data - VERBATIM from provided resume
// DO NOT MODIFY ANY TEXT - This is the single source of truth

export const resumeData = {
    personal: {
        name: 'MUHAMMAD ZHARIF AZFAR BIN NORHASLI',
        address: '907, Jalan Semarak 16, Taman Panchor Jaya, 70400 Seremban.',
        mobile: '01123424680',
        email: 'zharifazfar61@gmail.com',
    },

    summary: `I am a Multimedia Computing student with a passion for creating engaging digital experiences.
Throughout my academic journey, I've worked with tools like Unity, Unreal Engine, and Construct to
explore interactive media and creative technologies. My background in graphic design and content
creation has helped me develop both technical and creative skills, while internships and part-time roles
have strengthened my communication, adaptability, and teamwork. I'm excited to contribute to projects
that combine design, technology, and user experience in meaningful ways.`,

    education: [
        {
            degree: 'Bachelor of Computer Science (Hons.) Multimedia Computing',
            period: '2023–2025 (Expected)',
            institution: 'Universiti Teknologi Mara Kampus Jasin (UiTM)',
            cgpa: 'Current CGPA:2.58',
            subjects: [
                'Game Programming',
                'Virtual Reality',
                'Computer Graphics',
            ],
        },
        {
            degree: 'Diploma in Computer Science',
            period: '2020–2023',
            institution: 'Universiti Teknologi Mara Kampus Jasin (UiTM)',
            cgpa: 'CGPA: 3.44',
            subjects: [
                'Object Oriented Programming',
                'Interactive Multimedia',
                'Information System Development',
            ],
        },
    ],

    professionalCourses: [
        {
            title: 'Google Analytics',
            date: 'October 2022',
            provider: 'Google Skillshop',
            type: 'Online course',
            description: `Completed Google Analytics course via Google Skillshop, gaining key insights into website traffic and
user behavior.`,
        },
    ],

    workingExperiences: [
        {
            role: 'Restaurant Server (PartTime)',
            company: 'Ayam Gepuk Tok Mat',
            location: 'Seremban, Negeri Sembilan',
            period: 'March 2025',
            duration: '1 months',
            responsibilities: [
                'Greeted customers as they arrive at the restaurant, took their orders, and processed payments.',
                'Prepared and served food and drinks in a timely and efficient manner.',
                'Maintained a clean and organized work environment, including keeping the dining area and kitchen clean and free of clutter.',
            ],
        },
    ],

    personalStatement: [
        {
            role: 'Graphic Design (Internship)',
            company: 'Zazira Movers',
            location: 'Seremban, Negeri Sembilan',
            period: 'September 2022 – February 2023',
            duration: '6 months',
            responsibilities: [
                "Designed posters for company's social media using canva.",
                "Made a modification to company's website using WordPress and Wix.com.",
                "Created content for for company's TikTok and Youtube using Capcut and Adobe Premiere Pro.",
                "Wrote blogs that relevant about the company for company's website",
            ],
        },
    ],

    projects: [
        {
            title: 'VR Fitness Trainer: Enhancing the Effectiveness of Physical Exercise Using\nVirtual Reality Technology',
            type: 'Final Year Project',
            period: '2024 - 2025',
            description: [
                'Developed a non-immersive VR fitness trainer to improve exercise effectiveness and accessibility.',
                'Used Unity for creating the VR environment.',
                'Made interactive prompts for the user to interact with the NPC.',
                'Ensure the app is accessible on common devices like computers and laptops.',
            ],
        },
    ],

    activities: [
        {
            title: 'Active Member',
            organization: 'Multimedia Computing Society',
            location: 'Universiti Teknologi Mara Kampus Jasin',
            period: '2023-',
        },
        {
            title: 'AJK Multimedia',
            program: 'Program SULAM: Memperkasa Daya Kreativiti Melalui Construct 3',
            location: 'SMK Munshi Abdullah, Melaka',
            date: 'December 2024',
        },
    ],

    skills: {
        proficiency: [
            'Unity',
            'Unreal Engine',
            'Construct',
            'Canva',
            'Adobe Premiere Pro',
        ],
        softSkills: [
            'Root Cause Analysis',
            'Effective Communication',
            'Adaptability',
            'Supportive and Flexible in Team',
        ],
        languageProficiency: [
            { language: 'Bahasa Malaysia', level: 'Excellent' },
            { language: 'English', level: 'Intermediate' },
        ],
    },

    additionalInfo: {
        drivingLicense: 'B2, D',
        ownTransport: 'Yes',
    },
} as const

export type ResumeData = typeof resumeData
