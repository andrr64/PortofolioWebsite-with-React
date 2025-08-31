'use client';

import React, { useState } from 'react';
import NavItem from './NavItem';

interface MenuItem {
    id: string;
    href?: string;
    icon?: string;
    label: string;
    component?: React.ReactNode;
    submenu?: MenuItem[];
}

interface SidebarProps {
    menuItems: MenuItem[];
    onSelected: (menuId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems, onSelected }) => {
    const [activeItem, setActiveItem] = useState<string>('menu1');
    const [activeSubItem, setActiveSubItem] = useState<string | null>(null);
    const [openMenus, setOpenMenus] = useState<string[]>(['menu1']);

    const handleMenuClick = (itemId: string) => {
        setActiveItem(itemId);
        setActiveSubItem(null);

        setOpenMenus((prev) =>
            prev.includes(itemId)
                ? prev.filter((id) => id !== itemId)
                : [...prev, itemId]
        );

        onSelected(itemId);
    };

    const handleSubItemClick = (subItemId: string) => {
        setActiveSubItem(subItemId);
        onSelected(subItemId);
    };

    return (
        <aside className="w-60 flex flex-col bg-white flex-shrink-0">
            {/* Logo & App Title */}
            <div className="px-6 py-4 flex flex-col items-start border-b border-gray-200">
                <span className="font-bold text-2xl text-black">Andreas Learning</span>
                <span className="text-gray-500 text-sm mt-1">
                    Notes App with React Native
                </span>
            </div>

            {/* Menu */}
            <nav className="flex-grow px-4 py-6 space-y-2 overflow-y-auto">
                <p className="text-gray-400 text-xs font-semibold uppercase px-3 pb-2">
                    Materi
                </p>
                {menuItems.map((item) => (
                    <NavItem
                        key={item.id}
                        item={item}
                        isActive={activeItem === item.id}
                        isOpen={openMenus.includes(item.id)}
                        onClick={() => handleMenuClick(item.id)}
                        onSubItemClick={handleSubItemClick}
                        activeSubItem={activeSubItem}
                    />
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;