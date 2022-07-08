import ITelemetryClient from './interface/client/i-telemetry-client'

export default class TelemetryClient implements ITelemetryClient {
	public onlineStatus: boolean;
	public diagnosticMessageResult: string;

	constructor() {
		this.onlineStatus = false;
		this.diagnosticMessageResult = '';
	}
}
