import TelemetryClient from "../../telemetry-client"

export default interface ITelemetryClientConnection {
    connect(instanceTelemetryClient: TelemetryClient,
        diagnosticChannelConnectionString: string): void
}