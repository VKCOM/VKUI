---
name: vkui
description: Build and update React interfaces with @vkontakte/vkui using documentation for the project's installed or requested target version.
---

# VKUI

## Choose the version

1. Inspect the application's `package.json`, lockfile, and, when available, installed `@vkontakte/vkui/package.json`. Prefer the exact resolved version over a dependency range. In the VKUI monorepo, use `packages/vkui/package.json` and local sources.
2. Use the requested target version when the user explicitly asks for a different version. Do not upgrade the dependency merely to match an example.
3. Set the documentation base URL to `https://vkui.io/{version}/`. Substitute an exact version, not a semver range. Use unversioned documentation only when no version is established; state that assumption.
4. If that version has no published documentation, use its installed TypeScript declarations and local sources. Do not silently substitute a newer major version. Unreleased workspace code takes precedence over published documentation.

## Find components and verify their API

Find component and hook pages through the versioned `llms.txt` index or the documentation navigation. Use the linked URLs rather than deriving slugs from API names: acronym names and nested components may not follow a simple kebab-case conversion. Choose components by their documented purpose and examples.

Read the selected component or hook page before changing code. For documentation pages on `vkui.io`, request `Accept: text/markdown` to read API documentation and usage examples as text. For example, a project using v8.3.0 can fetch:

```sh
curl -fsSL -H 'Accept: text/markdown' 'https://vkui.io/8.3.0/components/button/'
```

If the fetch tool cannot set headers or the response is HTML, use the `.mdx` URL linked in `llms.txt` or on the page. Apply the same approach to the guides below.

Fetch only the pages needed for the task. Consult the installed TypeScript declarations or local source when the documentation does not settle a type question, including inherited or complex types. An HTTP error is not evidence that a component or prop does not exist.

## Configure and compose the interface

Use these guides relative to the documentation base URL as needed.

| Task                                 | Guide                     |
| ------------------------------------ | ------------------------- |
| Dependencies, CSS imports, providers | `overview/install/`       |
| Basic composition                    | `overview/usage/`         |
| Responsive behavior and density      | `overview/adaptivity/`    |
| Theme configuration                  | `overview/themes/`        |
| Design tokens                        | `overview/design-tokens/` |
| Server rendering                     | `overview/ssr/`           |
| Navigation                           | `overview/navigation/`    |

For other topics, discover pages through `https://vkui.io/llms.txt` or the corresponding versioned index. It is a page index, not the full documentation.

Preserve the application's provider hierarchy, style entry point, routing, and theme conventions. When starting an application, follow the chosen version's installation guide for required providers and CSS. Prefer documented VKUI components and tokens for an existing VKUI interface. Verify platform and adaptivity behavior rather than assuming a desktop example behaves identically on mobile.

Check callback signatures, controlled state, refs, and the element receiving forwarded props. When using `slotProps`, verify the exact slot name and merge existing slot values so that handlers and refs are preserved. Preserve accessible names, keyboard behavior, and focus management when adapting examples.

## Verify the change

Run relevant type checks and existing tests; check affected interactions and layout. Report the targeted VKUI version and unresolved API questions.
