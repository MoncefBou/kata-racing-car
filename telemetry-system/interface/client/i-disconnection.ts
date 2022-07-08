import TelemetryClient from "../../telemetry-client";

export default interface ITelemetryClientDisconnection {
    disconnect(instanceTelemetry: TelemetryClient): void
}