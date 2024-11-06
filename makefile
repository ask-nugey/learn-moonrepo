install:
	@pnpm i

web-dev:
	@pnpm moon run web:dev

web-build:
	@pnpm moon run web:build

web-lint:
	@pnpm moon run web:lint

web-test:
	@pnpm moon run web:test
