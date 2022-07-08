import TelemetryClient from "../../telemetry-client";

export default interface ISendDiagnosticMessage {
    send(message: string, instanceTelemetryClient: TelemetryClient): void
}