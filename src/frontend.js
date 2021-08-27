import { useState, useEffect } from 'react';
import ReactDom from 'react-dom';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";

import './frontend.scss';
import {
    getFullLanguage,
    getFullTheme,
    getLanguage,
    getTheme,
    themeEnum,
    decodeLang
} from './utils';

const CustomSyntaxHighlighter = ({ lang, code, theme }) => {
    const [finalTheme, setFinalTheme] = useState(atomDark);
    const language = getLanguage(lang || 'js').then(lang => SyntaxHighlighter.registerLanguage(lang, language));
    useEffect(() => {
        console.log('theme 1');
        console.log(theme);
        getTheme(theme).then(scheme => setFinalTheme(scheme));
    }, []);
    useEffect(() => {
        console.log('theme 2');
        console.log(theme);
        getTheme(theme).then(scheme => setFinalTheme(scheme));
    }, [theme])
    return (
        <div className="syntax-highlighter-frontend">
            <div className="syntax-highlighter-frontend__desc">
                <div className="syntax-highlighter-frontend__desc__group">
                    <label htmlFor="highlighter-lang">Language:</label>
                    <span id="highlighter-lang">{getFullLanguage(lang)}</span>
                </div>
                <p className="syntax-highlighter-frontend__desc__group">
                    <label htmlFor="highlighter-theme">Theme:</label>
                    <select
                        id="highlighter-theme"
                        value={finalTheme}
                        onChange={e => setFinalTheme(e.target.value)}
                    >
                        {
                            Object.values(themeEnum).map(t => (
                                <option key={t} value={t}>{getFullTheme(t)}</option>
                            ))
                        }
                    </select>
                </p>
            </div>
            <div className="syntax-highlighter-frontend__highlighter">
                <SyntaxHighlighter language={lang || 'js'} style={finalTheme}>
                    {decodeLang(code) || ''}
                </SyntaxHighlighter>
            </div>
        </div>
    )
};

const divsToUpdate = document.querySelectorAll('.benyakir-syntax-highlighter');
divsToUpdate.forEach(div => {
    const data = JSON.parse(div.querySelector('pre').innerHTML);
    ReactDom.render(<CustomSyntaxHighlighter {...data} />, div);
    div.classList.remove('benyakir-syntax-highlighter');
});