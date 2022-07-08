import TelemetryDiagnosticControls from '../../telemetry-diagnostic-controls'

export default interface IWriteDiagnosticInfo {
    writeDiagnosticInfo(newValue: string, instanceTelemetryDiagnosticControls: TelemetryDiagnosticControls): void
}