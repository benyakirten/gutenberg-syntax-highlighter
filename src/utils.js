// import prism from "react-syntax-highlighter/dist/cjs/styles/prism/prism";
// import darcula from "react-syntax-highlighter/dist/cjs/styles/prism/darcula";
// import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
// import materialDark from "react-syntax-highlighter/dist/cjs/styles/prism/material-dark";
// import duotoneSpace from "react-syntax-highlighter/dist/cjs/styles/prism/duotone-space";
// import duotoneLight from "react-syntax-highlighter/dist/cjs/styles/prism/duotone-light";

// import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
// import ts from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
// import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
// import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
// import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
// import graphql from "react-syntax-highlighter/dist/cjs/languages/prism/graphql";
// import php from "react-syntax-highlighter/dist/cjs/languages/prism/php";
// import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
// import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";

export const encodeLang = code => {
    return code
        .replace(/</g, "__L_ANGLE_BRACKET__")
        .replace(/>/g, "__R_ANGLE_BRACKET__")
        .replace(/{/g, "__L_CURLY_BRACKET__")
        .replace(/}/g, "__R_CURLY_BRACKET__")
};

export const decodeLang = code => {
    return code
        .replace(/__L_ANGLE_BRACKET__/g, "<")
        .replace(/__R_ANGLE_BRACKET__/g, ">")
        .replace(/__L_CURLY_BRACKET__/g, "{")
        .replace(/__R_CURLY_BRACKET__/g, "}")
};

export const languageEnum = {
    0: 'js',
    1: 'jsx',
    2: 'ts',
    3: 'tsx',
    4: 'python',
    5: 'graphql',
    6: 'php',
    7: 'css',
    8: 'scss'
};

export const themeEnum = {
    0: 'darcula',
    1: 'prism',
    2: 'atomDark',
    3: 'materialDark',
    4: 'duotoneSpace',
    5: 'duotoneLight'
};

export const getFullTheme = themeShort => {
    switch(themeShort) {
        case "darcula":
            return "Darcula";
        case "prism":
            return "Prism";
        case "atomDark":
            return "Atom Dark";
        case "materialDark":
            return "Material Dark";
        case "duotoneSpace":
            return "Duotone Space";
        case "duotoneLight":
            return "Duotone Light";
        default:
            return 'Atom Dark';
    }
}
export const getFullLanguage = syntaxLang => {
    switch (syntaxLang) {
        case 'js':
            return 'JavaScript';
        case 'jsx':
            return 'React JavaScript';
        case 'ts':
            return 'TypeScript';
        case 'tsx':
            return 'React TypeScript';
        case 'python':
            return 'Python';
        case 'php':
            return 'PHP';
        case 'graphql':
            return 'GraphQL';
        case 'css':
            return 'CSS';
        case 'scss':
            return 'SCSS';
        default:
            return 'JavaScript';
    }
};

export function getLanguage(syntaxLang) {
    switch (syntaxLang) {
        case "js":
            return import("react-syntax-highlighter/dist/cjs/languages/prism/javascript");
        case "jsx":
            return import("react-syntax-highlighter/dist/cjs/languages/prism/jsx");
        case "ts":
            return import("react-syntax-highlighter/dist/cjs/languages/prism/typescript");
        case "tsx":
            return import("react-syntax-highlighter/dist/cjs/languages/prism/tsx");
        case "python":
            return import("react-syntax-highlighter/dist/cjs/languages/prism/python");
        case "php":
            return import("react-syntax-highlighter/dist/cjs/languages/prism/php");
        case "graphql":
            return import("react-syntax-highlighter/dist/cjs/languages/prism/graphql");
        case "css":
            return import("react-syntax-highlighter/dist/cjs/languages/prism/css");
        case "scss":
            return import("react-syntax-highlighter/dist/cjs/languages/prism/scss");
        default:
            return import("react-syntax-highlighter/dist/cjs/languages/prism/javascript");
    }
};

export function getTheme (theme) {
    switch (theme) {
        case "prism":
            return import("react-syntax-highlighter/dist/cjs/styles/prism/prism");
        case "darcula":
            return import("react-syntax-highlighter/dist/cjs/styles/prism/darcula");
        case "materialDark":
            return import("react-syntax-highlighter/dist/cjs/styles/prism/material-dark");
        case "duotoneSpace":
            return import("react-syntax-highlighter/dist/cjs/styles/prism/duotone-space");
        case "duotoneLight":
            return import("react-syntax-highlighter/dist/cjs/styles/prism/duotone-light");
        case "atomDark":
            return import("react-syntax-highlighter/dist/cjs/styles/prism/atom-dark");
        default:
            return import("react-syntax-highlighter/dist/cjs/styles/prism/atom-dark");
    }
};