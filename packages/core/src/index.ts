/**
 * Minions Publishing SDK
 *
 * Platform credentials, publish queue, and post receipts
 *
 * @module @minions-publishing/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Publishing.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
