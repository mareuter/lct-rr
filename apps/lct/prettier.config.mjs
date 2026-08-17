import myPrettierConfig from '@mareuter/prettier-config'

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  ...myPrettierConfig,
  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
