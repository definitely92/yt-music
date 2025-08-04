import { chunkArray } from '@/lib/utils';
import { TopSong } from '@/types';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import SongCard from '@/components/SongCard';

interface SongListCarouselProps {
    songListTop10: TopSong[];
    Thumbnail: React.ReactNode;
    title: string;
    subTitle: string;
}

const SongColumn = ({ songList = [] }: { songList: TopSong[] }) => {
    return (
        <div className="flex flex-col gap-3">
            {songList.map((song, index) => (
                <SongCard key={index} song={song} />
            ))}
        </div>
    );
};

const SongListCarousel: React.FC<SongListCarouselProps> = ({ songListTop10, Thumbnail, title, subTitle }) => {
    const chunkedSongListTop10 = chunkArray(songListTop10, 4) as TopSong[][];
    return (
        <div>
            <Carousel>
                <div className="flex flex-row justify-between items-end my-2">
                    <article className="flex flex-row gap-3">
                        {Thumbnail}
                        <div className="flex flex-col justify-center">
                            {subTitle && <div className="text-neutral-500">{subTitle}</div>}
                            <div className="text-[34px] font-bold leading-[34px]">{title}</div>
                        </div>
                    </article>
                    <div className="relative left-[-45px]">
                        <div className="absolute bottom-[20px]">
                            <CarouselPrevious className="right-2" />
                            <CarouselNext className="left-2" />
                        </div>
                    </div>
                </div>
                <CarouselContent className="mt-4">
                    {chunkedSongListTop10.map((songList, index) => (
                        <CarouselItem key={index} className="lg:basis-1/2">
                            <SongColumn songList={songList} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default SongListCarousel;
