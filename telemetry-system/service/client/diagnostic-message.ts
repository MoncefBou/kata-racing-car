import IDiagnosticMessage from '../../interface/client/i-diagnostic-message'

export default class DiagnosticMessage implements IDiagnosticMessage {

    public diagnosticMessage(): string {
        return 'AT#UD';
    }
}