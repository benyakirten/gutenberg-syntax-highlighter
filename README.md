# Table of Contents

1. [What is this?](#what-is-this?)
2. [How do I install it?](#how-do-i-install-it)
3. [Planned Changes](#planned-changes)
4. [Change Log](#change-log)

## What is this?

You are looking at a plugin that enables a custom block for the WordPress Gutenberg editor. It is, uncreatively, called Benyakir's Syntax Highlighter Gutenberg. It adds a new block called the "Programming Syntax Highlighter" under the common category. The language and the theme editor can be set in the Inspector Panel (click on the cog in the top right of the Gutenberg editor). The theme can still be changed by the reader of your blog.

A lot of syntax highlighters have already been made in the Gutenberg editor, so this isn't exactly unique. Most of my projects I've done so far are both practical but more so practice for me to learn a system. At some point in the future, I will make more sophisticated blocks. But this is the start.

Also, I planned on only using TypeScript for future React projects, but this doesn't have TypeScript. I found the support and documentation for TypeScript with the Gutenberg block editor to be lacking. That's why.

## How do I install it?

1. Clone/fork this repository into your plugins directory (or just download it?)
2. Go to your WordPress admin login
3. Go to plugins
4. Activate this plugin

## Planned Changes

* Add support to the topbar, not just the inspector controls
* Make it look nicer
* Add TypeScript support
* Add translation/other language support
* Make a sister block where the user can input the syntax
* Make another sister block that interacts with a GraphQL backend to parse the language and effects (this is really a reach because it would be a lot of work)

## Changelog

7/15/2021: First version
7/15/2021: Somehow there are things I don't notice until I try it out. I was using a dev build and I forgot to provide backup data.
7/15/2021: I added custom encoding for angle brackets and arrow functions because everything was freaking out. There are probably better solutions, but I didn't want to bother with it.
7/15/2021: This should be the last of the day. On the last update, it turns out I forgot to a global replace
1/22/2022: Added Go, Erlang and Elixir support
