import TelemetryDiagnosticControls from '../../telemetry-diagnostic-controls'
import IReadDiagnosticInfo from '../../interface/diagnostic-controls/i-read-diagnostic-info'

export default class ReadDiagnosticInfo implements IReadDiagnosticInfo {

    public readDiagnosticInfo(instanceTelemetryDiagnosticControls: TelemetryDiagnosticControls): string {
        return instanceTelemetryDiagnosticControls.diagnosticInfo;
    }
}