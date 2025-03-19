import Image from 'next/image';

const Header = ({ children }: { children: React.ReactNode }) => {
    return (
        <header className="relative">
            <section className="absolute top-0 left-0 w-full">
                <div className="relative h-[400px] w-full">
                    <Image
                        src="https://images.unsplash.com/photo-1707833558984-3293e794031c"
                        alt="item"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute top-0 bg-black opacity-40 w-full h-full"></div>
                </div>
            </section>
            <section className="absolute">{children}</section>
        </header>
    );
};

export default Header;
