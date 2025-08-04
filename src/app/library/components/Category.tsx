'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu';

import { cn } from '@/lib/utils';
import { FiCheck } from 'react-icons/fi';
import { AiFillCaretDown } from 'react-icons/ai';
import React from 'react';

interface Category {
    label: string;
    src: string;
}

const Category = () => {
    const libraryCategoryList = ['재생목록', '팟캐스트', '노래', '앨범', '아티스트'];

    return (
        <div className="flex flex-row gap-4 justify-between items-center flex-wrap">
            <ul className="max-w-full overflow-x-auto flex flex-row gap-4">
                {libraryCategoryList.map((category) => (
                    <li
                        key={category}
                        className={cn(
                            'h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer',
                        )}
                    >
                        {category}
                    </li>
                ))}
            </ul>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button
                            className="w-[162px] h-[42px] flex flex-row justify-between items-center
                            p-4 bg-neutral-800 border border-neutral-600 rounded-3xl text-[14px]"
                        >
                            <span>최근활동</span>
                            <AiFillCaretDown />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[300px] bg-neutral-800">
                        <DropdownMenuLabel className="p-4">정렬 기준</DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-neutral-700" />
                        <DropdownMenuCheckboxItem className="p-4">
                            <span className="min-w-[40px]">
                                <FiCheck size={20} />
                            </span>
                            최근 활동
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem className="p-4" disabled>
                            <span></span>
                            최근에 저장됨
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>
                            <span></span>
                            최근 재생한 음악
                        </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default Category;
