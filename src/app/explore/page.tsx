import PagePadding from '@/components/pagePadding';
import Category from './components/Category';
import PlayListCarousel from '@/components/PlayListCarousel';
import { getAllPlaylist, getSongListTop10, dymmyGenreList } from '@/lib/dummyData';
import SongListCarousel from '@/components/SongListCarousel';
import GenreListCarousel from '@/components/GenreListCarousel';

const page = async () => {
    const [playlistArray, songListTop10] = await Promise.all([getAllPlaylist(), getSongListTop10()]);

    return (
        <PagePadding>
            <div className="mt-4"></div>
            <Category />
            <div className="mt-20"></div>
            <PlayListCarousel playlistArray={playlistArray} Thumbnail={''} title="새 앨범 및 싱글" subTitle={''} />
            <div className="mt-20"></div>
            <SongListCarousel songListTop10={songListTop10} Thumbnail={''} title="인기곡" subTitle={''} />
            <div className="mt-20"></div>
            <GenreListCarousel genreList={dymmyGenreList} Thumbnail={''} title="새 앨범 및 싱글" subTitle={''} />
        </PagePadding>
    );
};

export default page;
