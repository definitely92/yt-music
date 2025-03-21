'use client';

import { useUiState } from '@/hooks/useUiState';
import { homeCategoryList } from '@/lib/dummyData';
import { cn } from '@/lib/utils';

interface Category {
    label: string;
    src: string;
}

const Category = () => {
    const { homeCategory, setHeaderImgSrc, setHomeCategory } = useUiState();

    const handleCategoryClick = (category: Category) => {
        if (homeCategory === category.label) {
            setHomeCategory('');
            setHeaderImgSrc('');
        } else {
            setHomeCategory(category.label);
            setHeaderImgSrc(category.src);
        }
    };
    return (
        <ul className="max-w-full overflow-x-auto flex flex-row gap-4">
            {homeCategoryList.map((category) => (
                <li
                    className={cn(
                        'h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer',
                        category.label === homeCategory && 'bg-white text-black hover:bg-white',
                    )}
                    key={category.label}
                    onClick={() => handleCategoryClick(category)}
                >
                    {category.label}
                </li>
            ))}
        </ul>
    );
};

export default Category;
