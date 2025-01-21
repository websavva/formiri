import { textFieldFormBuilderBlockConfig } from './text-field';

export * from './types';

export const BUILDER_FORM_BLOCK_CONFIGS = [
  textFieldFormBuilderBlockConfig,
] as const;

export type BuilderFormBlockPropsMap = {
  [Config in (typeof BUILDER_FORM_BLOCK_CONFIGS)[number] as Config['type']]: ReturnType<
    Config['getInitialProps']
  >;
};

export type BuilderFormBlockConfigsMap = {
  [Config in (typeof BUILDER_FORM_BLOCK_CONFIGS)[number] as Config['type']]: Config;
};

export const BUILDER_FORM_BLOCK_CONFIGS_MAP = Object.fromEntries(
  BUILDER_FORM_BLOCK_CONFIGS.map((config) => [config.type, config]),
) as BuilderFormBlockConfigsMap;
