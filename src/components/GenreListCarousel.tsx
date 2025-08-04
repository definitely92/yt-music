import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { chunkArray } from '@/lib/utils';
import GenreCard from '@/components/GenreCard';

interface GenreListCarouselProps {
    genreList: string[];
    Thumbnail: React.ReactNode;
    title: string;
    subTitle: string;
}

interface GenreColumnProps {
    genreList: string[];
}
const GenreColumn: React.FC<GenreColumnProps> = ({ genreList }) => {
    return (
        <div className="flex flex-col gap-4">
            {genreList.map((genre, index) => (
                <GenreCard key={index} genre={genre} />
            ))}
        </div>
    );
};

const GenreListCarousel: React.FC<GenreListCarouselProps> = ({ genreList, Thumbnail, title, subTitle }) => {
    const chunkedGenreList = chunkArray(genreList, 4) as string[][];
    return (
        <div className="w-full mb-20">
            <Carousel>
                <div className="flex flex-row justify-between items-end my-2">
                    <article className="flex flex-row gap-3">
                        {Thumbnail}
                        <div className="flex flex-col justify-center">
                            <div>
                                {subTitle && <div className="text-neutral-500">{subTitle}</div>}
                                <div className="text-[34px] font-bold leading-[34px]">{title}</div>
                            </div>
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
                    {chunkedGenreList.map((genreList, index) => (
                        <CarouselItem key={index} className="basis-1/3 lg:basis-1/4">
                            <GenreColumn genreList={genreList} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default GenreListCarousel;
