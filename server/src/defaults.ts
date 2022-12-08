import { VEHICLE_CLASS } from '@AthenaShared/enums/vehicleTypeFlags';
import { VehicleData } from '@AthenaShared/information/vehicles';
import { IDealership } from '../../shared/interfaces';
import { DealershipView } from './view';

const dealerships: Array<IDealership> = [
    {
        uid: 'muscle-1',
        name: 'Muscle Cars',
        vehiclePosition: { x: -48.092308044433594, y: -1682.3341064453125, z: 28.5 },
        cam: { x: -44.25494384765625, y: -1684.6549072265625, z: 28.5 },
        pos: { x: -45.837364196777344, y: -1673.063720703125, z: 28.5 },
        vehicles: VehicleData.filter((x) => x.class === VEHICLE_CLASS.MUSCLE && x.sell),
        blip: 530,
    },
    {
        uid: 'sport-1',
        name: 'Sports Cars',
        vehiclePosition: { x: -43.83578109741211, y: -1097.210693359375, z: 25.6 },
        cam: { x: -45.301246643066406, y: -1100.4744873046875, z: 25.6 },
        pos: { x: -45.565216064453125, y: -1103.6785888671875, z: 25.6 },
        vehicles: VehicleData.filter((x) => x.class === VEHICLE_CLASS.SPORT && x.sell),
        blip: 523,
    },
    {
        uid: 'super-1',
        name: 'Super Cars',
        vehiclePosition: { x: -790.1670532226562, y: -236.14944458007812, z: 36.4 },
        cam: { x: -791.2615356445312, y: -241.10769653320312, z: 36.4 },
        pos: { x: -803.7494506835938, y: -224.25494384765625, z: 36.4 },
        vehicles: VehicleData.filter((x) => x.class === VEHICLE_CLASS.SUPER && x.sell),
        blip: 523,
    },
    {
        uid: 'sedan-1',
        name: 'Budget Sedan Cars',
        vehiclePosition: { x: -1042.813232421875, y: -2663.406494140625, z: 13.03 },
        cam: { x: -1044.22412109375, y: -2659.66162109375, z: 13.03 },
        pos: { x: -1049.6439208984375, y: -2647.7802734375, z: 13.03 },
        vehicles: VehicleData.filter((x) => x.class === VEHICLE_CLASS.SEDAN && x.sell),
    },
    {
        uid: 'compact-1',
        name: 'Compact Cars',
        vehiclePosition: { x: -1042.813232421875, y: -2663.406494140625, z: 13.03 },
        cam: { x: -1044.22412109375, y: -2659.66162109375, z: 13.03 },
        pos: { x: -1058.3736572265625, y: -2651.947265625, z: 13.03 },
        vehicles: VehicleData.filter((x) => x.class === VEHICLE_CLASS.COMPACT && x.sell),
    },
    {
        uid: 'cycle-1',
        name: 'Bicycles',
        vehiclePosition: { x: -1102.03515625, y: -1690.865966796875, z: 3.6 },
        cam: { x: -1099.79345703125, y: -1693.9384765625, z: 3.6 },
        pos: { x: -1107.085693359375, y: -1694.18896484375, z: 3.6 },
        vehicles: VehicleData.filter((x) => x.class === VEHICLE_CLASS.CYCLE && x.sell),
        blip: 106,
        marker: 38,
    },
    {
        uid: 'cycle-2',
        name: 'Bicycles',
        vehiclePosition: { x: -1042.813232421875, y: -2663.406494140625, z: 13.03 },
        cam: { x: -1044.22412109375, y: -2659.66162109375, z: 13.03 },
        pos: { x: -1058.6900634765625, y: -2641.63525390625, z: 13.03 },
        vehicles: VehicleData.filter((x) => x.class === VEHICLE_CLASS.CYCLE && x.sell),
        blip: 106,
        marker: 38,
    },
    {
        uid: 'boat-1',
        name: 'Boats',
        vehiclePosition: { x: -870.6065673828125, y: -1361.169189453125, z: -0.47 },
        cam: { x: -863.1296997070312, y: -1358.0703125, z: 0.38 },
        pos: { x: -816.3560180664062, y: -1345.8330078125, z: 4.3 },
        vehicles: VehicleData.filter((x) => x.class === VEHICLE_CLASS.BOAT && x.sell),
        blip: 455,
        marker: 35,
    },
    {
        uid: 'bikes-1',
        name: 'Motorcycles',
        vehiclePosition: { x: 331.68792724609375, y: -1159.160400390625, z: 28.5 },
        cam: { x: 331.5428466796875, y: -1153.6087646484375, z: 28.5 },
        pos: { x: 306, y: -1162.7340087890625, z: 28.5 },
        vehicles: VehicleData.filter((x) => x.class === VEHICLE_CLASS.MOTORCYCLE && x.sell),
        blip: 226,
        marker: 37,
    },
    {
        uid: 'coupe-1',
        name: 'Coupés',
        vehiclePosition: { x: 208.6681365966797, y: 383.26153564453125, z: 106.3 },
        cam: { x: 213.28350830078125, y: 382.3648376464844, z: 106.3 },
        pos: { x: 222.38241577148438, y: 375.4417724609375, z: 105.9 },
        vehicles: VehicleData.filter((x) => x.class === VEHICLE_CLASS.COUPE && x.sell),
    },
    {
        uid: 'suv-1',
        name: 'SUV',
        vehiclePosition: { x: 1224.4351806640625, y: 2706.35595703125, z: 37.3 },
        cam: { x: 1224.6988525390625, y: 2714.26806640625, z: 37.3 },
        pos: { x: 1223.235107421875, y: 2727.151611328125, z: 37.3 },
        vehicles: VehicleData.filter((x) => x.class === VEHICLE_CLASS.SUV && x.sell),
        blip: 820,
    },
    {
        uid: 'offroad-1',
        name: 'Offroad',
        vehiclePosition: { x: 1224.4351806640625, y: 2706.35595703125, z: 37.3 },
        cam: { x: 1224.6988525390625, y: 2714.26806640625, z: 37.3 },
        pos: { x: 1226.5054931640625, y: 2726.808837890625, z: 37.3 },
        vehicles: VehicleData.filter((x) => x.class === VEHICLE_CLASS.OFFROAD && x.sell),
        blip: 147,
    },
    {
        uid: 'sportsclassic-1',
        name: 'Sports Classics',
        vehiclePosition: { x: -199.05494689941406, y: 6218.42626953125, z: 30.7 },
        cam: { x: -204.76483154296875, y: 6213.46826171875, z: 30.7 },
        pos: { x: -215.07691955566406, y: 6218.5185546875, z: 30.7 },
        vehicles: VehicleData.filter((x) => x.class === VEHICLE_CLASS.SPORT_CLASSIC && x.sell),
        blip: 595,
    },
];

export class DefaultDealerships {
    static init() {
        for (let i = 0; i < dealerships.length; i++) {
            DealershipView.add(dealerships[i]);
        }
    }
}
