import TelemetryClient from '../../telemetry-client'

export default interface ITelemetryDiagnosticControls {
     diagnosticChannelConnectionString: string;
	 telemetryClient: TelemetryClient;
	 diagnosticInfo: string;
}