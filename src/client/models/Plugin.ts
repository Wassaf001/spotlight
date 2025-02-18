/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Frontend representation of a spotlight plugin
 * @export
 * @interface Plugin
 */
export interface Plugin {
    /**
     *
     * @type {string}
     * @memberof Plugin
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof Plugin
     */
    priority: number;
    /**
     *
     * @type {boolean}
     * @memberof Plugin
     */
    dev: boolean;
    /**
     *
     * @type {string}
     * @memberof Plugin
     */
    entrypoint?: string;
}

/**
 * Check if a given object implements the Plugin interface.
 */
export function instanceOfPlugin(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && 'name' in value;
    isInstance = isInstance && 'priority' in value;
    isInstance = isInstance && 'dev' in value;

    return isInstance;
}

export function PluginFromJSON(json: any): Plugin {
    return PluginFromJSONTyped(json, false);
}

export function PluginFromJSONTyped(json: any, ignoreDiscriminator: boolean): Plugin {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: json['name'],
        priority: json['priority'],
        dev: json['dev'],
        entrypoint: !exists(json, 'entrypoint') ? undefined : json['entrypoint'],
    };
}

export function PluginToJSON(value?: Plugin | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        priority: value.priority,
        dev: value.dev,
        entrypoint: value.entrypoint,
    };
}
