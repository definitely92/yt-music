import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Playlist } from '@/types';
interface PlayListCarouselProps {
    playlistArray: Playlist[];
    Thumbnail: React.ReactNode;
    title: string;
    subTitle: string;
}

const PlayListCarousel: React.FC<PlayListCarouselProps> = ({ playlistArray, Thumbnail, title, subTitle }) => {
    return (
        <div className="w-full">
            <Carousel>
                <div className="flex flex-row justify-between items-end my-2">
                    <article className="flex flex-row gap-3">
                        {Thumbnail}
                        <div className="flex flex-col justify-center">
                            <div>{subTitle && <div className="text-netural-500">{subTitle}</div>}</div>
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
                    {playlistArray.map((playlist) => (
                        <CarouselItem key={playlist.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                            <div>
                                <div>{playlist.playlistName}</div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default PlayListCarousel;
