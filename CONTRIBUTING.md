# Contributing

- [Testing](#testing)
  - [Writing Tests](#writing-tests)
  - [Test Coverage](#test-coverage)
- [Style Guide](#style-guide)
  - [Code Style](#code-style)
  - [Commit Message Format](#commit-message-format)
- [Tooling](#tooling)
  - [pre-commit](#pre-commit)
  - [Recommended IDE Setup](#recommended-ide-setup)

## Testing

### Writing Tests

Tests are kept alongside code in \_\_tests\_\_ folders. Each file should have a corresponding test file named filename.test.ts. For information on how to write tests, [see the documentation](#see-also).

In component tests, elements are accessed by selecting them using a selector. It is best practice to use special [data attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*) `data-test` for this since other methods of selection (by class, etc.) are tightly coupled with the code. By using dedicated `data-test` attributes, tests will not break when the code is changed.

_component_

```html
<button class="btn-md" type="button" data-test="my-btn" @click="handleClick">
  My Button
</button>
```

_test_

```typescript
const btn = wrapper.get("[data-test='my-btn']");
```

#### Vuetify

Plugins have various requirements that must also be provided in the unintended environment of testing. For example, Vuetify needs access to [`ResizeObserver`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver). Since this is not available in the test environment, it must be stubbed. This is taken care of in a utility function. When testing components that use Vuetify components make sure to call it.

```typescript
import setupVuetifyTesting from "@/plugins/vuetify/setup-testing";

setupVuetifyTesting();
```

#### Pinia

Unfortunately, setting up for tests that involve Pinia is not as straightforward as setting up for [Vuetify](#vuetify). Tests might target either stores or components, and depending on what is being tested there is any amount of initial state setup and action configuration that must take place. For these reasons there is no helper function to setup Pinia. To prepare Pinia for testing see [their documentation][pinia-testing].

### Test Coverage

Vitest supports test coverage reporting using v8. We can use the `--coverage` flag.

```shell
npm run test:unit -- --coverage
```

Test coverage should stay as close to 100% as possible. Code should be written so that it is testable.

### See Also

- [Vitest](https://vitest.dev/) - test framework
- [Vue Test Utils (VTU)](https://test-utils.vuejs.org/) - tool for testing Vue components
- [Pinia Testing][pinia-testing]

<!-- Testing links -->

[pinia-testing]: https://pinia.vuejs.org/cookbook/testing.html

## Style Guide

To maintain quality and consistency there are four types of checks. The goal is to leverage modern tooling and automation to the fullest to simplify workflows and reduce errors.

1. Type checking `npm run type-check`
1. Linting/formatting JavaScript `npm run lint-js`
1. Formatting the rest `npm run format-other`
1. Commit linting `npm run lint:commits`

Type checking is a TypeScript check. For this to pass, code must be well-typed. Linting/formatting and commit linting are described in detail in the following sections.

### Code Style

This project uses linter [ESLint](https://eslint.org) and formatter [Prettier](https://prettier.io/). Code style is verified in the CI pipeline. It does not matter _how_ the correct style is achieved, as long as it is achieved. Supported integrations are elaborated upon in [Tooling](#tooling).

Use [TSDoc](https://tsdoc.org/) for documentation. Do not use doc-style comments `/** */` for implementation notes.

For stylistic decisions that are not covered, refer to the [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html).

###### Lint code manually

```shell
npm run lint:code
```

### Commit Message Format

Use [Conventional Commits](https://www.conventionalcommits.org). Commits are linted by [commitlint](https://commitlint.js.org), which should provide helpful feedback in case of any issues. [Semantic Release](https://github.com/semantic-release/semantic-release) relies on these well-formatted commits to automate tasks like making releases and generating release notes.

###### Lint commits manually

```shell
npm run lint:commits
```

## Tooling

### pre-commit

[pre-commit](https://pre-commit.com) is a tool that manages [Git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) - hooks that are run automatically at specific points when using Git. This project's hooks run when making a _commit_.

Installing the project's pre-commit hooks is highly recommended. Then when commiting if linting is needed,

1. the commit will be aborted
1. fixes will automatically be made when possible
1. fix issues manually if they cannot be fixed automatically
1. review and stage linting changes, and retry

#### Installation

Although there are other methods, perhaps the two most convenient ways to get pre-commit are by package manager or pip. This project requires pre-commit >=3.2. Source lists for example for `apt` might have an older version of pre-commit, so maybe `pip` is the best method for now.

This uses Python. If you need Python/pip then asdf can cover it.

```sh
asdf plugin add python
asdf install python "$(asdf list all python | grep -P '^3(?:\.\d{1,3}){2}$' | tail -n 1)"
asdf global python "$(asdf list python | tail -n 1 | tr -d '[:space:]*')"
```

Then using `pip`,

```shell
pip install pre-commit
```

#### Cheat Sheet

###### Install hooks

`pre-commit install`

###### Manually run hooks on changed files

`pre-commit run`

### Recommended IDE Setup

#### VSCode

###### TL;DR

1. Install recommended extensions **except** for TypeScript Vue Plugin (Volar)
1. Search built-in extension TypeScript and JavaScript Language Features and use Disable (Workspace)
1. Reload window

---

[VSCode extensions](/aentwist/vue-template/-/blob/main/.vscode/extensions.json) that cover Vue development and the linting setup should automatically be recommended for installation. Do not install TypeScript Vue Plugin (Volar) in favor of enabling [Volar Takeover Mode](https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode). After installation, code will automatically be linted when _saving_ files. Commit messages will have live feedback.

###### Enable Volar Takeover Mode

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
