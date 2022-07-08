import TelemetryDiagnosticControls from '../../telemetry-diagnostic-controls'

export default interface IReceiveDiagnosticMessage {
    receive(instanceTelemetryDiagnosticControls: TelemetryDiagnosticControls): void
}