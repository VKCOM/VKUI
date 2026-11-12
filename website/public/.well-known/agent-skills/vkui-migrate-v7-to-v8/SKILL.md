---
name: vkui-migrate-v7-to-v8
description: Review or perform an application's migration from @vkontakte/vkui v7 to v8 using the official migration guide and codemods.
---

# Migrate VKUI v7 to v8

## Establish the migration scope

Inspect the application package manifest, lockfile, installed VKUI version, and existing check commands. Identify the intended v8 target. If the user only requests a migration review, report the required changes without modifying the application. If migration is requested, update the relevant dependency and code within that scope using the project's package manager.

For documentation pages on `vkui.io`, request `Accept: text/markdown` ([Accept Markdown](https://acceptmarkdown.com/)) to read API documentation and usage examples as text. For example, when targeting v8.3.0:

```sh
curl -fsSL -H 'Accept: text/markdown' 'https://vkui.io/8.3.0/migrations/migration-v8/'
```

If the fetch tool cannot set headers or the response is HTML, use the `.mdx` URL linked in `llms.txt` or on the page. Apply this to both the migration guide and component or hook pages.

Read the full guide at `https://vkui.io/{target-version}/migrations/migration-v8/` before deciding which changes apply. If no exact target is established, consult `https://vkui.io/migrations/migration-v8/` and state that it is the current guide; establish a v8 target before changing dependencies. In the VKUI repository, the source guide is `website/content/migrations/migration-v8.mdx`.

Use the guide as the checklist, including removed APIs, changed props and events, browser requirements, and deprecated APIs. The guide also contains MCP-specific prompts; use the underlying migration guidance directly rather than requiring the tools mentioned in those prompts.

## Inventory affected code

Search for imports and re-exports from `@vkontakte/vkui`, including aliases and namespace imports. Trace local wrapper components and shared prop objects where needed. Match affected usages by meaning, not by literal equality with a before/after example.

Record each applicable guide item with its locations and intended change. Distinguish required compatibility changes from optional replacements of deprecated APIs. Deprecation alone does not mean an API has been removed in v8.

## Apply supported transformations

Run relevant `@vkontakte/vkui-codemods` transformations using the guide's workflow. Codemods do not cover every migration item.

Verify uncertain target APIs against `https://vkui.io/{target-version}/components/{slug}/`, including its props and examples. Find canonical component and hook URLs through `https://vkui.io/{target-version}/llms.txt` or the versioned documentation navigation. If published documentation is unavailable or inconclusive, read installed target-version declarations or local sources. Do not substitute documentation from a different major version.

Apply examples semantically and preserve callbacks, state transitions, imported aliases, refs, and existing options:

- Move only props intended for an inner element into its documented slot. Keep root props at the root. Merge existing `slotProps` and nested slot objects rather than overwriting them.
- Check event types and `event.currentTarget`: moving an event handler to a root or inner element can change both its type and behavior.
- Verify slot names in the target API; do not infer their spelling from an HTML tag or copy an unverified example.
- Check timing when changing close callbacks. A callback after an animation is not interchangeable with a request to close.
- Choose accessibility behavior deliberately. Preserve an explicit compatibility choice when needed; do not blindly add or remove `accessible={false}`.
- Preserve modal IDs, parameters, history, focus restoration, and closing behavior if adopting `useModalManager`. Do not replace deprecated modal APIs solely because a new alternative exists.
- When replacing `FixedLayout` with sticky positioning, check scroll containers and document order, particularly bottom placement. Treat this as a layout change requiring visual verification.

## Validate and report

Run relevant type checks, lint, and existing tests. Review the codemod diff and search again for legacy patterns; distinguish valid usages, deferred deprecations, and unresolved migration work.

Check affected lifecycles, form events and refs, date controls, responsive layout, and keyboard/focus behavior. Report source and target versions, checks run, and unresolved compatibility decisions.
