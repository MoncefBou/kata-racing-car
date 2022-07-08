import TelemetryDiagnosticControls from '../telemetry-system/telemetry-diagnostic-controls';
import TelemetryClientConnection from '../telemetry-system/service/client/connection'
import TelemetryClientDisconnection from '../telemetry-system/service/client/disconnection';
import TelemetryClient from '../telemetry-system/telemetry-client'
import DiagnosticMessage from '../telemetry-system/service/client/diagnostic-message'
import WriteDiagnosticInfo from '../telemetry-system/service/diagnostic-controls/write-diagnostic-info'
import ReadDiagnosticInfo from '../telemetry-system/service/diagnostic-controls/read-diagnostic-info'
import GetOnlineStatus from '../telemetry-system/service/client/get-online-status'
import ReceiveDiagnosticMessage from '../telemetry-system/service/client/receive-diagnostic-message-result'
import SendDiagnosticMessage from '../telemetry-system/service/client/send-diagnostic-message-result'
import initializeDiagnosticMessageResult from '../telemetry-system/service/client/initialize-diagnostic-message-result'
// jest.mock('../telemetry-system/telemetry-client');
// jest.mock('../telemetry-system/telemetry-diagnostic-controls');


// beforeEach(() => {
// 	(TelemetryClient as jest.Mock<TelemetryClient>).mockClear();
// 	(TelemetryDiagnosticControls as jest.Mock<TelemetryDiagnosticControls>).mockClear();
//   });

const basicTelemetryDiagnosticControls = {
	diagnosticChannelConnectionString: '*111#',
	telemetryClient: { onlineStatus: false, diagnosticMessageResult: '' },
	diagnosticInfo: '',
};

const telemetryDiagnosticControlsReceiveDiagnosticMessage = {
	diagnosticChannelConnectionString: '*111#',
	telemetryClient: {
		onlineStatus: false,
		diagnosticMessageResult: 'LAST TX rate................ 100 MBPS\r\n'
			+ 'HIGHEST TX rate............. 100 MBPS\r\n'
			+ 'LAST RX rate................ 100 MBPS\r\n'
			+ 'HIGHEST RX rate............. 100 MBPS\r\n'
			+ 'BIT RATE.................... 100000000\r\n'
			+ 'WORD LEN.................... 16\r\n'
			+ 'WORD/FRAME.................. 511\r\n'
			+ 'BITS/FRAME.................. 8192\r\n'
			+ 'MODULATION TYPE............. PCM/FM\r\n'
			+ 'TX Digital Los.............. 0.75\r\n'
			+ 'RX Digital Los.............. 0.10\r\n'
			+ 'BEP Test.................... -5\r\n'
			+ 'Local Rtrn Count............ 00\r\n'
			+ 'Remote Rtrn Count........... 00',
	},
	diagnosticInfo: 'LAST TX rate................ 100 MBPS\r\n'
		+ 'HIGHEST TX rate............. 100 MBPS\r\n'
		+ 'LAST RX rate................ 100 MBPS\r\n'
		+ 'HIGHEST RX rate............. 100 MBPS\r\n'
		+ 'BIT RATE.................... 100000000\r\n'
		+ 'WORD LEN.................... 16\r\n'
		+ 'WORD/FRAME.................. 511\r\n'
		+ 'BITS/FRAME.................. 8192\r\n'
		+ 'MODULATION TYPE............. PCM/FM\r\n'
		+ 'TX Digital Los.............. 0.75\r\n'
		+ 'RX Digital Los.............. 0.10\r\n'
		+ 'BEP Test.................... -5\r\n'
		+ 'Local Rtrn Count............ 00\r\n'
		+ 'Remote Rtrn Count........... 00',
}

const basicTelemetryClient = {
	onlineStatus: false, diagnosticMessageResult: '',
};

