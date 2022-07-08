import TelemetryDiagnosticControls from '../../telemetry-diagnostic-controls'

export default interface IReadDiagnosticInfo {
    readDiagnosticInfo(instanceTelemetryDiagnosticControls: TelemetryDiagnosticControls): string
}