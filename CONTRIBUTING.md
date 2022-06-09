# Contributing to Launchpad UI

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to Launchpad and its packages, which are hosted in the [LaunchDarkly Organization](https://github.com/launchdarkly) on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[I don't want to read this whole thing, I just have a question!!!](#i-dont-want-to-read-this-whole-thing-i-just-have-a-question)

[What should I know before I get started?](#what-should-i-know-before-i-get-started)

- [Monorepo architecture](#monorepo-architecture)
- [What's in the packages directory?](#whats-in-the-packages-directory)
- [What's in the apps directory?](#whats-in-the-apps-directory)
- [How does versioning work in Launchpad?](#how-does-versioning-work-in-launchpad)

[How Can I Contribute?](#how-can-i-contribute)

- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Your First Code Contribution](#your-first-code-contribution)

[Styleguides](#styleguides)

- [Javascript Styleguide](#javascript-styleguide)
- [CSS Styleguide](#css-styleguide)
- [Specs Styleguide](#specs-styleguide)

[Migrating a component from Gonfalon to Launchpad](#migrating-a-component-from-gonfalon-to-launchpad)

- [Creating a new package in Launchpad](#creating-a-new-package-in-launchpad)
- [Package-specific changes](#package-specific-changes)
- [Importing new dependencies](#importing-new-dependencies)
- [Updating CSS tokens from Gonfalon for use in Launchpad](#updating-css-tokens-from-gonfalon-for-use-in-launchpad)
- [Test your code](#test-your-code)
- [Pushing your code](#pushing-your-code)

---

## I don't want to read this whole thing, I just have a question!!!

- LaunchDarkly employees can reach out with questions or comments in [our Slack channel, #ask-launchpad-design-system](https://launchdarkly.slack.com/channels/CDXEFNMLP)
- You can also [open an issue](https://github.com/launchdarkly/launchpad-ui/issues/new) in the Launchpad repository to ask a question!

---

## What should I know before I get started?

### Monorepo architecture

Launchpad is set up as a monorepo where each component package is bundled and delivered as its own NPM package. This has some key advantages over deploying the entire design system as one package:

- Improved maintenance process for Launchpad team:
  - CI/CD process can be configured per component.
  - Internal dependencies have strong boundaries, making it easier to avoid introducing bugs elsewhere in the system.
  - Versions are scoped to single components, allowing us to specify granularly what has changed.
- Improved experience for consumer teams:
  - Easy to understand per-component incremental update path.
  - Feature flag and install aliases of multiple individual packages.
  - Bugs or incompatibilities introduced in the design system may be rolled back per component.
  - Potentially decreased bundle-sizes due to inherent tree-shaking benefits.

At the time of writing this, we are using the [pnpm package manager](https://pnpm.io/) for its workspace feature and the [Nx build system](https://nx.dev/) for monorepo support. Each component is defined as a directory under the `packages` directory. It's advised to understand generally how these works when contributing.

### What's in the `packages` directory?

When we talk about "components" in Launchpad, we're talking about a UI component library implemented as a package in our monorepo. It is a standalone library that can be imported and used by other JS applications.

While all Launchpad UI components are packages, not all packages are necessarily "components." A package can be defined to store utilities such as tokens used by other packages, shared helper functions, etc.

Launchpad libraries may depend on one another, as in the case of our modal library depending on the button library. This dependency, just like with shared utility libraries, is simply represented as a package.json import.

### What's in the `apps` directory?

The apps directory is essentially a standalone project that has easy access to our workspace packages. Currently, we have a Remix application that we use for SSR testing, but you could build other apps such as a docs website or another testing playground.

### How does versioning work in Launchpad?

We are using [major version zero (0.y.z) semantic versioning](https://semver.org/spec/v0.1.0.html) to indicate that the project is still in an "initial development" phase and anything may change at any time. When a new package is introduced, the initial version is set to `0.1.0`.

---

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for Launchpad. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

#### Submitting A Bug Report

- Confirm whether or not the issue was present in the equivalent component in Gonfalon. This helps us understand if we introduced the problem or if we inherited it when migrating Gonfalon components to Launchpad.
- Determine which package the issue should be reported in..
- Perform a cursory search in our [bug issues](https://github.com/launchdarkly/launchpad-ui/issues?q=label%3Abug+) to see if the problem has already been reported. If it has and the issue is still open, add a comment to the existing issue instead of opening a new one.
- [File a bug issue](https://github.com/launchdarkly/launchpad-ui/issues/new?assignees=&labels=&template=bug_report.md&title=) and describe in detail how to reproduce the issue. Screenshots or video are always a big help!

### Suggesting Enhancements

We're always open to enhancement suggestions! When assessing an enhancement, we must consider how it will affect other teams, how it will function with other UI/UX patterns in Launchpad, and more.

- Perform a cursory search in our [enhancement issues](https://github.com/launchdarkly/launchpad-ui/issues?q=label%3Aenhancement+) to see if the feature has already been suggested. If it has and the issue is still open, add a comment to the existing issue instead of opening a new one.
- [File a feature request](https://github.com/launchdarkly/launchpad-ui/issues/new?assignees=&labels=&template=feature_request.md&title=) and describe in detail what you're suggesting.

### Your First Code Contribution

#### Local development

Launchpad and all packages can be developed locally. For instructions on how to do this, see the following sections in the README.md.

### Conventional Commits

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) approach to commit messages, branch naming, and pull request titles. Not only does this make it easier for us developers to grok, search, and organize code changes, it also lets us do some fun automation.

**Note:** When titling a pull request, always use conventional commits. The title is used as the commit description when a PR is squashed and merged.

---

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Start the commit message with a [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/#summary) tag, such as:
  - `fix`
  - `feat`
  - `build`
  - `chore`
- Add a scope where relevant:
  - `feat(notification): Add notification package`

### Javascript Styleguide

All Javascript code is linted with [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/).

### CSS Styleguide

All CSS code is linted with [Stylelint](https://stylelint.io/).

### Specs Styleguide

- Include thoughtfully-worded, well-structured [Vitest](https://vitest.dev/) specs in the `__test__` folder of each package.
- Treat `describe` as a noun or situation.
- Treat `it` as a statement about state or how an operation changes state.

---

## Migrating a component from Gonfalon to Launchpad

### Creating a new package in Launchpad

#### Duplicate an existing package

It's easiest to copy an existing package like `alert` and rename the files and content. Duplicate a directory and do the following:

- Change the duplicated directory's name to your component name in the singular (e.g. `notification`, not `notifications`).
- Make the following changes to the files in the new directory:
  - `package.json`
    - Change the `name` to `@launchpad-ui/{your package name}`.
    - Change the `version` to `0.0.1`.
    - Add a unique description explaining briefly what the package does.
    - For the `styles` export, if your package has multiple stylesheets, use `"./styles/*": "./dist/styles/*"`. If there is only a single export at the root, use `"./styles.css": "./dist/styles.css"`.
    - If you do not plan on adding e2e tests yet, replace the `e2e` script value with `"exit 0"`.
  - `README.md`
    - Replace existing package name with your package name everywhere.
    - If there is a "Usage" tab in Zeroheight for your component, you may copy the description from there, otherwise you can write one or copy the one you wrote for the `package.json`.
  - `build.js`
    - No changes necessary.
  - `tsconfig.build.json`
    - No changes necessary.
  - `CHANGELOG.md`
    - Delete this if you cloned it into this package. It gets autogenerated..

#### Add references to the package throughout the monorepo

Now that you have a package, let's make it known throughout Launchpad:

- Add your package's path to the root `tsconfig.json`.
- In `apps/remix`:
  - Create a new `tsx` component file in the `app/routes/components` folder that imports your package and exports a React view using your component. This will be a new page in our Remix sandbox.
  - The Remix app doesn't actually yet know how to resolve your dependency, so add it to the `package.json`, just like how the existing packages are being imported.
  - In `app/data.server.ts`, add a new object that will function as a nav item that can bring the user to your new component view.
  - In `app/root.tsx`, import your component's stylesheet.

### Package-specific changes

As we migrate to Launchpad, we've selectively chosen to update or replace some dependencies:

#### `lodash`

- Replace the `lodash` library with `lodash-es`.
- Where `noop` is used, remove lodash dependency and replace usage of `noop` with `() => undefined` as it is effectively the same.

#### `focus-trap`

`focus-trap` caused flaky tests that were difficult to fix.

- Replace with `@react-aria/focus` as shown here: https://github.com/launchdarkly/launchpad-ui/pull/94

#### `immutable`

We are moving away from immutable in Gonfalon and would like to avoid taking dependency on it whenever possible in Launchpad. It might require some creative problem-solving to remove immutable but is usually pretty simple. Just use JS data structures instead.

### Importing new dependencies

- Don't pin dependencies, use caret ranges.
- Match dependency versions across packages when possible so that we can share dependency versions and reduce bundle sizes.

### Updating CSS tokens from Gonfalon for use in Launchpad

Tokens are configured as a shared package in Launchpad, so any package that takes the `@launchpad-ui/tokens` dependency will be guaranteed access to our CSS token variables. Still, we haven't imported 100% of the tokens available today in Gonfalon since we'd like to change some patterns we've historically used. Due to this, we must manually make a few changes:

- If a token is not found in Launchpad's token package already, and if the token is an alias variable for a base token that IS available in Launchpad, just use the base token.
- If a token is not found in Launchpad's token package already, and the token is not an alias, just use a hardcoded CSS value.

### Test your code

We have a minimum coverage score you must fulfill for unit tests, so make sure to write a few tests to cover base cases and any heavily-used interactions.
You should also consider adding `axe` accessibility tests. See other packages for examples.

### Okay, I'm ready to deploy my code

Perfect! Just a few final steps:

- Run `npx changeset` before making a pull request. You'll see a list of packages Changeset has determined have changed, and they'll want you to tell them if it's a major, minor, or patch version bump.
  - A brand new package should receive a "minor" bump, which should set it at `0.1.0`.
  - For other version bumps, refer to [the semantic versioning docs](https://semver.org/spec/v0.1.0.html).
- Changeset will create a new `.md` file in the `.changeset` directory. Find it, and update the description to be more human readable. See the [change descriptions here](https://github.com/launchdarkly/launchpad-ui/releases) for an idea of how to write this.

You're ready to go! Just post a PR and the `UX Next` squad will be automatically assigned to take a look. Happy launching.