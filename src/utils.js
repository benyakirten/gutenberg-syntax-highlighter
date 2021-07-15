import prism from "react-syntax-highlighter/dist/cjs/styles/prism/prism";
import darcula from "react-syntax-highlighter/dist/cjs/styles/prism/darcula";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import materialDark from "react-syntax-highlighter/dist/cjs/styles/prism/material-dark";
import duotoneSpace from "react-syntax-highlighter/dist/cjs/styles/prism/duotone-space";
import duotoneLight from "react-syntax-highlighter/dist/cjs/styles/prism/duotone-light";

import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import ts from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import graphql from "react-syntax-highlighter/dist/cjs/languages/prism/graphql";
import php from "react-syntax-highlighter/dist/cjs/languages/prism/php";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";

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

export const getLanguage = (syntaxLang) => {
    switch (syntaxLang) {
        case "js":
            return js;
        case "jsx":
            return jsx;
        case "ts":
            return ts;
        case "tsx":
            return tsx;
        case "python":
            return python;
        case "php":
            return php;
        case "graphql":
            return graphql;
        case "css":
            return css;
        case "scss":
            return scss;
        default:
            return js;
    }
};

export const getTheme = (theme) => {
    switch (theme) {
        case "prism":
            return prism;
        case "darcula":
            return darcula;
        case "materialDark":
            return materialDark;
        case "duotoneSpace":
            return duotoneSpace;
        case "duotoneLight":
            return duotoneLight;
        case "atomDark":
            return atomDark;
        default:
            return atomDark;
    }
};