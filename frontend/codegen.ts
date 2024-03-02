import type { CodegenConfig } from '@graphql-codegen/cli'

import { parsedEnv } from './src/lib/processEnv'

const config: CodegenConfig = {
  schema: `${parsedEnv.BACKEND_URI}/graphql/`,
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
}

export default config
