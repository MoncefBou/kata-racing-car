import DiagnosticMessage from './diagnostic-message';
import ISendDiagnosticMessage from '../../interface/client/i-send-diagnostic-message-result'
import TelemetryClient from '../../telemetry-client';

export default class SendDiagnosticMessage implements ISendDiagnosticMessage {

    public send(message: string, instanceTelemetryClient: TelemetryClient): void {
        if (message === '') {
            throw new Error('missing message parameter');
        }

        if (message === new DiagnosticMessage().diagnosticMessage()) {
            // simulate a status report
            let diagnosticMessageResult =
                'LAST TX rate................ 100 MBPS\r\n'
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
                + 'Remote Rtrn Count........... 00';

            instanceTelemetryClient.diagnosticMessageResult = diagnosticMessageResult
        } else {
            throw new Error('wrong message parameter');
        }
    }
}