import IGetOnlineStatus from '../../interface/client/i-get-online-status'
import TelemetryClient from '../../telemetry-client';

export default class GetOnlineStatus implements IGetOnlineStatus {

    public getOnlineStatus(instanceTelemetryClient: TelemetryClient): boolean {
        return instanceTelemetryClient.onlineStatus;
    }
}



