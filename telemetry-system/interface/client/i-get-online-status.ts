import TelemetryClient from '../../telemetry-client'

export default interface IGetOnlineStatus {
    getOnlineStatus(instanceTelemetryClient: TelemetryClient): boolean
}