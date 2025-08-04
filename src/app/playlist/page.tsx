const Playlist = async ({ searchParams }: { searchParams: Promise<{ list: string }> }) => {
    const { list } = await searchParams;
    return <div>Playlist/{list}</div>;
};

export default Playlist;
