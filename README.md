# ACE

### Unit Tests

```bash
npm run test
```

### e2e

```bash
npm run e2e
```

## Production

```bash
npm run docker:build
npm run docker:run
```

## Generate Code

```bash
npm run generate:module -- --path src/modules --name Test
npm run generate:component -- --path src/modules/test/containers --name Test
npm run generate:component -- --path src/modules/test/components --name Test
npm run generate:directive -- --path src/modules/test/directives --name Test
npm run generate:service -- --path src/modules/test/services --name Test
```

_Note: Creating a Component and a Container use the same command,
the difference is just the paths and how they are used._

## Troubleshooting

### npm start

If you receive memory issues adjust
`max_old_space_size` in the `ng` command of the `package.json`:

```json
"ng": "cross-env NODE_OPTIONS=--max_old_space_size=2048 ./node_modules/.bin/ng",
```

You can adjust 2048 to any number you need.

For more information about why you may need `--max_old_space_size`
see [this article](https://medium.com/@ashleydavis75/node-js-memory-limitations-30d3fe2664c0).

Keep in mind that this project only uses node to build the angular application.
There is no production dependency on node.
