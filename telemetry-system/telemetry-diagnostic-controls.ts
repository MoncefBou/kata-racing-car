import TelemetryClient from './telemetry-client';
import ITelemetryDiagnosticControls from './interface/diagnostic-controls/i-telemetry-diagnostic-controls'

export default class TelemetryDiagnosticControls implements ITelemetryDiagnosticControls {
	public diagnosticChannelConnectionString: string;
	public telemetryClient: TelemetryClient;
	public diagnosticInfo: string;

	constructor() {
		this.diagnosticChannelConnectionString = '*111#';
		this.telemetryClient = new TelemetryClient();
		this.diagnosticInfo = '';
	}
}
