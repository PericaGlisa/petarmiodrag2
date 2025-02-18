import { useState } from 'react';
import { Play } from 'lucide-react';
import { VideoModal } from './VideoModal';
import { VideoCard } from './VideoCard';
import type { VideoProps } from './types';

export function StartupVideo(props: VideoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <VideoCard {...props} onVideoClick={handleVideoClick} />
      <VideoModal 
        videoId={props.videoId}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}