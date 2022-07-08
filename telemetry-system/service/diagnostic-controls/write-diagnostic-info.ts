import TelemetryDiagnosticControls from '../../telemetry-diagnostic-controls'
import IWriteDiagnosticInfo from '../../interface/diagnostic-controls/i-write-diagnostic-info'

export default class WriteDiagnosticInfo implements IWriteDiagnosticInfo {

    public writeDiagnosticInfo(newValue: string, instanceTelemetryDiagnosticControls: TelemetryDiagnosticControls): void {
        instanceTelemetryDiagnosticControls.diagnosticInfo = newValue;
    }
}

