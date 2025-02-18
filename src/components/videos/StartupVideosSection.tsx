import { useState } from 'react';
import { VideoCard } from './VideoCard';
import { VideoModal } from './VideoModal';

const startupVideos = [
  {
    title: "Zero to One: Building Monopolies",
    speaker: "Peter Thiel",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    videoId: "3Fx5Q8xGU8k",
    topic: "Startup Philosophy"
  },
  {
    title: "How to Live Before You Die",
    speaker: "Steve Jobs",
    thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
    videoId: "Hd_ptbiPoXM",
    topic: "Life Lessons"
  },
  {
    title: "Day 1 to Day 2: Building for the Long Term",
    speaker: "Jeff Bezos",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    videoId: "Hq89wYzOjfs",
    topic: "Company Building"
  },
  {
    title: "The Hard Thing About Hard Things",
    speaker: "Ben Horowitz",
    thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1200",
    videoId: "F2e3RqL4VWs",
    topic: "Leadership"
  }
];

export function StartupVideosSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="mb-2">Startup Insights</h2>
          <p className="text-gray-400">Learn from industry leaders about building successful startups</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {startupVideos.map((video, index) => (
          <VideoCard
            key={index}
            {...video}
            onVideoClick={() => setSelectedVideo(video.videoId)}
          />
        ))}
      </div>

      <VideoModal
        videoId={selectedVideo}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
}