const telemetryClientSendDiagnosticMessageResult = {
	onlineStatus: false,
	diagnosticMessageResult: 'LAST TX rate................ 100 MBPS\r\n'
		+ 'HIGHEST TX rate............. 100 MBPS\r\n'
		+ 'LAST RX rate................ 100 MBPS\r\n'
		+ 'HIGHEST RX rate............. 100 MBPS\r\n'
		+ 'BIT RATE.................... 100000000\r\n'
		+ 'WORD LEN.................... 16\r\n'
		+ 'WORD/FRAME.................. 511\r\n'
		+ 'BITS/FRAME.................. 8192\r\n'
		+ 'MODULATION TYPE............. PCM/FM\r\n'
		+ 'TX Digital Los.............. 0.75\r\n'
		+ 'RX Digital Los.............. 0.10\r\n'
		+ 'BEP Test.................... -5\r\n'
		+ 'Local Rtrn Count............ 00\r\n'
		+ 'Remote Rtrn Count........... 00',
};

function convertTelemetryDiagnosticControlsInObject(instance: TelemetryDiagnosticControls): object {
	const { ...telemtryClientObject } = instance.telemetryClient;
	const { ...telemtryDiagnosticControlsObject } = instance;
	telemtryDiagnosticControlsObject.telemetryClient = telemtryClientObject;
	return telemtryDiagnosticControlsObject;
}

function convertTelemetryClientInObject(instance: TelemetryClient): object {
	const { ...telemtryClientObject } = instance;
	return telemtryClientObject;
}

