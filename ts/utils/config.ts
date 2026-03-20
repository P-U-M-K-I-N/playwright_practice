type Env = 'dev' | 'staging' | 'prod';

type Config = {
  baseURL: string;
  username: string;
  password: string;
};

const ENV: Env = (process.env.ENV as Env) || 'dev';

const configMap: Record<Env, Config> = {
  dev: {
    baseURL: 'https://demoqa.com/',
    username: 'admin_dev',
    password: '1234',
  },
  staging: {
    baseURL: 'https://demoqa.com/',
    username: 'admin_stg',
    password: '0000',
  },
  prod: {
    baseURL: 'https://demoqa.com/',
    username: 'admin_prod',
    password: 'tester',
  },
};

export const config: Config = configMap[ENV];