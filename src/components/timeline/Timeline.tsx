import { TimelineItem } from './TimelineItem';
import { TIMELINE_ITEMS } from '../../constants';

export function Timeline() {
  return (
    <div className="space-y-6">
      {TIMELINE_ITEMS.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
}