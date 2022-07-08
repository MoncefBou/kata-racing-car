import ConnectionSimulator from '../utils/connection-simulator';
import TelemetryDiagnosticControls from '../../telemetry-diagnostic-controls';
import ITelemetryClientConnection from '../../interface/client/i-connection'
import TelemetryClient from '../../telemetry-client';


export default class TelemetryClientConnection implements ITelemetryClientConnection {

	public connect(instanceTelemetryClient: TelemetryClient, diagnosticChannelConnectionString: string) {
		
		if (diagnosticChannelConnectionString === '') {
			throw new Error('missing telemetryServerConnectionString parameter');
		}

		// simulate the operation on a real modem
		const success = ConnectionSimulator.connectionEventsSimulator(1,10) <= 8;

		instanceTelemetryClient.onlineStatus = success
	}
}