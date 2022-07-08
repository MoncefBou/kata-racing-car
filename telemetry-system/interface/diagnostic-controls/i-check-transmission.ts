import TelemetryDiagnosticControls from '../../telemetry-diagnostic-controls'

export default interface ICheckTransmission {
    checkTransmission(instanceTelemetryDiagnosticControls: TelemetryDiagnosticControls): void
}