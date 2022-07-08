import TelemetryClient from "../../telemetry-client";

export default interface IInitializeDiagnosticMessageResult {
    initialize(instanceTelemetry: TelemetryClient): void
}