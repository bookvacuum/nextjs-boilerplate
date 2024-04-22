
import {EnhancedStore} from "@reduxjs/toolkit";

export interface IRuntimeConfig {
    title: string
    baseApi: string
}

declare global {
    interface Window {
        runtimeConfigs: IRuntimeConfig
        store: EnhancedStore
        ethereum: any;
    }
}

export const AppConfig = {
    ...window.runtimeConfigs
}