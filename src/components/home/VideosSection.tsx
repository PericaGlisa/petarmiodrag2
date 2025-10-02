import { Video } from '../videos/Video';

const videos = [
  {
    title: "Launch a SaaS with No Money",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400",
    date: "2 December 2023"
  },
  {
    title: "4 Fast Business Ideas",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400",
    date: "15 November 2023"
  }
];

export function VideosSection() {
  return (
    <section>
      <h2>Latest YouTube Videos</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {videos.map((video, index) => (
          <Video key={index} {...video} />
        ))}
      </div>
    </section>
  );
}