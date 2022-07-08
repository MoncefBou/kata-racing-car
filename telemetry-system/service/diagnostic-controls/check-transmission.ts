import TelemetryDiagnosticControls from '../../telemetry-diagnostic-controls'
import DiagnosticMessage from '../client/diagnostic-message';
import TelemetryClientDisconnection from '../client/disconnection';
import GetOnlineStatus from '../client/get-online-status';
import TelemetryClientConnection from '../client/connection';
import SendDiagnosticMessage from '../client/send-diagnostic-message-result';
import ReceiveDiagnosticMessage from '../client/receive-diagnostic-message-result';
import ICheckTransmission from '../../interface/diagnostic-controls/i-check-transmission'
import initializeDiagnosticMessageResult from '../client/initialize-diagnostic-message-result';

export default class CheckTransmission implements ICheckTransmission {

    public checkTransmission(instanceTelemetryDiagnosticControls: TelemetryDiagnosticControls): void {
        new TelemetryClientDisconnection().disconnect(instanceTelemetryDiagnosticControls.telemetryClient)

        let retryLeft = 3;
        while (new GetOnlineStatus().getOnlineStatus(instanceTelemetryDiagnosticControls.telemetryClient) === false && retryLeft > 0) {
            new TelemetryClientConnection().connect(
                instanceTelemetryDiagnosticControls.telemetryClient,
                instanceTelemetryDiagnosticControls.diagnosticChannelConnectionString
            )
            retryLeft -= 1;
        }

        if (new GetOnlineStatus().getOnlineStatus(instanceTelemetryDiagnosticControls.telemetryClient) === false) {
            throw new Error('Unable to connect');
        }

        const newDiagnosticMessage = new DiagnosticMessage().diagnosticMessage()
        new SendDiagnosticMessage().send(newDiagnosticMessage, instanceTelemetryDiagnosticControls.telemetryClient);
        new ReceiveDiagnosticMessage().receive(instanceTelemetryDiagnosticControls);
        new initializeDiagnosticMessageResult().initialize(instanceTelemetryDiagnosticControls.telemetryClient)
    }
}