import * as alt from 'alt-shared';
import { MARKER_TYPE } from '@AthenaShared/enums/markerTypes';
import { VehicleInfo } from '@AthenaShared/interfaces/vehicleInfo';

export interface IDealership {
    /**
     * Unique identifier for this dealership.
     *
     * @type {string}
     * @memberof IDealership
     */
    uid: string;

    /**
     * The name associated with this dealership
     *
     * @type {string}
     * @memberof IDealership
     */
    name: string;

    /**
     * The position to see vehicle inventory of this dealership.
     *
     * @type {alt.IVector3}
     * @memberof IDealership
     */
    pos: alt.IVector3;

    /**
     * The camera position to start off with for this dealership.
     *
     * @type {alt.IVector3}
     * @memberof IDealership
     */
    cam: alt.IVector3;

    /**
     * The vehicle position to point the camera towards.
     *
     * @type {alt.IVector3}
     * @memberof IDealership
     */
    vehiclePosition: alt.IVector3;

    /**
     * Vehicles that should be sold in this dealership.
     *
     * @type {Array<VehicleInfo>}
     * @memberof IDealership
     */
    vehicles: Array<VehicleInfo>;

    /**
     * Optional blip used on map.
     *
     * @type {number}
     * @memberof IDealership
     */
    blip?: number;

    /**
     * Optional marker used in world.
     *
     * @type {MARKER_TYPE}
     * @memberof IDealership
     */
    marker?: MARKER_TYPE;
}
