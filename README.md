# Obol SDK

A typescript package for interacting with the Obol Network

## Packages
| Package                                                   | Description                                                                                                            |
|-----------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------|
| [obol-sdk](/packages/splits-sdk)  | Core package for integrating with 0xSplits                                                                           |

## Testing
 Run tests with `yarn test`

## Local development

### Build the packages
From the root directory:

```bash
yarn install
yarn lerna-build
```

### Update versions and prepare for npm publish
From the root directory:

```bash
yarn lerna-version
```

### Publish to npm
From each package directory that you want to publish:

```bash
npm publish
```

If you want to publish an alpha/beta version, apply the appropriate tag:
```bash
npm publish --tag beta
```
