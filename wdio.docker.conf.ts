import { config as baseConfig } from './wdio.conf.ts'

export const config = {
    ...baseConfig,
    hostname: 'localhost',
    port: 4444,
}