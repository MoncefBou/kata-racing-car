import ITelemetryClientDisconnection from '../../interface/client/i-disconnection'
import TelemetryClient from '../../telemetry-client'

export default class TelemetryClientDisconnection implements ITelemetryClientDisconnection {

	public disconnect(instanceTelemetry: TelemetryClient): void {
		instanceTelemetry.onlineStatus = false
	}
}