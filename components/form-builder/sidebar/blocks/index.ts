import { textFieldFormBuilderBlockConfig } from './text-field';

export const BUILDER_FORM_BLOCK_CONFIGS = [
  textFieldFormBuilderBlockConfig,
] as const;

export type BuilderFormBlockPropsMap = {
  [Config in (typeof BUILDER_FORM_BLOCK_CONFIGS)[number] as Config['type']]: ReturnType<
    Config['getInitialProps']
  >;
};
