import TelemetryDiagnosticControls from '../telemetry-system/telemetry-diagnostic-controls';

describe('Telemetry System', () => {
	describe('TelemetryDiagnosticControls', () => {
		test('CheckTransmission should send a diagnostic message and receive a status message response', () => {
			const test = new TelemetryDiagnosticControls()
			console.log("teeeeeeeeeeeeeeeeeeeeeest :", test);
			expect(typeof test).toBe("object")			
		});
	});

});

// TelemetryDiagnosticControls {
// 	diagnosticChannelConnectionString: '*111#',
// 	telemetryClient: TelemetryClient { onlineStatus: false, diagnosticMessageResult: '' },
// 	diagnosticInfo: ''
//   }