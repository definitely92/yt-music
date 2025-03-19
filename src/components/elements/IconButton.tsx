const IconButton = ({ icon, onClickIconButton }: { icon: React.ReactNode; onClickIconButton: () => void }) => {
    return (
        <div
            onClick={onClickIconButton}
            className="flex items-center justify-center w-[40px] h-[40px] rounded-full cursor-pointer hover:bg-[rgba(144,144,144,0.45)]"
        >
            {icon}
        </div>
    );
};

export default IconButton;
