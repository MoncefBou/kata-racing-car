export default class ConnectionSimulator {

    // simulate the operation on a real modem
    static connectionEventsSimulator(min: number, max: number): number {
        const delta = max + 1 - min;
        return min + Math.floor(delta * Math.random());
    }
}
