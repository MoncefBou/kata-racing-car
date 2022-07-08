import GetRandomNumber from '../utils/get-random-number';
import TelemetryDiagnosticControls from '../../telemetry-diagnostic-controls';
import IReceiveDiagnosticMessage from '../../interface/client/i-receive-diagnostic-message-result'

export default class ReceiveDiagnosticMessage implements IReceiveDiagnosticMessage {

	public receive(instanceTelemetryDiagnosticControls: TelemetryDiagnosticControls): void {
		let message: string;

		if (instanceTelemetryDiagnosticControls.telemetryClient.diagnosticMessageResult === '') {
			// simulate a received message (just for illustration - not needed for this exercise)
			message = '';

			const messageLength = GetRandomNumber.getRandomNumber(50, 110);
			for (let i = messageLength; i >= 0; --i) {
				message += GetRandomNumber.getRandomNumber(40, 126).toString();
			}
		} else {
			message = instanceTelemetryDiagnosticControls.telemetryClient.diagnosticMessageResult;
		}
		instanceTelemetryDiagnosticControls.diagnosticInfo = message;
	}
}