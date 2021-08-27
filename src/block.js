import { useState, useEffect } from "react";

import { registerBlockType } from "@wordpress/blocks";
import {
    TextareaControl,
    SelectControl,
    CheckboxControl,
    PanelBody,
    PanelRow,
} from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";

import "./block.scss";
import {
    getFullLanguage,
    getFullTheme,
    getLanguage,
    getTheme,
    languageEnum,
    themeEnum,
    encodeLang,
    decodeLang,
} from "./utils";

const attributes = {
    lang: { type: "string", default: "js" },
    code: { type: "string", default: "" },
    theme: { type: "string", default: "atomDark" },
    showPreview: { type: "boolean", default: true },
};
const example = {
    attributes: {
        lang: "js",
        code: `
        export const shuffleLongArray = arr => {
            for (let i = arr.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        };`,
        theme: "atomDark",
        showPreview: true,
    },
};

const edit = ({
    attributes: { lang, code, theme, showPreview },
    setAttributes,
}) => {
    const setLang = (lang) => setAttributes({ lang });
    const setCode = (newCode) => setAttributes({ code: encodeLang(newCode) });
    const setTheme = (theme) => setAttributes({ theme });
    const setShowPreview = (showPreview) => setAttributes({ showPreview });

    const [finalTheme, setFinalTheme] = useState(atomDark);

    useEffect(() => {
        getTheme(theme).then((scheme) => {
            setFinalTheme(scheme);
        });
    }, [theme]);

    useEffect(() => {
        getLanguage(lang).then((language) => {
            SyntaxHighlighter.registerLanguage(lang, language);
        });
    }, [lang])
    return (
        <section class="syntax-highlighter-block">
            <InspectorControls>
                <PanelBody title="Options" initialOpen>
                    <PanelRow>
                        <SelectControl
                            label="Theme"
                            value={theme}
                            options={Object.values(themeEnum).map((t) => ({
                                value: t,
                                label: getFullTheme(t),
                            }))}
                            onChange={setTheme}
                        />
                    </PanelRow>
                    <PanelRow>
                        <SelectControl
                            label="Language"
                            value={lang}
                            options={Object.values(languageEnum).map((l) => ({
                                value: l,
                                label: getFullLanguage(l),
                            }))}
                            onChange={setLang}
                        />
                    </PanelRow>
                    <PanelRow>
                        <CheckboxControl
                            label="Show Preview"
                            help="Show a second panel of what the code will look like"
                            checked={showPreview}
                            onChange={setShowPreview}
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <div class="syntax-highlighter-block__controls">
                <div className="syntax-highlighter-block__controls__text-area">
                    <TextareaControl
                        label="Code"
                        rows={10}
                        placeholder="Type and it will be highlighted below"
                        value={decodeLang(code)}
                        onChange={setCode}
                    />
                </div>
            </div>
            <div class="syntax-highlighter-block__preview">
                <label
                    class="syntax-highlighter-block__preview__label"
                    for="syntax-highlighter"
                >
                    Highlighted:
                </label>
                <div class="syntax-highlighter-block__preview__highlighter">
                    {showPreview && code.length > 0 && (
                        <SyntaxHighlighter
                            id="syntax-highlighter"
                            language={lang}
                            style={finalTheme}
                        >
                            {decodeLang(code)}
                        </SyntaxHighlighter>
                    )}
                </div>
            </div>
        </section>
    );
};

const save = () => null;

registerBlockType("benyakirsplugins/syntax-highlighter", {
    title: "Programming Syntax Highlighter",
    icon: "desktop",
    category: "common",
    example,
    description: "Highlight syntax in a variety of programming languages",
    attributes,
    edit,
    save,
});
