run `pnpm i` for dependencies, or any package manager should work.

run `pnpm build` and open `dist/test.d.ts` and notice the (void 0) that replaces the this.
Which typescript reports as an error.

If `pnpm tsc` is ran and the reopen `dist/test.d.ts` you see no type errors and the expected output
