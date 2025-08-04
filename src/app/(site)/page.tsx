import Category from './components/Category';
import PagePadding from '@/components/pagePadding';
import PlayListCarousel from '@/components/PlayListCarousel';
import { dummyPlaylistArray, getPlaylistById } from '@/lib/dummyData';
import UserIcon from '@/components/UserIcon';
const Page = async () => {
    const dummyPlaylistArray1 = [...dummyPlaylistArray];
    const dummyPlaylistArray2 = [await getPlaylistById(1)];
    const dummyPlaylistArray3 = [await getPlaylistById(2)];
    const dummyPlaylistArray4 = [await getPlaylistById(3)];

    return (
        <PagePadding>
            <div className="min-h-[600px]">
                <Category />
                <div className="mt-9"></div>
                <PlayListCarousel
                    playlistArray={[...dummyPlaylistArray1]}
                    Thumbnail={
                        <div className="w-[56px] h-[56px]">
                            <UserIcon />
                        </div>
                    }
                    title="다시 듣기"
                    subTitle="도도"
                />
                <div className="mt-20"></div>
                <PlayListCarousel
                    playlistArray={[...dummyPlaylistArray2]}
                    title="오아시스"
                    subTitle="새로운 앨범"
                    Thumbnail
                />
                <div className="mt-20"></div>
                <PlayListCarousel
                    playlistArray={[...dummyPlaylistArray3]}
                    subTitle="커뮤니티 제공"
                    Thumbnail
                    title="블라블라"
                />
                <div className="mt-20"></div>
                <PlayListCarousel
                    playlistArray={[...dummyPlaylistArray4]}
                    title="오아시스2"
                    subTitle="커버 및 믹스"
                    Thumbnail
                />
            </div>
        </PagePadding>
    );
};

export default Page;
