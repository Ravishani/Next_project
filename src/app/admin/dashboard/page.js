    "use client";
    import { useState } from "react";
    import {
    IconMenu2,
    IconX,
    IconLayoutDashboard,
    IconUsers,
    IconSettings,
    IconShoppingCart,
    IconBell,
    IconSearch,
    IconChevronDown,
    IconLogout,
    IconUserCircle,
    } from "@tabler/icons-react";

    export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [profileOpen, setProfileOpen] = useState(false);

    const menus = [
        {
        title: "Dashboard",
        icon: <IconLayoutDashboard size={20} />,
        },
        {
        title: "Users",
        icon: <IconUsers size={20} />,
        },
        {
        title: "Orders",
        icon: <IconShoppingCart size={20} />,
        },
        {
        title: "Settings",
        icon: <IconSettings size={20} />,
        },
    ];

    return (
        <div className="flex bg-gray-100 min-h-screen">

        {/* Overlay */}
        {!sidebarOpen && (
            <div
            className="fixed inset-0 bg-black/40 lg:hidden z-30"
            onClick={() => setSidebarOpen(false)}
            />
        )}

        {/* Sidebar */}
        <aside
            className={`
            fixed lg:relative
            z-40
            h-screen
            bg-white
            shadow-xl
            transition-all
            duration-300
            ${sidebarOpen ? "w-64" : "w-20"}
            `}
        >
            {/* Logo */}

            <div className="h-16 flex items-center justify-between px-5 border-b">

            {sidebarOpen && (
                <h2 className="font-bold text-xl text-blue-600">
                Admin Panel
                </h2>
            )}

            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded hover:bg-gray-100"
            >
                {sidebarOpen ? (
                <IconX size={22} />
                ) : (
                <IconMenu2 size={22} />
                )}
            </button>

            </div>

            {/* Menu */}

            <div className="mt-5">

            {menus.map((item) => (
                <button
                key={item.title}
                className="w-full flex items-center gap-4 px-5 py-3 hover:bg-blue-50 hover:text-blue-600 transition"
                >
                {item.icon}

                {sidebarOpen && (
                    <span>{item.title}</span>
                )}
                </button>
            ))}

            </div>

            {/* Logout */}

            <div className="absolute bottom-5 w-full px-4">

            <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 text-red-500">
                <IconLogout size={20} />

                {sidebarOpen && "Logout"}

            </button>

            </div>
        </aside>

        {/* Main */}

        <div className="flex-1">

            {/* Topbar */}

            <header className="bg-white shadow h-16 px-6 flex justify-between items-center">

            {/* Search */}

            <div className="relative">

                <IconSearch
                size={18}
                className="absolute top-3 left-3 text-gray-400"
                />

                <input
                className="h-10 w-72 rounded-lg border pl-10 outline-none"
                placeholder="Search..."
                />

            </div>

            {/* Right */}

            <div className="flex items-center gap-6">

                <button className="relative">

                <IconBell />

                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500"></span>

                </button>

                {/* Profile */}

                <div className="relative">

                <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center gap-3"
                >
                    <img
                    src="https://i.pravatar.cc/40"
                    alt=""
                    className="w-10 h-10 rounded-full"
                    />

                    <div className="text-left hidden md:block">

                    <h4 className="font-semibold">
                        Ravi
                    </h4>

                    <p className="text-xs text-gray-500">
                        Administrator
                    </p>

                    </div>

                    <IconChevronDown size={18} />

                </button>

                {profileOpen && (

                    <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-xl border">

                    <button className="w-full text-left px-4 py-3 hover:bg-gray-100 flex gap-3">
                        <IconUserCircle size={18} />
                        My Profile
                    </button>

                    <button className="w-full text-left px-4 py-3 hover:bg-gray-100 flex gap-3">
                        <IconSettings size={18} />
                        Settings
                    </button>

                    <button className="w-full text-left px-4 py-3 hover:bg-red-50 text-red-500 flex gap-3">
                        <IconLogout size={18} />
                        Logout
                    </button>

                    </div>

                )}

                </div>

            </div>

            </header>

            {/* Content */}

            <div className="p-6">

            <div className="bg-white rounded-xl shadow p-10 text-center">

                <h1 className="text-3xl font-bold">
                Dashboard
                </h1>

                <p className="text-gray-500 mt-3">
                Welcome to your admin dashboard.
                </p>

            </div>

            </div>

        </div>

        </div>
    );
    }