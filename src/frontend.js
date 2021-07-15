import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

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
    const [finalTheme, setFinalTheme] = useState(theme || 'atomDark');
    const language = getLanguage(lang || 'js');
    SyntaxHighlighter.registerLanguage(lang, language)
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
                <SyntaxHighlighter language={lang || 'js'} style={getTheme(finalTheme)}>
                    {decodeLang(code) || ''}
                </SyntaxHighlighter>
            </div>
        </div>
    )
};

const divsToUpdate = document.querySelectorAll('.benyakir-syntax-highlighter');
divsToUpdate.forEach(div => {
    const data = JSON.parse(div.querySelector('pre').innerHTML);
    console.log(data);
    ReactDom.render(<CustomSyntaxHighlighter {...data} />, div);
    div.classList.remove('benyakir-syntax-highlighter');
});