describe('Telemetry System', () => {
	describe('DiagnosticControls', () => {
		test('basic instance of telemetry diagnostic controls should return the same data', () => {
			const instanceTelemetry = new TelemetryDiagnosticControls();
			const telemtryDiagnosticControlsObject = convertTelemetryDiagnosticControlsInObject(instanceTelemetry);

			expect(telemtryDiagnosticControlsObject).toStrictEqual(basicTelemetryDiagnosticControls);
		});
		test('WriteDiagnosticInfo should change diagnosticInfo value of TelemetryDiagnosticControls instance', () => {
			const instanceTelemetry = new TelemetryDiagnosticControls();
			const newValue = 'test';
			new WriteDiagnosticInfo().writeDiagnosticInfo(newValue, instanceTelemetry);

			expect(instanceTelemetry.diagnosticInfo).toBe(newValue);
		});
		test('ReadDiagnosticInfo should return diagnosticInfo value of TelemetryDiagnosticControls instance', () => {
			const instanceTelemetry = new TelemetryDiagnosticControls();
			const diagnosticInfo = new ReadDiagnosticInfo().readDiagnosticInfo(instanceTelemetry);

			expect(instanceTelemetry.diagnosticInfo).toBe(diagnosticInfo);
		});
	});

	describe('Client', () => {
		test('basic instance of telemetry client should return the same data', () => {
			const instanceTelemetry = new TelemetryClient();
			const telemetryClientObject = convertTelemetryClientInObject(instanceTelemetry);

			expect(telemetryClientObject).toStrictEqual(basicTelemetryClient);
		});
		test('TelemetryClientConnection should throw error if valueDiagnosticChannelConnectionString is an empty string ', () => {
			const instanceTelemetry = new TelemetryClient();
			const valueDiagnosticChannelConnectionString = '';

			expect(() => new TelemetryClientConnection().connect(instanceTelemetry, valueDiagnosticChannelConnectionString)).toThrow('missing telemetryServerConnectionString parameter');
		});
		test('TelemetryClientDisconnection should change onlineStatut of TelemetryClient to false', () => {
			const instanceTelemetry = new TelemetryClient();
			instanceTelemetry.onlineStatus = true;
			new TelemetryClientDisconnection().disconnect(instanceTelemetry);

			expect(instanceTelemetry.onlineStatus).toBe(false);
		});
		test('DiagnosticMessage should return this value AT#UD', () => {
			const expected = 'AT#UD';
			const diagnosticMessage = new DiagnosticMessage().diagnosticMessage();

			expect(diagnosticMessage).toBe(expected);
		});
		test('GetOnlineStatus should return online status of telemetry client instance', () => {
			const instanceTelemetryClient = new TelemetryClient();
			const onlineStatus = new GetOnlineStatus().getOnlineStatus(instanceTelemetryClient);

			expect(onlineStatus).toBe(instanceTelemetryClient.onlineStatus);
		});
		test('initializeDiagnosticMessageResult should initialize diagnosticMessageResult to an empty string ', () => {
			const instanceTelemetryClient = new TelemetryClient();
			const newDiagnosticMessage = new DiagnosticMessage().diagnosticMessage();
			new SendDiagnosticMessage().send(newDiagnosticMessage, instanceTelemetryClient);
			new initializeDiagnosticMessageResult().initialize(instanceTelemetryClient);

			expect(instanceTelemetryClient.diagnosticMessageResult).toBe('');
		});

		describe('SendDiagnosticMessage', () => {
			test('SendDiagnosticMessage should change diagnosticResultMessage ', () => {
				const instanceTelemetryClient = new TelemetryClient();
				const newDiagnosticMessage = new DiagnosticMessage().diagnosticMessage();
				new SendDiagnosticMessage().send(newDiagnosticMessage, instanceTelemetryClient);
				const telemetryClientObject = convertTelemetryClientInObject(instanceTelemetryClient);

				expect(telemetryClientObject).toStrictEqual(telemetryClientSendDiagnosticMessageResult);
			});
			test('SendDiagnosticMessage should throw error if diagnosticMessage is an empty string ', () => {
				const instanceTelemetryClient = new TelemetryClient();
				const newDiagnosticMessage = ''

				expect(() => new SendDiagnosticMessage().send(newDiagnosticMessage, instanceTelemetryClient)).toThrow('missing message parameter');
			});
			test('SendDiagnosticMessage should throw error if diagnosticMessage is wrong ', () => {
				const instanceTelemetryClient = new TelemetryClient();
				const newDiagnosticMessage = 'wrongMessage'

				expect(() => new SendDiagnosticMessage().send(newDiagnosticMessage, instanceTelemetryClient)).toThrow('wrong message parameter');
			});
		});

		describe('ReceiveDiagnosticMessage', () => {
			test('ReceiveDiagnosticMessage should change diagnosticInfo value for diagnosticMessageResult', () => {
				const instanceTelemetryDiagnosticControls = new TelemetryDiagnosticControls();
				const newDiagnosticMessage = new DiagnosticMessage().diagnosticMessage();
				new SendDiagnosticMessage().send(newDiagnosticMessage, instanceTelemetryDiagnosticControls.telemetryClient);
				new ReceiveDiagnosticMessage().receive(instanceTelemetryDiagnosticControls);
				const telemetryDiagnosticControlsObject = convertTelemetryDiagnosticControlsInObject(instanceTelemetryDiagnosticControls);

				expect(telemetryDiagnosticControlsObject).toStrictEqual(telemetryDiagnosticControlsReceiveDiagnosticMessage);
			});
			test('ReceiveDiagnosticMessage should change diagnosticInfo value for string value truthy and different from diagnosticMessageResult', () => {
				const instanceTelemetryDiagnosticControls = new TelemetryDiagnosticControls();
				new ReceiveDiagnosticMessage().receive(instanceTelemetryDiagnosticControls);
				const diagnosticMessageResult = instanceTelemetryDiagnosticControls.telemetryClient.diagnosticMessageResult;

				expect(typeof instanceTelemetryDiagnosticControls.diagnosticInfo).toBe('string');
				expect(instanceTelemetryDiagnosticControls.diagnosticInfo).toBeTruthy();
				expect(instanceTelemetryDiagnosticControls.diagnosticInfo !== diagnosticMessageResult).toBe(true);
			});
		});
	});
});