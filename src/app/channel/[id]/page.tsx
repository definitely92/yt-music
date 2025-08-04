const Channel = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    return <div>Channel/{id}</div>;
};

export default Channel;
