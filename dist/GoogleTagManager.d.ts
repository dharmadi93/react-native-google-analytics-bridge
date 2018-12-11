import DataLayerEvent from "./models/DataLayerEvent";
/**
 * Can only be used with one container. All functions returns a Promise.
 *
 * @name GoogleTagManager
 * @example
 * import { GoogleTagManager } from "react-native-google-analytics-bridge";
 * GoogleTagManager.openContainerWithId("GT-NZT48")
 *   .then(() => GoogleTagManager.stringForKey("pack"))
 *   .then(str => console.log("Pack: ", str));
 */
declare class GoogleTagManager {
    /**
     * Call once to open the container for all subsequent static calls.
     * @example
     * GoogleTagManager.openContainerWithId('GT-NZT48').then((..) => ..)
     * @param {string} containerId
     * @returns {Promise<boolean>}
     */
    static openContainerWithId(containerId: string): Promise<boolean>;
    /**
     * Retrieves a boolean value with the given key from the opened container.
     * @example GoogleTagManager.boolForKey("key").then(val => console.log(val));
     * @param {string} key
     * @returns {Promise<boolean>}
     */
    static boolForKey(key: string): Promise<boolean>;
    /**
     * Retrieves a string with the given key from the opened container.
     * @example GoogleTagManager.stringForKey("key").then(val => console.log(val));
     * @param {string} key
     * @returns {Promise<string>}
     */
    static stringForKey(key: string): Promise<string>;
    /**
     * Retrieves a number with the given key from the opened container.
     * @example GoogleTagManager.doubleForKey("key").then(val => console.log(val));
     * @param {string} key
     * @returns {Promise<number>}
     */
    static doubleForKey(key: any): Promise<number>;
    /**
     * Push a datalayer event for Google Analytics through Google Tag Manager. The event must have at least one key "event" with event name.
     * @example
     * GoogleTagManager.pushDataLayerEvent({
     *   event: "eventName",
     *   pageId: "/home"
     * }).then(success => console.log(success));
     * @param {DataLayerEvent} event An Map<String, Object> containing key and value pairs. It must have at least one key "event" with event name
     * @returns {Promise<boolean>}
     */
    static pushDataLayerEvent(event: DataLayerEvent): Promise<boolean>;
    /**
     * Register Function Call tag handler
     * @param {String} functionName
     * @param {Function} handler
     */
    static registerFunctionCallTagHandler(functionName: any, handler: any): Promise<boolean>;
    /**
     * Sets logger to verbose, default is warning
     * @param {boolean} enabled
     */
    static setVerboseLoggingEnabled(enabled: boolean): Promise<boolean>;
}
export default GoogleTagManager;
