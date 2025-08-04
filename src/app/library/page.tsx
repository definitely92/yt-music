import PagePadding from '@/components/pagePadding';
import Category from './components/Category';
import PlayListCard from '@/components/PlayListCard';
import { getRandomElementFromArray } from '@/lib/utils';
import { dummyPlaylistArray } from '@/lib/dummyData';

const page = () => {
    return (
        <PagePadding>
            <div className="mt-9"></div>
            <Category />
            <section className="mt-12 grid grid-cols-3 gap-6 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
                <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
                <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
                <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
                <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
                <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
            </section>
        </PagePadding>
    );
};

export default page;
