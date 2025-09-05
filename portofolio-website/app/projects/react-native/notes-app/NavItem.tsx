'use client';

import React from 'react';

interface SubMenuItem {
    id: string;
    label: string;
    href?: string;
}

interface MenuItem {
    id: string;
    href?: string;
    icon?: string;
    label: string;
    submenu?: SubMenuItem[];
}

interface NavItemProps {
    item: MenuItem;
    isActive: boolean;
    isOpen: boolean;
    onClick: () => void;
    onSubItemClick: (subItemId: string) => void;
    activeSubItem: string | null;
}

const NavItem: React.FC<NavItemProps> = ({
    item,
    isActive,
    isOpen,
    onClick,
    onSubItemClick,
    activeSubItem,
}) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;

    // Kelas aktif & inaktif
    const activeClasses =
        'bg-[#F0E9FF] text-black dark:bg-[#2A1B4B] dark:text-white';
    const inactiveClasses =
        'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800';

    // Icon
    const iconActiveClasses = 'text-[#7C5DFA]';
    const iconInactiveClasses = 'text-gray-400 dark:text-gray-500';

    return (
        <div>
            {/* Menu Utama */}
            <div
                onClick={onClick}
                className={`flex items-center justify-between font-semibold text-sm rounded-lg px-4 py-3 cursor-pointer transition-colors duration-200 ${isActive ? activeClasses : inactiveClasses
                    }`}
            >
                <div className="flex items-center space-x-3">
                    <i
                        className={`${item.icon} ${isActive ? iconActiveClasses : iconInactiveClasses
                            } text-lg w-6 text-center`}
                    ></i>
                    <span>{item.label}</span>
                </div>

                {hasSubmenu && (
                    <i
                        className={`fas fa-chevron-${isOpen ? 'up' : 'down'} text-gray-400 dark:text-gray-500 text-xs transition-transform duration-300`}
                    ></i>
                )}
            </div>

            {/* Submenu */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                {hasSubmenu && (
                    <div className="pl-12 pr-4 pt-2 pb-1 space-y-1 ml-2 border-l-2 border-[#E8E1FF] dark:border-[#3C2F70]">
                        {item.submenu?.map((subItem) => (
                            <a
                                key={subItem.id}
                                href={subItem.href}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onSubItemClick(subItem.id);
                                }}
                                className={`block text-sm rounded-md px-3 py-2 transition-colors duration-200 cursor-pointer ${activeSubItem === subItem.id
                                        ? 'text-[#7C5DFA] bg-purple-50 font-semibold dark:bg-[#372054]'
                                        : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
                                    }`}
                            >
                                {subItem.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavItem;