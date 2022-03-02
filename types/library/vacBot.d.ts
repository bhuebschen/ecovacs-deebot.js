export = VacBot;
declare class VacBot {
    constructor(user: any, hostname: any, resource: any, secret: any, vacuum: any, continent: any, country: any, server_address?: any);
    ecovacs: import("./950type/ecovacsMQTT_JSON.js") | import("./non950type/ecovacsMQTT_XML.js") | import("./non950type/ecovacsXMPP_XML.js");
    vacuum: any;
    is_ready: boolean;
    useMqtt: boolean;
    deviceClass: any;
    deviceModel: any;
    deviceImageURL: any;
    components: {};
    lastComponentValues: {};
    emitFullLifeSpanEvent: boolean;
    errorCode: string;
    errorDescription: any;
    maps: any;
    mapImages: any[];
    mapVirtualBoundaries: any[];
    mapVirtualBoundariesResponses: any[];
    mapSpotAreaInfos: any[];
    mapVirtualBoundaryInfos: any[];
    currentMapName: string;
    currentMapMID: any;
    currentMapIndex: number;
    lastUsedAreaValues: any;
    batteryInfo: any;
    batteryIsLow: boolean;
    cleanReport: any;
    chargeStatus: any;
    cleanSpeed: any;
    waterLevel: any;
    waterboxInfo: any;
    sleepStatus: any;
    deebotPosition: {
        x: any;
        y: any;
        a: any;
        isInvalid: boolean;
        currentSpotAreaID: string;
        changeFlag: boolean;
    };
    chargePosition: {
        x: any;
        y: any;
        a: any;
        changeFlag: boolean;
    };
    cleanSum_totalSquareMeters: any;
    cleanSum_totalSeconds: any;
    cleanSum_totalNumber: any;
    cleanLog: any[];
    cleanLog_lastImageUrl: any;
    cleanLog_lastTimestamp: any;
    cleanLog_lastTotalTime: any;
    cleanLog_lastTotalTimeString: any;
    cleanLog_lastSquareMeters: any;
    currentStats: any;
    netInfoIP: any;
    netInfoWifiSSID: any;
    netInfoWifiSignal: any;
    netInfoMAC: any;
    doNotDisturbEnabled: any;
    continuousCleaningEnabled: any;
    voiceReportDisabled: any;
    commandsSent: any[];
    mapPiecePacketsSent: any[];
    createMapDataObject: boolean;
    createMapImage: boolean;
    createMapImageOnly: boolean;
    mapDataObject: any[];
    mapDataObjectQueue: any[];
    schedule: any[];
    vacBotCommand: typeof import("./950type/vacBotCommand") | typeof import("./non950type/vacBotCommand");
    /**
     * It takes a single argument, `mode`, which defaults to `"Clean"` (auto clean)
     * The function then calls the `run` function with the value of `mode` as the first argument
     * @since 0.6.2
     * @param {string} [mode=Clean] - The mode to run the script in.
     */
    clean(mode?: string): void;
    /**
     * This is a wrapper function for auto clean mode
     * @since 0.6.2
     * @param {string} areas - A string with a list of spot area IDs
     */
    spotArea(areas: string): void;
    /**
     * This is a wrapper function that will start cleaning the area specified by the boundary coordinates
     * @since 0.6.2
     * @param {string} boundaryCoordinates - A list of coordinates that form the polygon boundary of the area to be cleaned
     * @param {number} [numberOfCleanings=1] - The number of times the robot will repeat the cleaning process
     */
    customArea(boundaryCoordinates: string, numberOfCleanings?: number): void;
    /**
     * This is a wrapper function for edge cleaning mode
     * @since 0.6.2
     */
    edge(): void;
    /**
     * This is a wrapper function for spot cleaning mode
     * @since 0.6.2
     */
    spot(): void;
    /**
     * This is a wrapper function to send the vacuum back to the charging station
     * @since 0.6.2
     */
    charge(): void;
    stop(): void;
    pause(mode?: string): void;
    resume(): void;
    playSound(soundID?: number): void;
    run(action: any, ...args: any[]): void;
    handleMapsEvent(mapData: any): Promise<void>;
    handleMapSpotAreasEvent(spotAreas: any): Promise<void>;
    handleMapVirtualBoundaries(virtualBoundaries: any): Promise<void>;
    handleMapSpotAreaInfo(spotAreaInfo: any): Promise<void>;
    handleMapVirtualBoundaryInfo(virtualBoundaryInfo: any): Promise<void>;
    handleMapImageInfo(mapImageInfo: any): Promise<void>;
    connect_and_wait_until_ready(): void;
    connect(): void;
    on(name: any, func: any): void;
    getLibraryForCommands(): typeof import("./950type/vacBotCommand") | typeof import("./non950type/vacBotCommand");
    getLibraryForProtocol(): typeof import("./950type/ecovacsMQTT_JSON.js") | typeof import("./non950type/ecovacsMQTT_XML.js") | typeof import("./non950type/ecovacsXMPP_XML.js");
    useMqttProtocol(): boolean;
    getProtocol(): "MQTT" | "XMPP";
    is950type(): any;
    isNot950type(): boolean;
    isN79series(): boolean;
    isSupportedDevice(): any;
    isKnownDevice(): any;
    getDeviceProperty(property: any, defaultValue?: boolean): any;
    hasMainBrush(): any;
    hasEdgeCleaningMode(): boolean;
    hasSpotCleaningMode(): boolean;
    hasSpotAreas(): any;
    hasSpotAreaCleaningMode(): any;
    hasCustomAreas(): any;
    hasCustomAreaCleaningMode(): any;
    hasMappingCapabilities(): any;
    hasMoppingSystem(): any;
    hasVacuumPowerAdjustment(): any;
    hasVoiceReports(): any;
    hasAutoEmptyStation(): any;
    isMapImageSupported(): any;
    getVacBotDeviceId(): any;
    getProductName(): any;
    getProductImageURL(): any;
    getModelName(): any;
    getName(): any;
    getNickname(): any;
    sendCommand(action: any): void;
    sendPing(): void;
    disconnect(): void;
    getAreaName_i18n(name: any, languageCode?: string): any;
    removeFromLogs(logData: any): any;
}
//# sourceMappingURL=vacBot.d.ts.map