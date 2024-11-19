export const cn = (...args: (string | undefined)[]) => (
  args.reduce((acc, value) => acc + ` ${value}`, '')
);
