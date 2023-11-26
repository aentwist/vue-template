# Vue Template

Vue web app UI template

- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Setup](#setup)
  - [Running](#running)
  - [Testing](#testing)
- [Badges](#badges)
- [Template](#template)
- [Contributing](#contributing)

## Quick Start

### Requirements

###### Node.js

Use the version specified in [.tool-versions](/aentwist/vue-template/-/blob/main/.tool-versions). The recommended installation method is via [asdf](https://asdf-vm.com/).

```shell
asdf plugin add nodejs
asdf install nodejs
```

### Setup

###### Install dependencies

```shell
npm ci
```

### Running

###### Run for development

```shell
npm start
```

###### Build for deployment

```shell
npm run build
```

### Testing

###### Run all tests

```shell
npm test
```

###### Run all checks

```shell
npm run lint
```

## Badges

Make key information about your project available or more prominent using badges. You can add them in Settings > General > Badges, or in markdown:

```markdown
[![Name](Badge image URL)](Link)
```

Dynamic [GitLab badges](https://docs.gitlab.com/ee/user/project/badges.html#available-badges):

| Name     | Link                                                                         | Badge image URL                                                                  | Preview                                                                                                         |
| -------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Pipeline | https://gitlab.example.com/%{project_path}/-/pipelines?ref=%{default_branch} | https://gitlab.example.com/%{project_path}/badges/%{default_branch}/pipeline.svg | [![Pipeline](/aentwist/vue-template/badges/main/pipeline.svg)](/aentwist/vue-template/badges/main/pipeline.svg) |
| Coverage | https://gitlab.example.com/%{project_path}/-/pipelines?ref=%{default_branch} | https://gitlab.example.com/%{project_path}/badges/%{default_branch}/coverage.svg | [![Coverage](/aentwist/vue-template/badges/main/coverage.svg)](/aentwist/vue-template/-/pipelines?ref=main)     |
| Release  | https://gitlab.example.com/%{project_path}/-/releases                        | https://gitlab.example.com/%{project_path}/-/badges/release.svg                  | [![Release](/aentwist/vue-template/-/badges/release.svg)](/aentwist/vue-template/-/releases)                    |

Static badges:

- [pre-commit](https://pre-commit.com/#badging-your-repository) [![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit)](https://github.com/pre-commit/pre-commit)
- [Semantic Release](https://github.com/semantic-release/semantic-release#badge) [![semantic-release: angular](https://img.shields.io/badge/semantic--release-conventionalcommits-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
- [Renovate](/aentwist/renovate#badge) [![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen)](https://renovatebot.com/)

## Template

Temporary section tracking this work and how it can be made reusable.

See [template.md](template.md).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
