import { WebSocketStatus } from './websocket-status';
import { NotificationsDropdown } from './notifications-dropdown';

export function RealtimeStatus() {
  return (
    <div className="flex items-center gap-2">
      <WebSocketStatus />
      <NotificationsDropdown />
    </div>
  );
}