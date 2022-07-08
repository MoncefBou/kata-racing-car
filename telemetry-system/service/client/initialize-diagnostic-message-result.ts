
import TelemetryClient from '../../telemetry-client';
import IInitializeDiagnosticMessageResult from '../../interface/client/i-initialize-diagnostic-message-result'

export default class initializeDiagnosticMessageResult implements IInitializeDiagnosticMessageResult {

    public initialize(instanceTelemetryClient: TelemetryClient): void {
        instanceTelemetryClient.diagnosticMessageResult = '';
    }
}