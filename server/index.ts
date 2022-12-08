import * as alt from 'alt-server';
import { PluginSystem } from '@AthenaServer/systems/plugins';
import { DefaultDealerships } from './src/defaults';
import { DealershipView } from './src/view';

const PLUGIN_NAME = 'Athena Dealership';

PluginSystem.registerPlugin(PLUGIN_NAME, async () => {
    DealershipView.init();
    DefaultDealerships.init();
    alt.log(`~lg~${PLUGIN_NAME} was Loaded`);
});
