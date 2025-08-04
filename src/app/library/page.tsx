import PagePadding from '@/components/pagePadding';
import Category from './components/Category';
import PlayListCard from '@/components/PlayListCard';

import { dummyPlaylistArray } from '@/lib/dummyData';

const page = () => {
    return (
        <PagePadding>
            <div className="mt-9"></div>
            <Category />
            <section className="mt-12 grid grid-cols-3 gap-6 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                {dummyPlaylistArray.map((playlist) => (
                    <PlayListCard key={playlist.id} playlist={playlist} />
                ))}
            </section>
        </PagePadding>
    );
};

export default page;
