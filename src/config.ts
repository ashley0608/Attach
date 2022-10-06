/* Type Imports - DO NOT TOUCH */
import { Sections } from "./app/App";
import { Link } from "./app/links";
import { Experience } from "./app/experinces";
import { ExtendedProfile, Images } from "./app/profile";
/* Type Imports - DO NOT TOUCH */

/*
Profile and banner are optional! Just replace the file in the public folder if you want it, or delete them from the folder!

 - Profile:
   - Aspect Ratio: 1/1
   - Dimensions: 120 x 120 (it is resized automatically!)
 - Banner:
   - Aspect Ratio: 7/2
   - Dimensions: 455 x 130 (it is resized automatically!)
*/
export const images = {
    profilePng: "/profile.png",
    bannerPng: "/banner.png",
} as Images;

import { getRandomTheme } from "./color_themes";
export const colors = getRandomTheme();
export const random_theme_button = true;

export const base_profile = {
    first_name: "Ashley",
    last_name: "Mendoza",
    subtitle: "Aspiring Software Developer",
    bio: ["Miami, FL", "Florida International University", "Majoring in MIS and Finance", "GPA 3.88"],
    name() {
        return this.first_name + " " + this.last_name;
    },
};

export const extended_profile = {
    gender: "Female", // You can input any gender
    username: "ashley.0608", // You can opt out my commenting either of these
} as ExtendedProfile;

export const skillsList = [
    "Time management",
    "Communication",
    "Adaptability",
    "Problem-solving",
    "Teamwork",
    "Creativity",
    "Leadership",
    "Interpersonal skills",
    "Work ethic",
    "Attention to detail",
    "Stress management",
    "Organization",
    "Prioritizing",
    "Planning",
    "Goal setting",
    "Verbal communication",
    "Written communication",
    "Presentation",
    "Constructive feedback",
    "Active listening",
    "Self-management",
    "Optimism",
    "Calmness",
    "Analysis",
    "Self-motivation",
];

/**
There are no required links, but each link must have:
 - url: string;
 - title: string;
 They can optionally have:
 - icon: string;
 - content: string;
 If no icon is supplied, it will use a chain icon by default
 If no content is supplied, it will use the url by default
 */
const projects_linksList = [
    {
        url: "https://google.com",
        title: "Portfolio",
        content: "By default, content is the url (view next to continue)",
    },
    {
        url: "https://google.com",
        title: "Todo App",
        content: "but you can force content by specifying like this!",
    },
    {
        url: "https://google.com",
        title: "And more!",
    },
] as Link[];

const experiences = [
    {
        company: "FIU Division of Information Technology",
        meta: [
            "Student IT Computer Lab Assistant",
            "March 2022 - Present",
            "Miami, FL",
        ],
        desc: [
            "Provide technical support to the users of the Division of Information Technology Computing Labs.",
            "Assist in the installation of computer systems, peripherals, and software applications.",
            "Troubleshoot hardware and software malfunctions.",
        ],
    },
    {
        company: "Seniors R Us LLC",
        meta: [
            "Administrative Assistant",
            "August 2020 - September 2021",
            "Sunrise, FL",
        ],
        desc: [
            "Tracked expenses and documented records using Quickbooks and Microsoft Excel to improve financial flow.",
            "Maintained the office database and filing system up to date.",
            "Provided administrative support to ensure efficient operation of office.",
        ],
    },
    {
        company: "Kristi House",
        meta: [
            "Volunteer",
            "June 2021 - August 2021",
            "Miami, FL",
        ],
        desc: [
            "Kept facility organized and well-maintained to best meet program needs.",
            "Created a safe environment for children to feel more comfortable.",
            "Assisted staff to ensure operations are running smoothly.",
        ],
    },
    {
        company: "Young at Art Children`s Museum",
        meta: [
            "Volunteer",
            "June 2018 - July 2019",
            "Davie, FL",
        ],
        desc: [
            "Offered further details about the exhibits to educate visitors.",
            "Exceeded customer satisfaction by finding creative solutions to problems.",
            "Worked together with other volunteers and staff to keep museum operations in check.",
        ],
    },
] as Experience[];

const games_linksList = [
    {
        url: "https://google.com",
        title: "Game 1",
    },
    {
        url: "https://google.com",
        title: "Game 2",
        content: "But I have more!",
    },
] as Link[];

const contactMe_linksList = [
    {
        url: "https://www.linkedin.com/in/ashley-mendoza-100334239",
        icon: "/icons/linkedin.svg",
        title: "LinkedIn",
    },
    {
        url: "https://github.com/ashley0608",
        icon: "/icons/github.svg",
        title: "GitHub",
    },
    {
        url: "mailto: ashley.0608@icloud.com",
        title: "Email",
        icon: "/icons/email.svg",
        content: "ashley.0608@icloud.com",
    },
] as Link[];

/**
 You can customize the order here (if you only want one section, the dropdown will go away and format nicely)
 */
export const sections = {
    // An example of a button. This button is a resume download
    Resume: {
        url: "/Resume.docx",
        download_name: `${base_profile.name()}_Resume.pdf`,
    },
    // An example of a list of projects, that is opened on load
    Projects: {
        links: projects_linksList,
        default_opened: true,
    },
    // An example of an experience section
    "Work Experience": {
        experiences: experiences,
    },
    Games: {
        links: games_linksList,
    },
    "Contact Me": {
        links: contactMe_linksList,
    },
} as Sections;

export const webpage_config = {
    title: `${base_profile.name()}'s |attach|`,
    desc: `An |attach| for ${base_profile.name()}`,
    keywords: `New Grad, Portfolio, Projects, Developer, Coder, Programmer, Programming, Languages, Software, ${base_profile.name()}`,
};
